"""Read-only, local writing cues and a source-linked editorial review checklist."""
import argparse
from bisect import bisect_right
from collections import defaultdict
import hashlib
import json
import os
from pathlib import Path
import re
import stat
import sys


CATALOG = Path(__file__).resolve().with_name("audit_rules.json")
MAX_BYTES = 1024 * 1024
FLAGS = re.IGNORECASE | re.MULTILINE
TRANSITIONS = re.compile(r"\b(?:moreover|furthermore|additionally|notably|importantly)\b", FLAGS)
LIMITS = [
    "Matches are review candidates, not confirmed flaws or authorship evidence.",
    "Semantic fidelity, conversational function, voice, and technical precision require agent review.",
    "Markdown masking is conservative, not a full CommonMark parser: recognized fences, indented code, "
    "blockquote paragraphs, inline code, brackets/links, HTML tags, URLs, and paired quotations are excluded. "
    "Complex nesting, escaped delimiters, HTML bodies, and unmarked labels may need manual protection.",
    "Sentence boundaries and structural triggers are heuristics, not writing quotas.",
    "Turkish checks run only with --source-language tr; language and artifact are not inferred.",
]


def read_input(path):
    """Read a bounded regular UTF-8 file without normalizing CRLF or following content instructions."""
    if path.suffix.lower() not in {".md", ".txt"}:
        raise ValueError("expected a .md or .txt file")
    fd = os.open(path, os.O_RDONLY | getattr(os, "O_NONBLOCK", 0))
    with os.fdopen(fd, "rb") as stream:
        if not stat.S_ISREG(os.fstat(stream.fileno()).st_mode):
            raise ValueError("expected a regular file")
        raw = stream.read(MAX_BYTES + 1)
    if len(raw) > MAX_BYTES:
        raise ValueError(f"file exceeds {MAX_BYTES} bytes")
    text = raw.decode("utf-8")
    if not text.lstrip("\ufeff").strip():
        raise ValueError("input is empty or whitespace-only")
    return text, {"file": str(path), "bytes": len(raw), "sha256": hashlib.sha256(raw).hexdigest()}


def load_catalog():
    catalog = json.loads(CATALOG.read_text(encoding="utf-8"))
    if not isinstance(catalog, dict) or catalog.get("schema_version") != 1:
        raise ValueError("unsupported rule catalog schema")
    if not isinstance(catalog.get("rules"), list) or not isinstance(catalog.get("excluded_rules"), list):
        raise ValueError("catalog requires rules and excluded_rules arrays")
    seen = set()
    for rule in catalog["rules"]:
        if not isinstance(rule, dict):
            raise ValueError("each catalog rule must be an object")
        for field in ("id", "name", "method", "reason", "action", "exceptions"):
            if not isinstance(rule.get(field), str) or not rule[field]:
                raise ValueError(f"rule requires nonempty {field}")
        for field in ("covers", "sources"):
            value = rule.get(field)
            if not isinstance(value, list) or not value or not all(isinstance(x, str) and x for x in value):
                raise ValueError(f"rule {rule['id']} requires {field}")
        if rule["id"] in seen:
            raise ValueError(f"duplicate rule ID: {rule['id']}")
        seen.add(rule["id"])
        if rule["method"] not in {"automated", "contextual_review", "source_comparison"}:
            raise ValueError(f"unknown method: {rule['method']}")
        if rule["method"] == "automated":
            detector = rule.get("detector")
            if detector not in {"regex", "case_sensitive_regex", "nested_parentheses", "transition_cluster", "repeated_openings", "qualifier_cluster"}:
                raise ValueError(f"unknown detector: {detector}")
            if detector in {"regex", "case_sensitive_regex"}:
                if not isinstance(rule.get("pattern"), str):
                    raise ValueError(f"rule {rule['id']} requires a pattern")
                re.compile(rule["pattern"], FLAGS if detector == "regex" else re.MULTILINE)
        for field, allowed in (("requires", {"source", "context", "voice", "artifact"}),
                               ("artifacts", {"post", "comment", "reply", "dm", "social"})):
            values = rule.get(field, [])
            if not isinstance(values, list) or any(not isinstance(x, str) or x not in allowed for x in values):
                raise ValueError(f"invalid {field} for {rule['id']}")
        if rule.get("language") not in {None, "tr"}:
            raise ValueError(f"invalid language for {rule['id']}")
    return catalog


def editable_prose(text, markdown):
    """Mask protected spans with spaces, retaining every character offset and line break."""
    chars = list(text)
    protected = []
    warnings = []

    def mask(start, end, kind):
        if start >= end:
            return
        protected.append({"start": start, "end": end, "kind": kind})
        for i in range(start, end):
            if chars[i] not in "\r\n":
                chars[i] = " "

    if text.startswith("\ufeff"):
        mask(0, 1, "byte_order_mark")
    if markdown:
        fence = None
        quote = False
        offset = 0
        for line in text.splitlines(keepends=True):
            end = offset + len(line)
            if fence:
                mask(offset, end, "fenced_code")
                if re.fullmatch(r" {0,3}" + re.escape(fence[0]) + "{" + str(fence[1]) + r",}[ \t]*[\r\n]*", line):
                    fence = None
            else:
                opener = re.match(r" {0,3}(`{3,}|~{3,})", line)
                if opener:
                    fence = (opener[1][0], len(opener[1]))
                    mask(offset, end, "fenced_code")
                    quote = False
                elif re.match(r" {0,3}>", line) or (quote and line.strip()):
                    quote = True
                    mask(offset, end, "blockquote")
                else:
                    quote = False
                    if line.startswith(("    ", "\t")):
                        mask(offset, end, "indented_code")
            offset = end
        if fence:
            warnings.append("Unclosed code fence: remaining text was excluded from style matching.")
        patterns = [
            (r"(?<!`)(`+)(?!`)[\s\S]*?(?<!`)\1(?!`)", "inline_code"),
            (r"!?\[[^\]\r\n]*\](?:\([^\r\n]*?\)|\[[^\]\r\n]*\])?", "bracket_or_link"),
            (r"<[^>\r\n]+>", "html_tag_or_autolink"),
        ]
        for pattern, kind in patterns:
            for match in re.finditer(pattern, "".join(chars)):
                mask(match.start(), match.end(), kind)
    for pattern, kind in [
        (r'https?://[^\s<>]+', "url"),
        (r'"[^"\r\n]+"|“[^”]+”|(?<!\w)\x27[^\x27\r\n]+\x27(?!\w)|(?<!\w)‘[^’\r\n]+’(?!\w)', "quotation"),
    ]:
        for match in re.finditer(pattern, "".join(chars)):
            mask(match.start(), match.end(), kind)
    return "".join(chars), protected, warnings


def paragraphs(prose):
    start = 0
    for match in re.finditer(r"\r?\n[ \t]*\r?\n", prose):
        yield start, prose[start:match.start()]
        start = match.end()
    yield start, prose[start:]


def detect(rule, prose):
    detector = rule["detector"]
    if detector in {"regex", "case_sensitive_regex"}:
        flags = FLAGS if detector == "regex" else re.MULTILINE
        for match in re.finditer(rule["pattern"], prose, flags):
            start, end = match.span()
            while start < end and prose[start].isspace():
                start += 1
            while end > start and prose[end - 1].isspace():
                end -= 1
            if end > start:
                yield start, end, "Matched documented lexical or structural cue."
    elif detector == "qualifier_cluster":
        # A single degree word can do a different job from a correction or hedge.
        for match in re.finditer(r"\bvery(?:[ \t,]+very\b)+", prose, FLAGS):
            yield match.start(), match.end(), "Repeated degree cue; review whether the emphasis is intentional."
        pattern = r"\b(?:basically|actually|kind of|sort of)\b"
        matches = list(re.finditer(pattern, prose, FLAGS))
        cluster = []
        for match in matches:
            if cluster and not re.fullmatch(r"[ \t,]+", prose[cluster[-1].end():match.start()]):
                if len(cluster) >= 2:
                    yield cluster[0].start(), cluster[-1].end(), "Adjacent qualifier cues; review their separate conversational functions."
                cluster = []
            cluster.append(match)
        if len(cluster) >= 2:
            yield cluster[0].start(), cluster[-1].end(), "Adjacent qualifier cues; review their separate conversational functions."
    elif detector == "nested_parentheses":
        stack = []
        nested = False
        for i, char in enumerate(prose):
            if char == "(":
                stack.append(i)
                nested = nested or len(stack) > 1
            elif char == ")" and stack:
                start = stack.pop()
                if not stack:
                    if nested:
                        yield start, i + 1, "Parenthetical span contains another parenthetical span."
                    nested = False
    elif detector == "transition_cluster":
        for offset, paragraph in paragraphs(prose):
            matches = list(TRANSITIONS.finditer(paragraph))
            if len(matches) >= 2:
                yield offset + matches[0].start(), offset + matches[-1].end(), f"{len(matches)} formal transition cues in one paragraph."
    elif detector == "repeated_openings":
        for offset, paragraph in paragraphs(prose):
            groups = defaultdict(list)
            for sentence in re.finditer(r"[^.!?]+(?:[.!?]+|$)", paragraph):
                words = list(re.finditer(r"\b[\w'’]+\b", sentence[0]))
                if len(words) >= 2:
                    key = tuple(word[0].lower() for word in words[:2])
                    start = offset + sentence.start() + words[0].start()
                    end = offset + sentence.start() + words[1].end()
                    groups[key].append((start, end))
            for matches in groups.values():
                if len(matches) >= 3:
                    for start, end in matches:
                        yield start, end, f"The same first two words start {len(matches)} sentence units in this paragraph."


def make_span(text, line_starts, start, end):
    start_line = bisect_right(line_starts, start)
    end_line = bisect_right(line_starts, end)
    return {"start": start, "end": end, "start_line": start_line,
            "start_column": start - line_starts[start_line - 1] + 1,
            "end_line": end_line, "end_column": end - line_starts[end_line - 1] + 1}


def audit_file(path, text, metadata, args, catalog, supporting):
    prose, protected, warnings = editable_prose(text, path.suffix.lower() == ".md")
    if not prose.strip():
        warnings.append("No editable prose remains after protection; style matching has no coverage.")
    line_starts = [0] + [m.end() for m in re.finditer(r"\r\n|\r|\n", text)]
    findings = []
    checks = []
    available = {key for key, value in supporting.items() if value}
    if args.artifact != "unknown":
        available.add("artifact")
    for rule in catalog["rules"]:
        check = {"rule_id": rule["id"], "name": rule["name"], "method": rule["method"],
                 "covers": rule["covers"], "documentation_source": rule["sources"],
                 "suggested_action": rule["action"], "exceptions": rule["exceptions"]}
        missing = sorted(set(rule.get("requires", [])) - available)
        if rule.get("language") and rule["language"] != args.source_language:
            check.update(status="not_applicable", detail="Turkish review was not requested; set --source-language tr when relevant.")
        elif rule.get("artifacts") and args.artifact == "unknown":
            check.update(status="blocked", detail="Supply --artifact to apply artifact-specific checks.")
        elif rule.get("artifacts") and args.artifact not in rule["artifacts"]:
            check.update(status="not_applicable", detail="Rule does not apply to the selected artifact.")
        elif missing:
            check.update(status="blocked", detail="Missing review inputs: " + ", ".join(missing))
        elif rule["method"] != "automated":
            check.update(status="requires_review", detail=rule["reason"])
        elif not prose.strip():
            check.update(status="blocked", detail="No editable prose remains after masking.")
        else:
            count = 0
            for start, end, evidence in detect(rule, prose):
                # A structural match must not bridge a protected quotation or code block.
                if any(start < span["end"] and end > span["start"] for span in protected):
                    continue
                findings.append({"rule_id": rule["id"], "level": "review", "file": str(path),
                                 "span": make_span(text, line_starts, start, end),
                                 "excerpt": text[start:end], "evidence": evidence,
                                 "reason_for_review": rule["reason"], "suggested_action": rule["action"],
                                 "exceptions": rule["exceptions"], "documentation_source": rule["sources"]})
                count += 1
            check.update(status="evaluated", finding_count=count,
                         detail="Cue scan only; contextual correctness was not evaluated.")
        checks.append(check)
    findings.sort(key=lambda f: (f["span"]["start"], f["rule_id"], f["span"]["end"]))
    return {**metadata, "artifact": args.artifact, "source_language": args.source_language,
            "supporting_inputs": supporting, "findings": findings, "checks": checks,
            "protected_spans": protected, "parser_warnings": warnings,
            "editorial_review_complete": False}


def print_text(report):
    print("Writing audit: local review cues, not an authorship or quality verdict.")
    for item in report["files"]:
        print(f"\n{item['file']}: {len(item['findings'])} review candidate(s)")
        for finding in item["findings"]:
            span = finding["span"]
            print(f"  {span['start_line']}:{span['start_column']} [{finding['rule_id']}] {finding['excerpt']!r}")
            print(f"    Evidence: {finding['evidence']}")
            print(f"    Review: {finding['reason_for_review']}")
            print(f"    Action: {finding['suggested_action']}")
            print(f"    Keep when: {finding['exceptions']}")
            print(f"    Source: {', '.join(finding['documentation_source'])}")
        print("  Check coverage:")
        for check in item["checks"]:
            print(f"    {check['rule_id']} {check['status']}: {check['detail']}")
            if check["status"] in {"requires_review", "blocked"}:
                print(f"      Review: {check['suggested_action']}")
                print(f"      Covers: {'; '.join(check['covers'])}")
                print(f"      Source: {', '.join(check['documentation_source'])}")
        for warning in item["parser_warnings"]:
            print(f"  Parser warning: {warning}")
    for error in report["errors"]:
        print(f"ERROR ({error['role']}) {error['file']}: {error['message']}")
    print("\nExcluded legacy rules: " + ", ".join(rule["id"] for rule in report["excluded_rules"]))
    for limitation in report["limitations"]:
        print(f"Limit: {limitation}")
    print(f"Scan complete: {report['scan_complete']}; editorial review complete: False")


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("files", nargs="+", type=Path, help="explicit .md/.txt draft paths; no directory scanning")
    parser.add_argument("--artifact", choices=["unknown", "post", "comment", "reply", "dm", "social"], default="unknown")
    parser.add_argument("--source", type=Path, help="source facts or original text; single draft only")
    parser.add_argument("--context", type=Path, help="request, relationship, and labeled quoted context; single draft only")
    parser.add_argument("--voice", type=Path, action="append", default=[], help="user voice sample; repeatable, single draft only")
    parser.add_argument("--source-language", choices=["unknown", "en", "tr", "other"], default="unknown")
    parser.add_argument("--format", choices=["text", "json"], default="text")
    parser.add_argument("--fail-on", choices=["none", "review"], default="none", help="review exits 1 on any automated finding, not on pending manual checks")
    args = parser.parse_args(argv)
    if len(args.files) != 1 and (args.source or args.context or args.voice):
        parser.error("--source, --context, and --voice require a single draft; invoke separately for explicit per-draft association")
    report = {"schema_version": 1, "scan_complete": False, "editorial_review_complete": False,
              "files": [], "errors": [], "excluded_rules": [], "limitations": LIMITS}
    try:
        catalog = load_catalog()
    except (OSError, UnicodeError, ValueError, re.error) as error:
        report["errors"].append({"role": "catalog", "file": str(CATALOG), "message": str(error)})
        catalog = None
    supporting = {"source": [], "context": [], "voice": []}
    if catalog is not None:
        report["excluded_rules"] = catalog["excluded_rules"]
        for role, paths in (("source", [args.source] if args.source else []),
                            ("context", [args.context] if args.context else []), ("voice", args.voice)):
            for path in paths:
                try:
                    _, metadata = read_input(path)
                    supporting[role].append(metadata)
                except (OSError, UnicodeError, ValueError) as error:
                    report["errors"].append({"role": role, "file": str(path), "message": str(error)})
        # A failed supporting input invalidates the association; do not present a partial review as usable.
        if not report["errors"]:
            for path in args.files:
                try:
                    text, metadata = read_input(path)
                except (OSError, UnicodeError, ValueError) as error:
                    report["errors"].append({"role": "draft", "file": str(path), "message": str(error)})
                    continue
                report["files"].append(audit_file(path, text, metadata, args, catalog, supporting))
        report["scan_complete"] = not report["errors"]
    if args.format == "json":
        print(json.dumps(report, ensure_ascii=False, indent=2))
    else:
        print_text(report)
    if report["errors"]:
        return 2
    if args.fail_on == "review" and any(item["findings"] for item in report["files"]):
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
