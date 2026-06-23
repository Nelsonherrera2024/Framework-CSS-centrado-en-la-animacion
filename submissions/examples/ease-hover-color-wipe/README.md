# Hover Color Wipe Animation (`ease-hover-color-wipe`)

A smooth, customizable text color sweep animation using CSS `background-clip: text` and animated `background-position`.

## 🚀 Features & EaseMotion Showcase

- **Sharp Edge Sweep**: Uses a hard-stop CSS `linear-gradient` at 50% combined with a 200% `background-size`. When the `background-position` is animated, it pulls the new color across the text from left to right like a physical wipe.
- **Customizable Properties**: Driven by CSS custom properties (`--ease-wipe-from` and `--ease-wipe-to`), allowing developers to easily set the start and end colors directly in their HTML markup without writing custom CSS classes.
- **Cross-Browser Compatible**: Relies on `-webkit-background-clip: text` which is deeply supported across modern engines.

## 🛠️ Usage

This demo is self-contained. Open `demo.html` in your browser. All required CSS is inside `style.css`.

To apply a color wipe animation to any text element:
```html
<h1 class="ease-hover-color-wipe" style="--ease-wipe-from: black; --ease-wipe-to: blue;">
  Hover Me
</h1>
