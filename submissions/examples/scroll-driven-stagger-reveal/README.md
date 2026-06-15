# Scroll-Driven Stagger Reveal

## What
A staggered card reveal using CSS scroll-driven animations (`view-timeline`). Six cards in a 3x2 grid each animate into view at different scroll positions using unique `animation-range` values.

## How
Each card gets a `view-timeline-name` and uses `animation-timeline: view(inline)` with `animation-range: entry 0% cover 50%` through `entry 100% cover 50%` in 20% increments. Cards fade up with `translateY` and `opacity` when their scroll-driven timeline reaches its active range.

## Why
Demonstrates the expressive power of `view-timeline` for creating sophisticated scroll-triggered staggered animations purely in CSS — no JavaScript scroll listeners needed. Helps developers understand how `animation-range` controls when each element animates relative to the viewport.
