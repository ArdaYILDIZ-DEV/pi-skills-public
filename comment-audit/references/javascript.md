# JavaScript: JSDoc 3, ts-check, ESM/CJS style

Read `SKILL.md` first; this file only carries what is JavaScript-specific.

## Baseline standard

JavaScript has no compiler enforcing signatures by default, so JSDoc serves two distinct roles:

- **Mode 1: Typed JavaScript (`// @ts-check` or `checkJs: true` in `jsconfig.json`).**
  In typed JavaScript, **JSDoc IS the type system**. Types in tags are essential:
  `/** @param {string} id */`, `/** @returns {Promise<void>} */`, `/** @type {import('foo').Bar} */`.
  Every exported function, type definition (`@typedef`), and complex object needs explicit shapes.
- **Mode 2: Plain Untyped JavaScript.**
  JSDoc provides human documentation and IDE hover hints. Do not invent heavy, fragile type signatures
  in comments if the codebase does not run `@ts-check`. Focus on non-obvious contracts, preconditions,
  and failure modes.
- **Doc comments** use `/** ... */` and must be placed *immediately* above declarations with
  **no intervening blank line**. Single-line `//` is for implementation notes.
- **CommonJS vs ESM:** Match the module system of the project (`require`/`module.exports` vs
  `import`/`export`). For CommonJS, attach doc comments directly to `module.exports` or
  `exports.name` declarations.
- Linters: ESLint (`eslint-plugin-jsdoc`), Prettier. Configured linter rules override defaults below.

## Pre-flight (never skip)

1. **Detect typing mode:**
   - Look for `// @ts-check` at the very top of the file (or right under shebang).
   - Check `jsconfig.json` or `tsconfig.json` for `"checkJs": true`.
   - If enabled, verify that all JSDoc types conform to TypeScript JSDoc reference.
2. **Detect module syntax:** ESM (`import`/`export`, `.mjs`) vs CJS (`require`/`module.exports`, `.cjs`).
3. **Detect house tag conventions:** `@returns` vs `@return`, `@param {Type} name - desc` vs
   `@param {Type} name desc`. Match the file's prevailing style.
4. **Never document** minified, bundled, or vendored scripts (`*.min.js`, `dist/`, `node_modules/`).

## Priority-1 signals (lies)

| Defect | Signal |
|---|---|
| Contradicts the code | doc says returns Object but returns boolean, or says sync but returns Promise |
| Invalid JSDoc type in `@ts-check` | `@param {sting} name` (typo), wrong import path in `@type {import('...').Type}` |
| Signature drift | `@param` names arguments that do not match the function parameter list |
| Phantom exceptions | `@throws` describes an error type or condition never thrown in the code path |
| Stale export documentation | doc on `module.exports` does not match the actual exported keys |

## Priority-3 shapes (move / compress)

| Defect | Action |
|---|---|
| Blank line between `/** ... */` and declaration | **FIX**: remove the blank line |
| Mixed tag variants (`@return` vs `@returns`) | **NORMALIZE** to `@returns` |
| Contract info placed in inline `//` above exported function | **MOVE** into the `/** ... */` JSDoc block |
| Implementation walkthrough inside JSDoc block | **MOVE** beside code as inline `//` comments |
| Heavy `@param {Object} opts` with no field docs in `@ts-check` | **EXPAND**: document fields with `@param {string} opts.name` |

## Triggers: write a comment here

| Trigger | Example that passes the wrong-edit test |
|---|---|
| Runtime duck-typing expectation | `/** @param {{ id: string, emit: Function }} emitter - Expects EventEmitter duck-type. */` |
| Input mutation / parameter modification | `/** Mutates req.session in-place; do not pass frozen objects. */` |
| Environment-specific API guard | `// Guard: window is undefined in SSR/Node.js environment.` |
| Implicit coercion traps | `// Use ===: null and undefined must be treated differently here.` |
| Event listener cleanup | `// Caller must call emitter.off('data', handler) to avoid socket memory leaks.` |
| Asynchronous error contract | `/** Emits 'error' event on failure; does not reject caller Promise. */` |
| Polyfill / monkey-patching rationale | `// Monkey-patch Promise.withResolvers for Node < 22.` |
| Magic constant's meaning | `// 86400000 = 24 * 60 * 60 * 1000 (1 day in ms).` |

## Never write these (JavaScript forms)

```javascript
// NO: Tautological comments
// This function parses config
function parseConfig(raw) {}

// NO: Explaining trivial JavaScript language features
// loop through array
for (let i = 0; i < arr.length; i++) {}

// NO: Redundant @type when value is obvious literal in plain JS
/** @type {number} */
const count = 0;

// NO: Bare suppression
// @ts-ignore
runLegacyModule();
```

## Comment craft (JavaScript specifics)

- **Optional parameters:** Use bracket notation: `@param {number} [timeout=5000] - Timeout in milliseconds.`
- **Rest parameters:** Use ellipsis notation: `@param {...string} tokens - Variable token list.`
- **Type definitions:** In typed JS, define reusable object shapes via `@typedef`:
  ```javascript
  /**
   * @typedef {Object} ClientOptions
   * @property {string} baseUrl - Target API root URL.
   * @property {number} [timeout=5000] - Request timeout in milliseconds.
   */
  ```
- **Type imports:** Use dynamic import syntax in typed JS:
  ```javascript
  /** @type {import('http').IncomingMessage} */
  ```

## Directives and pragmas

```javascript
// @ts-check

/**
 * Top of file pragma: enables TypeScript compiler typechecking for this JavaScript file.
 * Must appear on line 1 or immediately following a shebang line.
 */
```

```javascript
// eslint-disable-next-line no-eval -- safe: code string is generated internally and validated against whitelist
eval(code);
```

- Every `eslint-disable` directive must specify the exact rule and include `-- <reason>`.
- In files with `// @ts-check`, prefer `// @ts-expect-error <reason>` over `// @ts-ignore`.

## Calibration example

```javascript
// BEFORE (5 defects: misleading type, dead code, tautology, missing throw contract)
/**
 * calculates total
 * @param {Array} items
 * @param {number} tax
 * @returns {number}
 */
function calculateTotal(items, tax) {
  // check tax
  if (tax < 0) {
    throw new RangeError("Invalid tax");
  }

  let total = 0;
  // for loop
  for (let i = 0; i < items.length; i++) {
    // total += items[i].price;
    total += items[i].price * (1 + tax);
  }
  return total;
}
```

```javascript
// AFTER
/**
 * Calculates net price with tax applied for a list of line items.
 *
 * @param {Array<{ price: number }>} items - Cart line items with positive numeric price.
 * @param {number} tax - Fractional tax rate (e.g. 0.18 for 18%).
 * @returns {number} Gross total price.
 * @throws {RangeError} If tax rate is negative.
 */
function calculateTotal(items, tax) {
  if (tax < 0) {
    throw new RangeError("Invalid tax");
  }

  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price * (1 + tax);
  }
  return total;
}
```

**Rewritten:** JSDoc describes item shape requirements, specifies tax fraction contract, documents `RangeError`.
**Deleted:** tautological summary, loop narration, commented-out dead assignment.

## Language self-check

- [ ] Every doc comment uses `/** ... */` directly above declaration (no blank line)?
- [ ] If `// @ts-check` is present, are all `@param`, `@returns`, and `@typedef` types valid?
- [ ] Are optional parameters documented using `[param=default]` syntax?
- [ ] Do `@throws` tags describe actual runtime exceptions thrown?
- [ ] Every linter suppression (`eslint-disable`) specifies rule and explicit rationale?
