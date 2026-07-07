# Tada-Click Modal

A pure CSS, zero-JavaScript modal that opens with a playful "tada" scale +
rotate animation — built for creative portfolio layouts (project showcases,
case-study previews, gallery lightboxes, etc.).

![no-js](https://img.shields.io/badge/JavaScript-0%20lines-brightgreen)

## ✨ Features

- **Zero JavaScript** — driven entirely by the CSS checkbox hack.
- **Tada-Click animation** — a bouncy scale/rotate keyframe sequence plays
  every time the modal opens.
- **Keyboard accessible** — the trigger is a real `<input type="checkbox">`
  styled as a button, so `Tab` + `Space`/`Enter` opens and closes it natively.
- **Customizable via CSS custom properties** — timing, easing, scale, colors,
  and sizing are all exposed, no need to touch the keyframes.
- **`prefers-reduced-motion` support** — the animation is disabled and
  replaced with a simple fade for users who request reduced motion.
- **Responsive** — the modal box scales to viewport width/height and scrolls
  internally on small screens.

## 📁 Files

| File         | Purpose                                            |
|--------------|-----------------------------------------------------|
| `demo.html`  | 3-card creative portfolio grid demonstrating usage  |
| `style.css`  | Component styles, animation, and custom properties |
| `README.md`  | This file                                           |

Open `demo.html` directly in a browser — no build step required.

## 🧱 Markup pattern

Each modal instance needs three pieces sharing one unique `id`:

```html
<input type="checkbox" id="modal-1" class="tada-modal-toggle"
       aria-label="Open details for [Project Name]">

<div class="tada-modal-overlay">
  <label for="modal-1" class="tada-modal-backdrop" aria-hidden="true"></label>
  <div class="tada-modal-box" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
    <label for="modal-1" class="tada-modal-close" aria-label="Close">&times;</label>
    <h2 id="modal-1-title">Project Name</h2>
    <p>Project description…</p>
  </div>
</div>
```

Give every instance on the page a different `id` (`modal-1`, `modal-2`, …) and
match it across the checkbox, backdrop label, and close label.

## 🎛️ Customization (CSS custom properties)

Override any of these on `:root`, a `.portfolio-item`, or a specific
`.tada-modal-toggle` to theme one instance without touching the CSS rules:

```css
:root {
  --tada-duration: 0.7s;                 /* animation length */
  --tada-easing: cubic-bezier(0.36, 0.07, 0.19, 0.97);
  --tada-scale: 1.1;                     /* peak scale during the tada bounce */
  --tada-rotate: 3deg;                   /* peak rotation during the bounce */

  --modal-radius: 16px;
  --modal-max-width: 480px;
  --modal-bg: #ffffff;
  --modal-overlay-bg: rgba(15, 15, 20, 0.72);
  --modal-accent: #7c3aed;               /* trigger button + tag color */
  --modal-text: #1a1a1a;
  --modal-fade-duration: 0.25s;          /* overlay fade in/out */
}
```

Example — a slower, larger bounce with a green accent for one card only:

```css
#modal-2 {
  --tada-duration: 1s;
  --tada-scale: 1.2;
  --modal-accent: #16a34a;
}
```

## ♿ Accessibility notes

- The trigger is a native `<input type="checkbox">`, so it is focusable and
  toggles with `Space`/`Enter` without any JavaScript.
- The overlay and close control are exposed via `<label for="...">`, which
  also toggles the same checkbox on click for mouse/touch users.
- `role="dialog"` and `aria-modal="true"` are set on the modal box, and
  `aria-labelledby` points to the modal's heading.
- **Known limitation:** because there is no JavaScript, this pattern cannot
  implement a full focus trap or close-on-`Escape`. Keyboard users close the
  modal by returning focus to the toggle checkbox (`Shift+Tab` back to it)
  and pressing `Space` again, or by tabbing to the visible close control.
  If your project requires strict WCAG 2.1 focus-trapping, pair this
  component with a small JS enhancement layer.

## 🌐 Browser support

Relies on `appearance: none` on `<input type="checkbox">` and the general
sibling combinator (`~`), both broadly supported in current evergreen
browsers (Chrome, Edge, Firefox, Safari). No vendor-specific hacks required
beyond the `-webkit-appearance` fallback already included in `style.css`.

## 🔗 Related issue

Closes #34063 — Enhancement: Add CSS Tada-Click Modal for Creative Portfolio
Layouts.