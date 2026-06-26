# Keyboard Shortcuts Feature

## Description
Adds human-readable keyboard shortcut classes to EaseMotion CSS. Developers can use `ease-shortcut-*` classes to enable common keyboard actions like `Ctrl+S` (save), `Escape` (close), `Ctrl+K` (search), and `Enter` (submit) without writing custom JavaScript.

## Proposed Classes
| Class | Shortcut | Behavior |
|-------|----------|----------|
| `ease-shortcut-save` | `Ctrl+S` / `Cmd+S` | Triggers save action |
| `ease-shortcut-escape` | `Escape` | Closes modals, clears inputs |
| `ease-shortcut-enter` | `Enter` | Submits forms |
| `ease-shortcut-ctrl-k` | `Ctrl+K` / `Cmd+K` | Focuses search input |
| `ease-shortcut-undo` | `Ctrl+Z` / `Cmd+Z` | Triggers undo |
| `ease-shortcut-redo` | `Ctrl+Shift+Z` / `Cmd+Shift+Z` | Triggers redo |

## Usage Example
```html
<button class="ease-btn ease-btn-primary ease-shortcut-save">
  Save (Ctrl+S)
</button>

<div class="ease-modal ease-shortcut-escape">
  Press Escape to close
</div>

<input type="search" class="ease-shortcut-ctrl-k" placeholder="Ctrl+K to search" />

How It Works
Add any ease-shortcut-* class to your HTML element

Include the shortcuts.js script (similar to existing reveal.js)

The script listens for keyboard events and triggers actions automatically

Customization
Override shortcuts via CSS variables:

css
:root {
  --ease-shortcut-save: 's';
  --ease-shortcut-search: 'k';
}
Benefits
✅ Human-readable class names

✅ Works with all components (buttons, modals, inputs)

✅ Improves accessibility (WCAG 2.1)

✅ Zero dependencies

✅ No custom JavaScript needed

Browser Support
Works in all modern browsers that support keydown events (Chrome 49+, Firefox 31+, Safari 9.1+, Edge 15+).