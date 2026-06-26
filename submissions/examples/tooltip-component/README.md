# EaseMotion CSS — Tooltip Component

A clean, premium, accessible, pure-CSS tooltip component designed for the EaseMotion CSS library. This component provides contextual metadata triggered on mouse hover, screen focus, or target active states.

## Features

- **Pure CSS Core**: Relies entirely on native CSS pseudo-elements (`::before` for the tooltip container, `::after` for the connector arrow).
- **Flexible Positioning**: Supports standard placement variants (`top`, `bottom`, `left`, `right`).
- **Semantic Themes**: Tailored dark-mode-adapted color themes matching primary, success, danger, warning, and info action states.
- **Rich Formatting Options**: Includes multi-line wrappers and custom wide container variants for paragraph tooltips.
- **Accessible Interactions**: Keyboard navigability out of the box using `:focus-within` and `:focus-visible`.
- **Responsive Layout Design**: Automatic layout fallback to bottom positioning on mobile screens to prevent overflow.
- **Reduced Motion Aware**: Suppresses animation slide transformations when user prefers reduced motion.

## File Structure

```tree
submissions/examples/tooltip-component/
├── demo.html     # Interactive playground and documentation showcase
├── style.css     # Tooltip layout, themes, responsive rules, and custom dashboard style
└── README.md     # Component technical details and user guide
```

## EaseMotion Classes Showcase

| CSS Class / Attribute | Type | Description |
| :--- | :--- | :--- |
| `.ease-tooltip` | Class | Base class marking an element as a tooltip trigger. |
| `data-tooltip="..."` | Attribute | Standard HTML data attribute supplying the tooltip text. |
| `.ease-tooltip-top` | Class | Positions the tooltip box directly above the trigger element. |
| `.ease-tooltip-bottom` | Class | Positions the tooltip box directly below the trigger element. |
| `.ease-tooltip-left` | Class | Positions the tooltip box to the left of the trigger element. |
| `.ease-tooltip-right` | Class | Positions the tooltip box to the right of the trigger element. |
| `.ease-tooltip-primary` | Class | Applies the indigo theme. |
| `.ease-tooltip-success` | Class | Applies the green success theme. |
| `.ease-tooltip-danger` | Class | Applies the red warning theme. |
| `.ease-tooltip-warning` | Class | Applies the orange alert theme. |
| `.ease-tooltip-info` | Class | Applies the blue informational theme. |
| `.ease-tooltip-multiline` | Class | Triggers line wrapping for medium-length paragraphs (max-width: 200px). |
| `.ease-tooltip-wide` | Class | Triggers left-aligned wrapping for long descriptions (max-width: 320px). |

## Usage Examples

### Basic Top Tooltip (Default)

```html
<button class="ease-tooltip ease-tooltip-top" data-tooltip="This is tooltip info">
  Hover or Tab Here
</button>
```

### Success Bottom Tooltip

```html
<button class="ease-tooltip ease-tooltip-bottom ease-tooltip-success" data-tooltip="Successfully saved!">
  Save Status
</button>
```

### Interactive Text Wrap with Wide Tooltip

```html
<span class="ease-tooltip ease-tooltip-right ease-tooltip-wide" data-tooltip="Detailed Description: This tooltip allows you to display long paragraphs of instructions or details.">
  Learn More
</span>
```

## Accessibility Best Practices

1. Always add `tabindex="0"` or use native focusable elements (like `<button>` or `<a>`) to guarantee keyboard accessibility.
2. Provide explicit `aria-label` or related accessibility hints if the tooltip trigger does not have text.
