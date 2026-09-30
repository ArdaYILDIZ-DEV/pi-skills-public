# Design contract template

Use existing token/docs conventions first. Create/update `DESIGN.md` only within authorized scope; critique creates nothing. Name the actual code/config token authority, not a competing Markdown source of truth. Investigate doc/code conflicts before changing the system.

Adapt this authoring template; remove unused fields and fill actual decisions before delivery:

```markdown
# Design contract

## Scope
- Artifact / audience / primary task:
- Preserved brand, content, routes, and behavior:
- Direction / linked choices / characteristic detail:
- Optional dials: DESIGN_VARIANCE / MOTION_INTENSITY / VISUAL_DENSITY
- Token authority and consumers (actual paths):

## Tokens
| Role | Value/reference | Use, states, responsive rules |
|---|---|---|
| Title / body / metadata / code | | |
| Canvas / surface / elevated | | |
| Text / secondary text | | |
| Action / on-action / focus / border | | |
| Status roles | | |
| Spacing / widths / shape / elevation | | |
| Motion / reduced-motion variant | | |
- Type sizes, weights, leading, tracking/measure, loading and locale coverage:
- Primitive-to-semantic mapping; themes/gamut/fallbacks:
- Content hierarchy, alignment, reflow/slot/overflow behavior:
- Asset/icon treatment and component/state variants:
- Recurring optical exceptions and reasons:

## Verification
- Commands / exit codes; viewports / slots / states / observations:
- Actual contrast pairs/ratios and method:
- Preserved-contract comparison:
- Missing assets, unverified checks, unresolved drift:
- Approved system changes and reasons:
```

Record values the browser uses. Working hex/RGB/HSL formats are valid; use OKLCH/OkLab when useful for derivation. Add only needed tokens. Recurring optical corrections can be named; adding unused tokens after the fact to excuse inconsistent code does not establish coherence.
