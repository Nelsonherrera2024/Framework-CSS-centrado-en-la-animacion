# Ease Hover Perspective Shrink

A lightweight CSS hover animation that creates the illusion of an element shrinking into the distance using 3D perspective.

## Features

* Parent container with CSS `perspective`
* Smooth perspective-based shrink animation
* Uses `scale(0.92)` and `translateZ(-20px)` on hover
* Hardware-accelerated transforms
* Customizable CSS variables
* Keyboard accessibility with `:focus-visible`
* Supports `prefers-reduced-motion`
* No JavaScript required

## Folder Structure

```
u-hover-perspective-shrink-20560/
│── demo.html
│── style.css
└── README.md
```

## Usage

Wrap the animated element inside a perspective container.

```html
<div class="ease-hover-perspective-container">
    <div class="ease-hover-perspective-shrink">
        Hover Me
    </div>
</div>
```

Import the stylesheet.

```html
<link rel="stylesheet" href="style.css">
```

## CSS Variables

| Variable              | Default                       | Description                 |
| --------------------- | ----------------------------- | --------------------------- |
| `--ease-perspective`  | `900px`                       | Parent perspective distance |
| `--ease-scale`        | `0.92`                        | Hover scale factor          |
| `--ease-depth`        | `-20px`                       | Z-axis translation on hover |
| `--ease-duration`     | `0.45s`                       | Animation duration          |
| `--ease-easing`       | `cubic-bezier(0.22,1,0.36,1)` | Transition timing           |
| `--ease-shadow`       | Default shadow                | Initial shadow              |
| `--ease-hover-shadow` | Smaller shadow                | Hover shadow                |

## Animation Behavior

* Default state displays the element at its normal size.
* Hover smoothly scales the element down to **92%** while translating it **20px away** on the Z-axis.
* The parent perspective creates a realistic depth illusion.
* Active state shrinks slightly further for click feedback.
* Reduced-motion users receive a static version automatically.

## Browser Support

Works in all modern browsers supporting:

* CSS Transforms
* CSS Perspective
* CSS Variables
* CSS Transitions


## Accessibility


* Keyboard focus indicator included.
* Honors the `prefers-reduced-motion` media query.
* Does not rely on JavaScript or hover-only interaction for usability.


## License

Created as an example component for the **EaseMotion CSS** project.
