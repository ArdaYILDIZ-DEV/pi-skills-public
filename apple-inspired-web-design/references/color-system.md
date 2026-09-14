# Color system: source record and web adaptation

## Status of these tables

The six tables below are transferred unchanged from sections 2.1–2.6 of the `PRINCIPLES.md` file. Source origin and file summary are in the [principles guide](principles-for-web.md). This package has not verified any claim that they are “complete,” “exact,” or “official.” Because OS version, gamut, and viewing conditions are unspecified, do not present them as current Apple API values.

Usage notes in the tables are also the source document's interpretations; they are not normative assignments for browsers. In particular, low-opacity label and placeholder colors must not be used as accessible active-text defaults. The “high contrast” heading does not guarantee WCAG conformance on every background and usage.

This archive palette and the [web token starter](../assets/web-tokens.css) serve different purposes: the former preserves source values, the latter is an adapted starter for selected roles. The CSS file does not aim to implement the whole table or to imitate Apple's native dynamic color behavior.

## Source 2.1: System accent colors

| Color name | Default light mode (Hex / RGB) | Default dark mode (Hex / RGB) | High-contrast light mode (Hex / RGB) | High-contrast dark mode (Hex / RGB) |
| :--- | :--- | :--- | :--- | :--- |
| **Blue** | `#0088FF`<br>`rgb(0, 136, 255)` | `#0091FF`<br>`rgb(0, 145, 255)` | `#1E6EF4`<br>`rgb(30, 110, 244)` | `#5CB8FF`<br>`rgb(92, 184, 255)` |
| **Green** | `#34C759`<br>`rgb(52, 199, 89)` | `#30D158`<br>`rgb(48, 209, 88)` | `#008932`<br>`rgb(0, 137, 50)` | `#4AD968`<br>`rgb(74, 217, 104)` |
| **Indigo** | `#6155F5`<br>`rgb(97, 85, 245)` | `#6D7CFF`<br>`rgb(109, 124, 255)` | `#564ADE`<br>`rgb(86, 74, 222)` | `#A7AAFF`<br>`rgb(167, 170, 255)` |
| **Orange** | `#FF8D28`<br>`rgb(255, 141, 40)` | `#FF9230`<br>`rgb(255, 146, 48)` | `#C55300`<br>`rgb(197, 83, 0)` | `#FFA056`<br>`rgb(255, 160, 86)` |
| **Pink** | `#FF2D55`<br>`rgb(255, 45, 85)` | `#FF375F`<br>`rgb(255, 55, 95)` | `#E7124D`<br>`rgb(231, 18, 77)` | `#FF8AC4`<br>`rgb(255, 138, 196)` |
| **Purple** | `#CB30E0`<br>`rgb(203, 48, 224)` | `#DB34F2`<br>`rgb(219, 52, 242)` | `#B02FC2`<br>`rgb(176, 47, 194)` | `#EA8DFF`<br>`rgb(234, 141, 255)` |
| **Red** | `#FF383C`<br>`rgb(255, 56, 60)` | `#FF4245`<br>`rgb(255, 66, 69)` | `#E9152D`<br>`rgb(233, 21, 45)` | `#FF6165`<br>`rgb(255, 97, 101)` |
| **Teal** | `#00C3D0`<br>`rgb(0, 195, 208)` | `#00D2E0`<br>`rgb(0, 210, 224)` | `#008198`<br>`rgb(0, 129, 152)` | `#3BDDEC`<br>`rgb(59, 221, 236)` |
| **Yellow** | `#FFCC00`<br>`rgb(255, 204, 0)` | `#FFD600`<br>`rgb(255, 214, 0)` | `#A16A00`<br>`rgb(161, 106, 0)` | `#FEDF43`<br>`rgb(254, 223, 67)` |
| **Mint** | `#00C8B3`<br>`rgb(0, 200, 179)` | `#00DAC3`<br>`rgb(0, 218, 195)` | `#008575`<br>`rgb(0, 133, 117)` | `#54DFC3`<br>`rgb(84, 223, 203)` |
| **Cyan** | `#00C0E8`<br>`rgb(0, 192, 232)` | `#3CD3FE`<br>`rgb(60, 211, 254)` | `#007EAE`<br>`rgb(0, 126, 174)` | `#6DD9FF`<br>`rgb(109, 217, 255)` |
| **Brown** | `#AC7F5E`<br>`rgb(172, 127, 94)` | `#B78A66`<br>`rgb(183, 138, 102)` | `#956D51`<br>`rgb(149, 109, 81)` | `#DBA679`<br>`rgb(219, 166, 121)` |

## Source 2.2: System grays

| Gray level | Default light mode | Default dark mode | High-contrast light | High-contrast dark | Intended use |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **systemGray** | `#8E8E93`<br>`rgb(142, 142, 147)` | `#8E8E93`<br>`rgb(142, 142, 147)` | `#6C6C70`<br>`rgb(108, 108, 112)` | `#AEAEB2`<br>`rgb(174, 174, 178)` | Neutral reference base gray |
| **systemGray2** | `#AEAEB2`<br>`rgb(174, 174, 178)` | `#636366`<br>`rgb(99, 99, 102)` | `#8E8E93`<br>`rgb(142, 142, 147)` | `#7C7C80`<br>`rgb(124, 124, 128)` | Secondary borders, light outlines |
| **systemGray3** | `#C7C7CC`<br>`rgb(199, 199, 204)` | `#48484A`<br>`rgb(72, 72, 74)` | `#AEAEB2`<br>`rgb(174, 174, 178)` | `#545456`<br>`rgb(84, 84, 86)` | Inactive button backgrounds, secondary fills |
| **systemGray4** | `#D1D1D6`<br>`rgb(209, 209, 214)` | `#3A3A3C`<br>`rgb(58, 58, 60)` | `#BCBCC0`<br>`rgb(188, 188, 192)` | `#444446`<br>`rgb(68, 68, 70)` | Grouped spacing, form dividers |
| **systemGray5** | `#E5E5EA`<br>`rgb(229, 229, 234)` | `#2C2C2E`<br>`rgb(44, 44, 46)` | `#D8D8DC`<br>`rgb(216, 216, 220)` | `#363638`<br>`rgb(54, 54, 56)` | Search bars, text input fields |
| **systemGray6** | `#F2F2F7`<br>`rgb(242, 242, 247)` | `#1C1C1E`<br>`rgb(28, 28, 30)` | `#EBEBF0`<br>`rgb(235, 235, 240)` | `#242426`<br>`rgb(36, 36, 38)` | Lightest background / darkest surface layer |

## Source 2.3: Background hierarchy

| Token | Light mode value | Dark mode value | Description and use |
| :--- | :--- | :--- | :--- |
| `systemBackground` | `#FFFFFF` (pure white) | `#000000` (pure black) | General base of the main screen or page |
| `secondarySystemBackground` | `#F2F2F7` | `#1C1C1E` | Cards and groups over the base |
| `tertiarySystemBackground` | `#FFFFFF` | `#2C2C2E` | Secondary panels/boxes nested inside cards |
| `systemGroupedBackground` | `#F2F2F7` | `#000000` | Base of a grouped list/table view |
| `secondarySystemGroupedBackground` | `#FFFFFF` | `#1C1C1E` | Background of cells/cards in a grouped table |
| `tertiarySystemGroupedBackground` | `#F2F2F7` | `#2C2C2E` | Backgrounds of sub-cells/inputs in a grouped table |

## Source 2.4: Text and content

| Token | Light mode definition | Dark mode definition | Semantic role |
| :--- | :--- | :--- | :--- |
| `label` | `rgba(0, 0, 0, 1.0)` / `#000000` | `rgba(255, 255, 255, 1.0)` / `#FFFFFF` | Primary headings and main body text |
| `secondaryLabel` | `rgba(60, 60, 67, 0.60)` / `#3C3C4399` | `rgba(235, 235, 245, 0.60)` / `#EBEBF599` | Subheadings, descriptions, metadata |
| `tertiaryLabel` | `rgba(60, 60, 67, 0.30)` / `#3C3C434D` | `rgba(235, 235, 245, 0.30)` / `#EBEBF54D` | Inactive labels, input hints |
| `quaternaryLabel` | `rgba(60, 60, 67, 0.18)` / `#3C3C432E` | `rgba(235, 235, 245, 0.18)` / `#EBEBF52E` | Watermarks, disabled elements |
| `placeholderText` | `rgba(60, 60, 67, 0.30)` | `rgba(235, 235, 245, 0.30)` | Placeholder text in form fields |
| `link` | `#007AFF` / `rgb(0, 122, 255)` | `#0984FF` / `rgb(9, 132, 255)` | Clickable link text |
| `separator` | `rgba(60, 60, 67, 0.29)` | `rgba(84, 84, 88, 0.60)` | Thin divider letting underlying content slightly show through |
| `opaqueSeparator` | `#C6C6C8` / `rgb(198, 198, 200)` | `#38383A` / `rgb(56, 56, 58)` | Opaque divider line that blocks light |

## Source 2.5: System fills

| Token | Light mode value | Dark mode value | Intended use |
| :--- | :--- | :--- | :--- |
| `systemFill` | `rgba(120, 120, 128, 0.20)` | `rgba(120, 120, 128, 0.36)` | Thin and small shapes (Example: slider track) |
| `secondarySystemFill` | `rgba(120, 120, 128, 0.16)` | `rgba(120, 120, 128, 0.32)` | Medium shapes (Example: toggle switch background) |
| `tertiarySystemFill` | `rgba(118, 118, 128, 0.12)` | `rgba(118, 118, 128, 0.24)` | Large shapes (Example: text input box, search bar) |
| `quaternarySystemFill` | `rgba(116, 116, 128, 0.08)` | `rgba(118, 118, 128, 0.18)` | Wide container panels holding complex content |

## Source 2.6: Source values in the macOS context

| Color name | Light mode hex | Dark mode hex | Description |
| :--- | :--- | :--- | :--- |
| `windowBackgroundColor` | `#ECECEC` | `#262626` | Main window background color |
| `controlBackgroundColor` | `#FFFFFF` | `#1E1E1E` | List, table, or browser backgrounds |
| `controlColor` | `#E1E1E1` | `#3A3A3A` | Button and control surface |
| `controlTextColor` | `#000000` | `#FFFFFF` | Text on the active control |
| `disabledControlTextColor` | `rgba(0,0,0,0.26)` | `rgba(255,255,255,0.26)` | Unavailable inactive control text |
| `selectedControlColor` | `#007AFF` | `#007AFF` | Selected control surface |
| `selectedControlTextColor` | `#FFFFFF` | `#FFFFFF` | Text on the selected surface |
| `keyboardFocusIndicatorColor`| `#007AFF` | `#007AFF` | Keyboard Tab focus ring color |
| `findHighlightColor` | `#FFFF00` | `#FFFF00` | In-text search highlight yellow |

## Role mapping for the web

| Role | Use | Check |
| --- | --- | --- |
| `--aw-surface-page` | Page base | Is it distinguished from content and edge layers? |
| `--aw-surface-raised` | Panel or grouped content | Is it used without turning every group into a card? |
| `--aw-text-primary`, `--aw-text-secondary` | Primary and secondary text | Do both have sufficient contrast on the real background? |
| `--aw-accent`, `--aw-on-accent` | Primary action and text on it | Were the text/surface pair and adjacent-surface separation checked separately? |
| `--aw-border-subtle` | Decorative divider | Is it not used as the sole required boundary for recognizing a control? |
| `--aw-border-control` | Required control boundary | Does it meet the contrast requirement for the adjacent background where it is used? |
| `--aw-status-*` | Error, success, warning text/marker | Is the meaning also presented with text or another visible cue? |
| `--aw-focus-ring` | Keyboard focus | Is it visible against real adjacent colors; is it clipped or covered? |

Preserve the brand color when present; when needed bind an accessible interaction variant to a separate role. Blue is not mandatory. In the source the `Blue` and `link` values differ; do not silently equalize them to produce a single “definitive Apple blue.”

### How to interpret contrast?

- Target 4.5:1 for normal text and 3:1 for large text. The WCAG large-text definition corresponds to about 24 CSS px regular or 18.67 CSS px bold; a token merely named `title` is not enough.
- For required control boundaries and graphic/status information evaluate the relevant 3:1 non-text contrast conditions. Not every decorative divider must meet this ratio; do not use a decorative line in place of a required control boundary.
- When alpha is present, composite over the real background first, then compute relative luminance and contrast. With a background image or glass, a single flat-color measurement does not prove all states.
- Do not use the exception for inactive controls to dim active helper text, placeholders, or error messages. A visible form label is still required.
- Check the focus ring for thickness, offset, clipping, and occlusion in addition to color. Do not count an automated tool score as full accessibility conformance.

### Theme, gamut, and material decisions

1. **Accent economy:** Keep the interaction color consistent; give status, chart series, and brand uses separate meanings. Do not impose the “everything colorful is clickable” assumption on data visualization.
2. **Dark theme:** Separate layers sufficiently. A pure-black base is an option in the source, but not a requirement for every web project.
3. **Meaning beyond color:** Use a description in the error area, a status mark on the selected item, or an appropriate semantic attribute.
4. **P3:** Provide an sRGB fallback first. Add P3 only with a rationale and target-browser support; putting sRGB numbers inside `display-p3` is not a color-space conversion. This asset contains no P3 variant.
5. **Glass:** Use an opaque surface when `backdrop-filter` is unavailable. Support existing is not proof of readability or performance. Remove glass under high contrast and forced colors.
6. **Preferences:** An explicit user choice must override the system theme. `prefers-contrast: more` is an enhancement; do not assume all environments report it or that it equals complete high-contrast support. Allow system colors under `forced-colors`.

## Using the CSS starter

The asset only defines `--aw-*` variables; it contains no global reset, font loading, component classes, theme button, or JavaScript. Map as much as needed into the project's token system. `data-apple-theme="light"` or `data-apple-theme="dark"` is for explicit selection on the root HTML element; without the attribute the system preference applies. If the current project uses another theme selector, adapt the mapping instead of replacing it.

Example usage; class and file names are examples, not facts observed in a project:

```css
.account-page {
  color: var(--aw-text-primary);
  background: var(--aw-surface-page);
  font-family: var(--aw-font-sans);
  line-height: var(--aw-leading-body);
  padding: var(--aw-page-gutter);
}

.account-action {
  font: inherit;
  min-inline-size: var(--aw-target-touch);
  min-block-size: var(--aw-target-touch);
  padding-inline: var(--aw-space-4);
  color: var(--aw-on-accent);
  background: var(--aw-accent);
  border: 1px solid transparent;
  border-radius: var(--aw-radius-control);
  transition: background-color var(--aw-motion-duration) var(--aw-motion-easing);
}

.account-action:hover:not(:disabled) {
  background: var(--aw-accent-hover);
}

.account-action:active:not(:disabled) {
  background: var(--aw-accent-pressed);
}

.account-action:focus-visible {
  outline: var(--aw-focus-width) solid var(--aw-focus-ring);
  outline-offset: var(--aw-focus-offset);
}

.account-action:disabled {
  color: var(--aw-text-disabled);
  background: var(--aw-surface-inset);
  border-color: var(--aw-border-subtle);
}
```

A real `disabled` attribute is required for `button`; this CSS alone provides no behavior. Separately check the real background around the focus offset. Static web tokens provide no native vibrancy, haptics, or continuous corner rendering. Components using glass tokens additionally need visual and contrast checks for the content/background combination.
