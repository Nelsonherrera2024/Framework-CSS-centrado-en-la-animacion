# Conic Progress Ring

## What

Circular progress indicators built with conic gradients. Multiple rings display different target percentages (30%, 62%, 88%, 100%) and animate from 0 to their target on load. Each ring shows a centered percentage label that updates during animation. Colors transition at 25%, 50%, 75% thresholds (red → orange → yellow → green).

## How

Each ring is a `div` with a conic-gradient background that paints the filled portion using the `--percentage` custom property (converted to degrees). A `@property --percentage` declaration allows it to be animated. The inner circle is a smaller pseudo-element or child with the dark background color, creating the "donut" cutout. A centered `<span>` shows the running percentage, updated by a CSS `counter` or a small JavaScript animation loop that reads `getComputedStyle`. Color stops are placed at 25%, 50%, 75% of the filled arc; a fallback gray is used for the unfilled portion. `prefers-reduced-motion` snaps to the final percentage instantly.

## Why

Progress rings are a common UI pattern that typically require SVG or canvas. This demo shows they can be built purely with CSS gradients, which simplifies markup and keeps rendering on the compositor thread. It also demonstrates `@property` for animating custom properties, conic-gradient color-stop math, and threshold-based color shifting—all useful patterns for dashboards and data visualization.
