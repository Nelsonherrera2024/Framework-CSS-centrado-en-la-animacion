# Animation Direction Showcase

A focused, hand-crafted demonstration of CSS animation direction classes — fade and slide variants entering from four directions: left, right, up, and down.

## Features

- Eight distinct animation classes using `translate3d()` for GPU-accelerated motion
- Fade variants combine opacity + translation for a smooth entry effect
- Slide variants translate without opacity change for a sharper movement
- Each direction has a unique accent color for visual distinction
- Replay buttons let viewers re-trigger animations without page reload
- Responsive 4-column grid collapses to 2 columns on small screens
- Respects `prefers-reduced-motion` by disabling all animation classes

## Example Usage

```html
<div class="anim-fade-from-left">Content slides in from the left</div>
<div class="anim-slide-from-up">Content slides down from above</div>
```

| Class | Direction | Effect |
|---|---|---|
| `anim-fade-from-left` | Left → Center | Fade + slide |
| `anim-fade-from-right` | Right → Center | Fade + slide |
| `anim-fade-from-up` | Top → Center | Fade + slide |
| `anim-fade-from-down` | Bottom → Center | Fade + slide |
| `anim-slide-from-left` | Left → Center | Slide only |
| `anim-slide-from-right` | Right → Center | Slide only |
| `anim-slide-from-up` | Top → Center | Slide only |
| `anim-slide-from-down` | Bottom → Center | Slide only |

## Animation Behavior

- **Fade classes** (`anim-fade-from-*`): `0.6s ease-out` — elements fade in while translating ~40px from the named direction
- **Slide classes** (`anim-slide-from-*`): `0.5s ease-in-out` — elements translate ~60px from the named direction with no opacity change
- All animations use `translate3d()` to leverage GPU compositing
- The `both` fill mode holds the final state so the element stays visible

## Accessibility

- `prefers-reduced-motion` media query disables all animation classes
- Animations are purely decorative; no information is conveyed via motion alone
- Replay buttons use native `<button>` elements with visible hover/focus states

## Browser Compatibility

- CSS `@keyframes` and `translate3d()` — supported in all modern browsers
- `prefers-reduced-motion` — supported in Chrome 74+, Firefox 67+, Safari 10.1+, Edge 79+
- CSS Grid — supported in all modern browsers
- No dependencies, polyfills, or JavaScript libraries required

## Acceptance Criteria

- [x] 8 animation classes covering fade and slide from 4 directions each
- [x] GPU-accelerated transforms via `translate3d()`
- [x] Responsive 4-column grid (2-column below 640px)
- [x] Replay buttons with vanilla JS
- [x] Reduced-motion fallback
- [x] Distinct color per animation direction
- [x] Usage snippet included in demo page
- [x] No external dependencies

Fixes #19102
