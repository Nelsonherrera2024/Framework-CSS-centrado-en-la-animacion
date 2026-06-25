# ease-cursor-spotlight – Cursor Spotlight

A cursor‑following spotlight effect for dark hero sections. A semi‑transparent dark overlay covers the area, and a radial gradient illuminates the region around the cursor. The spotlight position is driven by two CSS custom properties (--ease-cursor-x, --ease-cursor-y) that are updated via JavaScript on mousemove.

## EaseMotion classes used
- **Layout:** ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-text-center, ease-p-8
- **Background:** (custom)
- **Typography:** ease-text-5xl, ease-font-bold, ease-text-white, ease-text-xl, ease-text-slate-300
- **Spacing:** ease-mb-4
- **Animation:** ease-fade-in

## How it works
- The section uses a adial-gradient where the center is positioned using ar(--ease-cursor-x) and ar(--ease-cursor-y), which default to 50% 50%.
- A mousemove (and 	ouchmove) event listener calculates the cursor’s position relative to the section and updates the custom properties.
- A short CSS 	ransition on the ackground property creates a smooth, lagging follow effect.
- The effect respects prefers-reduced-motion by showing a static spotlight at the center.

## How to use
1. Add the class spotlight-section to any container.
2. Make sure the JavaScript snippet is included to update the custom properties on mouse movement.
3. Ensure the path to easemotion.css is correct.
