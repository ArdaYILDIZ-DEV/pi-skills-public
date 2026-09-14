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
3. **Mannerism pruning:** Eliminates essay scaffolding, canned praise, empty disclaimers, and nested parentheses (`references/transformations/`).
4. **Boundary guarantees:** Never invents fake personal anecdotes, fabricated timestamps, votes, or synthetic typos.

## Directory structure

```text
casual-internet-english-writer/
├── SKILL.md                 # Primary instruction entry point
├── references/              # Register rules, Reddit norms, and translation guidelines
│   ├── casual-register.md
│   ├── reddit-writing.md
│   ├── turkish-to-english.md
│   └── transformations/     # Guides on parenectomy, transitions, and hedging
└── examples/                # Calibrated writing samples and contrast pairs
```
