## Overview

Demonstrates custom scrollbar styling using the `::-webkit-scrollbar` family of pseudo-elements. Four distinct themed variants — dark, light, colorful, and gradient — are applied to vertical scroll containers. A separate horizontal scrollbar section shows styling for `::-webkit-scrollbar:horizontal`. Each theme customizes the scrollbar track, thumb (with hover/active states), and corner.

## Techniques

- **`::-webkit-scrollbar`** controls the overall scrollbar dimensions (width/height)
- **`::-webkit-scrollbar-track`** styles the track background with solid colors or gradients
- **`::-webkit-scrollbar-thumb`** styles the draggable handle with color, border-radius, and border for inset appearance
- **`::-webkit-scrollbar-corner`** styles the intersection of vertical and horizontal scrollbars
- The `.theme--*` classes scope custom scrollbar styles to individual containers
- `prefers-reduced-motion` disables scroll-behavior and thumb transitions

## Usage

Open `demo.html` in a Chromium-based browser (Chrome, Edge, Opera, Brave). Scroll each themed panel to see different scrollbar treatments. The horizontal section at the bottom demonstrates scrollbar styling in the horizontal axis. Focus indicators (outline) are provided for keyboard accessibility.
