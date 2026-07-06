# ease-page-loader-progress

## Description
A lightweight CSS-only page loader displayed at the top of the page.

## Features
- CSS-only
- Uses @keyframes
- Customizable with CSS variables
- Responsive
- Easy to use

## Usage

```html
<div class="ease-page-loader-progress"></div>
```

## CSS Variables

- --ease-loader-color
- --ease-loader-height
- --ease-loader-duration
- --ease-loader-bg

## Customization Example

```css
:root{
  --ease-loader-color:#4f46e5;
  --ease-loader-height:4px;
  --ease-loader-duration:2s;
  --ease-loader-bg:#e5e7eb;
}

/* Or on a single element */
.custom-loader{
  --ease-loader-color:#06b6d4;
  --ease-loader-height:6px;
  --ease-loader-duration:1s;
  --ease-loader-bg:rgba(6,182,212,0.06);
}
```

## Browser Support

- Chrome
- Firefox
- Edge
- Safari
