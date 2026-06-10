# Reduced Motion Fix — Loaders & Badges

Fixes #4617

## Problem

`components/loaders.css` and `components/badges.css` had no `prefers-reduced-motion` overrides. Users who enable the OS-level "Reduce Motion" accessibility setting still saw spinning, pulsing, and bouncing animations — which can cause discomfort or trigger vestibular disorders.

## Fix

Added a `@media (prefers-reduced-motion: reduce)` block to both files that sets `animation: none` on all animated elements:

- `loaders.css` — covers `.ease-loader-spin`, `.ease-loader-pulse`, `.ease-loader-ping`, `.ease-loader-dot`
- `badges.css` — covers `.ease-badge-pulse::after` and `.em-badge-pulse::after`

## Demo

Open `demo.html` in a browser. Enable **Reduce Motion** in your OS accessibility settings and reload — all animations should stop immediately.
