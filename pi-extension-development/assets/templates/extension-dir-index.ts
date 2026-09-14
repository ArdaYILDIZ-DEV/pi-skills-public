import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { registerGreetTool } from "./tools.js";

let started = false;

export default function (pi: ExtensionAPI) {
  pi.on("session_start", async (_event, ctx) => {
    started = true;
    ctx.ui.setStatus("my-extension", "ready");
  });

  pi.on("session_shutdown", async () => {
    started = false;
  });

  registerGreetTool(pi);

  pi.registerCommand("hello", {
    description: "Say hello",
    handler: async (args, ctx) => {
      ctx.ui.notify(`Hello ${args || "world"}! started=${started}`, "info");
    },
  });
}
