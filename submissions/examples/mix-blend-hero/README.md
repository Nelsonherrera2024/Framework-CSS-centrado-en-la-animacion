# Mix-Blend Hero

## What

A full-width hero section that showcases CSS mix-blend-mode effects. A background image sits behind heading text using `mix-blend-mode: difference`, and decorative overlay shapes use `multiply` and `screen` blend modes. Hovering the hero reveals the original, unblended composition for comparison.

## How

The hero is a single section with a background image (`background-size: cover`). The heading (`<h1>`) is positioned over it with `mix-blend-mode: difference`, which inverts the underlying colors for high-contrast typography. Two overlay `<div>` shapes (a circle and a polygon) are placed over the image with `mix-blend-mode: multiply` and `screen` respectively, creating tonal shifts. A `::before` overlay with `transition: opacity 0.4s` sits on top; on hover, its opacity drops to 0 to reveal the full blend effect. `prefers-reduced-motion` disables the hover transition and blend-mode changes.

## Why

Blend modes are powerful for creating rich, immersive hero sections without heavy image editing. This demo shows how `mix-blend-mode` works with text, how multiple blend modes interact across layered elements, and how a simple hover interaction can let users compare blended vs. original visuals—useful for design tooling and portfolio sites.
