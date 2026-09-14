# Trust and Security — Extensions Run With Full Permissions

Source: <https://pi.dev/docs/latest/extensions>, <https://pi.dev/docs/latest/skills>, <https://pi.dev/docs/latest/settings>

## Rule

Extensions execute arbitrary code with your full system permissions. Skills can instruct the model to run any action including executables. Review source before installing or trusting.

## Locations and trust

Auto-discovered extension paths:

- `~/.pi/agent/extensions/*.ts` and `*/index.ts` (global, trusted)
- `.pi/extensions/*.ts` and `*/index.ts` (project-local, loads only after trust)

Skill and prompt project paths (`.pi/skills/`, `.agents/skills/`, `.pi/prompts/`) follow the same gate. CLI flags (`-e`, `--skill`, `--prompt-template`) are explicit and additive.

Trust resolution: saved `trust.json` decision first, then `project_trust` event handlers from user/global extensions, then `defaultProjectTrust` setting, then built-in prompt. A handler returning `yes` or `no` owns the decision; `undecided` defers.

## Checklist before install

1. Read the extension entry file and every `registerTool` execute body.
2. List subscribed events: `tool_call` blockers, `context` injectors, and `session_before_compact` rewriters change behavior silently.
3. Check `package.json`: runtime must be in `dependencies`, unknown binaries or lifecycle scripts are a red flag.
4. Check skill `scripts/` and `references/` for curl-pipe-sh, exfiltration, or credential reads.
5. Prefer pinned versions (`npm:@scope/pkg@1.2.3`, `git:host/user/repo@tag`) for teams.

## Isolation

Pi has no built-in permission sandbox for filesystem, process, network, or credentials. If you need boundaries, containerize: Gondolin extension (host auth, tools in micro-VM), plain Docker (whole process in container), or OpenShell (policy sandbox). See containerization docs.

Never paste secrets into prompts to test a gate. Use dummy values and revoke test tokens after verification.
