# Accessible Focus Utilities — Issue #2103

## Overview

This submission adds keyboard-accessible focus utility classes and ARIA patterns to
EaseMotion CSS, making interactive elements usable by keyboard-only and screen reader users.

## New Utilities

- **`.ease-focus-ring`** — Replaces browser default outline with a styled 2px solid ring
- **`.ease-focus-animated`** — Pulse animation on keyboard focus
- **`.ease-focus-glow`** — Glow box-shadow focus for card-like containers
- **`.ease-skip-link`** — Skip navigation pattern (visually hidden until focused)
- **`.ease-card-link`** — Accessible link-as-card pattern with full-card focus target
- **`.ease-btn-icon`** — Icon-only button base with proper aria-label support
- **`.ease-sr-only`** — Screen-reader-only utility (never visible, always accessible)

## Accessibility Features

- All icon buttons include `aria-label`
- Focus indicators respect `prefers-reduced-motion`
- Skip link is the first focusable element in DOM
- Card links use `aria-label` for descriptive context
- Dark mode focus rings use high-contrast colors

## Tokens Used

- `--ease-color-primary`, `--ease-color-primary-alpha`, `--ease-color-primary-light`
- `--ease-speed-fast`, `--ease-ease-out`
- `--ease-shadow-md`, `--ease-shadow-lg`
- `--ease-radius-*` scale