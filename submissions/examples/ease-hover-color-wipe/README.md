# Ease Hover Color Wipe

A text hover animation that sweeps a gradient color across text from left to right using CSS gradients and background clipping.

## Features

- Animated color wipe effect
- Works on links, buttons, headings, paragraphs, and spans
- Customizable colors
- Customizable direction
- Customizable duration
- Accessibility-friendly focus state
- Reduced-motion support

---

## Usage

```html
<a class="ease-hover-color-wipe">
  Hover Me
</a>
```

## Customization

### Change Colors

```css
--ease-wipe-from: #ffffff;
--ease-wipe-to: #14b8a6;
```

### Change Duration

```css
--ease-wipe-duration: 700ms;
```

### Change Direction

```css
--ease-wipe-direction: 270deg;
```

### Change Gradient Size

```css
--ease-wipe-size: 250%;
```

---

## Example

```html
<h2
  class="ease-hover-color-wipe"
  style="
    --ease-wipe-to:#f59e0b;
    --ease-wipe-direction:270deg;
  "
>
  Hover Me
</h2>
```

---

## Browser Support

- Chrome ✅
- Firefox ✅
- Edge ✅
- Safari ✅

---

Issue: #12525
