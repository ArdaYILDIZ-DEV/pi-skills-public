# TypeScript: TSDoc, TypeDoc, modern static-typing style

Read `SKILL.md` first; this file only carries what is TypeScript-specific.

## Baseline standard

- **TSDoc standard** (`tsdoc.org`) and **TypeDoc** (`typedoc.org`) conventions are the
  canonical documentation format for TypeScript.
- **Doc comments** use `/** ... */` and appear *immediately before* the target declaration
  (function, class, interface, type alias, enum, method, property) **with no intervening
  blank line**. A blank line turns a doc comment into an ordinary comment that TypeDoc and
  the TypeScript language server ignore.
- **TypeScript signatures carry types. Never document types in prose or doc tags.**
  Never write `@param {string} id` or `@returns {Promise<void>}`. Write
  `@param id - The unique identifier.` or omit the tag if the parameter name and type
  are self-explanatory.
- **Never use tags redundant with TypeScript language keywords:**
  Delete `@type`, `@typedef`, `@interface`, `@class`, `@implements`, `@enum`, `@readonly`,
  `@private`, `@public`, `@protected`, `@abstract`. The TypeScript compiler already enforces
  these; duplicating them in tags guarantees drift.
- **Core TSDoc tags:** `@param`, `@returns`, `@throws`, `@typeParam`, `@remarks`, `@example`,
  `@deprecated`, `@defaultValue`, `@see`.
- **Directives:** `// @ts-expect-error <reason>` is preferred over `// @ts-ignore`.
  Every suppression requires an explicit explanation.
- Arbiters: `eslint` (`eslint-plugin-tsdoc`, `eslint-plugin-jsdoc`), TypeDoc, `prettier`.
  Configured linter rules override stylistic defaults below.

## Pre-flight (never skip)

1. **Detect the house style:**
   - Check `tsconfig.json` (`strict`, `exactOptionalPropertyTypes`, `noUncheckedIndexedAccess`).
   - Check ESLint config (`.eslintrc*`, `eslint.config.*`) for `tsdoc/syntax` or `jsdoc/*`.
   - Check tag hyphen convention: `@param name - description` vs `@param name description`.
     Match the existing style in the file.
2. **Read before judging:** check caller expectations, type inference, and union narrowing.
3. **Never document** generated or compiled code: `dist/`, `build/`, emitted `*.d.ts`,
   `generated/`, GraphQL codegen, Prisma clients.

## Priority-1 signals (lies)

| Defect | Signal |
|---|---|
| Contradicts the code | doc says "returns Promise<User>" but function is synchronous (or vice-versa) |
| Signature drift | `@param` or `@typeParam` names a parameter/generic that was renamed or removed |
| Phantom throws | `@throws` documents an error type or condition that the function never raises or rejects |
| Stale guarantee | doc claims "immutable" or "deep cloned", but implementation mutates or aliases arguments |
| Missing deprecation | symbol replaced by a newer API: **ADD** `@deprecated Use {@link Replacement} instead.` |
| Dead doc link | `{@link NonExistentSymbol}` that fails to resolve in TypeDoc / IDE |

## Priority-3 shapes (move / compress)

| Defect | Action |
|---|---|
| Type in doc tag: `@param {string} id` | **FIX**: strip the type braces: `@param id` |
| Redundant tag: `@interface`, `@readonly` | **DELETE**: TypeScript syntax carries this |
| Blank line between `/** ... */` and declaration | **FIX**: remove the blank line |
| Contract buried in inline comments | **MOVE** into the `/** ... */` doc comment |
| Implementation walkthrough inside doc comment | **MOVE** beside the code as `//` |
| Bare `@ts-ignore` without explanation | **UPGRADE** to `// @ts-expect-error <reason>` |

## Triggers: write a comment here

| Trigger | Example that passes the wrong-edit test |
|---|---|
| Async lifetime & abort | `// AbortSignal listener is cleaned up in finally; no listener leaks on early exit.` |
| In-place mutation | `/** Mutates items in-place and returns the same array reference. */` |
| `undefined` vs `null` vs omitted | `/** Setting timeout to undefined uses 30s default; 0 disables timeout. */` |
| Re-render / memoization invariant | `// Memoized: recomputes only on theme change to prevent re-rendering row items.` |
| Side effect / external state | `/** Persists token to localStorage and triggers auth-state subscribers. */` |
| Type assertion rationale | `// Safe cast: schema.parse() above guarantees exact shape at runtime.` |
| Non-obvious throws / rejection | `@throws {QuotaExceededError} If storage is full or quota is exhausted.` |
| Upstream / environment workaround | `// Safari < 16.4 does not support AbortSignal.any(); fallback to manual race (#412).` |
| Generic constraint rationale | `@typeParam T - Must be JSON-serializable; functions and symbols throw at runtime.` |
| Optional parameter defaults | `@defaultValue 5000` |

## Never write these (TypeScript forms)

```typescript
// NO: Redundant type in JSDoc tag
/**
 * @param {string} id - The user ID.
 * @returns {Promise<User>} The user object.
 */
export async function getUser(id: string): Promise<User> {}

// YES: Types in signature, semantics in doc
/**
 * Fetches a user by ID.
 *
 * @param id - The unique user ID from auth provider.
 * @throws {NotFoundError} When user does not exist.
 */
export async function getUser(id: string): Promise<User> {}

// NO: Tautological doc block
/**
 * UserCard component.
 */
export function UserCard(props: UserCardProps) {}

// NO: Redundant declaration tags
/**
 * @interface User
 * @readonly
 */
export interface User {
  readonly id: string;
}
```

## Comment craft (TypeScript specifics)

- `/** ... */` for exported declarations, interfaces, types, and properties.
- `//` for inline implementation notes and rationale.
- Use `{@link Target}` for cross-referencing types, functions, or methods in TSDoc.
- Use `@remarks` when adding extended architectural rationale or caveats beyond the one-line summary.
- Prefer `@typeParam T` over `@param T` for type parameters.

## Directives and pragmas

```typescript
// @ts-expect-error Upstream library types omit exactOptionalPropertyTypes support (issue #842).
client.configure({ timeout: undefined });
```

```typescript
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- dynamic payload decoded by schema at runtime
const rawPayload: any = JSON.parse(raw);
```

- Prefer `@ts-expect-error` over `@ts-ignore`: if an error goes away after a dependency upgrade, the compiler warns you.
- Every suppression MUST state the reason why the compiler or linter is silenced.

## Calibration example

```typescript
// BEFORE (6 defects: redundant types, tautology, dead comments, bare suppression)
/**
 * ProcessItems function.
 * @param {Item[]} items - The items array.
 * @param {Options} [opts] - The options.
 * @returns {Promise<Result[]>} Results.
 */
export async function processItems(items: Item[], opts?: Options): Promise<Result[]> {
  // @ts-ignore
  const client = getClient();

  // loop through items
  const results: Result[] = [];
  for (const item of items) {
    // const cached = cache.get(item.id);
    const res = await client.send(item, opts);
    results.push(res);
  }
  return results;
}
```

```typescript
// AFTER
/**
 * Processes items sequentially through the remote client.
 *
 * @param items - Items to dispatch; items are processed in received order.
 * @param opts - Dispatch options. When omitted, default retry policies apply.
 * @throws {ClientError} If the client connection drops and retries are exhausted.
 */
export async function processItems(items: Item[], opts?: Options): Promise<Result[]> {
  // @ts-expect-error getClient returns internal singleton missing public interface definition (PROJ-891).
  const client = getClient();

  const results: Result[] = [];
  for (const item of items) {
    const res = await client.send(item, opts);
    results.push(res);
  }
  return results;
}
```

**Rewritten:** stripped redundant types from tags, removed tautology, added real failure contract.
**Deleted:** control-flow narration, commented-out dead cache code.
**Upgraded:** bare `@ts-ignore` to `@ts-expect-error` with ticket and rationale.

## Language self-check

- [ ] Every doc comment uses `/** ... */` and is **directly adjacent** to declaration (no blank line)?
- [ ] No types duplicated in `@param` or `@returns` tags?
- [ ] Redundant `@type`, `@interface`, `@class`, `@readonly` tags eliminated?
- [ ] Concurrency, Promise/async, and `@throws` claims match actual implementation?
- [ ] `@ts-expect-error` and `eslint-disable` carry rule name and rationale?
