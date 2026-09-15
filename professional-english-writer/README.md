# professional-english-writer

A Pi Coding Agent skill for authoring, refining, and auditing clear, human workplace English.

## Purpose

LLMs generating workplace text frequently default to defensive corporate speak, ceremonial flattery ("I hope this email finds you well"), or passive sentence structures that obscure the actor.

This skill enforces direct, practitioner-grade communication across day-to-day engineering and technical workflows. It prioritizes clarity, ownership, and context-appropriate brevity over artificial formality.

## Intended audience and use cases

This skill works for both native English speakers and non-native professionals:

- **Pull request descriptions:** Summarizing technical changes, trade-offs, breaking updates, and testing evidence.
- **Code review comments:** Delivering constructive, specific feedback grounded in code and rationale without patronizing preambles.
- **Issue reports and handoffs:** Documenting root causes, reproduction steps, and operational statuses clearly.
- **Slack and asynchronous messaging:** Communicating blockers, decisions, and action items directly.
- **Customer and technical support:** Explaining operational steps calmly and accurately without robotic boilerplate.
- **Cross-language translation (Optional):** Translating technical notes or Turkish drafts into precise professional English (uses `references/turkish-to-english.md` only when input notes are Turkish).

## Invocation

This skill has `disable-model-invocation: true` configured in its frontmatter to avoid unprompted activations.

Invoke it explicitly using the slash command:

```text
/skill:professional-english-writer Write a PR description for our auth token caching migration. Here is git diff --stat and the main changes: [details]
```

Or to polish an email or announcement:

```text
/skill:professional-english-writer Make this team update direct and professional without sounding corporate:
[paste draft]
```

## Core principles

- **Actor and agency:** Prefers concrete actors and verbs (`I tested`, `the worker failed`, `we need to verify`) over vague passives (`it was observed that`).
- **Channel awareness:** Distinguishes between concise async chat, structured PRs, and formal technical briefs (`references/professional-artifacts.md`).
- **Zero ceremonial bloat:** Cuts canned greetings, repetitive summaries, and excessive hedging while keeping genuine courtesy and trade-offs.
- **Fact preservation:** Never fabricates metrics, consensus, authority, or root causes. Preserves all identifiers, commit hashes, code blocks, and versions.

See [named clarity checks](SKILL.md#named-clarity-checks) for ten audience-sensitive writing principles with workplace examples and exceptions, including conditions before actions, consistent naming, and clear local references. These are editorial checks, not blanket word bans or automatic rewrites.

## Directory structure

```text
professional-english-writer/
├── SKILL.md                 # Primary instruction entry point
├── references/              # Register conventions and artifact-specific guidelines
│   ├── professional-register.md
│   ├── professional-artifacts.md
│   └── turkish-to-english.md
└── examples/                # Calibrated before/after workplace writing examples
```
