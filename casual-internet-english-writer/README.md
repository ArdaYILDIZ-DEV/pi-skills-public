# casual-internet-english-writer

A Pi Coding Agent skill for drafting, editing, and auditing natural, conversational internet English.

## Purpose

When asked to write forum comments, social posts, or casual messages, LLMs typically produce one of two extremes:
- **Polished essay prose:** Stiff academic signposting (`Moreover`, `Furthermore`, `In conclusion`), balanced hedging, and formulaic disclaimers.
- **Caricatured internet slang:** Forced abbreviations (`tbh`, `ngl`), fake typos, or dramatic colloquialisms that do not match genuine community participants.

This skill steers the model to write authentic conversational English. It preserves the writer's authentic voice and perspective while eliminating corporate and robotic AI mannerisms.

## Intended audience and use cases

This skill is designed for anyone writing or refining informal English text, regardless of native language:

- **Drafting from scratch:** Generating initial responses or posts for Reddit, forums, Discord/IRC, or casual social threads.
- **Editing and revising:** Rewriting an existing English draft to remove robotic cadences, em dash stacking, and sterile transitions.
- **Auditing drafts:** Identifying AI-like sentence structures, parenthesis stacking (parenectomy), and unnatural phrasing without modifying the underlying message.
- **Cross-language translation (Optional):** Accurately translating informal Turkish thoughts or notes into conversational English without literal translation artifacts (`references/turkish-to-english.md` is loaded conditionally only when source notes are Turkish).

## Invocation

This skill has `disable-model-invocation: true` configured in its frontmatter. It does not trigger autonomously during generic coding tasks.

Invoke it explicitly via slash command:

```text
/skill:casual-internet-english-writer Draft a reply disagreeing with the parent comment's take on database migrations. Keep it relaxed and concise.
```

Or for reviewing an existing draft:

```text
/skill:casual-internet-english-writer Audit this Reddit draft for AI tells and transition clutter:
[paste draft]
```

## How it works

1. **Information separation:** Separates core arguments and facts from meta-instructions. Preserves nuances, uncertainty, technical labels, and boundaries.
2. **Channel calibration:** Adapts tone to the specific community or artifact (e.g., technical subreddit vs. casual forum vs. private DM) using `references/casual-register.md` and `references/reddit-writing.md`.
3. **Conditional editing:** Repairs inflated diction, empty framing, decorative contrasts, significance tails, and repeated conclusions using `references/casual-register.md`. Preserves genuine agreement, technical terms, and meaningful qualifiers.
4. **Fidelity review:** Requires checking for invented anecdotes, timestamps, votes, synthetic typos, changed speakers, and missing qualifications. The local helper supports this review; it cannot guarantee fidelity.

## Local writing audit

The [audit CLI](scripts/audit.py) reads agent-saved Reddit posts, comments, DMs, or social text from explicitly selected files. It combines automated review cues with a source-linked checklist for judgments that cannot be automated reliably. It is not an AI detector, grammar checker, automatic rewriter, or naturalness score.

### Quick start

Requires Python 3 and its standard library; no installation or external service is needed. Tested locally with Python 3.13.5 on Linux; other runtimes have not been verified.

Run from the `casual-internet-english-writer/` directory. This example creates a disposable input file and prints its audit:

```sh
draft=$(mktemp /tmp/casual-draft.XXXXXX.txt)
printf '%s\n' 'Moreover, this app is a game-changer.' > "$draft"
python3 -B scripts/audit.py "$draft" --artifact comment
```

Expect review candidates for formal signposting and promotional praise, followed by check coverage and limitations. The default exit is `0` even when candidates appear. The input remains unchanged and the example temp file remains available for inspection.

For an agent-saved draft, replace the example input path with its actual location:

```sh
python3 -B scripts/audit.py /tmp/writing-drafts/reply.md --artifact reply --format json
```

From another working directory, use the absolute path to `scripts/audit.py`; the catalog is resolved beside the script automatically.

### Inputs and context

Drafts and supporting inputs must be nonempty UTF-8 `.md` or `.txt` regular files, at most 1 MiB each. UTF-8 BOM and CRLF are supported. Paths are resolved from the caller's working directory. Directories are not scanned, and the CLI does not expand globs. A shell glob would still expand before reaching the CLI, so agents should name only their intended files.

Keep only the intended publishable text in the draft. Put original facts or source-language text in a source file; put the request, relationship, constraints, and clearly labeled quoted speakers in context. User voice samples supply style, not facts.

These paths are illustrative and must already exist:

```sh
python3 -B scripts/audit.py /tmp/writing-drafts/reply.md \
  --artifact reply \
  --source /tmp/writing-drafts/source.txt \
  --context /tmp/writing-drafts/context.md \
  --voice /tmp/writing-drafts/voice.txt \
  --source-language tr \
  --format json
```

Supporting files are validated and identified by path, byte count, and SHA-256. Their contents are not echoed, semantically compared, or sent to a model. The reviewing agent must read them separately. Supplying a source changes applicable checks from `blocked` to `requires_review`, never to a fidelity pass.

For a cue-only batch, name each draft explicitly:

```sh
python3 -B scripts/audit.py /tmp/writing-drafts/one.md /tmp/writing-drafts/two.txt --format json
```

`--source`, `--context`, and `--voice` require a single draft. Run separately when drafts have supporting material; this prevents accidental cross-draft attribution. Batch-wide artifact and source-language flags apply to every draft in that invocation.

| Option | Behavior | Default |
|---|---|---|
| `--artifact` | `post`, `comment`, `reply`, `dm`, `social`, or `unknown` | `unknown` |
| `--source` | Original text or source facts; one file | Not supplied |
| `--context` | Request, relationship, constraints, and labeled quoted context; one file | Not supplied |
| `--voice` | User voice sample; repeat for multiple samples | Not supplied |
| `--source-language` | `tr` activates Turkish review; also accepts `en`, `other`, `unknown` | `unknown` |
| `--format` | `text` or `json`, written to stdout | `text` |
| `--fail-on` | `review` exits `1` on any automated candidate; `none` is advisory | `none` |

Use `python3 -B scripts/audit.py --help` for the CLI synopsis.

### Coverage and interpretation

The [rule catalog](scripts/audit_rules.json) maps active documentation requirements to stable IDs, source file/heading references, exceptions, and suggested actions:

- **Automated cues:** opening scaffolding, formal transitions, inflated diction and wordy alternatives, bureaucratic action phrases, adjacent qualifier clusters, vague praise, staged contrasts, significance tails, theatrical questions, repeated uncertainty, summary framing, nested parentheses, transition clusters, staged fragments, repeated openings, internet-costume markers, reply framing, engagement endings, and update markers.
- **Contextual review:** genuine agreement, noun piles, redundant triplets, repeated paragraph jobs, non-nested aside overload, punctuation function, technical register, user voice, platform structure, actual questions, and advice boundaries. The named clarity checks also cover passive voice and agency, each qualifier's function, a buried contribution, unrelated ideas within a sentence, unclear local references, and audience-sensitive acronyms or jargon.
- **Source comparison:** facts, speaker attribution, chronology, negation, conditions, uncertainty, intensity, exact terms, protected content, instruction separation, invented details, and Turkish meaning/register preservation.
- **Excluded legacy rules:** fixed rhythm formulas, mandatory contractions or fragments, punctuation/transition quotas, universal word bans, forced one-sidedness, invented updates, and authorship scoring. Active conditional guidance overrides these archived prescriptions.

See [named clarity checks](SKILL.md#named-clarity-checks) for the eight principles, local repair examples, and exceptions. All eight have a review route in the catalog; semantic judgments remain contextual even when the automated scan finds no candidates.

Coverage means every documented writing requirement has a review route, not that every flaw has an automatic detector. Rules remain contextual: `utilize`, `lol`, `Edit:`, a contrast, or a technical adjective may be completely appropriate. Structural thresholds are candidate triggers, not editing quotas. Unlisted wording, semantic problems, or established voice can change the judgment.

Every file reports check status:

| Status | Meaning |
|---|---|
| `evaluated` | Automated cue scan ran; zero matches is not a quality verdict |
| `requires_review` | An agent must make the contextual or source-comparison judgment |
| `blocked` | Needed input, artifact choice, or editable prose is unavailable |
| `not_applicable` | The selected artifact/language does not activate the rule |

Language and artifact are not inferred. Use `--source-language tr` when relevant; without it, Turkish-specific checks are marked `not_applicable`, not verified.

### Report and exit contract

JSON has `schema_version`, `scan_complete`, `editorial_review_complete`, `files`, `errors`, `excluded_rules`, and `limitations`. Each file contains input metadata, supporting-input metadata, findings, checks, protected spans, and parser warnings.

Findings include `rule_id`, `level: "review"`, file, excerpt, span, evidence, reason for review, suggested action, exceptions, and documentation sources. Offsets are zero-based Unicode character indices with an exclusive end; lines and columns are one-based, also with an exclusive end. They are not UTF-8 byte offsets. Original CRLF characters are retained in offsets.

`editorial_review_complete` is always `false`: the script cannot perform or certify the required agent review. `scan_complete` describes file processing, not parser perfection or prose quality.

| Exit | Meaning |
|---|---|
| `0` | Scan completed; findings may exist in default advisory mode |
| `1` | Scan completed and `--fail-on review` found at least one automated candidate |
| `2` | Usage, input, or catalog error |

Strict mode does not fail on pending manual checks or parser warnings. Always inspect coverage. Usage errors go to stderr; file/catalog errors appear in the selected report format on stdout. In a batch, valid drafts still get reports when another draft fails, but `scan_complete` is `false` and exit is `2`. An invalid supporting input stops the associated single-draft scan.

### Limits and data handling

- The helper reads local files and writes a report to stdout. It makes no network/model calls, executes no input instructions, creates no report files, and never rewrites inputs. Tests create disposable fixtures under the system temp directory.
- Reports contain input paths and draft excerpts: treat them as potentially sensitive. Shell redirection or downstream tools control any report persistence or disclosure; avoid redirecting onto an input file because the shell would truncate it before the CLI starts.
- Markdown handling is deliberately conservative, not full CommonMark: recognized fenced/indented code, blockquote paragraphs, inline code, brackets/links, HTML tags, URLs, and paired quotations are excluded. Link labels are excluded too. Plain text receives quotation and URL masking only.
- Complex nesting, escaping, HTML bodies, and unmarked technical labels need manual review. Unclosed fences exclude the remaining text and produce a warning. A fully protected file reports no editable-prose coverage, not a clean result. Missing or overbroad protection can cause false positives or missed cues.
- Sentence splitting and all structural patterns are heuristics. No precision/recall benchmark, human-authorship claim, or model-quality improvement is established by unit tests.

Review findings against their exceptions, make only justified local repairs, and complete the source comparison. Do not rewrite valid prose merely to clear the report. Writing tasks still return only the requested artifact; audits explain contextual mismatches, local fixes, and material gaps.

## Development checks

From the skill directory:

```sh
python3 -B scripts/test_audit.py -v
```

The suite checks calibration preservation, every automated rule's positive/negative examples, source references, report spans, Markdown exclusions, input errors, context association, exit codes, and unchanged input bytes. Keep new rule examples and source mappings in the catalog; contextual additions need explicit coverage and review instructions, not a fake automatic pass.

## Directory structure

```text
casual-internet-english-writer/
├── SKILL.md                 # Primary instruction entry point
├── references/              # Register rules, Reddit norms, and translation guidelines
│   ├── casual-register.md
│   ├── reddit-writing.md
│   └── turkish-to-english.md
├── examples/                # Fact-constrained rewrites and preserve-as-is cases
├── scripts/
│   ├── audit.py             # Read-only CLI and editorial review checklist
│   ├── audit_rules.json     # Source-linked rules, examples, and legacy exclusions
│   └── test_audit.py        # Standard-library behavioral tests
└── data/                    # Research synthesis, sources, decisions, and archives
```
