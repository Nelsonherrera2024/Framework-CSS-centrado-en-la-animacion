# Glass Card Token Fix — Issue #5628

## Overview

This submission fixes the undefined `--ease-color-text-dark` token bug in the glass card
component and adds variant classes for different glass intensities.

## Bug Fix

The original `.ease-card-glass` relied on `--ease-color-text-dark` which was never defined
in `core/variables.css`, causing black/unreadable text in dark mode. Fixed by using
explicit fallback values and CSS custom properties scoped within the card.

## New Classes

| Class | Description |
|-------|-------------|
| `.ease-card-glass` | Base glass card component |
| `.ease-glass-subtle` | 55% opacity, 6px blur |
| `.ease-glass-strong` | 92% opacity, 24px blur |
| `.ease-glass-primary` | Primary color tint |
| `.ease-glass-success` | Success color tint |
| `.ease-glass-warning` | Warning color tint |
| `.ease-glass-hover` | Adds lift animation on hover |
| `.ease-glass-badge` | Icon badge for glass cards |
| `.ease-glass-header/footer/body` | Structured card sections |

## Tokens Used

- `--ease-glass-bg`, `--ease-glass-border`, `--ease-glass-blur`
- `--ease-color-*` with explicit fallbacks
- `--ease-radius-xl`, `--ease-radius-full`
- `--ease-space-*` scale, `--ease-shadow-lg`, `--ease-shadow-xl`