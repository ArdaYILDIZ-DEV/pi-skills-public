# Professional register sources

Retrieved 2026-09-14. Web passages below were reported as fetched by the research subagent. S12 is local inherited material, not a newly verified web corpus.

### S1
- url: https://github.com/curl/curl/pull/7548
- title: checksrc: complain about #if defined(X) instead of #ifdef X
- fetched: yes
- type: GitHub pull request and review
- passage: "I'm not attached to this, it came up in some mbedtls PR..." / "I see more risk than good in wholesale changes like this when there isn't a clear problem being fixed."
- supports: direct proposal and objection phrasing grounded in maintenance cost.

### S2
- url: https://github.com/golang/go/issues/51298
- title: cmd/vet: structtag false positives about json:"-,omitempty" for unexported fields
- fetched: yes
- type: GitHub issue and triage
- passage: "`go vet -structtag` skips private fields with JSON tag `-`, but doesn't skip those with tag `-,omitempty`. This is inconsistent." / "Case split in my mind: 1) If we think this is WAI..."
- supports: immediate problem statement and explicit option branching.

### S3
- url: https://danluu.com/postmortem-lessons/
- title: Reading postmortems
- fetched: yes
- type: practitioner technical write-up
- passage: "I love reading postmortems. They're educational, but unlike most educational docs, they tell an entertaining story."
- supports: personal, concise opening in a substantive technical essay.

### S4
- url: https://blog.nelhage.com/post/efficiency-vs-resiliency/
- title: Efficiency trades off against resiliency
- fetched: yes
- type: practitioner systems essay
- passage: "What’s the ‘right’ level of CPU utilization for a server?" / "This simplistic intuition, it turns out, is rarely quite right."
- supports: framing question and direct qualification.

### S5
- url: https://jvns.ca/blog/2023/06/05/some-blogging-myths/
- title: Some blogging myths
- fetched: yes
- type: practitioner writing reflection
- passage: "My main strategy here is to just add qualifiers like ‘My understanding is..’ or ‘I think..’ before statements that I’m not totally sure of."
- supports: locally scoped epistemic hedging.

### S6
- url: https://zulip.readthedocs.io/en/11.1/contributing/how-we-communicate.html
- title: How we communicate
- fetched: yes
- type: public project communication guidance
- passage: "Using this function won’t work here, because..." / "Would this be clearer if we…?"
- supports: reason-grounded disagreement and questions for uncertain suggestions.

### S7
- url: https://github.com/rust-lang/rust/pull/115000
- title: custom_mir: change Call() terminator syntax to something more readable
- fetched: yes
- type: GitHub pull request and review
- passage: "I find our current syntax very hard to read -- I cannot even remember the order of arguments... So I suggest we use `Call(ret_val = function(v), next_block)` instead." / "The type of the first argument should be `()` I believe."
- supports: concise rationale, proposal, and bounded review correction.

### S8
- url: https://lore.kernel.org/git/20210628031642.699156-1-felipe.contreras@gmail.com/T/
- title: [PATCH] pull: introduce --merge option
- fetched: yes
- type: technical mailing-list thread
- passage: "I don't think --no-rebase should be ‘deprecated’, at least not yet." / "But I'm not married to this."
- supports: direct disagreement and explicit flexibility.

### S9
- url: https://github.com/rust-lang/rust-clippy/discussions/12233
- title: Adding more detailed suggestions
- fetched: yes
- type: GitHub discussion
- passage: "Once in a while I feel that the explanations of the lints could include more suggestions." / "Feel free to open a PR about this."
- supports: low-ceremony proposal and next action.

### S10
- url: https://simonwillison.net/2026/Jan/12/claude-cowork/
- title: First impressions of Claude Cowork, Anthropic’s general agent
- fetched: yes
- type: practitioner technical write-up
- passage: "New from Anthropic today is Claude Cowork, a ‘research preview’ that they describe as ‘Claude Code for the rest of your work’." / "I’ve been saying for a while now that Claude Code is a ‘general agent’ disguised as a developer tool."
- supports: current practitioner writing combining direct reporting and first-person analysis.

### S11
- url: https://github.com/golang/go/issues/73794
- title: bytes: add Buffer.Peek
- fetched: yes
- type: GitHub proposal review, 2025
- passage: "Add a `Peek` method to `bytes.Buffer` to avoid unnecessary wrapping when passing a buffer to `image.Decode`." / "I think this functionality makes sense, but I was initially confused..."
- supports: direct proposal and clause-level qualification.

### S12
- url: local:/home/arda/.pi/agent/skills/natural-english-writer/
- title: inherited natural-english-writer research package
- fetched: local files read
- type: inherited local research with mixed evidence classes
- passage: "It does not contain a complete raw 520+ sentence corpus, per-comment timestamps, verified speaker identities, an AI-output experiment, or a calibrated rhythm model." (`references/evidence-policy.md`)
- supports: qualitative anti-pattern and fidelity heuristics, with quantitative and provenance limits preserved.

## English writer update corpus (U1–U9)

The user supplied and confirmed this research package for the current revision. The files below were read locally by the editor; their external sources were not fetched again during this revision. Existing S-number references above describe the earlier research pass and retain their original provenance.

Local package root: `/home/arda/reddit-arastirma/english-writer-update/`. Paths below are relative to that research root, not runtime dependencies of this skill. The operational guidance and decision summary are bundled here; ordinary writing does not require access to the research directory.

| ID | Local material read | Contribution |
|---|---|---|
| U1 | `reddit-1/report.md` | Community observations: lexical inflation, contrast formulas, structural symmetry, tone mismatch, and false-accusation risks |
| U2 | `reddit-2/report.md`, including Appendix G | Functional irregularity, situated context, genuine stance, and the difference between casual voice and slang performance |
| U3 | `general-1/report.md`; `general-1/sources.md` | Lexical and structural findings, detector mechanisms and limits, and formal/non-native voice considerations |
| U4 | `general-2/report.md`; `general-2/sources.md` | Portability check, conditional rewriting, simple verbs, copula repair, significance tails, and editorial craft |
| U5 | `pre-2020-baseline/subagent-1-tech/report.md`; sibling `sources.md` | 22 historical technical Reddit entries; direct replies, meaningful agreement, exact jargon, asides, and varied cadence |
| U6 | `pre-2020-baseline/subagent-2-askreddit/report.md`; sibling `sources.md` | 25 historical Q&A entries; narrative versus explanatory register, scene entry, actual questions, and functional endings |
| U7 | `SYNTHESIS.md` | Cross-stream synthesis and casual/professional differentiation |
| U8 | `deep-analysis/deep-synthesis.md` | Candidate transformations, register mapping, and edge cases; editorial rules were adapted rather than copied as a numerical engine |
| U9 | `reference/REF-01-ai-fingerprint-matrix.md` through `REF-05-pre-2020-evidence.md`; `pre-2020-baseline/pre-2020-human-patterns.md` | Compact summaries of U1–U8, used as navigation and cross-checks rather than additional independent samples |

Historical excerpts illustrate writing moves; their speakers' biography and factual claims must not be transferred to a user's draft. Constructed before/after pairs in the reports demonstrate editing ideas. Any added date, metric, mechanism, or experience in a pair requires corresponding input facts before that transformation is usable for a real user.
