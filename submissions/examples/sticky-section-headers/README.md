## What

A long-form article layout that demonstrates `position: sticky` section headers. Each section has a `<h2>` header that sticks to the top of the viewport as the user scrolls through the content. A final section showcases `position: sticky` with `bottom: 0` behavior.

## How

- `.section-header` uses `position: sticky; top: 0;` with a `z-index` to stay above body text.
- The parent `.sticky-section` is a block container with enough padding so the sticky header has room to scroll within.
- `.sticky-section--bottom` demonstrates the less common `bottom: 0` stickiness — the header sticks to the bottom of its section when scrolled past.
- A dark backdrop with `::before` pseudoelement adds a subtle frosted-glass effect behind the sticky header.
- `prefers-reduced-motion` removes the backdrop blur transition for accessibility.

## Why

Sticky headers improve content scannability in long articles, documentation, and dashboards by keeping the current section label visible. This example shows the practical setup and highlights edge cases like stacking context, `z-index` conflicts, and the difference between `top` and `bottom` sticky behavior.
