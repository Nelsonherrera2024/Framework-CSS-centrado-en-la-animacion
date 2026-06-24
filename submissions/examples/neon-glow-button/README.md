# Neon Glow Button Animation

## Overview

A showcase of modern neon glow button animations using only HTML and CSS. Features smooth hover effects with glowing borders, animated shadows, and multiple color variants — with pulse and fill-on-hover styles for interactive UI elements.

## Features

* Four color variants: indigo, pink, green, amber
* Glow border with box-shadow on hover
* Animated pulse glow keyframe on select variants
* Fill-on-hover gradient background variant
* Smooth hover lift and press effects
* Dark theme background
* Responsive grid layout
* Reduced-motion accessibility support

## Variants

| Variant | Border Color | Hover Glow |
|---------|-------------|------------|
| Indigo | #6366f1 | Purple neon glow |
| Pink | #ec4899 | Pink neon glow |
| Green | #10b981 | Green neon glow |
| Amber | #f59e0b | Amber neon glow |

## Example Usage

```html
<button class="btn btn-blue">Neon Button</button>
<button class="btn btn-pink btn-pulse-pink">Pulse Glow</button>
<button class="btn btn-blue btn-fill btn-fill-blue">Fill Hover</button>
```

## Animation Behavior

1. Hover: border brightens, box-shadow expands to create neon glow, slight lift.
2. Active: button returns to original position, glow reduces.
3. Pulse variant: box-shadow oscillates via `pulseGlow` keyframe.
4. Fill variant: gradient background fades in on hover.

## Accessibility

The component respects `prefers-reduced-motion` to disable all animations.

## Browser Compatibility

Compatible with modern browsers supporting CSS Animations, Transforms, Keyframes, Transitions, and Media Queries.

## Acceptance Criteria

* Uses CSS keyframes.
* Smooth and reusable animation.
* Lightweight implementation.
* Accessible design.
* Easy integration into existing projects.
* Consistent with EaseMotion CSS principles.
