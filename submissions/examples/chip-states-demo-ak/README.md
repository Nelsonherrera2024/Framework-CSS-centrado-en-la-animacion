# Chip States Demo

Demonstrates a bug where chip component states (hover, active, selected, disabled) lack proper visual distinction due to missing state-specific CSS variable overrides.

**Issue:** [#5874 — Chip states demo](https://github.com/anomalyco/easemotion/issues/5874)

---

## What does this show?

Chip components do not visually differentiate between hover, active, selected, and disabled states. All states use the same background color, making it impossible for users to know the chip's interactive state.

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Shows chips with broken vs fixed state styling |
| `style.css` | Chip styles with and without state-specific tokens |
| `README.md` | This file |
