# Go: godoc doc comments, gofmt 1.19+ style

Read `SKILL.md` first; this file only carries what is Go-specific.

## Baseline standard

- **Doc comments** appear *immediately before* a top-level `package`, `const`, `func`,
  `type`, or `var` declaration **with no intervening blank line**. A blank line silently
  demotes a doc comment to an ordinary one: invisible to `go doc`, pkg.go.dev and gopls.
- **Every exported (capitalised) name should have a doc comment**, as should non-trivial
  unexported types and functions.
- Doc comments are full sentences that **begin with the name being described and end with
  a period**: `// Request represents a request to run a command.`
- **Go 1.19+ syntax**: paragraphs, headings, lists, links, doc links, code blocks. **gofmt
  reformats doc comments**: write the intent, let gofmt lay it out, verify with
  `gofmt`/`go doc` rather than hand-aligning.
- **Directives** (`//go:generate`, `//go:build`, `//go:embed`, `//tool:sub`) are not part of
  the doc comment; gofmt moves them to the end, preceded by a blank line.
- Linters: `go vet`, `staticcheck` (ST1000 package comment; ST1020/ST1021/ST1022 exported
  docs), `revive`, `golangci-lint`. Configured linters win over the rules below.
- No `@param` tags: parameters, returns and errors are documented in prose.

## Pre-flight (never skip)

1. **Read neighbouring files** for doc-comment density, `Deprecated:` conventions, whether
   the project uses `doc.go`, and the comment language.
2. **Check the linter config** (`.golangci.yml`, `staticcheck.conf`).
3. **Read before judging**, including call sites.
4. **Never document** generated files (`*_string.go`, `*.pb.go`, `zz_generated.*`, mocks).

## Priority-1 signals (lies)

| Defect | Signal |
|---|---|
| Contradicts the code | says "never returns an error" but the body returns one |
| Signature drift | doc names a parameter, return value, or error the function no longer has |
| Stale guarantee | "safe for concurrent use" but the struct now has an unsynchronised field. This one causes real bugs. |
| Missing deprecation | behaviour moved to a new API but no `Deprecated:` paragraph: **ADD** `// Deprecated: use X instead.` |
| Dead doc link | `[Foo]` where `Foo` was deleted or renamed (renders as plain text) |

## Priority-3 shapes (move / compress)

| Defect | Action |
|---|---|
| Doc comment separated from the declaration by a **blank line** | **FIX**: remove the blank line |
| Package comment duplicated across files (they get concatenated) | **CONSOLIDATE** into `doc.go` |
| Doc comment doesn't begin with the declared name | **FIX**: rewrite the sentence, don't bolt the name on |
| Contract buried in an inline comment above an exported func | **MOVE** into the doc comment |
| Implementation walkthrough inside a doc comment | **MOVE** beside the code |
| Directive in the middle of prose | **MOVE** to the end (gofmt does this; don't fight it) |

## Triggers: write a comment here

| Trigger | Example that passes the wrong-edit test |
|---|---|
| Goroutine safety | `// Safe for concurrent use by multiple goroutines.` (only if *stronger* than the default) |
| Goroutine lifetime | `// Spawns a worker that exits when ctx is cancelled; none leak after Close.` |
| Blocking / cancellation | `// Blocks until the context is cancelled or the buffer drains.` |
| Ownership & closing | `// The caller must Close the returned ReadCloser, even on error.` |
| Aliasing | `// The returned slice aliases buf; do not modify buf while using it.` |
| Error semantics | `// Returns ErrNotFound when the key is absent; other errors indicate transport failure.` |
| Nil-input behaviour | `// A nil opts is valid and selects the defaults.` |
| Zero value | `// The zero value is ready to use.` (only when it isn't obvious) |
| Interface contract | `// Implementations must be safe for concurrent use and must not retain p after returning.` |
| Ordering guarantee | `// Results are returned in input order, not completion order.` |
| Retry / idempotency | `// Idempotent: safe to retry; the server deduplicates by request ID.` |
| Upstream workaround | `// Retry on 5xx only: the API returns 400 for a duplicate ID (vendor ticket #882).` |
| Perf-relevant allocation | `// Allocates once per call; hot-path callers should reuse a Builder.` |
| Deprecation | Separate paragraph: `// Deprecated: use [NewerThing] instead.` |
| Non-obvious field | `// Timeout is per attempt, not for the whole retry loop.` |

## Never write these (Go forms)

```go
// NO: Doesn't begin with the declared name
// This function processes the items.
func Process(items []Item) {}

// NO: Filler that restates the signature
// GetUser gets a user.
func GetUser(id string) (*User, error) {}

// YES: one real fact
// GetUser returns the user with the given id, or ErrNotFound if there is none.
func GetUser(id string) (*User, error) {}

// NO: Tautological test comment
// TestProcess tests Process.
func TestProcess(t *testing.T) {}
```

Test functions do **not** need doc comments; comment only a non-obvious scenario
(`// Covers the case where the context is cancelled mid-batch.`).

Upgrade table:

| You find | Do this |
|---|---|
| `// This function checks the cache.` | **Rewrite**: `// checkCache returns the cached value for key, if fresh.` |
| `// returns nil on error` (and it doesn't) | **FIX** to reality, or flag if the code looks wrong instead. |
| `// This is a hack` | **Rewrite**: `// HACK(ada): linear scan until the index lands; see PROJ-1425.` |

## Comment craft (Go specifics)

- `//` for everything. `/* */` only for long package-level command docs or temporarily
  disabling blocks.
- First word = the declared name (`// Package path ...`, `// A Buffer is ...` for types,
  `// Gofmt formats ...` for commands).
- **Let gofmt format.** Lists: `//   - item`. Code blocks: indented with one tab. Links:
  `[Name]`, `[pkg.Sym]`, or `[text]: https://...` definitions at the end. Headings
  (`// # Heading`) only in package docs, rarely.
- gofmt doesn't wrap comments; keep near 80 columns.
- Don't stutter against the package name: in package `user`, document `NewUser`, not
  `user.NewUser`.

## Doc comments by declaration

| Declaration | Requirement |
|---|---|
| **Package** | One comment, one file (usually `doc.go`), opening `// Package foo ...`. For `package main`, open with the program name and describe behaviour/usage. |
| **Exported func** | Required. Name-led sentence + the caller's contract: errors, blocking, concurrency, ownership, cancellation. |
| **Exported type** | What an instance *represents*; concurrency guarantees only if stronger than default; zero-value meaning; invariants. |
| **Exported struct fields** | Document each, in the type's doc or per-field. |
| **Interface** | What implementers must guarantee. |
| **Exported const / var** | Required. Errors: `// ErrClosed is returned by [Client.Do] after [Client.Close].` |
| **Grouped const/var** | One comment above the group; per-item only where meaning differs. |
| **Method** | Same as functions. Don't repeat the type's doc. |
| **Unexported** | Only when non-obvious. |
| **Test / Example** | No doc comment. Comment the scenario, not the name. |
| **Deprecated** | Separate paragraph `// Deprecated: ...` naming the replacement. |

## Directives and pragmas

```go
// An Op is a single regular expression operator.
//
//go:generate stringer -type Op -trimprefix Op
type Op uint8
```
```go
//go:build linux && !race

package worker
```
```go
result, _ := strconv.Atoi(s) //nolint:errcheck // s is validated by the caller's regexp.
```

- Directives match `//tool:sub`, lowercase tool name; nothing else on that line.
- `#nosec` / `//nolint` must name the rule and the reason, at the narrowest scope.

## Calibration example

```go
// BEFORE (5 defects, 5 gaps)
// This function processes the items.
//
// It takes a list of items and processes them.
func Process(items []Item, opts *Options) ([]Result, error) {
	// TODO: fix this
	var out []Result
	for _, it := range items {
		// process the item
		r, err := doWork(it, opts)
		if err != nil {
			return nil, err
		}
		out = append(out, r)
	}
	// mu.Lock()
	// defer mu.Unlock()
	return out, nil
}
```

```go
// AFTER
// Process applies opts to each item and returns the results in input order.
//
// Process does not modify items. If any item fails, Process returns a nil
// slice and the first error; results computed before the failure are
// discarded. A nil opts is valid and selects the defaults.
func Process(items []Item, opts *Options) ([]Result, error) {
	var out []Result
	for _, it := range items {
		r, err := doWork(it, opts)
		if err != nil {
			return nil, err
		}
		out = append(out, r)
	}
	return out, nil
}
```

**Rewritten:** name-led doc stating the real contract. **Deleted:** ownerless TODO,
restatement, commented-out mutex. **Flagged:** the commented-out `mu.Lock()`: if `Process`
is meant to run concurrently, removing it hides a data race.

## Language self-check

- [ ] Every doc comment **directly adjacent** to its declaration?
- [ ] Every exported name documented, name-led, ending in a period?
- [ ] Concurrency, nil and error claims match the code?
- [ ] Lists, code blocks and directives in gofmt's canonical form?
- [ ] `Deprecated:` present where behaviour moved; doc links resolve?
