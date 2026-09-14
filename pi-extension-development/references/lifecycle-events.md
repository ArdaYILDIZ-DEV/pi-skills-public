# Lifecycle Events — Order and Resource Rules

Source: <https://pi.dev/docs/latest/extensions>

## Startup order

`project_trust` (user/global and `-e` only, before project resources) → `session_start { reason: startup }` → `resources_discover { reason: startup }`.

`resources_discover` may return `{ skillPaths, promptPaths, themePaths }` to contribute extra locations. Reload uses `reason: reload`.

## Per-prompt order

Extension commands first (bypass if matched) → `input` (intercept/transform/handle) → skill/template expansion → `before_agent_start` (inject message, modify system prompt) → `agent_start` → `message_start/update/end` → repeating `turn_start` → `context` → `before_provider_headers/request` → `after_provider_response` → `tool_execution_start` → `tool_call` (can block) → `tool_execution_update` → `tool_result` (can modify) → `tool_execution_end` → `turn_end` → `agent_end` → `agent_settled`.

## Session switching

`/new` or `/resume`: `session_before_switch` (can cancel) → `session_shutdown` → reload/rebind → `session_start { reason: new | resume }` → `resources_discover`.

`/fork` or `/clone`: `session_before_fork` → `session_shutdown` → `session_start { reason: fork }` → `resources_discover`.

`/compact`: `session_before_compact` (cancel or custom summary) → `session_compact` or `session_compact_failed`.

Exit (`Ctrl+C`, `Ctrl+D`, signals): `session_shutdown { reason: quit | reload | new | resume | fork }`.

## Resource rule (narrow bridge)

Factory may run without a session. Never start processes, sockets, watchers, or timers in the factory body.

Correct pattern:

1. Declare variables at module scope, leave empty.
2. Start on `session_start` or on first tool/command use.
3. Close in idempotent `session_shutdown`.
4. Re-establish in next `session_start`.

Async factory is for one-shot awaits (fetch config, register providers), not for background loops.

## project_trust handler shape

```ts
pi.on("project_trust", async (event, ctx) => {
  if (!ctx.hasUI) return { trusted: "undecided" };
  const ok = await ctx.ui.confirm("Trust project?", event.cwd);
  return ok ? { trusted: "yes", remember: true } : { trusted: "undecided" };
});
```

First `yes` or `no` wins and suppresses the built-in prompt. Return `undecided` to defer.
