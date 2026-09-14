# Shell / Bash: Google Shell Style Guide, ShellCheck-aware

Read `SKILL.md` first; this file only carries what is shell-specific.

Shell punishes silent mistakes more than most languages, so the comments that matter are the
ones about *quoting, exit codes, side effects and portability*.

## Baseline standard

No official documentation mechanism exists. The de-facto standard is the **Google Shell
Style Guide** plus ShellCheck:

- **File header:** every file starts with a brief comment describing its contents. The
  shebang stays line 1; the header goes immediately after it.
- **Function comments:** any function that is not *both* obvious and short gets a header.
  **Any function in a library gets one regardless of length**, with: Description,
  **Globals** (used *and* modified), **Arguments**, **Outputs** (stdout/stderr),
  **Returns** (values other than the default last-command exit status).
- **Implementation comments:** only for what is tricky, non-obvious, or important.
- **ShellCheck** is the linter; suppressions narrow and justified. `shfmt`/`bashate` format.
- **shdoc**: if the project uses it, follow its tags (`@description`, `@arg $1 string ...`,
  `@stdout`, `@stderr`, `@exitcode`, `@example`, `@noargs`, `@set`, `@internal`). Otherwise
  plain Google-style headers; don't invent tags.

## Pre-flight (never skip)

1. **Detect the house style:** Google headers or shdoc? POSIX `sh` or bash? Comment
   language? Banner (`###...###`) or plain `#`?
2. **Check the config:** `.shellcheckrc`, existing directives, `shfmt` args, and the shebang.
   `#!/bin/bash` vs `#!/usr/bin/env bash` vs `#!/bin/sh` decides which constructs are legal
   and therefore what needs a portability comment.
3. **Read before judging.** In shell, "obvious" depends entirely on the surrounding script.
4. **Never document** generated or vendored scripts.

## Priority-1 signals (lies)

| Defect | Signal |
|---|---|
| Contradicts the code | `Arguments:` lists a parameter never read; `Globals:` names a variable never set |
| Wrong exit contract | `Returns: 0 on error` while the body returns 1, or a claim that ignores `set -e` |
| False portability claim | says "POSIX sh" but uses `[[`, arrays, `local`, or `mapfile`: fix, or flag the shebang |
| Dangling path/host/user | references a host, path or account that no longer exists |

## Priority-3 shapes (move / compress)

| Defect | Action |
|---|---|
| File header missing | **ADD** (required for every file) |
| File header that only repeats the filename | **REWRITE** as what the script *does* |
| Function header with description only | **COMPLETE** the sections that apply |
| Library function with no header | **ADD**, regardless of length |
| Comment placed mid-pipeline | **MOVE** above the whole pipeline |

Anti-churn, shell-specific: an odd-looking comment often encodes a quoting or portability
trap you can't see. A **commented-out safety check** (a guard, a `set -e` escape, a lock):
flag it, don't delete it.

## Triggers: write a comment here

| Trigger | Example that passes the wrong-edit test |
|---|---|
| Deliberate unquoted expansion | `# Unquoted on purpose: split FLAGS into separate arguments.` |
| Deliberate quoting | `# Quoted: path may contain spaces; do not "simplify".` |
| `set -e` interaction | `# || true is required: grep exits 1 on no match and would abort the script.` |
| Exit-status masking | `# Separate lines: local x=$(cmd) hides cmd's exit status under set -e.` |
| Subshell trap | `# No pipe into while: the loop body would run in a subshell and lose the counter.` |
| `IFS` / `read -r` | `# IFS= preserves leading whitespace; -r stops backslash mangling.` |
| Portability | `# GNU sed only (-i without a backup); macOS/BSD sed needs -i ''` |
| Locale | `# LC_ALL=C: sort order and byte ranges must not depend on the user's locale.` |
| Exit code contract | `# 3 = config missing, 4 = remote unreachable; callers branch on these.` |
| Side effects | `# Changes the caller's cwd - the caller must save PWD if it matters.` |
| Cleanup / traps | `# trap on EXIT (not ERR): must also run when a subshell fails halfway.` |
| Idempotency | `# Safe to re-run: existing files are overwritten, nothing is appended.` |
| Danger guard | `# ${1:?} - without a guard, an unset arg makes rm target the wrong path.` |
| Temp files | `# mktemp + trap: never write to a predictable path in a world-writable dir.` |
| Retry window | `# 60s: the upstream window resets on the minute; a shorter sleep just re-fails.` |
| Env prerequisites | `# Requires AWS_PROFILE and a TTY for the MFA prompt.` |
| Root/privilege | `# Must run as root: writes to /etc and calls mount.` |

## Never write these (shell forms)

```bash
# NO: restatement
# make the directory           ->  mkdir -p "${dest}"
# loop over the hosts          ->  for host in "${hosts[@]}"; do

# NO: Tautological file header
# backup.sh

# NO: Blanket suppression
# shellcheck disable=all
```

Upgrade table:

| You find | Do this |
|---|---|
| `# copy files` above a function | **Replace** with a header: description + Globals/Arguments/Outputs/Returns. |
| `# don't remove the quotes` | **Rewrite** as why: `# Quoted: the path can contain spaces; unquoted it splits.` |
| `# rm -rf "${tmp}"` (commented out) | **Delete**, or flag if it looks like a disabled safety measure. |
| `# backup.sh` (file header) | **Rewrite**: `# Mirrors /data into a dated backup directory. Requires GNU cp.` |

## Comment craft (shell specifics)

- **The shebang is always line 1.** The header goes right after it.
- `#` + one space; 2-space indent matching the code; max 80 columns.
- Banner (`###...###`) optional: match the file, skip it for short headers.
- Function headers go directly above the function, never inside it.
- A pipeline's comment precedes the entire pipeline.

## File and function headers

```bash
#!/bin/bash
#
# Mirrors a source directory into a dated backup directory.
# Requires: root (reads /data), GNU cp. Safe to re-run.
```

One to three lines: what the script does, and any requirement invisible from the code
(privileges, env vars, portability, idempotency). Omit copyright/author lines by default.

```bash
#######################################
# Mirrors the source directory into the destination.
# Globals:
#   BACKUP_ROOT
# Arguments:
#   Source directory, absolute path.
#   Destination directory; created if missing.
# Outputs:
#   Writes progress to stdout, errors to stderr.
# Returns:
#   0 on success; non-zero if the copy fails.
#######################################
backup() {
  ...
}
```

- Include **only the sections that carry information**; no `Globals: None` unless the house
  template requires it.
- `Globals:` = read **or modified**; modified ones are the ones that bite.
- `Arguments:` = positionals in plain language, incl. units and optionality.
- `Outputs:` = stdout/stderr. `Returns:` = exit codes **other than the default**.

## Pragmas

```bash
# shellcheck disable=SC2086 # Splitting is intended: FLAGS is a list of arguments.
mybinary ${FLAGS}

# shellcheck shell=bash
# shellcheck source=lib/common.sh
# TODO(ada): switch to the bulk endpoint once API v2 ships. OPS-1423.
```

Line-scoped suppressions only; file-level is a last resort; `disable=all` never.

## Edit discipline (shell addendum)

Don't "fix" quoting, add `set -euo pipefail`, or change `function f()` to `f()` in a comment
pass. Propose those in the report.

## Calibration example

```bash
# BEFORE (4 defects, 5 gaps)
#!/bin/bash
# backup.sh
# Author: jdoe, Created: 2018

set -e

# Copy files
function backup() {
  local src=$1
  local dest=$2
  # make the directory
  mkdir -p "${dest}"
  # copy
  cp -r "${src}" "${dest}"
  # TODO: add error handling
  echo "done"
}

backup /data /backup
```

```bash
# AFTER
#!/bin/bash
#
# Mirrors a source directory into a backup directory.
# Requires: root (reads /data), GNU cp.

set -e

# Mirrors the source directory into the destination.
# Arguments:
#   Source directory, absolute path.
#   Destination directory; created if missing.
# Outputs:
#   Writes progress to stdout, errors to stderr.
# Returns:
#   Non-zero if the copy fails; with set -e the script aborts first.
function backup() {
  local src=$1
  local dest=$2

  mkdir -p "${dest}"
  cp -r "${src}" "${dest}"
  echo "done"
}

backup /data /backup
```

**Deleted:** author/date, tautological header, restatements, ownerless TODO.
**Rewritten:** `# Copy files` became a real header. **Added:** file header.
**Proposed, not applied:** `set -euo pipefail`, quote `local src="$1"`, drop `function`.

## Language self-check

- [ ] Google headers or shdoc? bash or POSIX sh? ShellCheck config?
- [ ] Shebang line 1, file header right after it?
- [ ] Every non-obvious function and **every library function** has a header?
- [ ] Exit codes, portability claims, `set -e` interactions are true?
- [ ] No bare `shellcheck disable`?
