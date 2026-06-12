# Animated Neural Network Background — EaseMotion CSS

## 1. What does this do?

This component renders a full-screen, animated "neural network" style
background made entirely with HTML and CSS — no JavaScript, no canvas,
and no external libraries.

It includes:

- **20 glowing nodes** of varying sizes that gently pulse in scale and
  opacity, scattered across the viewport.
- **Multiple animated connection lines** (SVG) linking the nodes, with
  a moving dashed-stroke animation that simulates data flowing through
  the network.
- **Two large soft-focus gradient blobs** (blue/cyan and purple) that
  drift slowly across the background for atmospheric depth.
- **10 floating particles** that rise softly from the bottom of the
  screen and fade in and out, adding subtle ambient movement.
- A **glassmorphism hero card** (frosted-glass panel with blur,
  transparency, and soft border) sitting above the background, ready
  for a headline, call-to-action buttons, and quick stats.

Everything animates smoothly and infinitely using pure CSS keyframes,
with `prefers-reduced-motion` support for accessibility.

## 2. How is it used?

1. Place `demo.html` and `style.css` in the same folder and open
   `demo.html` in any modern browser — it's fully self-contained.
2. To integrate into your own project:
   - Copy the `.neural-bg` block (including the SVG `<svg class="connections">`,
     the `.node` elements, `.glow` elements, and `.particles`) into the
     top of your page body.
   - Copy the corresponding CSS sections from `style.css`
     (sections 2–5 and 7–8) into your stylesheet.
   - Replace the contents of `.hero__card` with your own headline,
     copy, and buttons — the glass panel styling (section 6) will
     carry over automatically.
3. Adjust node positions (`top`/`left` inline styles) and the SVG
   `<line>` coordinates to match your own layout, or simply leave the
   defaults for an immediate drop-in background.
4. Colors can be customized by editing the gradient stops in `.node`,
   `.glow--one`, `.glow--two`, and `.hero__title-accent`.

No build step, bundler, or JS runtime is required.

## 3. Why is it useful?

- **Premium, modern aesthetic** — instantly gives any landing page,
  dashboard, or portfolio an "AI company" look and feel without
  needing design or animation expertise.
- **Zero dependencies** — pure CSS means no performance hit from
  canvas redraws or JS animation loops, and no library version
  conflicts.
- **Highly reusable** — works as a background for hero sections,
  login screens, pricing pages, hackathon project sites, and SaaS
  dashboards.
- **Fully responsive** — node sizes and layout adapt gracefully across
  desktop, tablet, and mobile breakpoints.
- **Accessible by default** — respects `prefers-reduced-motion`, so
  users sensitive to motion get a static, calm version automatically.
- **Easy to customize** — colors, node count, positions, and animation
  timing are all controlled via straightforward CSS variables and
  classes, making it simple to match any brand palette.