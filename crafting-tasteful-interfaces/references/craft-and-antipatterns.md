# Craft Rules and Antipatterns

Apply per artifact type — a dashboard uses these differently from a landing page. Each section pairs what to do with what to reject.

## Hard no — scan this first

Grouped to match the sections below, so a hit can be logged straight to its category. A deterministic pass should catch every one of these before a judgment pass starts. One hit is a smell; more than one on the same surface is a verdict.

**Typography**
- Inter, Roboto, or system-ui as the primary typeface with no stated reason
- Inter + slate-900 (or any single-font-plus-single-neutral combo) as the whole system
- Body text below 14px; line height below 1.3
- Italic serif display hero headline (Fraunces, Recoleta, Playfair, Cormorant, siblings) as a default, especially one accent word swapped into serif just to feel "tasteful"
- Kickers or eyebrows above headings on marketing/product surfaces

**Color**
- Purple-to-white or purple/violet gradients on buttons, text, backgrounds, or hero meshes
- Gradient text on headings or metrics
- Contrast below WCAG AA (4.5:1 body, 3:1 large); pure black backgrounds or pure white text

**Layout**
- Centered hero over a dark gradient mesh or radial glow
- Three or four equal feature cards as the default section shape

**Components and states**
- Every button styled primary — no ranked hierarchy of actions
- Hero mock forms with no real labels, validation, or submission mechanics
- Faux macOS window chrome (red/yellow/green dots) around code snippets with no copy button or runnable code
- Caricature comparison tables (rival column all red marks, own column all green marks)
- Scattered non-functional chip badges (POPULAR, AI INSIDE)

**Motion**
- Infinite-loop micro-animations, pulse, blink, or marquee on non-live indicators
- Hover transitions or entrance choreography applied to every card or section

**Imagery**
- Generic glassmorphism or decorative grid-line backgrounds with no structural purpose
- Logo walls at low opacity backing unprovable claims, with no attribution

**Copy**
- Jane-Doe data: placeholder names/avatars, round-number stats, Acme-style invented brands
- Buzzword verbs (elevate, seamless, unleash, next-gen, revolutionary)
- Em-dashes in headlines, labels, CTAs, and marketing copy

If none of these fire, move to the full sections below — a lint-clean scan still needs the judgment calls that follow.

## Typography

Compose a real hierarchy with at least two weights or sizes at roughly 1.25+ ratio. Cap display type near 6rem; set long headlines smaller instead of blowing up full sentences. Give headings more space above than below so each binds to its content.

Reject: single font for the whole page without justification; Inter/Roboto/system as primary without a neutral-standard reason; body below 14px, line height below 1.3; italic serif display as default hero headline (Fraunces, Recoleta, Playfair, Cormorant and siblings) especially one accent word swapped into serif just to feel tasteful; kickers and eyebrows above headings on marketing/product surfaces (fold the words into the heading or body; editorial rubrics survive as plain metadata lines, never pills); long ALL-CAPS passages; skipped heading levels; justified body without hyphenation; functional text below 11px (only non-interactive legal smallprint may touch 10px).

## Color and contrast

Author palette in OKLCH with named roles. Dark mode is designed, not inverted: near-black tinted toward brand hue, off-white text, elevation through lightness steps, desaturated accents.

Reject: purple/violet gradients on buttons, text, or backgrounds; gradient text on headings or metrics; cyan-on-dark as the whole palette; dark background with colored glow shadows as the default cool look; gray text on colored backgrounds; contrast below WCAG AA (4.5:1 body, 3:1 large); pure black backgrounds or pure white text; calm-editorial autopilot (warm ivory + olive/clay/terracotta with airy serif) applied to dev tools/SaaS/fintech/dashboards without explicit justification; radial halo or spotlight haze behind sections; photography buried under an opaque wash.

## Layout

Compose with one base unit (4px or 8px — no off-grid arbitrary padding, margin, or gap values), intentional grids, whitespace as confidence. Break the centered-max-width-column reflex: on marketing surfaces center hero/CTAs and left-align the rest; at high variance use asymmetric or split viewports; dashboards skip hero centering and align to the grid. Vary rhythm instead of repeating one section shape. Heroes fit the viewport: headline at most two lines, subtext at most 20 words, CTA visible without scroll, at most four text elements in the narrative stack.

Reject: everything centered with monotonous spacing; lines past ~80 characters; cramped padding under 8px; wrapping everything in cards; nesting cards inside cards; side/top accent stripes as decoration rather than status (never a stripe plus a chip announcing the same signal twice); icon tile stacked above every heading; identical icon-heading-text grids; hero metric row (big number + small label + three stats); numbered 01-02-03 markers on non-sequences; stat banners/marquees on non-live content; every button styled primary; complex settings crammed into a scrolling modal; three zigzag splits in a row.

## Components and states

Design the full state matrix (default, hover, active, focus, disabled, loading, error, selected) — not just rest state. Rank buttons by importance instead of coloring by meaning. Forms use real labels, correct input types, inline validation that keeps the input. Tables: left-align text, right-align tabular numerals, light separators, sticky headers, visible sort states. Navigation, overlays, empty, loading, and error states are designed, not leftovers. Lists past five items get search, filter, or grouping. Never change font weight on hover/selected — shift color or background so layout never jumps.

Reject: hero mock forms with no labels, validation, or submission mechanics; faux macOS window chrome (red/yellow/green dots) around code snippets with no copy button or runnable code; caricature comparison tables (rival column of red marks, own column of green marks); scattered non-functional chip badges (POPULAR, AI INSIDE).

## Motion

Animate transform and opacity first; reach for blur, clip-path, or shadow only when smooth, under a duration and easing token scale (default ease-out under 300ms). Scale popovers from their trigger. Honor reduced-motion with a static fallback. Reserve pulse for genuinely live, changing data only.

Reject: bounce or elastic easing; animating width, height, margin, or padding; entrance choreography on every section; hover transitions on every card; pulse/blink/marquee on non-live indicators.

## Iconography

One family per project, one grid, one stroke width. Default to Phosphor (pairs with shadcn/ui); Hugeicons, Radix, or Tabler with a stated reason; Lucide only on request or existing dependency. Never hand-roll SVG icons — install a second library or compose from primitives.

Reject: emoji as icons; mixed icon families with inconsistent stroke; hand-drawn SVG gap-fillers.

## Imagery

Art-direct imagery as a system: real product visuals over stock or abstract blobs. When an asset is unavailable, use an intentional placeholder with fixed aspect ratio and caption. Charts use a real library or hand-authored SVG with explicit axes and scales; scaleless decorative sparklines are banned.

Reject: people-pointing-at-laptops; gradient orbs; corporate-Memphis; raw generator defaults; hero visuals from primitive-shape SVG scenes; logo walls at low opacity with unprovable claims and no attribution (replace with quantified metrics plus one attributed quote, or delete the section); decorative glassmorphism and grid-line backgrounds with no structural purpose.

## Copy

Controls name their action, errors name the problem and the recovery, each idea said once. Data looks collected, not generated: messy figures, locale-real names, invented brands paired with invented marks.

Reject: buzzword verbs (elevate, seamless, unleash, next-gen, revolutionary); manufactured-contrast aphorisms repeated across sections; theater-framing; em-dashes in headlines, labels, CTAs, and marketing copy (narrative editorial prose flags only on saturation); Jane-Doe data (placeholder names/avatars, round-number stats, Acme-style brands, filler AI-tone phrases); the same literal text repeated across slots of one container.

## Accessibility

Build to WCAG 2.2 AA: visible managed focus, keyboard operability, labels on every control, targets at least 24px, 4.5:1 body contrast, reduced-motion support. Theme browser surfaces (text selection, caret, scrollbars, focus rings, underline offset) from the palette.

## Micro-chrome (countable)

Middle-dot: at most one per line in metadata strips. Decorative dots: zero by default, only real semantic state. One hairline per list (top or bottom between rows, never both). No scroll cues, no locale/time/weather strips, no version labels in hero or marketing footers. No pills overlaid on images, no decorative photo-credit captions, no hero-bottom decoration strips. No generic step labels (Stage 1, Step 2) — the verb-noun is the label.

Signature exemption: at DESIGN_VARIANCE 8+, HUD telemetry or coordinate stamps declared as the DESIGN.md signature move and tied to live state are permitted; they must never obscure controls and must collapse on mobile.

## DESIGN.md drift

Fonts, colors, radii, and sizes outside the documented tokens count as drift. Adding off-ramp values to DESIGN.md to excuse them (ramp-laundering) fails. Exemptions: border/hairline widths, canvas values behind a token bridge, alpha tints of listed tokens (advisory).
