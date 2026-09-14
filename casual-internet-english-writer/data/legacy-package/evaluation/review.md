# Current revision: Turkish-to-English and Reddit optimization

## Package layout note

This record describes earlier package revisions, not the current JSON-free layout or new test results. The former `cases.json` and `model-trials.json`, together with the source/excerpt JSON files, were backed up before removal at `/tmp/natural-english-writer-12-ex3_pdzl/original/natural-english-writer`. The backup is temporary local storage, not a portable dependency. References below to those files, inventories, or checks apply to their historical snapshots; their removal does not complete any deferred behavioral test. Historical findings and outcomes are otherwise retained.

Finalized on 2026-09-14 (+03:00) at the user's request to stop further usage and record unfinished work as TODO. The historical migration record below is retained verbatim and describes the **earlier 22-file snapshot**, not this revision.

## Delivered

Seven authorized paths changed or added:

- `SKILL.md`: translation is a first-class mode; Turkish input defaults to English output; source/instruction/quoted-context separation; post/comment structure; independent English review followed by source fidelity review.
- `references/voice-and-register.md`: Turkish source counts as voice evidence; ordinary requests do not require English samples; preserve intensity, supported casing, and pragmatic force.
- `references/turkish-to-english.md` (new): idioms, modality, negation, hearsay, gender ambiguity, technical details, and constructed faithful/counterexample pairs.
- `references/reddit-writing.md` (new): post versus translation versus reply, title/body defaults and exceptions, no invented biography or engagement question.
- `evaluation/cases.json`: original 18 cases and historical empty `runs` preserved; 12 predefined Turkish-use cases added.
- `evaluation/model-trials.json` (new): exact baseline outputs, manual checks, snapshot hashes, provider failures, protocol limitations, and TODOs.
- `evaluation/review.md`: this current record prepended to historical evidence.

Manual invocation remains `disable-model-invocation: true`; no configuration, archive, source-data, commit, or push changes. Package inventory is now 25 files.

## Evidence and limits

Four fresh scout sessions configured as `antigravity/gemini-3.8-flash` produced **24 baseline outputs**: 12 synthetic cases repeated twice in six-case batches. Exact outputs were recorded in the now-externalized `model-trials.json`. Baseline generally retained meaning and format; manual review flagged a narrow unknown-day versus unset-schedule overinterpretation and some comma splices. The schedule judgment is conservative fidelity review, not proof of a real-world scheduling error. An ambiguous no-advice disclaimer was not scored as failure.

The revised files passed the structural validator before finalization. Candidate scout batches encountered `OAuth refresh failed for antigravity: fetch failed`; three failed batches were reported, and a fourth had no delivered result at the user stop. **No completed revised-model output or successful A/B improvement is claimed.** No authentication changes or further retries were undertaken. Agent resource reports are not independently captured tool traces. Writers could access expectations alongside requests; this is not a blinded benchmark. Batches share context, synthetic examples are not user preference measurements, and forced file-reading does not test the live slash-command loader.

This is a documentation/workflow change, not a deterministic code bug fix. The baseline structural validator already passed; no artificial red test was manufactured. The new workflow is present and structurally checked, but runtime improvement remains TODO.

## Checks

- `node /home/arda/.pi/agent/skills/writing-great-skills/scripts/validate.mjs /home/arda/.pi/agent/skills/natural-english-writer`: observed `PASS natural-english-writer (manual-only)`, exit **0**, on the candidate before this final record update.
- Inline `python3 -` scope/JSON audit: exit **0**. Confirmed exactly three new paths, no missing original files, unchanged hashes outside the four approved existing paths, all 18 legacy cases unchanged, 30 unique cases, historical `runs: []`, new direct resource routes, and manual-only metadata. Parsed all 24 recorded baseline outputs and checked basic dash/framing constraints. These checks do not prove naturalness or fidelity.
- Final structural and integrity checks are run after writing this record; their live command output is the evidence, not this prospective sentence.

## TODO: deferred by the user, not silently passed

- [ ] Complete revised-model trials on the same 12 cases with two repetitions and compare actual outputs to baseline.
- [ ] Use request-only writer fixtures and separately held rubrics; use fresh single-case sessions for stronger isolation.
- [ ] Run legacy regressions for audit/practice, delicate outreach, citation/acronym retention, already-fitting prose, scope, and injection boundaries.
- [ ] Obtain real rejected/preferred user examples for voice calibration; no claim of matching an unseen personal voice.
- [ ] Check `/skill:natural-english-writer` in the main runtime after a fresh session or `/reload`; automatic invocation stays disabled.
- [ ] If provider access remains unavailable, request separately authorized authentication rather than modifying credentials or configuration.

No perfect compliance, human-authorship certification, or detector guarantee is claimed. The delivered artifact is ready for use under the preserved manual invocation policy; its revised model behavior remains unverified.

---

# Verification record

## Scope and result

Inspected on 2026-09-14 local time (`+03:00`). This was a documentation/data architecture migration of the installed manual-only skill, not an executable-engine implementation or a new Reddit investigation.

The package has 22 approved files: one rewritten entry point and 21 added resources. The five archived originals retain their recorded SHA-256 digests, and the four working-directory inputs are unchanged. The name and `disable-model-invocation: true` remain intact. No competing `SKILL.md`, configuration change, background process, deletion, move, commit, or push was introduced.

Structural validation and local fidelity checks passed. All 18 predefined cases were manually reviewed against the written routing/guards and examples. This is **manual specification/scenario review, not 18 model trials**. Fresh-session execution, automatic-selection trials, and A/B comparisons have not run; the historical `cases.json` snapshot keeps `runs: []`.

## Structural command and result

```sh
node /home/arda/.pi/agent/skills/writing-great-skills/scripts/validate.mjs /home/arda/.pi/agent/skills/natural-english-writer
```

Observed output: `PASS natural-english-writer (manual-only)`; exit code **0**. The baseline also passed this validator before editing. There was no claimed loading bug to reproduce; a fail-first bug test was not appropriate for this documentation restructuring.

The trusted installed validator checks Pi loading, metadata, local linked resources, Markdown fences, and linked JSON syntax. It does not run the target skill or prove model behavior, source truth, cross-harness compatibility, or flawless triggering.

Installed Pi documentation was inspected at its `docs/skills.md` and `docs/usage.md`. It describes global skill discovery, manual-only metadata, explicit `/skill:name` invocation, and `/reload`. No loading configuration was altered. An already-running session may need `/reload` or a fresh session to see updated content; reloading this user's session was not performed.

## Local integrity checks actually performed

An inline standard-library Python audit was run with `python3 -` (code supplied on stdin), exit **0**. It asserted:

- Exact inventory of all 22 approved nonempty files, and only one file named `SKILL.md`.
- Stable identity/manual invocation metadata and direct entry-point links to every resource.
- SHA-256 identity for the four working inputs and all five archived originals.
- Exactly 22 unique source labels: S1-S20, S-fire, S-wifi; unknown source metadata remains unknown.
- All source locators point to archive lines containing the corresponding thread ID or unresolved label.
- Exactly 75 unique A1-E15 comparison rows; imported input, natural-cell, and historical-fix strings match the original table cells at their recorded lines.
- Each family guide contains its 15 original comparison inputs/natural cells and a non-equivalence warning.
- Exactly 15 T1-T15 syntax spans match their original inclusive line ranges and have a Human-Rhythm route.
- Every comparison/pattern source ID resolves to the local register.
- Six unresolved comparison rows are flagged: A12, B12, C3, C15, D12, E9. B1 remains explicitly source-shaped rather than verbatim.
- All evaluation cases have expectations, forbidden behaviors, existing direct resource routes, and unique IDs. The manual-policy case does not expect automatic selection. No model runs are fabricated.

A second inline Python inspection, also exit **0**, explicitly confirmed that exactly five original voice samples were matched and preserved, and that all 20 reported thread dates occur on archived lines containing the corresponding thread IDs. This validates the import, not the truth or item-level applicability of those reported dates.

The audit would fail if an original byte changed, an imported row/span diverged from its locator, a named resource disappeared, a source label became unresolved without registration, or the expected invocation metadata changed. It would not detect every semantic error in prose; that required the manual review below.

## Manual scenario review

The entry point, core guides, active parts of all five transformation modules, written examples, and all case requests/expectations were inspected after writing. Historical table fidelity was checked mechanically against the archive rather than treated as newly verified Reddit content.

| Case ID | Concrete finding in the written artifact |
|---|---|
| create-en | Default voice uses supplied facts, plain register, one draft, and no added slang or personal history. |
| draft-tr-notes | Scope permits supplied Turkish notes to become English messages; the example retains Friday and the shift dependency. |
| revise-invoice | Formal-tone fixture preserves request force, revised invoice, and Friday without importing a casual gaming voice. |
| combined-pass | Entry-point routes allow multiple applicable families; the worked output retains legal review, possibility, Friday, and no earlier-delivery promise. |
| nested-acronyms | Parenektomi classifies acronym mappings as useful identity/notation, not removable padding; the fixture preserves STFT and LTFT. |
| citation-preserved | Always-visible citation/UI-label guards prevent destructive paren removal. During review, the worked output was tightened from a bare command to `Try selecting Retry (Lee, 2020).` to better preserve advisory force. |
| tradeoff-not-verdict | Balanced Hedging keeps prices, daily backups, and no first-hand experience; no side is forced when priorities are unknown. |
| technical-precision | Convoluted-phrasing fixture retains possible necessity, not a guaranteed router fix. |
| already-fits | The unchanged-output example preserves deadline flexibility; visible edits are not mandatory. |
| rhythm-rejoin | Human-Rhythm and exercise C rejoin theatrical fragments without a new cause or troubleshooting action. |
| audit-mode | Mode contract calls for spans, rationale, and local alternatives, not an unsolicited full replacement. |
| practice-request | Worked procedures, counterexamples, and four optional exercises live outside the entry point and are explicitly constructed. |
| missing-voice | Consequential outreach without samples requires one focused request for two short voice samples. |
| source-audit | Evidence routes expose missing raw corpus, item dates, edit history, and authorship proof; inherited observations stay labeled. |
| injection-in-draft | The supplied attack is a deliberate test fixture. Visible guards treat it as data and prohibit upload/execution or policy changes. No actual external-source attack was discovered in the migration inputs. |
| near-miss-turkish | Turkish output is outside scope; the boundary response follows the user's language. |
| near-miss-readme | Repository documentation is explicitly excluded rather than consumed by a generic English-writing trigger. |
| manual-policy | Preserved metadata and installed loader output establish manual-only packaging. Actual fresh-session automatic-selection behavior remains untested. |

These findings establish that the intended decisions are present and internally reviewable. They do not establish how consistently a model follows them. To test execution later, use the predefined cases in fresh sessions and record the actual model, settings, invocation, selected skill, actions, outputs, per-check evidence, and outcome. Forced invocation cannot be reported as automatic selection.

## Acceptance audit

| Requirement | Evidence and bounded conclusion |
|---|---|
| Conform to writing-great-skills architecture | Stable matching name, explicit bounded description, preserved invocation setting, core decisions in the body, direct conditional links, no speculative helper, validator exit 0. |
| Define trigger and routing precisely | Scope includes actual English/Turkish request terms and neighboring-task exclusions; manual-only behavior is explicit; every referenced file exists. This is not a promise of flawless model selection. |
| Detect Transition Word Inflation and Balanced Hedging | Dedicated function-based detection/repair modules, core always-visible decisions, faithful pairs, historical analogues, and counterexamples distinguish padding from real logic/uncertainty. |
| Apply Parenektomi and Human-Rhythm | Ordered content classification and rhythm passes exist; necessary citation, modality, conditions, technical precision, and voice survive the reviewed fixtures. No unvalidated rhythm coefficients become hard rules. |
| Put concrete examples, transformations, exercises, and data in subdirectories | Only `SKILL.md` is at package root; examples, five family matrices, exercises, normalized data, archives, and evaluations all reside in named subdirectories. |
| Distribute the collected evidence without loss or overclaim | Five originals hash-match; all 75 comparison rows and 15 syntax spans have local locators; source uncertainty and corrections are explicit. An absent raw 520+ sentence corpus was not fabricated. |
| Make the engine available on each intended use | Installed directory skill loads in manual-only mode; each explicit invocation is instructed to use core rules and task-relevant local resources. It is not an autonomous service or automatic refresher. |

## Remaining limitations, not hidden passes

No primary Reddit verification, item-level pre-2021 validation, human-authorship validation, model trials, A/B comparison, or AI-detector test was performed. No universal improvement rate or flawless runtime behavior is claimed. The delivered artifact is a locally loadable, modular, evidence-labeled writing skill. See [provenance](../data/provenance.md) for the source corrections and [evidence policy](../references/evidence-policy.md) for any later authorized verification.
