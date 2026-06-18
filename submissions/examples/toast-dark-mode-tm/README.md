# Toast Dark Mode Support

Adds `[data-theme="dark"]` dark mode support to the `toast.css` component.

## What Changed

- Added `[data-theme="dark"] .ease-toast { background }` override to use dark surface token
- Added `[data-theme="dark"] .ease-toast-body p { color }` override to use dark muted text token
- Uses existing CSS custom property tokens for consistency

## Usage

```html
<div class="ease-toast ease-toast-enter">
  <div class="ease-toast-icon">i</div>
  <div class="ease-toast-body">
    <strong>Title</strong>
    <p>Message text here.</p>
  </div>
</div>
```

## Browser Support

All modern browsers supporting CSS custom properties and attribute selectors.
