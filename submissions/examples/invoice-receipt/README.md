# Invoice Receipt

## What does it do?
A print-friendly invoice/receipt page with animated CSS transitions — pure CSS, no JavaScript (except `window.print()` for the print button).

## Features
- Company header with ease-fade-down
- Line items with staggered ease-slide-in
- Totals section with ease-fade-in-up
- Payment status badge with ease-pulse
- Print button with ripple effect
- Print-friendly responsive layout with `@media print`

## Animations
| Class | Animation | Description |
|-------|-----------|-------------|
| `.fade-down` | fade-down 0.6s | Header slides in from above |
| `.slide-in` | slide-in 0.4s | Line items slide in from left, staggered |
| `.fade-in-up` | fade-in-up 0.5s | Totals fade in from below |
| `.pulse` | pulse 2s | Badge pulses 3 times |
| `.ripple` | ripple 0.4s | Button ripple on click |

## Browser Support
- `@keyframes` + `@media print` — Chrome 26+, Firefox 16+, Safari 6.1+

## Tech Stack
- HTML + CSS only
- `window.print()` on button (no JS framework)

## Preview
Open `demo.html` directly in browser. Use Ctrl+P to see print layout.
