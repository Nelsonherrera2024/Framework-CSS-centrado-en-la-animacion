# CSS Line Clamp — Text Truncation Utility

**Fixes:** Issue #15571

## Overview

A self-contained CSS line clamp text truncation example under
`submissions/examples/line-clamp-text/`. Provides fixed utility
classes (`.ease-clamp-1` through `.ease-clamp-6`), a CSS custom
property variant for any line count, and a pure CSS "Read more"
expand toggle — all with zero JavaScript.

## Usage

```html
<!-- Fixed classes -->
<p class="ease-clamp-1">Truncated at 1 line</p>
<p class="ease-clamp-2">Truncated at 2 lines</p>
<p class="ease-clamp-3">Truncated at 3 lines</p>

<!-- Any line count via CSS custom property -->
<p class="ease-clamp" style="--ease-clamp-lines: 4">
  Truncated at 4 lines
</p>

<!-- Pure CSS Read more toggle -->
<div class="ease-clamp-expand">
  <input type="checkbox" id="expand-1" class="ease-clamp-toggle" />
  <p class="ease-clamp-3 ease-clamp-content">Long text here...</p>
  <label for="expand-1" class="ease-clamp-btn"></label>
</div>
```

## Classes

| Class | Lines |
|---|---|
| `.ease-clamp-1` | 1 |
| `.ease-clamp-2` | 2 |
| `.ease-clamp-3` | 3 (most common) |
| `.ease-clamp-4` | 4 |
| `.ease-clamp-5` | 5 |
| `.ease-clamp-6` | 6 |
| `.ease-clamp` | Custom via `--ease-clamp-lines` |

## How It Works

```css
.ease-clamp-3 {
  overflow: hidden;              /* clip overflow */
  display: -webkit-box;          /* enable line-clamp model */
  -webkit-box-orient: vertical;  /* stack lines vertically */
  -webkit-line-clamp: 3;         /* limit to 3 lines + ellipsis */
}
```

All three properties must appear together — removing any one breaks
the effect in at least one browser.

## Browser Support

| Browser | Support |
|---|---|
| Chrome 14+ | ✅ |
| Firefox 68+ | ✅ |
| Safari 5+ | ✅ |
| Edge 17+ | ✅ |

## Acceptance Criteria

- [x] `.ease-clamp-1` through `.ease-clamp-6` utility classes
- [x] `.ease-clamp` with `--ease-clamp-lines` custom property
- [x] Pure CSS "Read more" expand toggle (no JavaScript)
- [x] Dark mode via CSS tokens
- [x] Browser support documented
- [x] Self-contained under `submissions/examples/line-clamp-text/`