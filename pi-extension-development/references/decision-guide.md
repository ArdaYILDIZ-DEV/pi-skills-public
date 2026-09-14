# Decision Guide — Extension vs Skill vs Template vs Theme

Use this before scaffolding. Pick the smallest mechanism.

| Mechanism | Format | Purpose | Trigger to use it |
| --- | --- | --- | --- |
| Extension | TypeScript / JS | New LLM capability, event gate, command, custom UI | Need `registerTool`, `registerCommand`, `on(event)`, `ctx.ui` |
| Skill | Markdown `SKILL.md` + scripts | Reusable on-demand workflow | Repeated multi-step task, setup instructions, helper scripts |
| Prompt template | Markdown `*.md` | Expand `/name` into a prompt | Static prompt with `$1/$@` args, no logic |
| Theme | JSON | TUI colors | Only visual change |
| Pi package | npm / git bundle | Distribute any of the above | Sharing outside one machine |

Decision flow:

1. Only colors change: theme.
2. Only prompt text expands: template (`prompts/review.md` becomes `/review`).
3. Workflow with docs and scripts, agent decides when to load: skill.
4. Anything needing code execution inside the harness, blocking, or UI: extension.
5. More than one machine needs it: wrap the result as a pi package.

Examples:

- `Review staged diff for bugs` → template.
- `Extract tables from PDFs with ./scripts/process.sh` → skill.
- `Block rm -rf without confirm, add /deploy command, add greet tool` → extension.
- `Share team gates + review template` → pi package containing both.

Anti-pattern: building an extension that only contains a static prompt. That is a template and costs load time and trust surface for no gain.
