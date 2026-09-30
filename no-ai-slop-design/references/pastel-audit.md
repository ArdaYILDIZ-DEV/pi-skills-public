# Optional Pastel audit

Use only for helpful color diagnostics. Commands were checked with local Pastel 0.12.0; check availability/version and relevant help before use. If absent, do not install it: use existing tools and report missing checks. Bash pipelines should use `set -o pipefail`. Examples only print values.

```sh
command -v pastel
pastel --version
pastel format --help
pastel colorblind --help
```

```sh
pastel format oklch '#08090a' '#0b0f15' '#0e1621' '#111c2d'
pastel format luminance '#6b6a6b' '#fcfbf7'
for profile in prot deuter trit; do
  pastel colorblind "$profile" '#ef4444' '#22c55e' | pastel format hex
done
```

Use results to investigate surface ordering, chroma drift, or similar simulated status hues—not to declare visual or accessibility success.

- `OkLCh(...)` output is diagnostic, not CSS `oklch(L C H)`. Channels are rounded; locally luminance prints three decimals. Neither it nor OKLCH lightness differences supports near-threshold contrast decisions.
- 0.12.0 has no `contrast` command. Use a full-precision checker for actual pairs. If `crafting-tasteful-interfaces` is installed, resolve its bundled opaque-sRGB contrast helper through that skill; do not assume a sibling path.
- `textcolor` chooses only black/white; it does not verify custom text or composited backdrops. CVD simulation is approximate; always retain non-color cues and check each status against its background.

Repair the failing role/state while preserving the approved brand. Recheck on-action text, links, focus, selection, and relevant surfaces. Hand off an authorized palette overhaul with failing pairs and constraints; do not let `distinct` choose a new identity.
