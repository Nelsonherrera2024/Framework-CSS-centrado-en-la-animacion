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