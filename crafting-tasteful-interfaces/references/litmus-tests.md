# Acceptance checks

Use after substantial design/review. Check the brief's criteria on actual content, not a generic taste score. For technical-only repairs, preserve the approved direction and check the affected task/metric rather than requiring a visual makeover.

## Visual judgment

- **Subject fit:** characteristic content and detail belong to this product, not an interchangeable template.
- **Hierarchy:** a reduced-size screenshot still shows task priority; apps may have several coordinated work regions.
- **Composition and density:** equality/asymmetry, widths, grouping, and order express real relationships. Required state, comparisons, labels, and actions follow the visibility contract; neither whitespace nor element count alone is a quality score.
- **Reading:** actual fonts, titles/locales, measure, and leading work; copy explains real actions.
- **Coherence:** type, color, media, shape, and motion support the same direction. Remove redundant decoration, not expressive identity by default.

## Observable checks

1. Render representative desktop (often 1280–1440px), roughly 375–390px mobile, and relevant narrow desktop slots/states. Record exact sizes. Investigate document scroll width exceeding viewport width; intentional data-region scrolling is different from broken page overflow.
2. Exercise keyboard flow, visible/unobscured focus, menu/dialog restoration, mobile navigation, validation, loading/empty/error/selection. Use approved fixtures, not live destructive actions.
3. Check 200% zoom/text enlargement, applicable 320 CSS-pixel reflow conditions/exceptions, and reduced-motion variants. Critical content/actions remain available.
4. Measure actual pairs without rounding up: normal text ≥4.5:1; large text ≥3:1 (24px regular or approximately 18.67px bold); essential non-text UI ≥3:1 where applicable. Include changed states/themes; status meaning has non-color cues.
5. Exercise the actual task, not only isolated components: comparison/prior-step state, local feedback, submit failure and correction, retry, and completion/exit. For density changes, use the same representative content/task before and after: locate an exception, compare its required evidence, and act. Record visibility and lookup/scroll/view-switch burden separately from legibility, target/focus barriers, errors, and preference. Check whether disclosed details preserve orientation and whether narrow layouts retain required labels/units/data. More rows or fewer clicks alone does not prove improvement. Check meaningful landmarks/bypass, labels, announcements, and drag alternatives where applicable. If task, screen-reader, or diverse-user checks are unavailable, say so; attribute presence and automated scores are insufficient.
6. For localization work, test actual glyph coverage, long labels, and the requested RTL/BiDi combinations. Inspect logical layout, directional controls, signed numbers/currencies, dates, and fallback shaping. Do not change stored values or remove features to fit translations.
7. For consent, subscription, checkout, or sensitive actions, inspect decline/cancel, total costs and recurrence, permission explanations, and supported recovery. Separate factual credibility from visual polish; no fake proof or coercive default should be treated as success.
8. For performance work or changed media/fonts/client code/effects, follow [performance verification](frontend-performance.md): baseline and repeatable remeasurement, route/state and environment, resource/bundle cost, and lab versus field evidence. A one-load score, low byte count, or TBT is not a field CWV pass.
9. Run relevant existing tests/build and compare preserved routes, fields, bindings, semantics, and token consumers.

Report **source-reviewed, rendered, interaction-tested, measured, or unverified** as applicable. A screenshot does not test behavior; a source review does not verify pixels; flat color ratios and automated scans do not certify WCAG compliance. Visual preference, task accuracy, accessibility, performance, and trust need separate evidence. Name unavailable checks and the next needed evidence.

Fix causes and recheck affected paths. Stop at scoped acceptance; report unresolved blockers rather than an invented pass. These checks are not model-selection or A/B trials.
