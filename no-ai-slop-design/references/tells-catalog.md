# Contextual tells

For a full audit inspect every category; otherwise stay with affected roles. Flag a signal only when you can explain its local consequence. Pattern counts do not prove quality or AI authorship. Explicit examples/fixtures are not defects in the real interface.

## Typography

| Inspect | Flag when | Smallest useful repair / valid use |
|---|---|---|
| Starter family/sizes or fashionable mixed-face accent | Text roles are flat or the accent substitutes for hierarchy | Tune size, weight, measure, and leading first. A single Inter/Geist/system family can work. |
| Blanket tight tracking, forced breaks, or balance rules | Text cramps or wraps poorly across widths/locales | Test real text/fonts; adjust role-specific measure/size. Verified deliberate breaks can stay. |
| Repeated eyebrows/pills | They repeat the heading or carry no information | Remove empty chrome; keep useful category/date/issue metadata. |
| Misaligned numbers or mixed fallback glyphs | Numeric scanning or locale reading breaks | Use tabular figures; verify actual glyph coverage, language, and casing. `unicode-range` cannot supply glyphs. |

## Color and surfaces

| Inspect | Flag when | Smallest useful repair / valid use |
|---|---|---|
| Purple gradients, cream/sage, cyan/dark, or glows | The palette/effect is the only identity and unrelated to content | Preserve fitting brand seeds; repair hierarchy and role mapping, not hue by reflex. |
| Equal saturation/emphasis everywhere | Actions, statuses, and decoration compete | Distinguish roles/prominence. Multiple colors are valid in expressive systems. |
| Gradient/image/translucent text background | Actual contrast fails or varies unpredictably | Provide stable text surfaces/scrims or a verified treatment; inspect composited states. |
| Glass, grids, blobs, spotlights | They obscure content, imply no useful relationship, or cause rendering problems | Remove irrelevant layers; retain a fitting motif/spatial overlay with a usable fallback. |
| Identical shadows or flat dark surfaces | Grouping/elevation is unclear | Tune surface/border/elevation roles. Black/white endpoints and stock focus colors can be deliberate. |

Check actual pairs, not classes or lightness differences. Muted metadata still needs applicable text contrast. Missing state shades matter; an unused 50–900 ramp does not.

## Composition

| Inspect | Flag when | Smallest useful repair / valid use |
|---|---|---|
| Badge + centered hero + equal CTA pair | No subject-specific thesis/proof or action ranking | Rank real actions and show evidence. Centering itself can focus a singular offer. |
| Stock section sequence, large footer, repeated CTA | Content does not support those sections/destinations | Reorder around understanding → evidence → decision; remove filler only. |
| Identical icon-card grids or nested panels | Different information receives equal weight; boxes substitute for grouping | Feature important proof; flatten redundant panels. Comparable offers justify equal cards. |
| Forced asymmetry/bento | Visual priority contradicts informational priority | Restore equality or choose spans from real importance, not novelty. |
| One width/spacing everywhere | Prose stretches, tables crush, groups lose distinction | Separate reading/work/media roles and group spacing. One container can suit a small page. |

## Components, content, and motion

- **Primitive/default chrome:** flag mismatch, not library use. Theme shared roles; retain working semantics and focus management. Do not make every instance unique.
- **Icons, stripes, badges:** remove redundant encoding; preserve useful recognition/status. Existing icons and account initials are legitimate; invented endorsements are not.
- **Happy-path-only UI:** inspect focus, selected, disabled, loading, empty, error, and validation states. Keep loading labels stable and entered values recoverable.
- **Mobile omissions:** exercise navigation and critical actions; check narrow slots as well as viewport width. Mobile text-entry generally needs ≥16px to avoid iOS auto-zoom. Never disable zoom, hide overflow, or delete features to disguise breakage.
- **Generic/fake media:** prefer relevant authorized output or diagrams. Photos are optional. Check crops, readable image text, alt text, and chart scales. Invented customer proof, misleading chart values, or false urgency are truth defects.
- **Generic copy:** explain what happens and for whom. Keep meaning and approved facts. Action labels must make destinations clear; punctuation/casing are not detector rules.
- **Blanket reveals/lifts/loops:** flag delayed reading, false affordances, distraction, or broken reduced-motion behavior. Functional transitions and fitting playful springs can stay; no motion is valid.

## Finding example

Hypothetical `src/Payouts.tsx`: identical summary panels are source-observed; a 1440px render shows pending exceptions subordinate to totals. **P1:** users miss required actions. Move exceptions beside filters, demote totals, preserve tokens/hooks; recheck keyboard access and 390px reflow.

Do not issue that finding without the stated evidence. Three clear, factual pricing cards may need no repair.
