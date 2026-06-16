## Overview

Demonstrates custom `::selection` and `::target-text` styling with distinct color schemes for different content types: prose, code blocks, headings (h3–h5 with varying shades), blockquotes, and status messages (error, warning, success). Each content type receives a unique selection background/text color pair to visually distinguish the type of content being selected.

## Techniques

- **`::selection`** (with `::-moz-selection` fallback) applies custom highlight colors scoped to specific containers
- **`::target-text`** applies a distinct yellow-on-dark highlight targeted by URL fragment navigation
- Global `::selection` provides a default purple highlight; each section overrides with its own variant
- Status messages use error (red), warning (amber), and success (green) selection palettes
- `prefers-reduced-motion` disables scroll-behavior for anchor navigation

## Usage

Open `demo.html` and select any text on the page. Each content type reveals its own selection color. Click the "Click here to scroll to the target demo" link to see `::target-text` in action (requires browser support for `::target-text`). The page is fully self-contained.
