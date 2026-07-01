# Component: ease-image-zoom-hover

**Category:** Component — Image Interactions  
**Type:** Pure CSS  
**Folder:** `submissions/examples/ease-image-zoom-hover/`

---

## What does this do?
Adds a smooth, customizable image scale zoom effect on hover, combined with a glassmorphic overlay and an animated zoom-in hint icon.

---

## How is it used?

### Minimal HTML Structure

To use the default hover zoom effect:

```html
<div class="ease-image-zoom-hover">
  <img src="your-image.jpg" alt="Preview" class="ease-image-zoom-img">
  <div class="ease-image-zoom-overlay">
    <svg class="ease-image-zoom-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      <line x1="11" y1="8" x2="11" y2="14"></line>
      <line x1="8" y1="11" x2="14" y2="11"></line>
    </svg>
  </div>
</div>
```

---

## Why is it useful?

1. **Micro-interactions:** It gives immediate, clean hover feedback, signaling to the user that an image can be expanded, viewed, or clicked.
2. **Performance:** The zoom effect uses hardware-accelerated CSS `transform` and `opacity` properties, preventing browser reflows and keeping framerates at a solid 60fps.
3. **High Customizability:** Using CSS Custom Properties (Variables), developers can easily tweak the zoom intensity, duration, overlay coloration, and icon scaling directly in inline style attributes or parent elements.
4. **Accessibility Built-in:** Respects user preferences by automatically checking `@media (prefers-reduced-motion: reduce)`, disabling translation scales and intensive transitions for users sensitive to motion.

---

## Class Reference

| Class Name | Type | Description |
|---|---|---|
| `.ease-image-zoom-hover` | Base | The parent container wrapper. Keeps image content clipped (`overflow: hidden`) and sets the cursor style. |
| `.ease-image-zoom-img` | Element | Applied to the `<img>` element to ensure it covers the container and receives the scale transformation. |
| `.ease-image-zoom-overlay` | Element | The absolute positioned overlay that holds the glassmorphic blur and fades in. |
| `.ease-image-zoom-icon` | Element | The icon container that scales up with a lively overshoot spring easing on hover. |
| `.ease-image-zoom-hover--subtle` | Modifier | Decreases the zoom factor to 1.07x. |
| `.ease-image-zoom-hover--intense` | Modifier | Increases the zoom factor to 1.25x. |
| `.ease-image-zoom-hover--slow` | Modifier | Lengthens transition duration to 0.75s for a soft, premium feel. |
| `.ease-image-zoom-hover--fast` | Modifier | Quickens transition duration to 0.25s for a snappy feel. |
| `.ease-image-zoom-hover--no-overlay` | Modifier | Disables the overlay container and zoom icon, leaving only the image scale. |

---

## Customization (CSS Variables)

The component defines custom properties under `:root`, allowing deep visual tweaks:

```css
:root {
  --ease-zoom-scale: 1.15;                       /* Hover zoom scale factor */
  --ease-zoom-duration: 0.45s;                   /* Transition animation duration */
  --ease-zoom-ease: cubic-bezier(0.25, 1, 0.5, 1); /* Custom easing curve */
  --ease-zoom-overlay-bg: rgba(15, 23, 42, 0.4); /* Overlay color/opacity */
  --ease-zoom-icon-color: #ffffff;               /* Zoom SVG icon color */
  --ease-zoom-icon-scale-init: 0.7;              /* Icon initial scale */
  --ease-zoom-icon-scale-hover: 1;               /* Icon scale on hover */
}
```

### Custom Overrides Example

You can override these values on specific containers without changing the global stylesheet:

```html
<!-- Custom zoom level (1.3x) with a purple tinted overlay and slow speed -->
<div class="ease-image-zoom-hover" style="--ease-zoom-scale: 1.3; --ease-zoom-duration: 0.6s; --ease-zoom-overlay-bg: rgba(124, 58, 237, 0.55);">
  <img src="image.jpg" class="ease-image-zoom-img" alt="Custom Card">
  <div class="ease-image-zoom-overlay">
    <!-- SVG Icon -->
  </div>
</div>
```

---

## Contribution Notes
- Class naming is written to follow the standard `ease-*` naming convention.
- Created local high-quality assets inside the `assets/` directory to make the demonstration self-contained and performant.
