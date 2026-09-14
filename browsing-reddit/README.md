# browsing-reddit

A Pi Coding Agent skill for reading, searching, and navigating Reddit discussions with minimal token overhead.

## Purpose

When an LLM agent accesses Reddit via the standard Reddit CLI (`rdt-cli`), missing TTY causes `rdt` to dump bloated YAML structures (often 50–100 KB or 13,000+ tokens per query) containing dozens of unused API metadata fields.

This skill uses [`rdt-tidy`](https://github.com/ArdaYILDIZ-DEV/rdt-tidy), a lightweight Python wrapper that intercepts raw JSON and renders single-line compact tables and indented comment threads. It reduces token consumption by ~20–65x while preserving the full text body and paragraph breaks.

## Prerequisites

The skill requires two CLI binaries available on `PATH`:

1. **`rdt-cli` (v0.4.1+)**: The backend CLI for Reddit.
2. **`rdt-tidy`**: The token-compression wrapper.

### Installing rdt-cli

Install `rdt-cli` via `uv` or `pipx`:

```sh
# Using uv (recommended)
uv tool install rdt-cli

# Or using pipx
pipx install rdt-cli
```

Verify backend installation:

```sh
rdt status
```

### Installing rdt-tidy

Clone the `rdt-tidy` repository and symlink or copy the executable to a directory in your `PATH` (such as `~/.local/bin`):

```sh
git clone https://github.com/ArdaYILDIZ-DEV/rdt-tidy.git
cd rdt-tidy
chmod +x rdt-tidy
ln -s "$(pwd)/rdt-tidy" ~/.local/bin/rdt-tidy
```

Verify wrapper installation:

```sh
rdt-tidy --compact status
```

Expected output when unauthenticated:
```text
auth:no
```

Or when authenticated:
```text
auth:yes u/<username> caps:read,write modhash:1
```

## Quick start

Once `rdt-tidy` is on `PATH`, the agent uses it automatically when asked to read Reddit links, search threads, or inspect subreddits:

```sh
# Read a specific thread by ID (compact format)
rdt-tidy --compact read 1vtmth1

# Search Reddit discussions
rdt-tidy --compact search "linux kernel" -n 5

# Browse a specific subreddit
rdt-tidy --compact sub technology -n 5
```

## How it works

- **TokenView parser**: Strips unneeded metadata (`author_flair`, `awarders`, `modhash`) without truncating user post or comment text.
- **Flattened comment hierarchy**: Collapses arbitrary reply depths into a readable single-level 2-space indented list (`depth=1`) while tracking unexpanded comment stubs (`+N more`).
- **Standard pipe escaping**: Escapes `|` characters in table cells to maintain tabular integrity inside Markdown LLM contexts.
- **Execution safety**: Read-only browsing runs without prompts; account-mutating actions (`upvote`, `save`, `subscribe`, `comment`, `login`, `export -o`) require explicit confirmation.

## Repository and source

- `rdt-tidy` source code and test suite: [https://github.com/ArdaYILDIZ-DEV/rdt-tidy](https://github.com/ArdaYILDIZ-DEV/rdt-tidy)
- Skill specification: [SKILL.md](./SKILL.md)
