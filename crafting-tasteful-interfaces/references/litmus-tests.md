# Litmus Tests

A clean deterministic scan does not pass these — they need a human-grade read.

1. **Brand-swap.** Cover the logo. Could this screen belong to three other brands in the same category unchanged? If yes, the signature move isn't working.
2. **Squint.** Blur your eyes or shrink the screenshot. Does the hierarchy still read — one clear focal point, not a flat gray field?
3. **First viewport.** Does it alone communicate what this is and who it's for, with no scrolling?
4. **Mobile-amputation.** At 375px, is every critical action still reachable, or did a feature quietly disappear?
5. **Read-aloud.** Read the copy end to end. Does it sound like a person describing a real thing, or confident-sounding filler?
6. **One-more-removal.** Can you delete one more decorative element without losing meaning? If yes, it wasn't earning its place.
7. **Editorial justification.** Serif display, earth-tone palettes, and editorial voice are legitimate only when the product context supports them (editorial, cultural, hospitality, fashion, craft). On dev tools, SaaS, fintech, or dashboards, they need an explicit reason — no answer means autopilot, revert to neutral.
8. **Render & diff.** A lint-clean pass on source code is not a verified pass — reasoning about markup is not the same as looking at pixels. If a browser, screenshot, or preview tool is available, capture the actual rendered surface at a wide viewport (~1920px) and a narrow one (~375-390px) and hold it directly against tests 1-7 and the hard-no list in `craft-and-antipatterns.md`. If no such tool exists in this environment, say so explicitly rather than silently treating the code-level review as equivalent.
