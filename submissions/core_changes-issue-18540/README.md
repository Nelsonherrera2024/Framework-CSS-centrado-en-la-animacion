# Scroll-Driven Animations · Scrollytelling Demo

Single-file scrollytelling demo (HTML + embedded CSS) featuring six scenes powered purely by CSS scroll-driven animations (`scroll-timeline`, `view-timeline`, `animation-range`). No JavaScript, no external dependencies.

## Scenes

1. **Horizon** — landscape rises from bottom via `scaleY` driven by `view-timeline`
2. **Drift** — tiles slide horizontally at staggered speeds (parallax effect)
3. **Bloom** — dot expands through concentric rings, shifts hue, morphs into a square
4. **Hops** — dots slide into view sequentially using per-element view timelines
5. **Rider** — surfer rides across a scrolling wave pattern
6. **Gauges** — five bars fill to target width via view-timeline keyframes

## Theme

Dark/light mode via `prefers-color-scheme`. Reduced motion via `prefers-reduced-motion`.
