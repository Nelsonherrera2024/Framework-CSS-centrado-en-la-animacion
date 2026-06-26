# ease-sticky-navbar

A lightweight CSS utility that keeps a navigation bar visible while the page is scrolled using `position: sticky`.

## Features

- Pure CSS
- No JavaScript
- Responsive layout
- Keeps navigation accessible during scrolling
- Easy to customize

## Usage

```html
<nav class="ease-sticky-navbar">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
</nav>
```

## CSS

```css
.ease-sticky-navbar{
    position: sticky;
    top: 0;
    z-index: 1000;
}
```
