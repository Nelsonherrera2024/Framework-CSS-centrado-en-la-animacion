# CSS Tada-Click Tooltip

A lightweight, high-fidelity, pure CSS interactive tooltip component featuring a springy "Tada" entrance animation. Designed for minimalist tech layouts, developer dashboards, and modern UI designs.

## Description

The Tada-Click Tooltip provides interactive info bubbles that trigger smoothly on hover or keyboard focus. Inspired by the classic swing animations in `Animate.css`, the entrance is driven by custom CSS `@keyframes` that combine scaling, opacity, and rotation swings to create an active spring pop that settles smoothly into position.

## Features

- **Pure CSS**: Zero JavaScript or external dependencies.
- **Custom Keyframes**: Built using three modular `@keyframes` collections (`fade`, `scale`, and `tada-click`).
- **Fully Customizable**: Controlled using clean, scoped CSS Variables at the `:root` or component wrapper level.
- **Keyboard Accessible**: Works natively on keyboard navigation using `:focus-visible` with customizable focus indicators.
- **Mobile Responsive**: Adapts padding/font-scaling and automatically repositions horizontal offsets to avoid horizontal clipping on mobile devices.
- **Reduced Motion Support**: Listens to system accessibility preferences (`prefers-reduced-motion: reduce`) and downgrades to instant fade transitions.

## Folder Structure

The component folder is structured as follows:
```
submissions/examples/tada-click-tooltip/
├── demo.html     # Interactive tech-dashboard layout demo page
├── style.css     # Tooltip variables, keyframes, positions, and layout styling
└── README.md     # Component documentation and integration guide
```

## Customization Variables

You can customize the tooltip styling dynamically. Standard customization variables are exposed at the `:root` level:

| CSS Variable | Description | Default Value |
| :--- | :--- | :--- |
| `--tooltip-bg` | Background color (supports alpha channels for glassmorphism) | `rgba(9, 15, 29, 0.85)` |
| `--tooltip-color` | Text foreground color | `#f1f5f9` |
| `--tooltip-radius` | Border radius of the tooltip box | `6px` |
| `--tooltip-padding` | Inner spacing padding | `6px 12px` |
| `--tooltip-shadow` | Box shadow styling and borders | `0 4px 16px rgba(6, 182, 212, 0.15), 0 0 0 1px ...` |
| `--tooltip-duration` | Animation run-time | `0.45s` |
| `--tooltip-delay` | Animation trigger delay | `0s` |
| `--tooltip-easing` | Timing function for springy bounce | `cubic-bezier(0.25, 1.35, 0.4, 1)` |
| `--tooltip-scale` | Peak scaling factor during the tada swing | `1.1` |
| `--tooltip-distance` | Distance offset between trigger and tooltip | `8px` |
| `--tooltip-font-size` | Text size | `0.8rem` |
| `--tooltip-focus-outline` | Color of the focus outline indicator | `#06b6d4` |

To override any property globally:
```css
:root {
  --tooltip-bg: #1e1b4b; /* Deep Indigo */
  --tooltip-color: #ffffff;
  --tooltip-radius: 4px;
}
```

To override values for a single specific tooltip instance:
```html
<div class="ease-tooltip-container" style="--tooltip-bg: rgba(220, 38, 38, 0.9); --tooltip-scale: 1.15;">
  <button class="ease-tooltip-trigger" aria-describedby="custom-tooltip">Danger Action</button>
  <span class="ease-tooltip" id="custom-tooltip" role="tooltip" data-placement="top">Irreversible action!</span>
</div>
```

## How to Use

### 1. Link Stylesheet
Ensure you link the `style.css` file in your HTML document:
```html
<link rel="stylesheet" href="style.css">
```

### 2. Add Markup
Implement the HTML markup structure. Use a keyboard-accessible element (like `<button>` or `<a href="...">`) for the trigger:
```html
<div class="ease-tooltip-container">
  <!-- Trigger Button -->
  <button 
    class="ease-tooltip-trigger" 
    aria-describedby="my-tooltip-id"
    type="button">
    Hover or Focus Me
  </button>
  
  <!-- Tooltip Bubble -->
  <span 
    class="ease-tooltip" 
    id="my-tooltip-id" 
    role="tooltip" 
    data-placement="top">
    Your tooltip content here.
  </span>
</div>
```

### Placements
Position the tooltip by editing the `data-placement` attribute to one of:
- `data-placement="top"` (Default)
- `data-placement="bottom"`
- `data-placement="left"`
- `data-placement="right"`

## Responsive Behavior

- **Auto-Scale**: Text font sizes, paddings, and bounce scale levels reduce slightly on screens below `640px` to fit smaller displays.
- **Viewport Protection**: Horizontal placements (`left` and `right`) automatically transition into standard `top` placements on devices under `640px` wide. This avoids clipping off the viewport edges.

## Accessibility Notes

- **Keyboard Focus**: Focusable triggers showcase a clear outline border styling (customizable via `--tooltip-focus-outline`) when active via keyboard navigation using the CSS `:focus-visible` pseudo-class.
- **Screen Readers**: Uses the semantic roles `role="tooltip"` and maps the trigger label to description labels using `aria-describedby="tooltip-id"`.

## Browser Compatibility

- Google Chrome (79+)
- Mozilla Firefox (85+)
- Apple Safari (15.4+)
- Microsoft Edge (79+)
- Support for modern mobile browsers (iOS Safari, Android Chrome).

## License

This project is licensed under the MIT License. Feel free to use and distribute it in your open-source projects.
