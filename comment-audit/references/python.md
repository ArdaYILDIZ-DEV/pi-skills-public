# Python: Google-style docstrings, PEP 257, ruff-aligned

Read `SKILL.md` first; this file only carries what is Python-specific.

## Baseline standard

- **Google-style docstrings**: the de-facto default for general-purpose Python and what
  `ruff` enforces via `[tool.ruff.lint.pydocstyle] convention = "google"`. NumPy style only
  in scientific/data code; Sphinx `:param:` only in projects already using it.
- **PEP 257** for docstring mechanics, **PEP 8** for comment mechanics.
- **Ruff** is the mechanical arbiter. If the project enables the preview `DOC` (pydoclint)
  rules, the docstring must match the signature exactly: no phantom params, no undocumented
  returns/exceptions.
- **Type hints carry types.** Never document a type in prose that an annotation states.
- **Do not use `typing.Doc` / `Annotated[..., Doc(...)]`**: PEP 727 was withdrawn. It is not
  a standard. Docstrings remain the mechanism.
- Python 3.13+ strips leading indentation from docstrings at compile time; no
  `textwrap.dedent` tricks or backslash hacks needed.

## Pre-flight (never skip)

1. **Detect the house style:** docstring dialect (Google / NumPy / Sphinx / none); comment
   language; **mood**: descriptive (`"""Fetches rows."""`) or imperative
   (`"""Fetch rows."""`). The Google guide permits either but requires consistency within a
   file. Match the file.
2. **Read the lint config** (`pyproject.toml`, `ruff.toml`, `setup.cfg`):
   - `convention = "google"` enables **D417** (every parameter must be documented). If active,
     document every parameter, but make each line carry a constraint (unit, range, default
     rationale, ownership), never `user: The user.`
   - Respect `per-file-ignores` for `tests/**` or `*.pyi`; don't demand docstrings there.
   - Lint config overrides every stylistic rule below.
3. **Read before judging**, including call sites where needed.
4. **Never document** generated/vendored code: `*_pb2.py`, migrations, `*/generated/*`, `.venv/`.

## Priority-1 signals (lies)

| Defect | Signal |
|---|---|
| Contradicts the code | says "returns None" but returns a list; describes a branch that no longer exists |
| Signature drift | `Args:` names a param that was renamed/removed, or omits a new one |
| Phantom contract | `Returns:`/`Yields:` documented but the function returns `None`; `Raises:` lists an exception never raised |
| Dead example | `Example:`/doctest no longer passes: fix it or delete it |

## Priority-3 shapes (move / compress)

| Defect | Action |
|---|---|
| Contract info (raises, mutates, preconditions) in an inline comment above a public function | **MOVE** into the docstring's `Raises:`/`Note:` |
| Implementation walkthrough inside a docstring | **MOVE** to a one-line comment beside the code |
| Mixed dialects in one file (`Args:` here, `:param x:` there) | **NORMALIZE** to the majority dialect |

## Triggers: write a comment here

| Trigger | Example that passes the wrong-edit test |
|---|---|
| Business / domain rule | `# SEPA requires rounding to 2 decimals *before* signing, not after.` |
| Workaround for a bug or quirk | `# boto3 raises ClientError (not NoSuchKey) on HEAD - boto/boto3#2442.` |
| Deliberate trade-off | `# O(n²) is fine here: n < 50 and the heapq version needs a new dep.` |
| Perf-critical code someone may "clean up" | `# Keep the generator - list() costs ~400 MB on prod data.` |
| Invariant / precondition | `# Caller must hold db_lock; not re-entrant.` |
| Units, encoding, timezone, format | `# timeout is MILLISECONDS here, seconds everywhere else. Yes, really.` |
| Magic constant's origin | `# 4096 = max UDP payload we accept before fragmentation.` |
| Invisible side effect | `# Mutates session.headers in place - affects later requests.` |
| Deliberate exception swallow | `# Retry is pointless: the token is already invalid. Fail fast.` |
| Concurrency / ordering | `# Safe to retry: the DELETE is idempotent by design.` |
| Security assumption | `# Safe to format into SQL: values are validated against the enum above.` |
| Compatibility constraint | `# No walrus/match: this module still supports Python 3.8.` |
| Non-obvious public contract | Docstring, not a comment |

## Never write these (Python forms)

```python
# NO: restatement
# Loop over the users              ->  for user in users:
# Check if the user is active      ->  if user.is_active:

# NO: Type info that belongs in annotations
# user (User): the user object     ->  user: User

# NO: Control-flow narration
# If not found, raise an error
# End of while loop

# NO: Trivial docstrings
def name(self): """Get the name."""
def __init__(self, a, b): """Initialize."""
```

Upgrade table:

| You find | Do this |
|---|---|
| `# Loop over users` | **Delete.** |
| `# Sort the list` | **Delete**, unless order matters: `# Stable sort: billing requires insertion order on ties.` |
| `# Set timeout to 30` | **Delete**, unless the timing matters: `# 30 s: upstream SLA is 25 s; longer lets retries pile up.` |
| `# TODO: fix this` | **Delete** or complete: `# FIXME(ada): off-by-one when empty. PROJ-1424.` |
| `# This is a hack` | **Rewrite** as why: `# HACK(ada): hardcoded until config svc ships. PROJ-1425.` |

## Comment craft (Python specifics)

- `#` + one space, never `#comment`. Inline comments at least two spaces after the code.
- Width ~72-79 columns, matching the code.

## Docstrings

**Write one when** the symbol is public (imported/used elsewhere, part of the API surface)
**or** its contract is non-obvious. **Skip it** when the name plus type hints say everything,
or the symbol is private and trivial.

### Mechanics

- Summary line starts on the line after `"""`, max ~72 cols, ends with a period. Mood
  consistent within the file.
- Multi-line: summary, blank line, body, sections, closing `"""` on its own line with no
  blank line before it.
- `"""` never `'''`. Types live in annotations. Never document `self`/`cls`. Never write
  "Class that describes..."; say what it *is*.
- **Emit a section only if it adds information**, except when D417 is active; then every
  parameter appears, each with a constraint instead of a noun phrase.

Order: `Args:`, `Attributes:`, `Returns:` (or `Yields:`), `Raises:`, `Note:`, `Example:`.
Hanging indent of 2 or 4 spaces, consistent within the file.

- `Args:`: constraints only: units, ranges, formats, defaults with a reason, ownership
  (copied vs stored), mutability. List `*args`/`**kwargs` under those exact names.
- `Returns:`: shape and edge results (empty list vs `None`, sentinels). Not required when
  the function returns `None` or the summary already says it. Describe a tuple as **one**
  value (`A tuple of (user, token), where ...`), never as separately named return values.
- `Yields:`: what `next()` returns, not the generator object.
- `Raises:`: concrete type + exact triggering condition + whether it is retriable. Do
  **not** document exceptions that fire only when the caller breaks the documented contract.
- `Example:`: only where usage is genuinely ambiguous; keep it doctest-runnable.
- `Note:`: thread-safety, deprecation, version constraints, performance.

### Weak vs strong

```python
# NO: restates the signature, empty sections, no contract
def transfer(src, dst, amount):
    """Transfer money.

    Args:
        src: source
        dst: destination
        amount: amount
    """

# YES: only the information the signature cannot carry
def transfer(src: Account, dst: Account, amount: Decimal) -> str:
    """Transfers `amount` between two accounts atomically.

    Amounts are quantized to 2 decimals with ROUND_HALF_EVEN per EU-SEPA rules, so the
    caller may receive a reference for a slightly different value than requested.

    Args:
        src: Account to debit; must be active and not locked by another transaction.
        dst: Account to credit; a different currency is converted at the day's ECB rate.
        amount: Positive amount, in the *source* account's currency.

    Returns:
        The transaction reference, stable across retries.

    Raises:
        InsufficientFunds: `src` balance is below `amount` after fees. Not retriable.
        AccountLocked: Another transaction holds `src`; retry after the lock TTL.

    Note:
        Not safe to call concurrently on the same `src`; the caller must serialize.
    """
```

### Symbol-specific defaults

| Symbol | Default |
|---|---|
| Class | What an *instance represents*. Public attributes (not properties) in `Attributes:`. |
| Overridden method | None needed when decorated `@override` and behaviour is unchanged. Required when it refines the base contract or adds side effects. |
| `__init__` | Follow the file. Never repeat the class docstring's params. Drop a bare `"""Initialize."""`. |
| `@property` | Attribute style: `"""The number of butter sticks."""`, not `"""Returns..."""`. |
| Exception class | What it **is**: `"""No more cheese is available."""`, not `"""Raised when..."""`. |
| Private / trivial helper | None unless non-obvious. |
| Dataclass / Pydantic field | Comment only for a non-obvious constraint; prefer `Field(description=...)`. |
| `async def` | Cancellation safety, whether safe to `gather`, timeout behaviour. |
| Context manager | State on exit, and behaviour when the body raises. |
| Generator | `Yields:` plus a laziness note if callers may assume a list. |
| Decorator | State that it *is* one, and what it does to the wrapped signature. |
| Type alias / Protocol / TypeVar | One-liner only when the constraint isn't in the name. |
| Module | Only if name and `__all__` don't convey purpose/CLI usage. Never `"""Utils."""`. |
| Test | One line naming the **scenario** (`Expired token is rejected before the signature check.`), not `Tests login.` |
| Constant | Unit or meaning (`MAX_RETRIES = 5  # incl. the first attempt`). |

## Pragmas

```python
value = cast(dict, payload)  # noqa: S301 - schema-validated two lines above.
result = lib.call()          # type: ignore[no-untyped-call] - upstream ships no stubs.
# TODO(ada): switch to the bulk endpoint once API v2 ships. PROJ-1423.
```

## Calibration example

```python
# BEFORE (5 defects, 4 gaps)
def fetch_invoices(client, since, page_size=500):
    """Fetch invoices.

    Args:
        client: the client
        since: date
        page_size: page size
        timeout: seconds before giving up        # drift: no such parameter
    """
    cursor = None
    collected = []
    while True:
        try:
            batch = client.list_invoices(updated_after=since, limit=page_size, cursor=cursor)
        except RateLimitError:
            time.sleep(60)   # TODO: make this configurable
            continue
        collected.extend(batch.items)
        cursor = batch.next_cursor
        if cursor is None:
            break
    collected.reverse()   # sort the results
    # old: return sorted(collected, key=lambda i: i.id)
    if len(collected) > MAX_INVOICES:
        raise RuntimeError("too many invoices")
    return collected
```

```python
# AFTER
def fetch_invoices(client, since, page_size=500):
    """Fetches every invoice updated at or after `since`, oldest first.

    Args:
        client: Authenticated billing client.
        since: Inclusive lower bound; must be timezone-aware UTC.
        page_size: Page size, max 500 - the API silently clamps larger values.

    Returns:
        All matching invoices ordered oldest-to-newest; empty list if none.

    Raises:
        RuntimeError: The result set exceeds `MAX_INVOICES`. Narrow `since`
            instead of retrying - a retry fails identically.
    """
    cursor = None
    collected = []
    while True:
        try:
            batch = client.list_invoices(updated_after=since, limit=page_size, cursor=cursor)
        except RateLimitError:
            # The upstream window resets on the minute; sleeping less just re-raises.
            time.sleep(60)
            continue
        collected.extend(batch.items)
        cursor = batch.next_cursor
        if cursor is None:
            break
    # Downstream reconciliation is order-sensitive and the API returns newest-first.
    collected.reverse()
    if len(collected) > MAX_INVOICES:
        raise RuntimeError("too many invoices")
    return collected
```

**Deleted:** phantom `timeout` arg; `# sort the results` (wrong *and* redundant); the
commented-out `sorted(...)`; ownerless TODO. **Rewritten:** `Args:`, the `sleep(60)` and
`reverse()` comments now say why. **Added:** the `page_size` clamp, `Returns:`/`Raises:`.
**Proposed, not applied:** type annotations.

## Language self-check

- [ ] Dialect, mood, comment language, ruff/pydocstyle config detected?
- [ ] `Args:` matches the signature; `Returns:`/`Raises:` are real?
- [ ] Public API documented; trivial private helpers untouched?
- [ ] `#` + one space; two spaces before inline `#`; ~72 cols?
