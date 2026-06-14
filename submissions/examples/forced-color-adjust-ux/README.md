# Forced Color Adjust UX

## What does this do?

Demonstrates the `forced-color-adjust` and `print-color-adjust` CSS properties for preserving custom styles in forced-colors mode (Windows High Contrast Mode) and when printing.

## How is it used?

```css
.fca-preserve {
  forced-color-adjust: none;
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
}
```

```html
<div class="fca-card fca-preserve">
  <!-- Colors preserved in forced-colors mode and print -->
</div>
```

Classes: `.fca-preserve` (applies both), `.fca-forced-none` (forced-color-adjust only), `.fca-print-exact` (print-color-adjust only).

## Why is it useful?

- **Accessibility**: Prevents Windows High Contrast Mode from stripping custom backgrounds/borders on UI elements like status badges, progress bars, and color-coded cards
- **Print**: Preserves background colors, gradients, and images when users print the page, maintaining visual hierarchy and brand identity on paper
