# From principles to web decisions

## Source and confidence level

Source: the `PRINCIPLES.md` found in the working folder when the package was created, “Apple Design System, Principles, and Color Library Guide.” SHA-256 of the source file: `4360a2972918b680ec6722ddfa9113ceb7e24fe464a1354106b767edb3bbdfcd`.

The document states no primary-source links and no base OS version. While preparing this package, external Apple documents and cited studies were not verified. The recommendations below are an editorial web adaptation of the source document; they are not normative Apple requirements. The package does not need the original file in the same folder to work.

Distinguish three kinds of information:

- **Design principle:** guidance that aids decisions, such as purpose, consistency, and feedback.
- **Source value:** a platform metric, color, or animation parameter appearing in the document; do not treat it as a standard without verified context.
- **Web adaptation:** this package's recommendations, such as responsive layout, semantic HTML, font fallbacks, and preference queries.

## Applying the eight principles

| Source principle | Web decision | Reviewable outcome |
| --- | --- | --- |
| Purpose | Order content by the primary user task. | The user can distinguish the starting point and the primary action. |
| Agency | Keep cancellation, return, and correction paths visible. | The user can leave the flow; the action outcome and reversibility are clear. |
| Responsibility | Honestly explain permissions, fees, and data use. | The permission reason appears with the relevant action; there are no deceptive defaults. |
| Familiarity | Use established web patterns and meaningful labels. | Links navigate, buttons act; icon meanings are not left to guesswork. |
| Flexibility | Support input types, screens, text sizes, and preferences. | The core task does not depend on a mouse, hover, or fixed width. |
| Simplicity | Prioritize; remove needless repetition. | Required information is not hidden merely to look minimal. |
| Craft | Fix alignment, states, text wrapping, and transition details. | Long headings, loading, empty-result, and error states do not break. |
| Delight | Prioritize fast, clear, and respectful interaction. | Decorative animations do not delay the task; there are no needless surprises. |

Do not repeat any claim that these eight headings are the current HIG's official and complete list; that needs separate verification.

## Historical principles and Rams

The source treats aesthetic integrity, consistency, direct manipulation, feedback, metaphors, and user control together. Web adaptation:

- Do not impose the same look on a productivity page and an entertainment page.
- Present the same operation with the same component, name, and behavior.
- Where dragging exists, also provide an alternative that works without dragging; for example ordering with keyboard or buttons.
- Give a clear response at processing time; do not show success before the network operation completes.
- Use metaphors such as files or carts when they aid clarity; do not copy the whole look of the physical object.

Rams's ten principles listed in the source can be turned into these questions:

1. **Innovation:** Does the new approach solve a real user problem?
2. **Usefulness:** Does it make the primary task easier?
3. **Aesthetics:** Does visual integrity serve the product's use?
4. **Understandability:** Do content and controls explain what they do?
5. **Unobtrusiveness:** Does the interface demand more attention than the content?
6. **Honesty:** Is any nonexistent benefit, outcome, or social proof presented?
7. **Longevity:** Does the layout work without a temporary effect?
8. **Thoroughness:** Are edge cases as careful as the main screen?
9. **Environmental responsibility:** Is needless imagery, video, JavaScript, or continuous animation added? Do not claim environmental gains without measuring.
10. **Less, but better:** Does removing an item reduce complexity without weakening the task?

Keep the historical influence narrative between Apple, Braun, and Rams separate from these practical check questions; this package is not historical research.

## Layout and perceptual grouping

Treat the source's Gestalt headings as directly usable decisions:

- **Proximity:** Inner spacing of the same group is usually smaller than spacing between groups.
- **Similarity:** Let visual similarity represent the same role or behavior.
- **Continuity:** Let aligned lists and consistent columns ease scanning.
- **Closure:** Make a group clear with a boundary, spacing, or surface; do not draw a card by obligation.
- **Figure/ground:** Separate content with contrast and layering. Blur is not a precondition for this.
- **Common fate:** Let the relationship of jointly moving items be meaningful; the relationship must remain understandable under reduced motion.

The fluency account cited in the source as Reber, Schwarz, and Winkielman (2004) is not used here as an independently verified effect size. Do not produce unmeasured claims such as “this layout relaxes the brain by this much.”

### Translating measurements to the web

| Source recommendation | Web use |
| --- | --- |
| 4/8-point scale | Starting point for `rem`-based spacing tokens; do not force every measure onto this grid. |
| iPhone 16pt, iPad 20pt margins | Fluid page padding and content width instead of device-bound fixed values. |
| 16/20pt inside cards | Shared component spacing adjusted to content density. |
| 44 × 44pt touch target | 44 × 44 CSS px preferred target for touch; not a unit-equivalence claim. |
| Fixed notch, home-bar, and tab-bar heights | Do not copy to the web. Where needed use browser values such as `env(safe-area-inset-bottom, 0px)`. |

CSS `pt`, iOS layout points, CSS px, and physical screen pixels are not the same concept. Use relative units for type and spacing; do not fix the root font size in a way that defeats user preference.

## Typography

The source presents Large Title 34/41, Title 1 28/34, Title 2 22/28, Title 3 20/25, Headline and Body 17/22, Callout 16/21, Subhead 15/20, Footnote 13/18, Caption 1 12/16, and Caption 2 11/13 in iOS points. These are not the web's mandatory font or line-height scale.

- Preserve the project's brand font first. With no constraints use the local `system-ui` stack; do not download and distribute the SF Pro file.
- Define heading, body, and helper-text roles. Where needed use limited `clamp()` for mobile and desktop headings; do not block accessible growth with fixed `vw`.
- Do not carry the source's tracking values to another font. Review real readability in the font, language, and size.
- Keep body line-height sufficient for the content; test with Turkish characters, multiline labels, and long numbers.
- Avoid fixed heights that clip when text grows. Do not combine small meta text with weak contrast.

## Corners and geometry

The source explains rounding through G1/G2 continuity, superellipse, and Figma 60% smoothing. Do not present the superellipse, Euler spiral, and Apple's actual corner implementation as proven equivalents of each other. Do not treat the 60% value as the mandatory standard for all iOS or web components.

- Standard `border-radius` is a sufficient and legitimate default for most web components.
- Use a few role-based radii; do not make every panel a pill or the same large radius.
- For the inner/outer corner relationship, `outer radius ≈ inner radius + gap` is guidance for consistent parallel borders; visually check border thickness, asymmetric padding, and differing shapes.
- Add a custom continuous corner only as progressive enhancement when the design requires it and browser support is verifiable. Do not use a clip-path that cuts the focus ring or content.

The Bar & Neta (2006/2007) and `p < 0.03` claims are citations in the source document; the studies were not reviewed for this package. Do not report conclusions such as “sharp corners create fear,” “curved corners build trust,” or “G2 increases conversion” as established causality for user interfaces.

## Motion

The source's physics model is `m·x'' + c·x' + k·x = 0`; the damping ratio is given as about 1 or 0.75–0.80, and the response value as 0.3–0.45 seconds. These are settings presented in the source, not measured parameters of all Apple animations. In libraries `response`, `duration`, and `stiffness` are not the same parameters.

- Short CSS transitions are enough for small state changes such as hover/focus.
- During direct manipulation, ongoing motion must remain able to answer new user input.
- When a spring is needed, use the documented parameters of the library already in the project; do not copy numbers across different APIs.
- The source's rubber-banding and momentum-projection statements do not count as production-ready algorithms because context, units, and boundary conditions are missing.
- Do not add scroll-jacking, forced tabs, or entrance animations. Do not replace the browser's native scrolling merely to imitate physics.
- `prefers-reduced-motion: reduce` works for transitions consuming CSS tokens; it does not automatically stop independent JS motion.

## Haptic feedback and glass

The Core Haptics success/warning/error, impact, and selection classes are a native-platform context. A web page cannot assume they exist or are accessible. Provide clear visual and textual feedback; vibration or sound is not required and is not added without explicit scope.

The source's visionOS and Liquid Glass narratives do not create a translucent-window requirement on a web page. Evaluate glass together with readability over content, scroll performance, and fallback. The page base can stay opaque in most cases.
