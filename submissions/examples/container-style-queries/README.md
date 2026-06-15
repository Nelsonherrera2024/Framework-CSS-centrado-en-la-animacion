# Container Style Queries

## What
Cards that adapt their appearance based on a parent container's inline style using `@container style()` queries. Three theme contexts — dark, light, and colorful — are applied via JavaScript theme toggle buttons.

## How
Each card is placed inside a themed container div. The container is registered with `container-type: inline-size` and receives a `--theme` custom property. `@container style(--theme: dark)`, `@container style(--theme: light)`, and `@container style(--theme: colorful)` queries adjust card backgrounds, borders, typography, and accent colors accordingly.

## Why
Container style queries enable contextual styling without coupling components to global classes or parent selectors. This demo shows how a component can respond to its container's CSS custom properties — a paradigm shift from global to local reactive styling.
