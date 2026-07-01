# Component: Ease Floating Action Button (FAB)

**EaseMotion CSS** · `submissions/examples/ease-floating-action-button/`

A sleek Floating Action Button that expands into a vertical menu with a smooth staggered animation, requiring absolutely zero JavaScript.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/ease-floating-action-button/demo.html
```

---

## Usage

This component utilizes the "Checkbox Hack" to handle the open/closed state entirely within CSS. The staggered animation is handled efficiently via a CSS custom property `--item-index`.

```html
<div class="ease-fab-container">
  
  <!-- Hidden checkbox tracks state -->
  <input type="checkbox" id="fab-toggle" class="ease-fab-toggle">
  
  <!-- Main Button -->
  <label for="fab-toggle" class="ease-fab-main">
    <span class="ease-fab-icon">+</span>
  </label>

  <!-- Expanded Menu -->
  <div class="ease-fab-menu">
    <button class="ease-fab-item" style="--item-index: 1;">1</button>
    <button class="ease-fab-item" style="--item-index: 2;">2</button>
  </div>

</div>
```

---

## CSS Techniques

### 1. Zero JS State Management
The hidden `<input type="checkbox">` toggles the active state. CSS sibling selectors (`~`, `+`) target the menu and main button icon when the checkbox is `:checked`.

### 2. Staggered Animations via Custom Properties
Instead of writing separate CSS classes (`.delay-1`, `.delay-2`) for every potential menu item, we use a single custom property inline (`style="--item-index: 1;"`) and let `calc()` handle the math inside the stylesheet:

```css
.ease-fab-item {
  transition-delay: calc(var(--item-index) * 0.05s);
}
```

### 3. Icon Morphing
When expanded, the main FAB transforms its icon (via a simple `rotate(135deg)`) and morphs its background color to a danger/cancel state (Red).

### 4. Custom Tooltips
Hovering over a `.ease-fab-item` reveals a clean tooltip using the `::before` pseudo-element and the `attr(data-tooltip)` function.

---

## File Structure

```
ease-floating-action-button/
├── demo.html   — Pre-configured interactive demo
├── style.css   — Component styles and variables
└── README.md   — This documentation
```