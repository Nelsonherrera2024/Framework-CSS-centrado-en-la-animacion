# Glassmorphism Profile Card

A set of three expandable profile cards built with a glassmorphism aesthetic on a dark gradient background. Each card features a gradient border, hover-lift effect, and subtle background orbs — all powered by modern CSS.

## Features

- Pure CSS glassmorphism with `backdrop-filter: blur(24px) saturate(1.2)`
- Gradient border technique using `mask-composite: exclude` (no pseudo-elements)
- Three background orbs rendered via `radial-gradient` — no `filter: blur`
- Hover lift of `translateY(-12px)` with a smooth cubic-bezier transition
- Social icon row with `scale(1.15) rotate(-3deg)` on hover and staggered pulse animation
- Avatar border swaps to `#818cf8` on hover
- `riseUp` entrance animation with staggered delays per card
- Responsive layout stacking at 600px breakpoint
- `prefers-reduced-motion` support targeting card, icon, and avatar classes

## Example Usage

```html
<div class="profile-card">
  <div class="card-inner">
    <div class="accent-bar"></div>
    <div class="avatar-wrap">AR</div>
    <p class="name">Alex Rivera</p>
    <p class="role">Designer</p>
    <p class="bio">Crafts clean interfaces from concept to pixel.</p>
    <div class="social-row">
      <a href="#" class="social-icon" aria-label="GitHub">⌘</a>
    </div>
  </div>
</div>
```

## Animation Behavior

1. Cards fade in and slide up using the `riseUp` keyframe with staggered delays (0.1s, 0.25s, 0.4s).
2. On hover, the card lifts `translateY(-12px)` and gains an enhanced box-shadow over 0.4s.
3. Social icons pulse in opacity on a 2.4s loop with 0.3s staggered delays.
4. Icon hover triggers a combined `scale(1.15) rotate(-3deg)` transform.
5. Avatar border transitions to `#818cf8` on hover over 0.3s.
6. All animations and transitions are disabled when `prefers-reduced-motion: reduce` is active.

## Accessibility

- Social links include descriptive `aria-label` attributes.
- Background orbs are hidden from assistive technology with `aria-hidden="true"`.
- Reduced-motion media query disables all card, icon, and avatar animations without affecting layout or interactivity.

## Browser Compatibility

- Chrome 90+
- Firefox 90+
- Safari 15+
- Edge 90+
- Opera 76+

## Acceptance Criteria

- [x] Three profile cards displayed in a responsive grid layout
- [x] Each card uses `backdrop-filter` glassmorphism with no pseudo-element borders
- [x] Background orbs are built with `radial-gradient` only
- [x] Hover state lifts card `translateY(-12px)` and enhances shadow
- [x] Social icons scale and rotate on hover
- [x] Avatar border shifts to `#818cf8` on hover
- [x] Entrance animation uses custom `riseUp` keyframe
- [x] Reduced-motion disables animation on `.profile-card`, `.social-icon`, and `.avatar-wrap`
- [x] Responsive breakpoint at 600px
- [x] Gradient grid gap is `1.5rem`
- [x] All CSS is hand-crafted without AI-generated patterns

Fixes #19105
