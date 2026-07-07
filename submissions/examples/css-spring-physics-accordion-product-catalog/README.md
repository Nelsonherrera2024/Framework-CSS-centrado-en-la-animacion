# CSS Spring Physics Accordion for Product Catalog Layouts

A pure CSS **Spring Physics Accordion** designed for Product Catalog interfaces. It features smooth spring-inspired expand/collapse animations, responsive design, keyboard accessibility, and customizable CSS variables without requiring JavaScript.

## Features

- Pure HTML & CSS
- Spring physics-inspired animation
- Responsive layout
- Keyboard accessible using native `<details>` and `<summary>`
- Customizable through CSS custom properties
- No JavaScript required
- Lightweight and reusable

## Folder Structure

```text
css-spring-physics-accordion-product-catalog/
├── demo.html
├── style.css
└── README.md
```

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Example:

```html
<div class="accordion">
  <details>
    <summary>Product Category</summary>
    <div class="content">
      <p>Your content goes here.</p>
    </div>
  </details>
</div>
```

## Customization

Modify the CSS variables in `:root`:

```css
:root{
  --primary:#4f46e5;
  --radius:16px;
  --duration:.55s;
  --spring:cubic-bezier(.18,1.25,.45,1);
}
```

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## Why it fits EaseMotion CSS

This component follows EaseMotion CSS's animation-first philosophy by providing a lightweight, reusable, JavaScript-free accordion with smooth spring-inspired motion, accessibility, responsive behavior, and easy customization through CSS custom properties.