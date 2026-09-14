# Skill evaluation

Read this when changing a description or workflow, or when claiming an improvement. Match evaluation effort to the change: a path-only move needs loading and reference checks, not a new benchmark platform.

## Separate the questions

| Layer | Question | Evidence |
|---|---|---|
| Structure | Can the harness load the intended file and locate resources? | Loader and structural-check output |
| Selection | Does the agent choose this skill for the right requests? | Actual selection in a fresh session with competing descriptions present |
| Execution | Does the loaded skill improve the requested result? | Outputs and observed actions against predefined expectations |

Forced `/skill:name` invocation tests execution, not automatic selection. A manual-only skill is not expected to appear in automatic selection. Metadata keyword matching is not a model trial.

## Start with a small case set

Use the [evaluation template](../assets/evaluation-template.json). It contains concrete cases for `writing-great-skills`; adapt the skill name, prompts, context, and expectations when evaluating another skill. Keep expected outcomes separate from observations. The empty `runs` array means no trials have been recorded.

Include:

- One representative creation request, using realistic artifacts and language.
- One revision request with a constraint that must survive.
- One near-miss request that belongs to a neighboring skill.
- A missing prerequisite or untrusted-input case when relevant to the workflow.

For multilingual use, cover both Turkish and English. Choose negatives that share meaningful vocabulary; an unrelated arithmetic question says little about a skill's boundary. Mark hypothetical paths as fixtures rather than pretending they exist in the current repository.

Define success before running: required deliverable, preserved constraints, forbidden actions, and evidence needed. Prefer observable checks to a single subjective quality score. For prose, record concrete omissions or contradictions and distinguish them from taste.

## Run only the comparison needed

1. Freeze cases and expectations before comparing versions.
2. Use the same model, tools, neighboring skills, fixtures, and settings in fresh sessions.
3. Compare existing versus revised skill to assess the revision. Use with/without-skill trials only when measuring the skill's added value.
4. Observe actual selection, output, tool actions, and failures; do not fill results from the expected-outcome column.
5. Test the least capable deployed model when relevant. Repeat uncertain cases before claiming a trend; a small sample is not a universal performance result.

Use isolated fixtures or mocks for consequential operations. Do not run a publication, migration, deletion, or credential-bearing request merely to test whether a skill would request approval. A prompt-only guard is not a substitute for application permissions.

## Record actual runs

`cases` are expectations. Add a `runs` entry only after an actual trial; include these fields:

| Field | Meaning |
|---|---|
| `case_id` | Existing case identifier |
| `variant` | `existing`, `revised`, or `without-skill` |
| `model` | Actual provider/model identifier |
| `settings` | Relevant tool availability and sampling settings |
| `invocation` | `automatic`, `forced`, or `none` |
| `selected_skill` | Observed skill name, or `null` if none |
| `evidence` | Actual output/action excerpts or a local transcript path; redact secrets |
| `checks` | Each predefined expectation with its observed result and supporting evidence |
| `outcome` | `pass`, `fail`, or `blocked` |

A record lacking access to the required tool is blocked, not passed. Do not fabricate transcript paths, run counts, timing, token use, or comparison scores. The bundled validator checks JSON syntax, not these fields or the truth of a run record.

## Review and stop

Fix the specific failure layer: discovery before descriptions, descriptions before body changes for selection failures, and workflow/resources for execution failures. Do not grow a generic validator to solve a one-off documentation issue.

Report separately:

- Structural commands and exit codes.
- Manual scenario review and its concrete findings.
- Actual model trials and their limits, or explicitly "not run."

Stop when the agreed scope passes its applicable checks. Add another case or helper only for a demonstrated risk, not to make the package look comprehensive.
