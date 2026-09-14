# Pi Skills

A collection of 18 modular agent skills for [Pi Coding Agent](https://github.com/earendil-works/pi), packaged according to the `writing-great-skills` directory specification.

Each skill provides a `SKILL.md` entry point with task-focused descriptions, operational boundaries, and bundled references or scripts.

## Quick start

Clone this repository into your Pi Agent skills directory:

```sh
# Install globally for Pi Agent
git clone https://github.com/ArdaYILDIZ-DEV/pi-skills-public.git ~/.pi/agent/skills

# Or install into an individual project
git clone https://github.com/ArdaYILDIZ-DEV/pi-skills-public.git .pi/skills
```

Verify that all skills pass the packaging and link validator:

```sh
cd ~/.pi/agent/skills
node writing-great-skills/scripts/validate.mjs */
```

Expected result:
```text
PASS apple-inspired-web-design (automatic)
PASS avoid-ai-design (automatic)
PASS browsing-reddit (automatic)
...
PASS writing-great-system-prompts (automatic)
```

## Available skills

| Skill | Primary responsibility | Key triggers |
|---|---|---|
| [`apple-inspired-web-design`](./apple-inspired-web-design) | Design, review, or audit Apple HIG-inspired web surfaces using clean typography, semantic colors, and subtle elevation | "Apple tarzı web", "HIG web design", "Apple-inspired page" |
| [`avoid-ai-design`](./avoid-ai-design) | Audit and rewrite frontend UI to remove generic AI design patterns (AI slop) in HTML/CSS and React/Tailwind | "de-slop UI", "ai sloptan temizle", "tasarımı iyileştir" |
| [`browsing-reddit`](./browsing-reddit) | Read and search Reddit discussions with ~20–65x token savings using compact tables and flattened comment trees via `rdt-tidy` | "reddit'e bak", "search reddit", "read thread" |
| [`casual-internet-english-writer`](./casual-internet-english-writer) | Draft and revise native informal English for Reddit posts, forum replies, and community messages | Direct call: `/skill:casual-internet-english-writer` |
| [`comment-audit`](./comment-audit) | Prune obsolete comments and standardize docstrings across TS, JS, Python, Go, C, and shell with zero code logic mutation | "yorumları temizle", "docstring yaz", "comment audit" |
| [`conventional-commit`](./conventional-commit) | Draft Conventional Commits 1.0.0 messages with imperative subjects and no AI-attribution trailers | "commit mesajı yaz", "commit changes" |
| [`crafting-tasteful-interfaces`](./crafting-tasteful-interfaces) | Build accessible, production-grade frontend interfaces with deliberate color tokens and intentional typography | "tasarımı düzelt", "craft UI", "tasteful interface" |
| [`no-ai-slop-frontend`](./no-ai-slop-frontend) | Identify and replace common AI template tells using a master catalog of ~100 anti-patterns across 9 UI categories | "ai slop engelle", "modern UI tasarla", "no ai slop" |
| [`pi-extension-development`](./pi-extension-development) | Build, test, and package Pi Agent TypeScript extensions using ExtensionAPI tools, commands, and TUI widgets | "pi extension", "ExtensionAPI", "registerTool" |
| [`professional-english-writer`](./professional-english-writer) | Produce concise, natural workplace English for pull requests, code reviews, technical summaries, and emails | Direct call: `/skill:professional-english-writer` |
| [`research`](./research) | Multi-source, disk-backed research workflow using staged Markdown artifacts (`QUESTION.md`, `SOURCES.md`, `REPORT.md`) | "derin araştırma", "investigate", "research topic" |
| [`tmux-orchestration`](./tmux-orchestration) | Manage long-running commands, REPLs, and background workers in isolated tmux sessions without blocking chat | "arka planda çalıştır", "tmux oturumu aç", "background server" |
| [`verify`](./verify) | Execute fail-first verification loops with targeted test runs, live terminal output, and exit code inspection | "testleri çalıştır", "doğrula", "verify change" |
| [`writing-great-agents-md`](./writing-great-agents-md) | Audit, tighten, and structure repository instruction files such as `AGENTS.md` and `CLAUDE.md` | "AGENTS.md yaz", "repo kuralları", "tighten instructions" |
| [`writing-great-prompts`](./writing-great-prompts) | Design goal-context-boundary prompts for LLMs, agent roles, and evaluation workflows | Direct call: `/skill:writing-great-prompts` |
| [`writing-great-readmes`](./writing-great-readmes) | Write evidence-based, runnable README documentation tailored to project types and user workflows | "README yaz", "beni oku hazırla", "document CLI" |
| [`writing-great-skills`](./writing-great-skills) | Author, audit, and validate Pi agent skills with automated frontmatter schema and relative link checks | "skill yaz", "validate skill", "SKILL.md hazırla" |
| [`writing-great-system-prompts`](./writing-great-system-prompts) | Design and harden persistent system prompts with strict authority boundaries, failure modes, and tool contracts | "sistem promptu yaz", "system prompt audit" |

## Tool prerequisites

Most skills are self-contained prompt and reference packs. A few rely on external CLI tools:

| Skill | Required CLI tool | Purpose | Installation |
|---|---|---|---|
| `browsing-reddit` | `rdt-cli` + `rdt-tidy` | Token-efficient Reddit scraping and tabular formatting | See [`browsing-reddit/README.md`](./browsing-reddit/README.md) |
| `conventional-commit` | `git` | Repository status and diff inspection | System package manager |
| `tmux-orchestration` | `tmux` | Background session and socket multiplexing | System package manager |
| `writing-great-skills` | `node` (v18+) | Running `scripts/validate.mjs` | Node.js runtime |

## Skill structure

All skills follow the standard Pi directory format:

```text
skill-name/
├── SKILL.md            # Entry point: frontmatter (name, description) + operational instructions
├── references/         # (Optional) Detailed guides, token tables, and transformation rules
├── assets/             # (Optional) Static templates, CSS tokens, or test fixtures
└── scripts/            # (Optional) Deterministic verification or analysis scripts
```

To validate a newly created or modified skill:

```sh
node writing-great-skills/scripts/validate.mjs <path-to-skill>
```

## Contributing and authoring

To add or modify skills, refer to [`writing-great-skills/SKILL.md`](./writing-great-skills/SKILL.md). New skills must include:
- A single `SKILL.md` entry point with valid frontmatter.
- A concise description stating capabilities, triggers, and edge cases.
- Separation between read-only inspection and state-mutating actions.
- Passing `validate.mjs` test runs with exit code 0.

## License

This project is licensed under the MIT License. Individual reference files or sub-modules retain their respective upstream licenses where noted.
