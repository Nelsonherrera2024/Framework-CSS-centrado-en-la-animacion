# Animated Employee Attendance Dashboard

A self-contained, animated HR dashboard component built with pure HTML and CSS.  
Submitted to [EaseMotion CSS](https://github.com/SAPTARSHI-coder/EaseMotion-css) as a contribution under `submissions/examples/`.

---

## Preview

Open `demo.html` directly in any modern browser — no build step, no dependencies.

---

## What It Includes

| Section | Description |
|---|---|
| **Dashboard Header** | Title, subtitle, live badge with pulse animation, current date |
| **Employee Profile** | Avatar with online indicator, name, role, department, status badges |
| **Progress Rings** | Animated SVG rings for Attendance (92%), Punctuality (87%), Avg Hours (9.2h) |
| **Weekly Overview** | 5-day grid showing Present / Late / Absent status with icons and hours |
| **Leave Balance** | Animated progress bars for Casual, Sick, and Earned leave |
| **Working Hours** | Per-day bar chart with gradient fills and animated entry |

---

## Animations Used

- `ease-fade-in` — full dashboard entrance
- `ease-slide-up` — staggered section entries (`ease-delay-100` through `ease-delay-400`)
- `ease-pulse` — live badge
- `ease-hover-lift` — stat cards and bottom cards
- `ease-hover-grow` — weekly day cards
- Custom `@keyframes` — SVG ring fill, bar-grow, hours-bar-grow

---

## File Structure

```
animated-employee-attendance-dashboard/
├── demo.html   ← full self-contained demo
├── style.css   ← all component styles
└── README.md   ← this file
```

---

## How to Use

```html
<!-- 1. Load EaseMotion CSS from CDN -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/SAPTARSHI-coder/EaseMotion-css@main/easemotion.min.css"
/>

<!-- 2. Load the component stylesheet -->
<link rel="stylesheet" href="style.css" />

<!-- 3. Copy the HTML from demo.html into your project -->
```

No JavaScript required. All animations are pure CSS.

---

## Design Decisions

- **Dark theme only** — matches modern HR platform aesthetics (Workday, Rippling, Gusto dark modes)
- **CSS custom properties** — all colors are tokens under `:root`, easy to retheme
- **SVG rings** — `stroke-dashoffset` animation is the most reliable cross-browser method for circular progress
- **Staggered delays** — each section animates in sequence using `ease-delay-*` utilities from EaseMotion CSS
- **No JavaScript** — hover effects, animations, and layout are fully CSS-driven

---

## Responsive Behaviour

| Breakpoint | Change |
|---|---|
| `≤ 680px` | Bottom grid goes to single column; header stacks vertically |
| `≤ 480px` | Ring grid goes to single column; rings shrink to 80px |

---

## Checklist

- [x] Placed inside `submissions/examples/` only
- [x] Does not modify `core/` or `components/`
- [x] Self-contained — works by opening `demo.html` in a browser
- [x] Uses EaseMotion CSS animation classes
- [x] Includes `demo.html`, `style.css`, and `README.md`
- [x] One feature per PR
- [x] No duplicate of an existing EaseMotion CSS class

---

## Inspired By

BambooHR · Workday · Zoho People · Gusto · Rippling · ADP