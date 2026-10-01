# Frontend performance without a redesign

Read for scoped performance work or changes to media, fonts, client JavaScript, or costly visual effects. Preserve the stack, art direction, functionality, and accessibility unless their replacement is approved. Next.js, React, Tailwind, shadcn/ui, Inter, Geist, and Lucide are neither performance failures nor guarantees by name.

## Establish evidence before a fix

1. Inspect actual routes, rendering/client boundaries, asset loading, dependencies, existing budgets, scripts, and available profiling tools. Identify the slow user path and whether the request is diagnosis-only or authorizes implementation. Ask for missing measurements or consequential decisions, not facts visible in the project.
2. Use existing local build/test/profiling commands only after checking their effects and prerequisites. Do not invent a package script, install Lighthouse/Playwright, launch a production load test, or upload reports. Live-site requests and external telemetry need their own authorization.
3. Capture a baseline for the relevant route/state and metric. Record tool/version, viewport, browser/device or emulation, network/CPU conditions, cache state, and whether the page reached its intended content rather than a preloader, login gate, or bot wall.
4. Separate metric definitions and populations. **LCP** concerns the largest qualifying content paint, **INP** interaction responsiveness, and **CLS** unexpected layout shifts. Page bytes, requests, main-thread work, and lab TBT help diagnose causes but are not interchangeable with field Core Web Vitals. Do not call a lab TBT improvement an INP pass.
5. When field/RUM/CrUX data is already available and authorized, state URL versus origin scope, device segment, reporting window, coverage, and aggregation (including applicable p75 assessment). A single lab load cannot establish field conformance. If using pass thresholds, check the applicable current metric definition and the project's acceptance target rather than copying a dated archive number.

## Locate the causal path

| Observed issue | Inspect first | Scoped options to evaluate |
|---|---|---|
| Late LCP content | Actual LCP element; server/HTML delay; request discovery; resource download; render delay | Make essential content discoverable, right-size assets, prioritize the real critical resource where supported, remove measured blockers |
| Delayed action feedback | Event handlers, long tasks, hydration, synchronous parsing/layout, third-party work | Reduce or split demonstrated work, keep state feedback prompt, defer non-essential work without blocking the task |
| Unexpected shifts | Images/video, font swap, async inserts, ads, loading/error labels | Reserve appropriate dimensions/space, use stable states and fitting fallback metrics, avoid inserting content above active work |
| Excess payload | Shipped/compressed bytes by type, unused code, duplicate dependencies, requests and third parties | Reuse primitives, trim demonstrably unused imports/features, load only what the path needs |
| Expensive effects | Actual paint/composite cost during scroll, resize, or interaction | Simplify the affected blur/shadow/animation or reduce its area; retain identity and readable static fallbacks |

A trace or bundle report supports a cause; correlation with a framework or an attractive screenshot does not. If the bottleneck is server infrastructure outside the approved frontend scope, report it rather than silently replacing the stack.

## Media and font decisions

- Use existing responsive-image facilities with accurate dimensions, `sizes`/source choices, crops, and reserved aspect ratios. Do not lazy-load the actual critical above-the-fold/LCP image by default; defer genuinely non-critical media. Preload/fetch-priority choices must target measured critical resources, not every hero asset.
- Inspect video posters, autoplay cost, and hidden carousel media. Keep important content available without waiting for animation or a large decorative download; preserve authorized image meaning and alt text.
- Reuse authorized local fonts and real weights. Inspect delivered families/subsets, fallback metrics, loading behavior, and layout shifts. Do not remove required script coverage to save bytes or assume a font declaration supplies glyphs.
- Font/image formats, loading primitives, and browser support depend on the installed stack and target browsers. Use their actual supported APIs; do not invent Next.js parameters or fetch remote assets without approval.

## JavaScript and dependency cost

- Start with semantic HTML, CSS, and existing accessible primitives. A static composition does not by itself require a new client component or animation library. Conversely, accessible complex widgets can justify an existing dependency; do not replace them with fragile custom code just to lower package count.
- In React/Next.js projects, inspect the current version, client/server boundary, and bundle evidence. Keep interactivity where needed; avoid unnecessarily broad client boundaries when a narrower one works within the architecture. Do not change rendering mode, routing, or cache semantics by guesswork.
- Prefer explicit, supported imports and on-demand loading for demonstrated non-critical costs. Check the emitted bundle: package size, npm downloads, and dependency count do not equal shipped bytes. Code splitting can add request and interaction latency; remeasure the path.
- Inventory third-party scripts/widgets separately from first-party code. Consent, analytics, security, and business integrations may be costly but cannot be removed or changed without approval. Moving them must preserve consent and task behavior.
- Preserve focus, keyboard interactions, user input, locale behavior, and recovery while optimizing. Do not hide overflow, remove controls, fake success, or defer essential content to manufacture a better score.

## Verify and stop

Re-run the same baseline measurement after the scoped change under comparable conditions; repeat noisy measurements rather than declaring a trend from a single favorable run. Compare changed bundles/resources and exercise the affected interaction and loading/error states. Run relevant existing tests/build; record any pre-existing failures separately.

Report actual before/after values and units, conditions, preserved contracts, and remaining bottlenecks. Explain whether evidence is lab-only, field, source-inferred, or blocked. Do not promise universal speed, environmental savings, or WCAG compliance; fast, distinctive, and accessible remain separate checks. Budgets are project/user decisions, not the research sample's median page size.

Provenance: maintenance-only [evidence map](evidence-map.md). The research crawl illustrates measurement limits; it is not a benchmark target or a runtime dependency.
