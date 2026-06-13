# ease-toggle-switch

A pure CSS animated toggle switch component for EaseMotion CSS.

## Usage

```html
<label class="ease-toggle-wrapper">
  <input type="checkbox" class="ease-toggle-input">
  <span class="ease-toggle-slider"></span>
  Enable Feature
</label>
```

## Sizes

```html
<label class="ease-toggle-wrapper ease-toggle-sm">...</label>
<label class="ease-toggle-wrapper">...</label>
<label class="ease-toggle-wrapper ease-toggle-lg">...</label>
```

## Color Variants

```html
<label class="ease-toggle-wrapper ease-toggle-success">...</label>
<label class="ease-toggle-wrapper ease-toggle-danger">...</label>
```

## Classes

| Class | Description |
|---|---|
| `ease-toggle-wrapper` | Label wrapper |
| `ease-toggle-input` | Hidden checkbox input |
| `ease-toggle-slider` | Visible toggle track and thumb |
| `ease-toggle-sm` | Small size variant |
| `ease-toggle-lg` | Large size variant |
| `ease-toggle-success` | Green color variant |
| `ease-toggle-danger` | Red color variant |

## Features
- Pure CSS, zero JavaScript
- Accessible via native checkbox
- Keyboard navigable (Tab + Space)
- Focus ring for keyboard users
- 3 sizes, 3 color variants
- Disabled state support
- Respects prefers-reduced-motion
- Uses EaseMotion CSS design tokens