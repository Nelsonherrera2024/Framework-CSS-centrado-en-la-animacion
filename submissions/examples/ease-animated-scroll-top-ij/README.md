# Animated Scroll to Top

A fixed scroll-to-top button with a bounce entrance animation, hover rotation, and smooth scrolling — built with plain CSS and vanilla JavaScript.

## Features

- Smooth scroll-to-top on click
- Bounce-in animation when button appears
- Arrow rotates 360° on hover
- Appears / hides based on scroll threshold (400px)
- Respects `prefers-reduced-motion`
- Fully customisable via CSS custom properties
- Accessible (`aria-label`, keyboard-focusable)
- No dependencies — drop in and use

## Usage

1. Include `style.css` in your `<head>`.
2. Add the button HTML where you want it.
3. Copy the JavaScript (or use your own scroll handler).

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ast-btn-size` | `48px` | Button width & height |
| `--ast-btn-gap` | `24px` | Distance from bottom-right edge |
| `--ast-btn-bg` | `#2563eb` | Background colour |
| `--ast-btn-color` | `#ffffff` | Icon colour |
| `--ast-btn-shadow` | `0 4px 14px rgba(37,99,235,0.35)` | Box shadow |
| `--ast-btn-radius` | `50%` | Border radius |
| `--ast-transition` | `0.35s cubic-bezier(0.4,0,0.2,1)` | Opacity / transform transition |
| `--ast-bounce` | `cubic-bezier(0.68,-0.55,0.27,1.55)` | Bounce easing curve |
| `--ast-threshold` | `400px` | Scroll distance to show button |

## Browser Support

All modern browsers. Smooth scrolling requires Chrome 61+, Firefox 36+, Safari 15.4+, Edge 79+.

## License

MIT
