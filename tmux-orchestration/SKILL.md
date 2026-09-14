---
name: tmux-orchestration
description: "Run and manage user-requested long-lived or interactive terminal work in isolated tmux sessions without blocking chat. Use for background servers, REPLs, gdb, log tails, and 'arka planda çalıştır', 'tmux oturumu aç', or 'sunucuyu arkaya at'. Not for a short non-interactive command or for taking over an existing personal tmux session."
license: Vibecoded
---

# tmux Skill

Use tmux as a programmable terminal multiplexer for interactive work. Works on Linux and macOS with stock tmux; avoid custom config by using a private socket.

## Quickstart (isolated socket)

```bash
SOCKET_DIR="${AGENT_TMUX_SOCKET_DIR:-${TMPDIR:-/tmp}/pi-tmux-sockets}"
mkdir -p "$SOCKET_DIR"
SOCKET="$SOCKET_DIR/pi.sock"                    # keeps agent sessions separate from personal tmux
SESSION=pi-dev                                  # slug-like name; avoid spaces
tmux -S "$SOCKET" new -d -s "$SESSION" -n shell
tmux -S "$SOCKET" send-keys -t "$SESSION":0.0 -- 'python3 -q' Enter
tmux -S "$SOCKET" capture-pane -p -J -t "$SESSION":0.0 -S -200  # inspect output
tmux -S "$SOCKET" kill-session -t "$SESSION"                   # clean up
```

After starting a session, report its socket, session name, working directory, command, and a copyable monitor command. Report startup evidence from a pane capture; never claim a server is ready merely because tmux accepted the command.

## Socket convention

- Set `SOCKET_DIR="${AGENT_TMUX_SOCKET_DIR:-${TMPDIR:-/tmp}/pi-tmux-sockets}"`, create it with `mkdir -p "$SOCKET_DIR"`, then set `SOCKET="$SOCKET_DIR/pi.sock"`.
- Use `tmux -S "$SOCKET"` consistently so agent sessions remain isolated from personal tmux sessions.
- Never alter the user's tmux configuration or assume its location; this workflow needs none.

## Targeting panes and naming

- Target format: `{session}:{window}.{pane}`, defaults to `:0.0` if omitted. Keep names short (e.g., `pi-py`, `pi-build`).
- Never assume numbering starts at 0: a user-level tmux config can set `base-index 1`, so a fresh session's first pane may be `session:1.1` instead of `session:0.0` (a `send-keys` to a missing target fails with `can't find window` / `can't find pane`). After creating a session, run `list-windows -a` and `list-panes -a` once and target the pane id actually listed.
- Use `-S "$SOCKET"` consistently to stay on the private socket path.
- Inspect: `tmux -S "$SOCKET" list-sessions`, `tmux -S "$SOCKET" list-panes -a`.

## Finding sessions

- List sessions with formatted metadata on active socket:
  ```bash
  tmux -S "$SOCKET" list-sessions -F '#{session_name}: #{session_windows} windows (created #{session_created_string})'
  ```
- Scan all active agent sockets:
  ```bash
  ls -1 "$SOCKET_DIR"/*.sock 2>/dev/null | while read -r s; do
    echo "=== Socket: $s ==="
    tmux -S "$s" list-sessions 2>/dev/null || echo "No active sessions"
  done
  ```

## Sending input safely

- Prefer literal sends to avoid shell splitting: `tmux -S "$SOCKET" send-keys -t target -l -- "$cmd"`
- When composing inline commands, use single quotes or ANSI C quoting to avoid expansion: `tmux -S "$SOCKET" send-keys -t target -- $'python3 -m http.server 8000' Enter`.
- To send control keys: `tmux -S "$SOCKET" send-keys -t target C-c`, `C-d`, `C-z`, `Escape`, etc.
- Do not pipe a long-running command into `tail`/`head` inside the pane (e.g. `ffmpeg ... 2>&1 | tail -30`): the pipe buffers everything, so `capture-pane` shows nothing until the process exits and progress cannot be monitored. Redirect to a log file instead (`... > /tmp/work.log 2>&1`) and poll the file from outside tmux with `tail`; for ffmpeg also add `-progress /tmp/work-progress.txt`.

## Watching output

- Capture recent history (joined lines to avoid wrapping artifacts): `tmux -S "$SOCKET" capture-pane -p -J -t target -S -200`.
- For continuous monitoring, poll with a loop instead of `tmux wait-for` (which does not watch pane text).
- Attach to observe: `tmux -S "$SOCKET" attach -t "$SESSION"`; detach with `Ctrl+b d`.

## Spawning processes safely

1. State the working directory, command, expected readiness signal, port or other exposed endpoint, and how the process will be stopped.
2. Before starting a server, inspect the target port and existing project process. Do not silently kill a conflicting process.
3. Use a session and socket owned by this workflow; never reuse or kill an unknown session.
4. When starting a Python interactive shell, set `PYTHON_BASIC_REPL=1` to prevent advanced console features from corrupting `send-keys`.
5. Keep output capture bounded and report failures, exit status, or timeout with the last relevant lines.
6. The pane shell may not be bash (e.g. fish, where `$?` is invalid and aborts the line with `fish: $? is not the exit status`). Avoid shell-specific syntax in `send-keys`; prefer writing the command to a `/tmp/*.sh` file with a `#!/bin/bash` header and running it via `bash /tmp/<name>.sh`.

## Synchronizing / waiting for prompts (Native Poll Loop)

Instead of requiring external helper scripts, wait for output or prompts using a clean inline bash polling loop:

```bash
# Poll pane for a regex pattern (e.g. '^>>>' or 'ready') with timeout (15s)
TIMEOUT=15
INTERVAL=0.5
MAX_LOOPS=$(awk "BEGIN {print int($TIMEOUT / $INTERVAL)}")
MATCHED=0

for i in $(seq 1 "$MAX_LOOPS"); do
  if tmux -S "$SOCKET" capture-pane -p -J -t "$SESSION":0.0 -S -100 2>/dev/null | grep -qE '^>>>'; then
    MATCHED=1
    break
  fi
  sleep "$INTERVAL"
done

if [ "$MATCHED" -eq 0 ]; then
  echo "Timeout waiting for prompt" >&2
  tmux -S "$SOCKET" capture-pane -p -J -t "$SESSION":0.0 -S -50 >&2
fi
```

## Interactive tool recipes

- **Python REPL**: `tmux -S "$SOCKET" send-keys -- 'PYTHON_BASIC_REPL=1 python3 -q' Enter`; wait for `^>>>`; send code with `-l`; interrupt with `C-c`.
- **gdb**: `tmux -S "$SOCKET" send-keys -- 'gdb --quiet ./a.out' Enter`; disable paging `tmux -S "$SOCKET" send-keys -- 'set pagination off' Enter`; break with `C-c`; issue `bt`, `info locals`, etc.; exit via `quit` then confirm `y`.
- **Background Servers** (Vite, FastAPI, Docker Compose logs): Spawn in background pane, poll for `http://` or `Uvicorn running on`, capture pane output to confirm startup.

## Cleanup

- Kill only a session created for the requested work: `tmux -S "$SOCKET" kill-session -t "$SESSION"`.
- Before stopping an active server or interactive process, report the target and request confirmation unless the user already asked to stop it or it is an unneeded failed session created in this turn.
- Do not use bulk session cleanup or `kill-server`; they can terminate unrelated work sharing the socket. Leave a still-useful session running and provide its monitor and stop commands.
