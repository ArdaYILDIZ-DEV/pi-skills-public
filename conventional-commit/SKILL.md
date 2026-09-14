---
name: conventional-commit
description: "Draft, review, split, and safely execute Conventional Commits 1.0.0 messages with correct types, scopes, imperative English subjects, and no AI-attribution trailers. Use to prepare a commit message, inspect git status/diff, split a changeset, or commit changes; includes 'commit mesajı yaz' and 'değişiklikleri commitle'. Not for pushing, amending published history, or committing unreviewed user changes."
---

# Conventional Commits - Strict Mode

One standard: [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) + Angular types (`@commitlint/config-conventional`). History that reads like a changelog, bisects cleanly, and drives automated versioning.

Never auto-commit. Inspect both staged and unstaged diffs; do not stage or commit files whose origin or intent is unclear. Show each commit's changed files, full message, and exact command, then wait for its distinct explicit approval. Never `git push` without a separate approval that names the remote and branch.

## No AI Attribution - Ever

Do not add `Co-Authored-By`, `Generated with Claude`, robot emoji, or any AI trailer - in subject, body, or footer. No exceptions.

Commit is a technical record of what changed and why, not a credits reel. Trailer adds nothing a linter or changelog can use and breaks `Signed-off-by` / DCO.

```
# Wrong
fix(auth): handle expired refresh tokens

Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>

# Right
fix(auth): handle expired refresh tokens
```

## When to Use / Not

Use for staged/unstaged changes, reviewing/correcting messages, splitting mixed changesets, or any `git commit` here. Don't use when there are no changes, or user explicitly wants a free-form throwaway message (say so before deviating).

## The Standard

```
<type>[(scope)][!]: <description>

[optional body]

[optional footer(s)]
```

**Language - English always.** Description, body, footers in English even if conversation is not. Tooling (commitlint, changelog, GitHub) assumes English. `fix: giriş formundaki hatayı düzelt` reads as broken.

**Type - required, lowercase, fixed vocabulary:**

| Type | Use | SemVer |
|---|---|---|
| `feat` | New feature | MINOR |
| `fix` | Bug fix | PATCH |
| `perf` | Performance improvement | PATCH |
| `refactor` | Neither fix nor feat | - |
| `build` | Build/packaging/deps | - |
| `ci` | CI config | - |
| `docs` | Docs only | - |
| `style` | Formatting only | - |
| `test` | Tests | - |
| `chore` | Maintenance | - |
| `revert` | Reverts commit - footer refs SHA | matches undone |

`!` or `BREAKING CHANGE:` makes any type MAJOR.

**Scope - optional, lowercase noun(s).** Use when change is confined; skip when cross-cutting. Comma-separated, no spaces: `fix(parser): handle multiple spaces` / `feat(ui,lang): add SVG export`. Document allowed scopes in `CONTRIBUTING.md` or `scope-enum`.

**Breaking changes - `!`:** `feat(api)!: remove deprecated /v1 endpoints`. Description must say what breaks. Add `BREAKING CHANGE:` footer for migration details.

**Description - required:** Imperative (`add` not `added`), lowercase after colon, no period, ≤72 chars for full header (commitlint allows 100, but 72 avoids wrapping in `git log --oneline`). States what commit does, not diff mechanics. If description needs "and", split the commit.

**Body - optional, expected for non-trivial:** Blank line after header, wrapped ~100 chars, explains why (tradeoff, root cause). Skip only if self-explanatory.

**Footer(s) - `TOKEN: value`, one per line, blank line before them:**

```
BREAKING CHANGE: <what breaks and how to migrate>
Refs: #123
Closes: #123
```

`Refs` links without auto-close; `Closes`/`Fixes` auto-closes on merge. Revert footer: `Refs: 676104e`.

## Splitting Changesets

Split when diff mixes concerns (fix + refactor, feature + dep bump). Each commit independently revertable, one sentence.

1. Run `git status --short`, `git diff`, and `git diff --cached`; identify generated files, unrelated edits, deletions, and pre-staged changes.
2. Group hunks by one independently revertible logical change; stage one group (`git add -p` or explicit paths only). Do not use `git add -A` unless the user explicitly asks to checkpoint every listed change.
3. Write one message per group.
4. Present each commit's files, complete message, and exact command. Obtain a distinct approval immediately before that commit; do not treat approval for one commit as approval for later commits.

## Approval & Amend

1. Inspect, split if needed, draft each message.
2. Present per commit: files, exact message, exact command. Wait for approval → `git commit`.
3. After commits complete, inspect the configured remote, branch, and ahead/behind state. Present the exact `git push <remote> <branch>` command and wait for separate approval.
4. `git commit --amend` only before pushing. After push, don't rewrite - add new commit or `revert`.

## Common Mistakes

| Bad | Why | Fix |
|---|---|---|
| `fix: stuff` | Not searchable | `fix(parser): handle trailing comma in array literal` |
| `fix: patch login form` (new field) | `fix` is for bugs | `feat(login): add remember-me checkbox` |
| `feat: added new login button.` | Wrong tense + period | `feat(ui): add login button` |
| `fix: patch xss` on public API, no `!` | Breaking unflagged | Add `!` + `BREAKING CHANGE:` |
| `Co-Authored-By: Claude` | AI trailer | Drop it |
| `fix: giriş formundaki hatayı düzelt` | Non-English breaks tooling | `fix(login): correct validation error message` |

## Validation Checklist

- [ ] Type in fixed vocabulary, lowercase
- [ ] Scope lowercase noun(s), consistent with project
- [ ] `!` iff breaking, description says what breaks
- [ ] Description imperative, ≤72 chars, no period, no "and"
- [ ] Entire message in English
- [ ] Body explains why for non-trivial
- [ ] Footers `TOKEN: value`, blank line before
- [ ] No AI trailer anywhere; one logical change per commit; files/message/command shown and approvals obtained

## Canonical Examples

```text
feat(lang): add Polish language pack

fix(parser): handle multiple spaces in string literal

Whitespace runs inside quoted strings were collapsed by the
tokenizer, corrupting intentional multi-space literals.

Refs: #341

feat(api)!: remove deprecated /v1 endpoints

BREAKING CHANGE: /v1/* routes removed. Migrate to /v2; see MIGRATION.md.

docs: correct spelling of CHANGELOG
```

## References

- https://www.conventionalcommits.org/en/v1.0.0/
- https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional
- https://semver.org/
