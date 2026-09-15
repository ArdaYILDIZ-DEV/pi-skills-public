# AI Design Tells: binding catalog

The binding tell list for the `no-ai-slop-design` skill. SKILL.md Layer 1 is the condensed form; **this catalog governs in case of doubt.** Walk every category on every audit.

Root cause across every category: **uniformity + unconsidered defaults.** One card recipe, one button pair, one font, one radius, one shadow, one centered-section template, one accent at one lightness, applied to every piece of content. The highest-leverage fixes: (1) don't reuse a single template for differing content, (2) don't ship framework defaults (Inter/Geist, indigo-500, shadcn card), (3) don't add decorative slots that carry no information (pills, eyebrows, blobs, count-ups, one-side stripes), (4) signal hierarchy with size/weight/space, not `scale-105` + soft-shadow lifts, (5) write real copy and use real imagery.

**Detectability.** Most tells are code-certain (a literal class, font, or import). Items marked **needs render** need rendered pixels to judge honestly: palette dominance, spacing rhythm, visual hierarchy, motion. Without a render, flag those as inferred and lower-confidence.

**Severity:** **P0** screams AI on sight. **P1** is an obvious smell. **P2** is cosmetic. Fix P0 and P1 on every pass.

**On percentages.** Figures cited below come from a Playwright analysis of ~1,400 recent Show HN pages (1,590 submissions scored) (Krebs, "design slop," source 1): 16 deterministic CSS/DOM checks, a ~5–10% false-positive rate per the author's manual QA, on a sample that skews toward solo, AI-built projects. Read them as relative commonness in a slop-prone corner of the web, not ground truth.

**Why AI design converges.** A model trained on a decade of Tailwind tutorials, shadcn starters, and GitHub snippets regresses to the visual median of that corpus. It does not choose indigo; indigo is the average. Every fix below replaces a default with a decision.

---

## 1. Typography & fonts

- **Inter (or the system stack) for everything · P0.** Detection: `font-family` is Inter, `-apple-system`, `system-ui`, Roboto, or Arial, with no second face. Inter sitting alone in the `font-sans` stack of yet another Next/shadcn starter. Why: the default in nearly every AI tool and component library; a single neutral sans with no pairing means nothing was chosen. Fix (HTML/CSS): pair a characterful display face with a clean body face on `:root` (`--font-display`, `--font-body`). Fix (React/Tailwind): map two fonts in `tailwind.config` (`font-display`, `font-sans`) via `next/font` or `<link>`; never leave Geist/Inter as the only face.
```css
:root { --font-display: "Fraunces", Georgia, serif; --font-body: "Hanken Grotesk", system-ui, sans-serif; }
h1, h2, h3 { font-family: var(--font-display); }
body { font-family: var(--font-body); }
```
- **Geist / Geist Mono untouched, especially outside a Vercel project · P1.** Detection: `Geist`/`Geist_Mono` from `next/font` (or `GeistSans`/`GeistMono` from the geist package), or the `--font-geist-sans` var, on a deployed non-Vercel site. Why: the Next.js 15+ default. Shipping it untouched says "deployed the starter, never themed it." Fix: replace or pair deliberately; Geist Mono for code is fine, but headings need a face that belongs to the brand.
- **The trending trio · P1.** Detection: Space Grotesk headings + an Instrument Serif *italic accent word* + Inter/Geist body, appearing together. Why: reads as a unit, not a choice. Fix: keep at most one; pair with something off-trend.
- **The "tasteful free font" cluster as the only gesture · P1.** Detection: Space Grotesk, Geist, Syne, Sora, Instrument Serif, or Fraunces as the *only* design move (~15.8% of analyzed sites used one of this small set). Why: the second-order default. The non-generic choice became generic; Krebs's designer survey names Space Grotesk among the stock LLM font combos. Fix: keep the font only if it fits the direction, and pair it; otherwise pick from a wider pool (grotesques: Neue Haas, Aktiv, Söhne, Hanken; serifs: GT Sectra, Tiempos, Newsreader; a mono used with intent). Rule: never ship the font the last three projects shipped.
- **A lone serif-italic word in a sans headline · P1.** Detection: "The *modern* way to ship." Why: a recognizable canned "add personality" move. Fix: earn emphasis through weight, size, or color in the type system; commit serif/sans as a system or not at all.
- **Display serif for "premium" at large default tracking · P1.** Detection: Playfair, Instrument, DM Serif Display dropped in for luxury. Fix: a transitional/old-style face (Tiempos, GT Sectra, Source Serif) with tuned optical sizing.
- **`font-semibold` (600) as the heaviest weight on the page · P1.** Detection: no true 700–900 anywhere, so nothing tops the hierarchy. Inverse tell: everything `font-medium` (flat mush). Fix: real weight contrast (body 400, headings 700–800+).
- **`text-6xl/7xl` + `tracking-tight`/`tracking-tighter` reflex on every heading · P2.** Detection: even on faces that don't need negative tracking. Fix: set tracking optically per face/size; large display often wants only −0.01 to −0.02em.
- **Negative tracking copied down to body/labels (14–16px) · P2.** Why: hurts legibility, exposes a blanket class. Fix: body at 0.
- **Gradient-clipped heading text · P0.** Detection: `bg-clip-text text-transparent`, usually purple-blue. Why: a 2024-era default flourish that doubles down on the purple gradient and tanks contrast. Fix: solid high-contrast ink or brand color; emphasize with weight/size/one accent word, never a gradient fill.
- **`text-wrap: balance` on every heading · P2.** Detection: pyramid shapes, stranded last lines. Fix: only on 2–3 line headings; `text-pretty` for body; control wrap with measure.
- **Forced `<br>` in headings · P1.** Detection: breaks wrong at other breakpoints. Fix: constrain with `max-w-[Nch]`, let it wrap; `whitespace-nowrap` only for true keep-together pairs.
- **Overlong headline (4+ lines) / one-word orphan · P1.** Detection: models pad with "all-in-one platform to…". Fix: cut to one punchy line of ~5–9 words; set a measure that prevents orphans.
- **Artificially narrow left-aligned subtitle · P1.** Detection: left-aligned body capped at `max-w-md/lg`, wrapping into a thin floating column. Fix: let left-aligned body run to the container's content width; reserve max-width measures for *centered* text only.
- **Body locked at 16px `leading-7` everywhere · P2.** Detection: captions, body, lead all one size/leading. Fix: a real scale (lead 18–20, UI 14, caption 13) with role-based line-height.
- **Untouched mathematical modular scale · P2.** Detection: a clean 1.250 with nothing custom. Fix: hand-adjust steps for your content.
- **Uppercase eyebrow over every section · P2.** Detection: `text-xs uppercase tracking-widest text-muted` ("WHY US", "FEATURES"); ~10.5% used all-caps headlines. Why: the "dark SaaS" default eyebrow on every section without thought. Fix: none by default; let the heading lead. Vary openers: a number, a short question, a lowercase kicker, or nothing.
- **Decorative rule/hairline + spaced-caps kicker above the heading · P2.** Why: the subtle cousin of the pill. Do not swap one for the other. Fix: no eyebrow.
- **Monospace for non-code chrome · P2.** Detection: mono eyebrows, nav, labels to borrow dev cred. Fix: mono for code/tabular numerals only.
- **Faux italics / no optical sizing · P2.** Detection: slanted roman on a face with no italic; ignored variable `opsz`. Fix: real italics; `font-optical-sizing: auto`.
- **Non-tabular numerals in stats/pricing/tables · P1.** Detection: figures wobble and misalign. Fix: `font-variant-numeric: tabular-nums`.
- **Heading and body in the same family at the same width · P2.** Detection: no textural contrast. Fix: contrast by category or width.
- **Buttons/nav all identical `text-sm font-medium` · P2.** Detection: every CTA one undifferentiated voice. Fix: give the primary CTA real presence.
- **Justified body (`text-justify`) on web columns · P2.** Detection: rivers in the text. Fix: ragged-right left-align.
- **All-caps multi-word phrases at default tracking · P2.** Detection: cramped caps. Fix: add 0.05–0.1em, short strings only.
- **`text-shadow`/`drop-shadow` glow on flat headings · P2.** Fix: contrast + weight; a solid scrim if over a busy background.

---

## 2. Color & contrast

- **The purple/indigo-to-blue diagonal gradient · P0.** Detection: `linear-gradient(135deg, …)` from indigo/violet to blue in hero, CTA, or background glow; Tailwind form `bg-gradient-to-br from-indigo-500 to-purple-600`. Why: the canonical tell ("the Purple Problem"); traces to Tailwind UI defaulting buttons to `bg-indigo-500` (publicly owned downstream effect, 2025). The color was never tied to a brand. Fix: a dominant brand color + one sharp accent; tonal gradients within a single hue only, or a duotone from brand colors. Never the stock indigo-to-violet. A flat, confident color beats a timid gradient.
```css
:root { --ink: #101010; --paper: #f4f1ea; --accent: #e4572e; } /* a decision, not a default */
```
- **`bg-indigo-600`/`bg-violet-600` (#4f46e5/#7c3aed) as the primary · P1.** Detection: the only saturated color. The literal Tailwind/shadcn default (~10.7% of sites). Fix: a specific brand hex from outside the 500–600 indigo/violet band, defined as a token; tie the primary action to it with a real hover/active state.
- **"VibeCode purple" #8B5CF6/#A78BFA everywhere · P1.** Detection: in icons, glows, links, charts at once. The single most over-represented AI hue. Fix: ban the 250–280 hue range from accents for one project.
- **Forced dark-only mode · P1.** Detection: dark background + grey body text + all-caps labels ("dark = premium") hiding layout sins (20.3% of the analyzed sample). Fix: default light unless the product lives at night; make dark a real second theme.
- **Pure black `#000` page background · P1.** Detection: vibrates against white text, crushes elevation. Fix: off-black with temperature (#0E0E10 / zinc-950 / warm #14110F) + a real elevation ramp.
- **The shadcn default dark stack, unmodified · P1.** Detection: zinc-950 page, zinc-900 cards, zinc-800 borders, violet accent. Fix: shift the whole neutral ramp to a deliberate temperature; replace the accent. Same root as the dark "VibeCode purple" cluster: warm near-black, AA+ text, a meaningful accent. Never grey-on-grey body.
- **Grey/low-contrast body text · P1 (plus an accessibility defect).** Detection: `text-gray-500/400` on white, `slate-400` on dark. Why: AI tell AND a WCAG fail. Fix: near-black body on light (gray-700+, #1a1a1a), slate-200+ on dark; verify ≥ 4.5:1. Greys for genuinely secondary metadata only.
- **Timid, evenly-distributed palette · P0/P1 · needs render.** Detection: 4–5 colors at similar saturation/value, no dominant, no sharp accent; everything in a narrow mid-value band with no true black or white. Why: AI spreads color evenly and avoids commitment. Fix: the 60/30/10 discipline: one dominant neutral, one secondary, one loud accent (~90/10 neutral-vs-accent); anchor with at least one near-black and one near-white.
- **Single accent at one fixed lightness · P1.** Detection: links/buttons/icons/rings/charts all one flat accent value (no 50–900 ramp). Fix: build the accent as a full ramp.
- **Raw status colors · P1.** Detection: `green-500`/`red-500`/`yellow-500` untouched, appearing together. Fix: tune semantics to your palette's temperature.
- **Pastel-100 icon tiles + 600 icon · P1.** Detection: `bg-indigo-100` holding an `indigo-600` glyph, 3-up. Fix: drop the colored chips.
- **"Safe B2B" sky/blue trio · P1.** Detection: blue-600 / sky-500 / slate-50. The fallback-of-the-default. Fix: a specific off-blue + a real secondary.
- **Default `ring-blue-500`/`ring-indigo-500` focus · P1.** Detection: regardless of brand. Fix: focus/selection = your accent token.
- **Neon-on-dark colored glow · P2.** Detection: `shadow-[0_0_40px_rgba(139,92,246,0.5)]` on buttons/cards; vibrant colored `shadow-indigo-500/50`. Why: decoration with no function. Fix: shadow for elevation, not color theater; restrained neutral elevation, at most one deliberate glow.
- **Cyan/teal-on-near-black "terminal" duo · P1.** Detection: #22D3EE on #0A0A0A for "dev tool." Fix: a non-cyan signal color or warm the scheme.
- **The "calm" cream + sage + charcoal combo · P1.** Detection: #faf8f4 + ~#A3B18A + charcoal. Now the *anti*-purple default, its own template. Fix: keep a warm base but commit to a less-defaulted secondary (terracotta, ochre, oxblood, ink-blue) and vary value contrast.

---

## 3. Backgrounds & surfaces

- **Cream / warm off-white `#faf8f4`–`#f5f1ea` as the "intentional minimalist" background · P1.** Why: now a tell of its own. Fix: clean white or a deliberate, characterful surface.
- **Purple-to-blue hero gradient · P0.** Detection: `from-purple-600 via-violet-500 to-blue-500` (+ indigo/fuchsia cousins), usually `to-r`/`to-br`. The canonical AI-startup hero (28% of analyzed sites used gradients in backgrounds or titles). Fix: tonal (two shades of one hue), or a real photo; avoid the cross-hue sweep.
- **Amber-to-pink "warm gradient" · P1.** Detection: `from-amber-400 to-pink-500`. The fallback once people tired of purple: the same lazy two-stop sweep. Fix: earn warmth with real material/photography.
- **Conic/radial "aurora" mesh blobs · P1.** Detection: purple/pink/blue at low opacity behind the hero. A stand-in for "couldn't art-direct a background." Fix: flat brand color, a photo, texture, or structured negative space.
- **Blurred gradient "orbs" · P1.** Detection: `blur-3xl opacity-30` radial shapes. Fix: intentional art direction or confident whitespace.
- **Spotlight radial · P1.** Detection: soft white/purple glow from top-center of a dark hero. Fix: real content/imagery.
- **Faint `white/5` dotted or line grid · P1.** Detection: `bg-[url(/grid.svg)]` fading out on a dark hero. The purple gradient's companion. Fix: brand-meaningful texture or clean space.
- **Glassmorphism by reflex · P1.** Detection: `bg-white/10 backdrop-blur-md border-white/20` over a gradient; frosted nav AND cards (17.1% of sites); text-on-blur usually fails contrast. Fix: opaque surfaces + real elevation; restrict glass to one chrome element over a calm backdrop, only where layering is real (a nav over scrolling content).
- **Full-bleed `from-black/60 to-transparent` scrim over every hero/photo · P2.** Fix: art-direct contrast per image; localized scrim only where text sits.
- **Uniform soft shadows · P1.** Detection: every card `shadow-md/lg` at ~0.1 opacity. Fix: a 3–4 step elevation ramp with intentional y-offset; some surfaces use borders/contrast, no shadow.
- **Dark dividers all `border-white/10` · P2.** Detection: structure barely visible. Fix: surface-elevation contrast for separation; vary border opacity by hierarchy.
- **Gradient borders · P1.** Detection: cyan-to-purple `border-image` trick around cards/CTAs. Fix: a solid 1px brand border.
- **SVG "wave"/repeated divider between every band · P2.** Fix: let color/content/spacing define section changes.

---

## 4. Layout & page structure

- **The default hero · P0.** Detection: centered single column (`max-w-3xl mx-auto text-center`). Pill badge, centered H1 (~23.5% of sites center the title), centered subhead, one or two centered CTAs, screenshot below. Centering alone is not a tell; the badge + centered hero + three-card combo is. Fix (HTML/CSS): break symmetry with a left-aligned hero and asymmetric visual, an oversized type-driven hero, a split layout, or an editorial grid with off-center content. Let one element be dramatically larger. Fix (React/Tailwind): replace `flex flex-col items-center text-center` with a `grid` placing headline, supporting text, and media intentionally; drop the pill badge unless it carries real news.
- **The codified section order · P1 · needs render to confirm the full sequence.** Detection: hero → logo bar → 3 feature cards → "how it works" 3 steps → stat row → testimonials → pricing → FAQ accordion → CTA band → fat footer. The sequence itself is the fingerprint. Fix: reorder around your actual argument; drop/merge sections.
- **Three equal columns for everything · P0/P1.** Detection: `grid-cols-3`, forced equal height, regardless of content count/importance. Fix: vary column count and weight (7/5, 8/4); let item count drive layout.
- **"Feature soup" · P0.** Detection: N identical icon cards, same size, repeated. The most clichéd SaaS pattern (20.1% of analyzed sites). Fix: one large showcase row with a real screenshot; demote the rest to prose with inline emphasis or varied rows; if a grid is right, vary card size and content density.
- **One global container width · P1.** Detection: every section in `container mx-auto px-4` / `max-w-7xl mx-auto`, dead side-margins on wide screens. Why: one width, centered, forever. No spatial decision. Fix: a width system: full-bleed media, wide grids (~1200), narrow prose (~640–720).
- **Sticky frosted nav · P1.** Detection: logo-left / centered links / right CTA / `backdrop-blur bg-white/70`. The starter header verbatim. Fix: solid or transparent-over-hero; asymmetric link placement; no reflexive blur.
- **Fat 4-column footer · P1.** Detection: Product/Company/Resources/Legal + logo+tagline + newsletter + social row + "(c) 2026 … All rights reserved," whether the site has 5 pages or 500. Fix: build from what the site actually has: two columns and a line is often enough; drop empty columns and reflexive newsletter/social.
- **Final CTA band mirrors the hero · P1.** Detection: same cadence, same two buttons, "No credit card required." Fix: a distinct closing moment, one decisive action.
- **Uniform vertical rhythm · P2 · needs render.** Detection: same `py-20` everywhere, so inter-section spacing == intra-section spacing. Fix: a spacing scale with intent; large breaks between movements.
- **Stat band of 3–4 equal columns · P1.** Detection: big number + tiny label, evenly distributed (~12.2% of sites run round-number strips). Fix: few specific stats integrated into a relevant section; break the even distribution. Use real numbers or cut the strip. One specific true metric beats four invented ones.
- **Testimonials as a tidy 3-up of equal cards · P1.** Fix: one strong featured quote at scale, or a varied wall with real names/logos/photos and specific quotes.
- **Cards nested in cards / sections in bordered panels · P2.** Detection: over-structuring. Fix: flatten. Use whitespace, dividers, and type scale to group.
- **Symmetric 50/50 zigzag down the page · P2.** Detection: strictly alternating image side (NN/g: slows scanning). Fix: vary the ratio; don't auto-flip every row.
- **Siloed bands, zero overlap · P2.** Detection: clean top/bottom edge on every section. Fix: let elements cross boundaries for depth.
- **Centered hero mockup in `rounded-xl shadow-2xl` + glow · P1.** Fix: crop into a real UI detail, angle/offset, bleed off an edge.
- **Perfectly tessellated grid · P2.** Detection: every tile identical, no featured span, no intentional gap. Fix: `col-span`/`row-span` variation; a deliberate empty cell.
- **Overabundance of whitespace · P2.** Detection: vast empty padding signaling "minimal." Fix: purposeful spacing rhythm; real density where content earns it.
- **Mobile = every grid collapses to one `grid-cols-1` stack · P1.** Detection: endless identical card list on phones. Fix: keep some 2-up groupings; vary sizes; horizontal scroll for sets.
- **Hero is always two equal buttons · P1.** Detection: `flex justify-center gap-4`, solid + ghost. Fix: one dominant CTA; demote the secondary to a text link.
- **Numbered 1-2-3 "How it works" · P2.** Detection: three-step sequence with big numerals (~9.4%). Why: formulaic filler. Fix: keep only if the process genuinely has ordered steps; otherwise show the product doing the thing.
- **Bento grid as the default composition · P1/P2.** Detection: mixed-size tiles used because trendy, not because content needs it. Fix: bento only when tiles carry genuinely different weights of real content and sizes encode that.

---

## 5. Components & cards

- **The shadcn `<Card>` default for everything · P0.** Detection: default zinc/slate base from `components.json`, default `--radius`, unstyled `rounded-xl border bg-white p-6 shadow-sm` Card/Button/Badge (~23.5% shipped unmodified). Why: the framework-level tell. The starter deployed without theming. Fix: theme shadcn before shipping. Change base color and radius, restyle the most-used primitives (Button, Card), set your own type scale. Differentiate cards by role; not everything is a box.
- **Icon-feature card · P0.** Detection: glyph in a `h-12 w-12 rounded-lg bg-primary/10` square, title, two gray lines, 3-up. The most-generated component on earth. Fix: drop the icon chip; lead with a screenshot, number, or oversized index numeral.
- **Card with a thick colored top/left border · P1.** Detection: `border-t-4`/`border-l-4 border-primary` to "categorize" (~13% of sites). Why: "almost as reliable a sign of AI-generated design as em-dashes for text" (Krebs's designer source, verbatim). Fix: a real visual anchor (weight, scale, background, position) or remove the stripe.
- **3-tier pricing, middle "Most Popular" `scale-105` + ring · P1.** Detection: identical checkmark lists. Fix: match layout to the offer (two plans, a table, one plan with add-ons); signal recommendation via copy/contrast, not a pop-out.
- **Pricing CTAs "Get Started" / "Contact Sales" at identical weight · P1.** Fix: name the real action ("Start the 14-day trial").
- **Testimonial card with stars · P1.** Detection: round (often placeholder) avatar, name, "Title at Company" in gray, 5 gold stars, two sentences, 3-up. B2B testimonials don't have stars. Fix: real names/logos/photos + specific quotes; vary length.
- **Hero pill badge · P2.** Detection: `rounded-full border px-3 py-1` "Now with AI" + sparkle + dot (~4.7%). Why: a default ornament announcing nothing. Fix: a real changelog link or nothing; if real dated news, style it to the brand, not the stock pill.
- **Gradient primary button · P1.** Detection: purple-blue + glow. Fix: one solid brand color with a real hover state.
- **Primary + ghost hero duo · P1.** Detection: "Get Started" / "Learn More" at the same size. "Learn More" is a non-action. Fix: subordinate the secondary; use real labels.
- **shadcn `<Input>` default · P1.** Detection: `rounded-md border-input` + 2px offset focus ring. Fix: a deliberate field language; restyle focus.
- **Newsletter input-with-attached-button + "No spam. Unsubscribe anytime." · P1.** Fix: a concrete reason to subscribe; specific reassurance.
- **Copy-paste status badge · P2.** Detection: `rounded-full bg-{c}-100 text-{c}-800 text-xs`. Fix: build badges into your type system.
- **shadcn segmented tabs · P2.** Detection: gray track, white chip, soft shadow. Fix: underline tabs or just sections.
- **Stock modal · P2.** Detection: centered `max-w-md` + `bg-black/80` overlay + top-right X + Cancel(ghost)/Confirm(filled). Fix: name the consequence in the button ("Delete 3 files").
- **Comparison rows: green check / red X in circles · P1.** Detection: identical every row. Fix: restrained checkmarks, real values, quiet dash for absent.
- **Empty state in a dashed box · P2.** Detection: centered outline icon + "No data yet" + CTA. Fix: teach the next action; show a seeded example.
- **Sonner toast with library-default chrome · P2.** Detection: bottom-right default styling. Fix: position/style to the app; human copy.
- **Avatar stack + "+12k" + "Join 10,000+ developers" · P1.** Fix: real users only, or a concrete checkable proof point.
- **Hover lift on every card · P1.** Detection: `hover:-translate-y-1 hover:shadow-lg` everywhere. Fix: reserve motion for genuinely clickable elements; differentiate hover by role with tuned easing/duration.
- **`rounded-2xl shadow-lg` on everything · P1.** Detection: uniform large radius + soft shadow (~0.1 opacity) on every surface; identical radius + padding + card heights flatten hierarchy. Fix: use radius and elevation to express hierarchy. Vary by element role; let some surfaces be flat, some sharp; reserve strong shadows for things that genuinely float.
- **Untouched `--radius` · P1.** Detection: the shipped `--radius` left untouched (0.5rem in classic themes, 0.625rem in current defaults) on every component. Why: the radius is a fingerprint. Fix: set one fitting the direction (sharp/0 for brutalist or editorial, soft for playful); vary by role.
- **The default dark SaaS card · P1.** Detection: `bg-zinc-950`/`bg-gray-900` + `border-white/10` hairlines + faint shadow. Fix: a real dark palette (warm or cool near-black with intent); separate surfaces by more than a 10%-white border.
- **"Soft SaaS" everything-rounded · P1.** Detection: everything `rounded-2xl/3xl` + `shadow-lg/xl`, nested. Fix: a real radius scale used sparingly; some elements square; borders over ambient shadows.
- **Missing component states · P1 (plus an accessibility defect).** Detection: dead hovers, snapping buttons with no transition, forms with no focus/error/required/disabled/loading states. The happy path only. Fix (HTML/CSS): `:hover`, `:focus-visible`, `:active`, `:disabled` + `transition`; design error and empty states. Fix (React/Tailwind): `hover:`, `focus-visible:`, `disabled:`, loading/error variants; real validation states.

---

## 6. Imagery & photography

- **No images at all · P1.** Detection: text + gradients + icon-cards only. Real sites have images. Fix: real, relevant imagery: product screenshots first; genuine photography second.
- **AI-generated people · P1.** Detection: melted/six-finger hands, plastic waxy skin, dead/asymmetric eyes, warped jewelry/glasses/teeth/patterns, impossible physics or duplicated backgrounds, inconsistent lighting/shadows. Fix: real photography (even phone shots); if generative, crop hands out and audit at 200%.
- **Garbled text inside images · P1.** Detection: squiggle "dashboards," nonsense signage. Fix: never let a model render UI/text; screenshot the real app or composite real type.
- **Overused stock clichés · P1.** Detection: "diverse team laughing at a laptop," handshakes, recognizable Unsplash hits (woman-laughing-with-salad, hooded hacker); the bright open-plan office as the visual default for "company." Fix: reverse-image-search picks; prefer original or low-download images; show the product doing the job: real screenshots, real photography, or an illustration style that fits the direction.
- **Fake/AI avatars in testimonials · P1.** Detection: DiceBear/Avataaars blobs, AI faces, letter-in-a-circle initials, `pravatar.cc`; `aspect-video bg-muted rounded-xl` standing in for a real demo. Why: generated stand-ins where real content belongs. A strong "nothing real here yet" signal. Fix: real headshots + names + linked source, or drop avatars; real screenshots or recordings, never stock avatar services.
- **Corporate-Memphis / "Alegria" flat-vector people · P2 (precursor, not fresh AI evidence).** Detection: noodle limbs, lavender-coral, tiny heads, no faces. Lineage: a pre-AI corporate trend (Buck's "Alegria," 2017), still reproduced by image tools as "friendly corporate." Fix: a distinctive illustration style with a real voice, or photography/product UI.
- **Generic 3D-blob / chrome-orb / iridescent-bubble "hero art" · P1.** Detection: plastic-looking abstract 3D with a glossy sheen, no meaning. Fix: a real screenshot or a diagram of actual function; abstract forms only if specific to the brand.
- **Duotone wash over every photo · P2.** Detection: full map forcing consistency. Fix: genuinely consistent photos; subtle grading, not a full duotone map.
- **Tilted/isometric floating browser mockup on a gradient · P1.** Detection: the Shotsnapp/Screely look; repeated identical device frames. Fix: flat legible screenshot, or different real screens/states.
- **Fake dashboard screenshots and hallucinated infographics · P1.** Detection: up-and-to-the-right charts, lorem rows, all-green; bars not matching axes. Fix: real screenshots/real data; charts built with a real library.
- **Warped near-miss brand logos in "customer" walls · P1 (also a legal problem).** Fix: official assets with permission, or omit.
- **Too-clean, no-grain, batch-uniform images · P2.** Detection: same light/DOF/temperature across all. Fix: mix real sources; keep honest grain.
- **Idea-metaphor stock · P2.** Detection: rocket launches, lightbulbs, gears, climbing blocks. Fix: show the literal outcome the product produces.
- **AI gradient + nonsense-text OG/share image · P1.** Fix: generate OG programmatically with real type, or a clean screenshot; preview the rendered card.

---

## 7. Icons & illustration

- **One outline icon per feature in a rounded square · P1.** Detection: the icon-card grid (see K6/Components). Fix: icons must earn their place; lead with content/screenshots.
- **Hand-generated/AI icon SVGs · P1.** Detection: malformed geometry. Fix: **use an established icon library:** Heroicons, Lucide, Phosphor, Hugeicons, Tabler. NEVER let the model draw icon SVGs.
- **Lucide/Heroicons monoline sameness · P1.** Detection: the default thin-stroke set (Heroicons at 1.5px, Lucide at 2px) baked into every starter. Fix: a less-ubiquitous library (Phosphor with weights, Hugeicons) or a consistent custom treatment (filled, two-tone, brand color); never ship the default monoline grid untouched.
- **The overused Lucide glyph set · P1.** Detection: `Sparkles` beside "AI," `ArrowRight`, `Zap`, `Rocket`, `CheckCircle2`, `Star` straight from `lucide-react`. The `Sparkles` + "AI" pairing is the 2024–26 signature. Fix: pick icons for meaning, not availability; retire `Sparkles` for AI; match weight/style to the direction or draw a few simple custom marks.
- **Emoji used as icons · P1.** Detection: literal rocket/lightning/lock in bullets or nav (~3.8% had emoji in nav); renders inconsistently across OSes. Fix: a real icon set or custom marks. Reserve emoji for genuinely casual, human contexts. Never as the system's iconography. This covers emoji feature bullets and emoji heading bullets ("rocket Fast Setup").
- **The sparkle/star = "AI" on everything · P1.** Detection: visual noise on every AI feature/button/badge. Fix: a mark specific to what the feature does, or none.
- **Generic flat-pastel spot illustrations / section dividers · P2.** Detection: matching nothing about the brand. Fix: one opinionated illustration or photographic language; real imagery if you can't invest in custom.

---

## 8. Copy, microcopy & voice

- **Vague aspirational headline · P1.** Detection: "Build the future of work." "Your all-in-one platform." "Scale without limits." "Elevate your workflow." Why: brand-agnostic filler that could front any product. Fix: what the product does, for whom, in concrete terms. Specificity is the opposite of slop.
- **Promotional puffery · P2.** Detection: "stands as a testament to," "plays a pivotal role," "underscores the importance of," "leaves a lasting impact." Fix: the concrete fact ("99.98% uptime over 12 months").
- **Hedging throat-clearing · P2.** Detection: "it's important to note," "it's worth mentioning," "rest assured." Fix: delete it; the next sentence is the real one.
- **Context-padding openers · P2.** Detection: "in today's fast-paced/digital/ever-evolving world." Fix: open on a specific reader pain.
- **Audience-spanning hedge · P2.** Detection: "whether you're a startup or an enterprise." Fix: name one ICP precisely.
- **Before/after pivots · P2.** Detection: "Say goodbye to X / Say hello to Y," "No more X." Fix: state the after as a fact.
- **"AI-powered" / "leverage the power of AI" as the headline · P1.** Fix: lead with the outcome; mention tech only if it's a real differentiator.
- **Adjective reservoir · P1.** Detection: empower, harness, unlock, elevate, supercharge, streamline, robust, seamless, effortless, cutting-edge, best-in-class, next-level, world-class. Fix: a plain verb + a number/noun.
- **"Delve"-class diction · P1.** Detection: delve, dive into, navigate the complexities of, realm, tapestry, myriad, plethora, boasts. Fix: the word you'd say out loud.
- **Adverb stacking · P2.** Detection: effortlessly/seamlessly/instantly on every verb. Fix: prove the ease (a 3-step flow), drop the adverb.
- **The rule-of-three as a tic · P2.** Detection: "Fast, secure, and reliable," "Simple. Powerful. Yours." Fix: break the meter; one strong claim or an asymmetric set.
- **"Not just X, it is Y" / "More than just X" · P1.** Fix: make the positive claim directly.
- **Em-dash anywhere in UI copy · P0.** Detection: the single most-cited written AI tell, now mainstream-memed. This skill BANS em-dashes absolutely, and BANS the spaced-hyphen substitute (" - "): it is the same tell in disguise. Fix: restructure with periods, commas, colons, or parentheses. Ordinary compound-word hyphens are unaffected.
- **Hero copy clichés · P1.** Detection: "Transform your X," "Simple, transparent pricing," "Everything you need to X." Fix: specific, concrete value.
- **Smart quotes / proper ellipsis baked into UI strings & code · P2.** Fix: match the codebase convention (usually straight quotes in UI).
- **Title Case On Every Heading · P1.** Fix: sentence case for headings and buttons.
- **Bold-lead-in lists · P1.** Detection: "**Speed:** …". The literal shape of a pasted ChatGPT answer. Fix: prose or varied scannable lines.
- **Checkmark-prefixed feature lists · P1.** Detection: every line a green tick. Fix: a real comparison table where ticks carry meaning.
- **Placeholder identities left in · P1.** Detection: Acme Inc, Your Company, Jane/John Doe, jane@example.com, (555) 123-4567, 123 Main St, Lorem ipsum. Fix: real or realistic specifics.
- **Fabricated social proof · P1.** Detection: round-number praise ("changed our business!", Sarah M., Marketing Manager), round vanity stats ("10,000+ Happy Customers," "99% Satisfaction"), "Trusted by industry leaders" with no names. Fix: true odd numbers, named/linked sources, or cut it.
- **Model-voice FAQ · P2.** Detection: "Is [Product] right for me?" with answers echoing the question or opening "Great question!" Fix: verbatim questions from real tickets; answer in the first sentence.
- **Fake urgency · P1.** Detection: "Only 3 spots left!", static/looping countdown timers. Fix: only real, honored deadlines.
- **CTA clones · P1.** Detection: "Get Started," "Learn More," "Sign Up Now," "Try it Free." Fix: name the action/outcome ("Import my first invoice").
- **Mirrored feature/benefit pairs · P2.** Detection: "X so you can Y" on every feature. Fix: vary structure.
- **Arrow glyphs stapled to text · P1.** Detection: Unicode arrows (→ ← ↑ ↓) pasted into buttons, links, headings ("Get started →"). Why: the typographic cousin of the em-dash. A reflexive flourish welded onto every CTA. Fix: drop the glyph; if a control genuinely needs a directional affordance, use a real icon component sized/aligned to the text, only where it adds meaning. Never a raw arrow character in the copy.
- **Metronomic rhythm · P2.** Detection: every sentence medium, every paragraph 3–4 sentences. Fix: vary length hard; drop in a two-word sentence.
- **Symmetrical, opinion-free coverage · P2.** Detection: lists everything evenly, emphasizes nothing. Fix: lead with the one best thing; say what you're not for.
- **Empty personalization · P2.** Detection: "designed with you in mind," "built for the way you work." Fix: the specific workflow you fit.
- **Grandiose closers · P2.** Detection: "The future of X is here," "Join the revolution," "Experience the difference." Fix: a concrete next step + a real reason to act now.
- **Over-explained microcopy/tooltips · P2.** Detection: "Click here to add a new item to your list of items." Fix: trim to the minimum that works in context.
- For full prose, run the text through a writing-de-slop pass (e.g. an `avoid-ai-writing`-style review); this catalog covers UI-visible copy.

---

## 9. Motion & interaction

All motion tells are **P2** and **need render** to judge honestly, except missing reduced-motion handling (ship it regardless).

- **Fade-in-up on scroll for every element.** Detection: the AOS default. Fix: one hero reveal or a single staggered group; most content present on load.
- **Scroll-triggered word-by-word text reveals that gate copy.** Detection: NN/g notes this delays reading. Fix: render text immediately; animate decoration, never the words.
- **Scroll-jacking / pinned full-screen sequences.** Fix: respect native scroll; if you pin, keep it short with an obvious exit.
- **Uniform `hover:scale-105` + shadow lift on everything.** Fix: differentiate hover by role; tune easing/duration per surface.
- **Count-up/odometer on every stat.** Detection: pairs with fake round numbers. Fix: sparingly, for one real metric, or just show the number.
- **Infinite auto-scrolling grayscale logo marquee.** Fix: a static legible grid of real logos; if motion, slow and pausable.
- **Parallax overuse.** Detection: multi-layer, vestibular issues. Fix: skip it or one subtle depth cue; honor reduced-motion.
- **Blur-in / clip text reveal on headings.** Fix: crisp headings on load.
- **Buttons snap with no transition while decoration over-animates.** Fix: short intentional feedback (~120–200ms) on hover/press/toggle.
- **One global `duration-300 ease-in-out` for all transitions.** Fix: a timing scale (fast taps, medium cards, slower page-level); custom easings.
- **Idle floating/bobbing hero illustrations and "breathing" mockups.** Fix: remove idle loops or make them barely perceptible.
- **Animated color-shifting gradient backgrounds.** Detection: slow purple-blue mesh. Fix: static distinctive background or a real product visual.
- **Custom lagging cursor follower.** Fix: native cursor unless the interaction needs one.
- **Tilt-on-hover 3D cards on feature grids.** Fix: reserve playful 3D for one spotlight element.
- **Stacked engagement chrome on a short page.** Detection: scroll-progress bar + back-to-top rocket + reveals. Fix: add chrome only when it earns its place.
- **The copied "Linear glow."** Detection: dark hero + blurred animated gradient glow behind a product shot, lifted wholesale onto an unrelated product. Fix: borrow the principle (atmosphere, depth), not the exact effect. Build atmosphere fitting your own direction.
- **Scattered micro-interactions, no orchestration.** Detection: many small random hovers and bounces, no coherent motion language. Fix: define a motion language: shared easing, shared duration scale, a clear entrance. One orchestrated load beats scattered fidgets.
- **No `prefers-reduced-motion` handling anywhere.** Fix: gate ALL non-essential motion behind the media query with a static fallback. REQUIRED on every pass.

---

## What not to over-flag

A pattern is a tell when it is a **default reached for without reason**, not whenever it appears. Calibrate:

- **One gradient, used well and tied to the brand, is not slop.** The purple-gradient tell is about the *unchosen* indigo-to-violet, not gradients in general.
- **Glassmorphism and bento grids** are legitimate when the content calls for them. Flag them only as reflexive defaults.
- **Spacing uniformity** is a soft signal. Do not lead an audit with it.
- **Corporate Memphis** is pre-AI context, not evidence a model made something.
- A confident, intentional design that happens to be minimal is not "timid." Restraint executed well is a decision. Reward it.
- Context matters: a centered hero is P0 on a generic SaaS page and fine in a luxury layout.

---

## Sources

925studios (AI Slop Web Design guide), Impeccable (Slop), Developers Digest (16 vibe-coded patterns), Adrian Krebs (Show HN design-slop scoring), DEV/Alan West (the indigo-500 piece + "AI-generated look"), prg.sh / zeroskillai (purple-gradient), HN (color palette gives away AI slop), NN/g (zigzag layouts, scroll animations), Wikipedia (Signs of AI writing), Plagiarism Today (em-dashes), Lovable Detector / VibeEval, Originality.ai, shadcn docs + "shadcn trap" (freedesignmd), MindStudio / BrainGrid / Puck (design-systems-for-AI), MakeUseOf / ZSky / P20V (AI image artifacts), stock-cliché discourse (the 'woman laughing with salad' meme), Envato (stock cliches), learnui.design (mesh gradients), Deceptive Design (fake urgency), Creative Boom (2026 trends), Hugeicons / shadcndesign (icon libraries).

1. Adrian Krebs, "Show HN submissions… the same vibe-coded look" (design slop study, ~1,400 sites): https://adriankrebs.ch/blog/design-slop/
2. GIGAZINE, write-up of the design-slop study: https://gigazine.net/gsc_news/en/20260423-design-slop/
3. Anthropic, "Prompting for frontend aesthetics" (Claude Cookbook): https://platform.claude.com/cookbook/coding-prompting-for-frontend-aesthetics
4. "Why Every AI-Built Website Looks the Same (Blame Tailwind's Indigo-500)": https://dev.to/alanwest/why-every-ai-built-website-looks-the-same-blame-tailwinds-indigo-500-3h2p
5. "Why Your AI Keeps Building the Same Purple Gradient Website": https://prg.sh/ramblings/Why-Your-AI-Keeps-Building-the-Same-Purple-Gradient-Website
6. Daryl Ginn, "The Linear effect": https://rectangle.substack.com/p/the-linear-effect
7. "AI Slop Web Design: Spotting and Fixing Generic Websites" (925studios): https://www.925studios.co/blog/ai-slop-web-design-guide
8. "Your AI Slop Bores Me" (Know Your Meme): https://knowyourmeme.com/memes/sites/your-ai-slop-bores-me
9. "Claude Design: Build Branded Interfaces Without Generic AI Aesthetics" (MindStudio): https://www.mindstudio.ai/blog/claude-design-avoid-generic-ai-aesthetics
10. "Corporate Memphis" (Wikipedia): https://en.wikipedia.org/wiki/Corporate_Memphis

Per-pattern percentages are as reported in source 2's write-up of the study run; the author later expanded to 16 patterns across 1,590 submissions (source 1). The Tailwind `indigo-500` origin and its 2025 acknowledgment are from sources 4–5. The "colored left borders ≈ em-dashes" line is from source 1.
