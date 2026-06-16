# Fix: .ease-card-hover double lift conflict with .ease-btn-hover

Fixes the double lift effect when `.ease-btn-hover` is nested inside `.ease-card-hover`.

## Root Cause
`.ease-card-hover:hover` fires on any descendant hover including child buttons, causing both card and button to lift simultaneously.

## Fix Applied
Added `:not(:has(.ease-btn:hover))` guard to `components/cards.css`:

```css
.ease-card-hover:not(:has(.ease-btn:hover)):hover {
  transform: translateY(-6px);
}
```

Closes #9867
