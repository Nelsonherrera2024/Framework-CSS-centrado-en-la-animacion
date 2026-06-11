# Animated Gradient Text

## 1. What does this do?
Text with an animated shifting gradient background, clipped to the text using `background-clip: text`.

## 2. How is it used?
Add the `.gradient-text` class and a variant (`.gradient-shift`, `.gradient-rainbow`) to a heading element.
```html
<h1 class="gradient-text gradient-rainbow">Hello</h1>
```

## 3. Why is it useful?
Creates a vibrant, animated gradient text effect with zero JavaScript. Multiple color schemes available via modifier classes. Respects `prefers-reduced-motion` and degrades to a static gradient.
