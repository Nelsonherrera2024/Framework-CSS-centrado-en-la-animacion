# CSS-only Animated Tooltip

### 1. What does this do?
A smooth, customizable animated tooltip powered entirely by CSS. It uses custom `data-tooltip` attributes on elements to define the tooltip text. Pseudo-elements (`::before` and `::after`) render the tooltip bubble and its directional arrow, accompanied by a subtle floating transition.

### 2. How is it used?
```html
<!-- Top tooltip (default) -->
<button class="css-tooltip" data-tooltip="This is a pure CSS tooltip!">
  Hover over me
</button>

<!-- Bottom tooltip -->
<button class="css-tooltip tooltip-bottom" data-tooltip="Here is more info below.">
  Hover over me
</button>
```

### 3. Why is this useful?
Tooltips are notorious for requiring heavy JavaScript libraries to calculate screen bounds and manage hover states. Providing a highly reliable, drop-in, purely CSS-based tooltip that automatically handles fading and translating on hover provides huge value for developers looking for lightweight UI patterns.
