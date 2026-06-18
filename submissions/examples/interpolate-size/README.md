# CSS interpolate-size

## Overview
This example demonstrates the CSS interpolate-size: allow-keywords property that enables smooth height/width animations with keyword values like uto, min-content, max-content, and it-content. Previously, CSS transitions couldn't animate to/from these intrinsic sizing keywords.

## Features
- **interpolate-size: allow-keywords** — enables transition/animation of intrinsic sizing keywords
- **Height auto transitions** — smooth accordion/card expand without JavaScript
- **Grid track animations** — works with grid rows/columns too
- **Safe default** — set on :root to enable globally

## How to Use
1. Add interpolate-size: allow-keywords to :root or the animating element
2. Use 	ransition: height 0.3s on the element
3. Toggle between a fixed height and height: auto to animate

## Browser Support
- Chrome 133+
- Edge 133+
- Safari 18.4+
