# Implementation craft

Read affected sections. Ranges below are starting points, not universal rules; preserve a fitting existing system.

## Typography and locale

- Define needed title, section, body/UI, metadata, and code/data roles. Differentiate size/weight/width/placement before adding families. Verify licensing, real weights, loading, and fallbacks.
- Start sustained Latin prose near 1rem, unitless 1.45–1.65 leading and 45–75ch measure. These are practitioner starting points, not comprehension guarantees or script-independent limits. Scanning tables and sustained reading have different width needs; inspect the actual font, script, task, and zoom. Serif/sans categories do not decide readability. Compact UI can be smaller if readability/zoom survives. A 1.2–1.333 scale can help; adjust optically rather than enforcing ratios.
- Use rem-based sizes and bounded fluid display sizing; test zoom. Tune tracking by face/size, not blanket tightening. Heading semantics follow structure; numeric columns use tabular figures and appropriate alignment.
- Set correct document/local fragment language. Verify actual glyphs/shaping; `unicode-range` and `locl` declarations do not create support. Use the project's locale-aware presentation formatting without changing business logic.
- For RTL, use the appropriate `dir` and CSS logical properties with `text-align: start`. Mirror directional navigation where meaning requires it, not every icon or media control. Isolate mixed-direction user text with appropriate `bdi`/`dir` handling; test numbers, signs, currencies, URLs, and punctuation together, not just an all-Arabic heading.
- Use the project's locale-aware date, number, and currency formatting (for example `Intl` APIs) without changing stored values or parsing contracts. Test long translated labels, plural states, mixed scripts, fallback fonts, and narrow slots. Do not hard-code language expansion percentages, apply Latin tracking to connected scripts, or assume `ch` has the same reading meaning across scripts.

## Composition and responsive structure

Choose layout from content relationships; preserve shared alignment while separating reading, work, and media widths. Use proximity before boxes when it communicates membership clearly; cards remain useful for independent or heterogeneous objects. Avoid nested enclosures that compete with the page's main regions. A 4px/8px spacing scale is practical, not mandatory; name recurring optical corrections. Group gaps should be smaller than major transitions. Do not derive a mandatory spacing ratio or card count from a perceptual study.

A demonstration/explanation split can replace generic icon-card claims. Hypothetical structure—populate with supplied verified proof before shipping:

```html
<section class="showcase" aria-labelledby="workflow-title">
  <div><h2 id="workflow-title">Create, inspect, then remove</h2><p>Supplied workflow explanation.</p></div>
  <div class="showcase__proof"><!-- Supplied verified command/result. --></div>
</section>
```

```css
.showcase { display: grid; gap: var(--space-section); }
.showcase > * { min-inline-size: 0; }
.showcase p { max-inline-size: 60ch; }
@media (min-width: 56rem) {
  .showcase { grid-template-columns: minmax(0, 4fr) minmax(0, 7fr); }
}
```

Define the spacing token; proportions follow actual importance, not this example.

For components in sidebars/drawers/split panes, respond to available slot width when viewport queries would misfire. Check browser/project support; intrinsic wrapping is also valid.

```css
.detail-slot { container: detail / inline-size; }
.detail { display: grid; gap: var(--space-group); min-inline-size: 0; }
.detail > * { min-inline-size: 0; }
@container detail (min-width: 28rem) {
  .detail { grid-template-columns: minmax(0, 2fr) minmax(0, 3fr); }
}
```

The wrapper contains; the child responds. Inline-size avoids block-size containment surprises. Test narrow slots on desktop, not just mobile. Use deliberate accessible scrolling for long code/tables; do not globally clip overflow.

## Color and surfaces

- Map primitives to semantic text, surface, action/on-action, focus, border, and relevant status roles. Generate only needed shades/states.
- Establish dominance and emphasis before hue harmony. Neutral-heavy products may use scarce accent; expressive brands can use several coherent colors. Analogous/complementary relationships and gradients are options, not automatic taste.
- OKLCH/OkLab support perceptual derivation; lightness is not WCAG luminance. Gamut depends on all channels—no fixed chroma ceiling guarantees it. Inspect actual converted/rendered colors and fallbacks.
- Design required dark mode separately: visible surface/elevation steps and appropriate text/accent intensity. Tinted off-black is useful, not compulsory; do not add an unrequested theme.
- Translucent chrome needs contrast across underlying content, usable fallback, and performance checks. Photo/gradient text needs actual background sampling or a stable text surface; flat-pair checks are insufficient.

## Components, assets, and motion

- Define shared variants by role. Cards group/select objects; borders, radii, and elevation should express those roles rather than wrap everything identically.
- Forms preserve associated labels, correct types, field values, inline errors, and recovery; apply the conditional workflow in [human factors](human-factors.md) for timing, submission errors, and high-stakes actions. Tables preserve headers, keys, sorting, numeric alignment, and accessible overflow. Add search/filtering for retrieval needs, not item-count quotas.
- Retain menu/dialog keyboard, dismissal, focus restoration, and scroll behavior. Expanded hit areas must not overlap neighbors. Loading labels and dimensions stay stable.
- Reuse coherent icon size/weight and existing tooling. Simple verified SVG/marks can work; platform-dependent emoji must not be the sole critical label.
- Art-direct authorized assets with responsive crops, reserved dimensions, and appropriate alt text. Charts need truthful scales/labels; complex interaction should reuse fitting tooling. Photos are optional; missing assets remain explicit gaps.
- Copy names actual actions and recovery; keep approved/legal meaning. Fixture data is not real proof. Avoid fabricated metrics, endorsements, or urgency.
- A brief transition may start around 120–200ms, overlays 200–300ms; these are tunable heuristics, not an allowed delay before acknowledging input. Pressed feedback and ongoing direct manipulation should respond promptly, without waiting for choreography or a server result. Match distance/task/brand; prefer transform/opacity where suitable, measure cost for other properties. Fitting springs are valid. Provide usable reduced-motion/static variants and pause/stop controls where required.
- Keep useful labels, credits, and identity details; remove redundant chrome. Do not use decorative-count quotas or motion as a substitute for clarity.
