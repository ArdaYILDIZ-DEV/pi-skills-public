# Extension API — Factory, Tools, Commands, UI, State

Source: <https://pi.dev/docs/latest/extensions> (primary). Do not invent methods outside this surface.

## Factory

```ts
import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
export default function (pi: ExtensionAPI) {}
export default async function (pi: ExtensionAPI) {}
```

- Loaded via jiti, TypeScript works without compilation.
- Sync for subscriptions and registrations. Async only for one-shot startup such as fetching remote models then calling `pi.registerProvider()`. Pi awaits it before `session_start` and before flushing provider registrations.
- Available imports: `@earendil-works/pi-coding-agent` (types), `typebox` (schemas), `@earendil-works/pi-ai` (`StringEnum`), `@earendil-works/pi-tui` (rendering), `node:*` builtins, plus npm deps resolved from the nearest `package.json` after `npm install`.

## Events: pi.on

```ts
pi.on("tool_call", async (event, ctx) => {
  if (event.toolName === "bash" && event.input.command?.includes("rm -rf")) {
    const ok = await ctx.ui.confirm("Dangerous!", "Allow rm -rf?");
    if (!ok) return { block: true, reason: "Blocked by user" };
  }
});
pi.on("session_start", async (event, ctx) => {
  ctx.ui.notify("ready", "info");
});
```

Use `on` for lifecycle, agent, model, and tool events. Return block or cancel objects only where the event supports it (`tool_call` block, `session_before_switch` cancel, `session_before_compact` cancel or custom summary). See `lifecycle-events.md` for order.

## Custom tools: pi.registerTool

```ts
import { Type } from "typebox";
pi.registerTool({
  name: "greet",
  label: "Greet",
  description: "Greet someone by name",
  parameters: Type.Object({ name: Type.String({ description: "Name to greet" }) }),
  async execute(toolCallId, params, signal, onUpdate, ctx) {
    return { content: [{ type: "text", text: `Hello, ${params.name}!` }], details: {} };
  },
});
```

- `name`: lowercase-hyphen, unique. `description` decides when the LLM calls it, write concretely.
- `parameters`: TypeBox schema. Keep required fields minimal.
- `execute` returns `{ content, details }`. Use `signal` for cancellation, `onUpdate` for progress.

## Custom commands: pi.registerCommand

```ts
pi.registerCommand("hello", {
  description: "Say hello",
  handler: async (args, ctx) => { ctx.ui.notify(`Hello ${args || "world"}!`, "info"); },
});
```

Extension commands are checked before `input` handling and bypass the agent loop when matched.

## UI: ctx.ui

- `confirm(title, msg)`, `select`, `input`, `notify(text, level)` for prompts.
- `setStatus(id, text)` for footer, `setWidget(id, lines)` for panel above editor.
- `custom()` for full TUI components with keyboard input.

Check `ctx.hasUI` before prompting in non-interactive contexts such as `project_trust`.

## State

- Ephemeral: in-memory variables re-established in `session_start`, cleared in `session_shutdown`.
- Durable across restarts: `pi.appendEntry()`. See session-format docs for entry types.

Minimal complete example is in `assets/templates/extension-single.ts`.
