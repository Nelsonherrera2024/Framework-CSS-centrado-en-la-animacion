# Resolve Conflicting Margin Declarations in ease-card

## What does this do?

Demonstrates conflicting margin declarations in the ease-card component and shows a resolution using a shared CSS custom property (`--card-section-gap`) so header, footer, and body spacing are consistent and overridable.

## How is it used?

Open `demo.html` in a browser. The left card shows the conflict with mismatched margins from two branches. The right card shows the resolved version using a single custom property.

### Key EaseMotion Classes Used

| Class | Purpose |
|---|---|
| `.ease-fade-in` | Header entrance animation |
| `.ease-slide-up` | Card entrance animation |
| `.ease-card` / `.ease-card-shadow` | Card styling |
| `.ease-grid` / `.ease-gap-4` | Layout |

## Features

- Side-by-side conflict vs resolution comparison
- Visual tags identifying conflicting declarations (Branch A / Branch B)
- Resolution using `--card-section-gap` custom property
- Dark mode support
