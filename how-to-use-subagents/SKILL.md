---
name: how-to-use-subagents
description: "Spawn, steer, and coordinate interactive Pi subagents (scout, researcher, worker) in background tmux panes. Use to delegate codebase reconnaissance, web research, or scoped implementation; includes 'subagent kullan', 'alt ajan başlat', 'scout çalıştır', 'worker görevlendir'. Not for simple single-file edits or quick commands."
---

# How to Use Subagents

Delegate broad exploration, deep research, or isolated implementation to background tmux subagents without polluting primary context. Subagents run concurrently; results are steered back as inbound turn notifications upon exit.

## Prerequisites & Agent Selection

Run `subagents_list()` to inspect available definitions. Match task to agent:

| Agent | Capability & Tools | Aligned Skill & Scope |
|---|---|---|
| `scout` | Read-only recon (`read`, `grep`, `find`, `ls`, `safe_bash`) | Locates files, maps callers/types, finds entry points. Never mutates. |
| `researcher` | Web & docs research (`web_search`, `fetch_content`, `source_check`) | Uses `research` skill: fetches primary sources, cites passages, returns concise brief. |
| `worker` | Scoped implementation (`read`, `write`, `edit`, `bash`, `todo`) | Uses `verify` skill: fail-first red -> green, minimal edits, regression checks. |

*Note: Only `subagent`, `subagent_message`, and `subagents_list` exist. Do not call polling or waiting tools (`await_subagent`, `subagent_status`); the harness delivers results automatically.*

## When to Delegate

- **Delegate:** Multi-file codebase exploration (`scout`), multi-query web/doc synthesis (`researcher`), multi-step bugfix/test cycles (`worker`), or parallel concurrent checks.
- **Do not delegate:** Reading 1-2 known files, localized edits, or tasks requiring interactive user confirmation or credentials. Stay in session.

## Task Packet (Self-Contained Prompt)

Subagents start with zero session history. The `task` string must be completely self-contained.
*Anti-pattern: Passing conversational references like "fix the bug we discussed" — the subagent cannot see parent turns.*

```markdown
## Goal & Deliverable
Target outcome, specific question, and required handoff format.

## Context & Constraints
- Working directory (`cwd`), repo paths, relevant tech stack/versions.
- Boundaries: permitted files, forbidden operations, read-only vs mutating.
- Known type signatures or snippets (prevents rediscovery). Never pass secrets.

## Evidence & Prior Attempts
- Observed errors, stack traces, and already ruled-out hypotheses.

## Expected Handoff
- Scout: `path:line` references, architecture flow, validation commands found.
- Researcher: verified findings with source URLs, unresolved gaps.
- Worker: modified files, test output with exit codes, revert test.
```

## Lifecycle Mechanics

### 1. Spawn (`subagent`)
```javascript
subagent({
  agent: "scout",               // "scout" | "researcher" | "worker"
  name: "auth-recon",           // unique label; duplicates auto-suffix. To continue work, resume instead
  task: "<filled task packet>",
  model: "...",                 // optional override for harder reasoning
  cwd: "..."                    // optional directory override
})
```
Inform the user in one concise line (e.g., "Dispatched scout for auth module recon") and yield or proceed with independent work. Never sleep or loop-wait.

### 2. Steer, Resume, or Recover (`subagent_message`)
- **Live steering:** While running, `subagent_message({ name, message })` injects input into the live tmux pane.
- **Resume finished child:** After a subagent exits, `subagent_message({ name, message })` resumes it with follow-up instructions, preserving its loaded sandbox and prior context. Prefer resume over spawning a new agent.
- **Clarifications:** If a subagent invokes `ask_question`, reply using `subagent_message`.
- **Failures & stalls:** If a subagent returns an incomplete handoff or fails, resume it with missing context via `subagent_message` or report the blocker; do not blindly re-spawn duplicates.

## Boundaries & Verification

- **Approval gates stay with parent:** Subagents cannot authorize commits, pushes, file deletions outside `/tmp`, or package installs. Relay required approvals explicitly.
- **Verify in main session:** Subagent claims are advisory. Before reporting completion:
  - For `scout`: confirm key lines with a targeted `read`.
  - For `worker`: inspect `git diff` and rerun verification commands (`verify` skill) directly in the orchestrator session.
