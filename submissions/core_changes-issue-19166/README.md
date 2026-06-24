# Neon Glow Button Animation

A pure CSS button pack with neon glow effects, pulsing animations, and fill-on-hover variants — no JavaScript required.

## Features

- 4 color variants (Indigo, Pink, Green, Amber) with matching glow
- Hover expands glow to 20px / 40px with `translateY(-2px)` lift
- `pulseGlow` and `pulseGlowPink` keyframe animations for continuous glow oscillation
- Fill-on-hover variant using `::before` pseudo-element with gradient overlay
- Responsive flex-wrap grid layout
- `prefers-reduced-motion` disables all animations

## Variants

| Variant | Border Color | Hover Glow           |
|---------|-------------|----------------------|
| Indigo  | `#6366f1`   | `rgba(99,102,241,…)` |
| Pink    | `#ec4899`   | `rgba(236,72,153,…)` |
| Green   | `#10b981`   | `rgba(16,185,129,…)` |
| Amber   | `#f59e0b`   | `rgba(245,158,11,…)` |

## Example Usage

```html
<button class="btn btn-blue">Indigo</button>
<button class="btn btn-pink btn-pulse">Pulse Pink</button>
<button class="btn btn-blue btn-fill btn-fill-blue">Fill Hover</button>
```

## Animation Behavior

- **Hover**: box-shadow expands to 20px spread + 40px secondary blur, border brightens, button lifts 2px.
- **Active**: lift resets to 0px.
- **Pulse**: infinite 2s `ease-in-out` keyframe that oscillates glow intensity and border color.
- **Fill**: `::before` pseudo-element fades a gradient overlay in on hover.

## Accessibility

- `prefers-reduced-motion` media query disables all transitions and keyframe animations.
- Buttons remain fully functional (`:hover` / `:active` states still apply lift reset).

## Browser Compatibility

- CSS `background-clip: text` for gradient text requires Chromium 92+, Firefox 97+, Safari 15.4+.
- `box-shadow` with multiple comma-separated layers works in all modern browsers.
- `prefers-reduced-motion` supported in Chrome 74+, Firefox 63+, Safari 10.1+.

## Acceptance Criteria

1. Buttons render with dark background and centered layout
2. All 4 color variants show correct border and glow on hover
3. Pulse animations continuously oscillate glow
4. Fill-on-hover shows gradient overlay on hover
5. `prefers-reduced-motion` disables all animations
6. Header displays gradient text
7. No JavaScript is used
8. Layout is responsive and wraps on narrow screens

Fixes #19166
