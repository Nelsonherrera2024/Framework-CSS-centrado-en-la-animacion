# Text Truncation & Line-Clamp Utilities

A set of utility classes for handling text overflow in both single-line and multi-line scenarios. These utilities help maintain consistent layout and prevent long text from breaking UI components like cards, lists, and headers.

## Classes

| Class | Description |
|-------|-------------|
| `.ease-truncate` | Truncates text to a single line with an ellipsis (`...`). |
| `.ease-line-clamp-1` | Clamps text to 1 line with an ellipsis. |
| `.ease-line-clamp-2` | Clamps text to 2 lines with an ellipsis. |
| `.ease-line-clamp-3` | Clamps text to 3 lines with an ellipsis. |
| `.ease-line-clamp-4` | Clamps text to 4 lines with an ellipsis. |
| `.ease-line-clamp-5` | Clamps text to 5 lines with an ellipsis. |
| `.ease-line-clamp-6` | Clamps text to 6 lines with an ellipsis. |

## Usage

### Single-line Truncation

Apply `.ease-truncate` to any block or inline-block element containing text.

```html
<div class="ease-truncate" style="max-width: 200px;">
  This very long sentence will be truncated.
</div>
```

### Multi-line Clamping

Apply `.ease-line-clamp-{n}` where `{n}` is the number of lines you want to keep.

```html
<p class="ease-line-clamp-3">
  EaseMotion CSS provides many utility classes but lacks text truncation utilities. 
  This paragraph will be clamped to exactly three lines.
</p>
```

## Implementation Details

The line-clamp utility uses `-webkit-line-clamp` for maximum browser compatibility, along with the standardized `line-clamp` property for future-proofing.

```css
.ease-line-clamp-3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-clamp: 3;
}
```
