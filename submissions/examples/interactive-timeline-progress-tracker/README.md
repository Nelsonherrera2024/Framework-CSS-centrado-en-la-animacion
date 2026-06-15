# Interactive Timeline Progress Tracker

A premium CSS-only progress tracker component for EaseMotion, designed to match modern SaaS onboarding flows, shipment tracking systems, application status trackers, and project management dashboards.

---

## 1. What does this do?

This component renders a **horizontal multi-step timeline** that communicates progress through a sequence of milestones. It visually distinguishes three states across any number of steps:

- **Completed** — nodes animate in with a pop-in scale effect and an SVG checkmark that draws itself via stroke animation.
- **Current** — the active step pulses with dual concentric rings, a glowing violet indicator dot, and a hover tooltip showing contextual status.
- **Inactive** — future steps are rendered in a muted, low-contrast style so they recede visually.

A connecting track runs between all nodes. The completed portion fills smoothly from left to right using a `lineFill` keyframe animation, creating the illusion of progress being drawn in real time.

The full animation suite uses four CSS `@keyframes`:

| Name | Effect |
|---|---|
| `popIn` | Bouncy scale entrance for completed nodes |
| `pulse` | Dual concentric ring glow on the active step |
| `lineFill` | Smooth left-to-right width expansion of the progress track |
| `checkmark` | SVG stroke-dashoffset draw animation for the ✓ icon |

---

## 2. How is it used?

### File structure

```
interactive-timeline-progress-tracker/
├── demo.html   ← Self-contained demo page
├── style.css   ← All styles and animations
└── README.md
```

### Basic markup

Link the stylesheet and build your timeline with semantic HTML:

```html
<link rel="stylesheet" href="style.css" />

<div class="timeline" role="list">

  <!-- Background track (add once, inside .timeline) -->
  <div class="timeline-track" aria-hidden="true">
    <div class="timeline-track-fill"></div>
  </div>

  <!-- Completed step -->
  <div class="timeline-step completed" role="listitem">
    <div class="timeline-node" data-tooltip="Completed Jan 12">
      <svg class="check-icon" viewBox="0 0 22 22" aria-hidden="true">
        <path class="check-path" d="M4 11.5l5 5 9-9" />
      </svg>
    </div>
    <div class="timeline-label">
      <span class="timeline-step-name">Account Created</span>
      <span class="timeline-step-tag">Done</span>
    </div>
  </div>

  <!-- Current step -->
  <div class="timeline-step current" role="listitem" aria-current="step">
    <div class="timeline-node">
      <span class="tooltip" aria-hidden="true">In progress</span>
      <div class="current-dot"></div>
    </div>
    <div class="timeline-label">
      <span class="timeline-step-name">Review</span>
      <span class="timeline-step-tag">Active</span>
    </div>
  </div>

  <!-- Inactive / future step -->
  <div class="timeline-step inactive" role="listitem">
    <div class="timeline-node" data-tooltip="Pending">
      <div class="inactive-dot"></div>
    </div>
    <div class="timeline-label">
      <span class="timeline-step-name">Completed</span>
      <span class="timeline-step-tag">Pending</span>
    </div>
  </div>

</div>
```

### State modifiers

Apply exactly one state class to each `.timeline-step`:

| Class | Meaning |
|---|---|
| `.completed` | Milestone reached — shows animated checkmark |
| `.current` | Active step — shows pulse rings and dot |
| `.inactive` | Future step — muted appearance |

### Progress fill

The `.timeline-track-fill` element's `lineFill` animation ends at `75%` width by default (3 of 4 gaps complete). To match your own progress, override the keyframe endpoint or add a utility class:

```css
/* Example: 2 of 4 gaps = 50% */
.timeline-track-fill {
  animation: lineFill 1.4s cubic-bezier(0.22, 1, 0.36, 1) 0.3s forwards;
}

@keyframes lineFill {
  0%   { width: 0%; }
  100% { width: 50%; }
}
```

### Wrapping in a card

The demo uses `.card` for a glassmorphism container. This is optional — the timeline works standalone on any background.

---

## 3. Why is it useful?

Progress trackers are one of the highest-leverage UI patterns in product design. Research consistently shows they reduce abandonment during multi-step flows by giving users a clear sense of how far they've come and how close they are to the finish line. This implementation solves several common problems at once:

**Zero JavaScript.** The entire component — animations, hover states, tooltips, responsive layout — runs on pure HTML and CSS. There are no dependencies to install, no runtime errors, and no hydration overhead. It drops into any stack.

**Accessible by default.** The markup uses `role="list"` / `role="listitem"`, `aria-current="step"` on the active milestone, and `aria-label` on nodes. The fill animation respects `prefers-reduced-motion` — on devices that request reduced motion, all animations are disabled and the final state is rendered instantly.

**Visually distinctive.** The component uses a deep-navy glassmorphism card, an indigo→violet→emerald gradient track, and micro-interactions (pop-in bounce, SVG stroke draw, pulse rings, lift-on-hover) that communicate quality without requiring a design system or component library.

**Easy to adapt.** The entire color palette and sizing system lives in CSS custom properties (`--color-success`, `--node-size`, `--grad-accent`, etc.) at the top of `style.css`. Retheming takes minutes.

**Production-ready patterns.** The component mirrors what you'd find in Stripe's onboarding, Linear's project flows, or Shopify's setup guides — the same structural grammar that users already know how to read.