# Spotlight Hover Effect Proposal (`ease-spotlight`)

A proposal for `core/utilities.css` adding a dramatic radial spotlight that tracks the mouse cursor over dark elements.

## 🚀 Features

- **Cursor Tracking**: Minimal JS updates custom CSS properties to allow a radial gradient to follow the mouse.
- **`.em-spotlight`**: Base class that applies the hidden pseudo-element gradient.
- **Color Variants**: Includes modifiers like `.em-spotlight-blue`, `.em-spotlight-purple`, and `.em-spotlight-gold`.
- **Smooth Fade**: Gracefully fades in and out when entering/leaving the element.
- **Motion Safe**: Fully respects `prefers-reduced-motion: reduce` by disabling the opacity transition.

## 🛠️ Usage

Open `demo.html` in your browser. All code is contained within `style.css`. Hover over the cards to see the spotlight track your cursor!

You can apply the proposed utility classes to any card or hero section. It requires a small snippet of JS to map the `mousemove` event to the CSS custom properties `--spotlight-x` and `--spotlight-y`:

```html
<div class="em-spotlight em-spotlight-blue">
  <div class="content">My Card Content</div>
</div>
```

```javascript
// Map mouse coordinates to CSS variables
document.querySelectorAll('.em-spotlight').forEach(el => {
  el.addEventListener('mousemove', e => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--spotlight-x', `${x}px`);
    el.style.setProperty('--spotlight-y', `${y}px`);
  });
});
```

*Note: This is submitted via the `submissions/examples/` directory to adhere to the strict CI/CD guidelines preventing external modification of `core/` files. The maintainer can easily merge these rules into `core/utilities.css`.*

## 🔗 Related Issue
Resolves Issue #15992
