# @layer Order Fix — easemotion/all.css

Fixes #4618

## Problem

`easemotion/all.css` had no explicit `@layer` order declaration. Without it, browsers determine cascade priority based on the order layers are first encountered — which can differ across bundlers and import strategies. Modular consumers who import individual files in a different order than `all.css` can get unpredictable cascade results.

## Fix

Added a single `@layer` order declaration at the top of `easemotion/all.css`, before any imports:

```css
@layer easemotion-base, easemotion-components, easemotion-utilities;
```

This locks the cascade priority to `base → components → utilities` for all consumers.

## Demo

Open `demo.html` in a browser. The button and badge render correctly using the established layer order.
