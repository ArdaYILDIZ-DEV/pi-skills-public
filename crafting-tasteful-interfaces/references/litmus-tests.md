# Acceptance checks

Use after substantial design/review. Check the brief's criteria on actual content, not a generic taste score.

## Visual judgment

- **Subject fit:** characteristic content and detail belong to this product, not an interchangeable template.
- **Hierarchy:** a reduced-size screenshot still shows task priority; apps may have several coordinated work regions.
- **Composition:** equality/asymmetry, widths, grouping, and order express real relationships.
- **Reading:** actual fonts, titles/locales, measure, and leading work; copy explains real actions.
- **Coherence:** type, color, media, shape, and motion support the same direction. Remove redundant decoration, not expressive identity by default.

## Observable checks

1. Render representative desktop (often 1280–1440px), roughly 375–390px mobile, and relevant narrow desktop slots/states. Record exact sizes. Investigate document scroll width exceeding viewport width; intentional data-region scrolling is different from broken page overflow.
2. Exercise keyboard flow, visible/unobscured focus, menu/dialog restoration, mobile navigation, validation, loading/empty/error/selection. Use approved fixtures, not live destructive actions.
3. Check 200% zoom/text enlargement, applicable 320 CSS-pixel reflow conditions/exceptions, and reduced-motion variants. Critical content/actions remain available.
4. Measure actual pairs without rounding up: normal text ≥4.5:1; large text ≥3:1 (24px regular or approximately 18.67px bold); essential non-text UI ≥3:1 where applicable. Include changed states/themes; status meaning has non-color cues.
5. Run relevant existing tests/build and compare preserved routes, fields, bindings, semantics, and token consumers.

Report **source-reviewed, rendered, interaction-tested, measured, or unverified** as applicable. A screenshot does not test behavior; a source review does not verify pixels; flat color ratios do not certify WCAG compliance. Name unavailable checks and the next needed evidence.

Fix causes and recheck affected paths. Stop at scoped acceptance; report unresolved blockers rather than an invented pass. These checks are not model-selection or A/B trials.
