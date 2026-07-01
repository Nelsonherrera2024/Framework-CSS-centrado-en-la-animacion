# Multi-Layer Box Shadow Elevation Scale

A lightweight SCSS mixin that generates layered `box-shadow` values to simulate realistic depth/elevation, inspired by Material Design's elevation system. Instead of a single flat shadow, each level stacks multiple shadow layers on top of one another — producing a softer, more natural sense of depth.

## Why multi-layer?

A single `box-shadow` often looks flat or artificial. Real-world shadows are actually a combination of a tight, dark shadow close to the object and a soft, diffuse shadow further out. This utility recreates that by layering several shadows with different offsets, blur radii, and opacities per elevation level.

## Files

- `_multi-layer-box-shadow-elevation-scale.scss` — the SCSS source (mixin + map + utility classes)
- `style.css` — compiled CSS output
- `demo.html` — visual demo of all elevation levels

## Usage

### 1. Import the partial
```scss
@use "multi-layer-box-shadow-elevation-scale" as elevation;
```

### 2. Use the mixin directly
```scss
.card {
  @include elevation.elevation(3);
}
```

### 3. Or use the generated utility classes
```html
<div class="card elevation-3">Content</div>
```

Utility classes `.elevation-0` through `.elevation-5` are auto-generated from the `$elevation-levels` map.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| `$level` | Number (0–5) | — required | The elevation level to apply. Determines how many shadow layers are stacked. |
| `$color` | Color | `rgba(0, 0, 0, 1)` | Base color used to derive each shadow layer's RGBA value. |

## Customizing levels

Elevation levels are defined in the `$elevation-levels` map as `(y-offset, blur, spread, opacity)`:

```scss
$elevation-levels: (
  0: (0px, 0px, 0px, 0),
  1: (1px, 2px, 0px, 0.05),
  2: (2px, 4px, -1px, 0.08),
  3: (4px, 8px, -2px, 0.10),
  4: (8px, 16px, -4px, 0.12),
  5: (12px, 24px, -6px, 0.16)
);
```

Add, remove, or adjust entries to fit your design system — the mixin and utility classes will update automatically.

## Compiled CSS output (excerpt)

```css
.elevation-1 {
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.2s ease-in-out;
}

.elevation-3 {
  box-shadow:
    0px 1px 2px 0px rgba(0, 0, 0, 0.05),
    0px 2px 4px -1px rgba(0, 0, 0, 0.08),
    0px 4px 8px -2px rgba(0, 0, 0, 0.10);
  transition: box-shadow 0.2s ease-in-out;
}
```

## Demo

Open `demo.html` in a browser to see five cards showing elevation levels 1–5 side by side.