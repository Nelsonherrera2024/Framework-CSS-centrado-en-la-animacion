# Animated Modal — Issue #7521

## Overview

Modal/dialog component with backdrop overlay, slide-down entrance animation, close button, click-outside-to-close, Escape key support, scroll lock, and size variants.

## Size Variants

| Size | Class | Max Width |
|------|-------|-----------|
| Small | `.ease-modal-sm` | 320px |
| Default | `.ease-modal` | 480px |
| Large | `.ease-modal-lg` | 640px |

## Features

- Backdrop overlay with fade-in
- Centered dialog with slide-down entrance
- Close button (×) in header
- Click outside to close
- Escape key to close
- Body scroll lock when open
- Header, body, footer sections

## Usage

```html
<div class="ease-modal-overlay" id="myOverlay"></div>
<div class="ease-modal" id="myModal">
  <div class="ease-modal-header">
    <span class="ease-modal-title">Title</span>
    <button class="ease-modal-close">&times;</button>
  </div>
  <div class="ease-modal-body"><p>Content</p></div>
  <div class="ease-modal-footer">
    <button class="btn">Cancel</button>
    <button class="btn btn-primary">Confirm</button>
  </div>
</div>
```

## Files

- `demo.html` — Three modals (sm, md, lg) with confirm, delete, and terms examples
- `style.css` — Overlay, modal positioning, animations, header/body/footer
- `README.md` — This documentation
