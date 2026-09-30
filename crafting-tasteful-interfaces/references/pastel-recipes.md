# Optional Pastel recipes

Choose seeds and semantic roles first; Pastel computes candidates, not taste. Checked locally with 0.12.0. Check availability/version and relevant subcommand help; if absent, reuse tokens or supported CSS color arithmetic without installing anything. Examples print values only; use bash `set -o pipefail` for pipelines.

```sh
command -v pastel
pastel --version
pastel mix --help
pastel format --help
```

## Inspect and derive

```sh
pastel format oklch '#2563eb'
pastel format oklch-lightness '#2563eb'
pastel format oklch-chroma '#2563eb'
pastel format oklch-hue '#2563eb'
```

Diagnostic `OkLCh(...)` is not CSS `oklch(L C H)`. Channels are rounded; hex targets sRGB and can alter channels through conversion/clipping/quantization. Verify gamut/results; no fixed chroma limit guarantees safety.

Hypothetical dark surfaces. `mix -f` weights the **first/base** color; substitute approved seeds:

```sh
base='#08090a'
accent='#3b82f6'
for fraction in 0.06 0.12 0.18; do
  pastel mix --colorspace=OkLab -f "$fraction" "$accent" "$base" | pastel format hex
done
pastel gradient --colorspace=OkLab -n 4 '#08090a' '#111c2d' | pastel format hex
pastel mix --colorspace=OkLab -f 0.15 '#ffffff' "$base" | pastel format hex
```

Three mixes produce `#0b0f15`, `#0e1621`, `#111c2d`. Inspect actual surface separation, text/states, and borders before assigning roles.

Hypothetical reading ink and accent calibration:

```sh
paper='#fcfbf7'
ink='#18181b'
pastel mix --colorspace=OkLab -f 0.90 "$ink" "$paper" | pastel format hex
pastel mix --colorspace=OkLab -f 0.60 "$ink" "$paper" | pastel format hex
pastel mix --colorspace=OkLab -f 0.96 "$paper" '#c2410c' | pastel format hex
pastel set oklab-l 0.72 '#a88d67' | pastel format hex
```

Outputs: `#2b2a2d`, `#69696a`, `#fbf4ee`, `#bba079`. Lightness adjustment does not guarantee contrast. HSL convenience commands (`lighten`, `darken`, `complement`, saturation changes) can explore colors but not uniform perceptual steps; use explicit OkLab interpolation when that is the goal.

## Full-precision solid-color contrast

0.12.0 has no `contrast` command; `format luminance` rounds to three decimals locally. Do not base threshold decisions on it or OKLCH lightness differences.

Use the [contrast helper](../scripts/contrast.mjs) for opaque sRGB hex pairs. Requires installed Node, no dependencies/file writes. Resolve paths from this skill; examples run from its directory:

```sh
node scripts/contrast.mjs '#69696a' '#fcfbf7'
node scripts/contrast.mjs '#ededed' '#111c2d'
node scripts/contrast.mjs '#bba079' '#121314' 7
```

Arguments: foreground, background, optional threshold (default 4.5). Only `#RGB`/`#RRGGBB`; exit 0 meets threshold, 1 fails, 2 rejects invalid/unsupported input. Decisions use full precision. [Tests](../scripts/contrast.test.mjs): `node --test scripts/contrast.test.mjs` from this directory.

Use 4.5 for normal text, 3 for qualifying large text/applicable essential UI; 7 tests that pair, not full AAA conformance. Alpha, gradients/images, wide gamut, and dynamic backdrops need an appropriate existing checker against actual composited colors. Report unsupported checks, never silently pass them. `textcolor` only chooses black/white, not custom text roles.

## Status and categorical candidates

```sh
for profile in prot deuter trit; do
  pastel colorblind "$profile" '#b91c1c' '#34d399' '#f59e0b' | pastel format hex
done
pastel distinct -m CIEDE2000 4 '#2563eb' | pastel format hex
```

CVD simulation is approximate; preserve labels/shapes/patterns and contrast against each status's background. No simulated-color ratio proves accessibility.

`distinct` optimizes separation, not harmony. Use reviewed chart/tag candidates, not automatic brand/surface or sequential scales. Output may vary and slightly alter seeds; freeze reviewed results and recheck after adjustments.

Report actual commands, chosen roles, pair measurements, and remaining checks. Arithmetic success is not rendered quality or compliance.
