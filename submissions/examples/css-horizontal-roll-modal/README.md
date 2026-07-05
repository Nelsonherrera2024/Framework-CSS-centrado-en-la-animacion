# CSS Horizontal Roll Modal

A modern, highly-responsive, interactive user interface modal built with **zero JavaScript**. It utilizes a elegant, 3D horizontal rolling animation state via CSS pseudo-selectors (`:target`).

## Features
- **Pure CSS**: Zero JS tracking logic ensures extreme performance and optimization.
- **Highly Customizers**: Speed, rotation angle, and acceleration easing curves can be adjusted on the fly using CSS Variables.
- **Accessible Design**: Built using semantic `role="dialog"` layout attributes and fully accessible via standard sequential keyboard navigation.

## Custom Custom Properties
You can customize the animation profile inside `style.css` under the `:root` pseudo-element block:

| Property | Default Value | Description |
| :--- | :--- | :--- |
| `--modal-duration` | `0.6s` | Transition runtime. |
| `--modal-easing` | `cubic-bezier(...)` | Movement velocity curve. |
| `--modal-roll-deg` | `-180deg` | Total roll-in canvas pitch rotation angle. |
A pure HTML and CSS responsive modal component featuring a smooth horizontal roll animation. Designed for dashboard layouts and modern web interfaces without requiring JavaScript.

## Features

- Smooth horizontal roll animation
- Pure HTML & CSS
- Responsive layout
- Lightweight and reusable
- Keyboard-friendly toggle using checkbox
- Modern dashboard-inspired design
- Easy to customize

## Folder Structure

```
css-horizontal-roll-modal/
├── demo.html
├── style.css
└── README.md
```

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Use the modal structure:

```html
<input type="checkbox" id="modal-toggle">

<label for="modal-toggle" class="open-btn">
    Open Modal
</label>
```

The modal opens with a smooth horizontal roll animation using only CSS.

## Customization

You can easily modify:

- Modal width
- Animation duration
- Border radius
- Colors
- Shadows
- Transition timing

## Browser Support

Works in all modern browsers supporting CSS transforms and transitions.
