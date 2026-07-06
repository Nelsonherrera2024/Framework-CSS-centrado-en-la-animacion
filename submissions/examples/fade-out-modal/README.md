# CSS Fade-Out Modal

A simple CSS-only modal component with a smooth fade-out transition. It is designed for SaaS landing pages, dashboards, and modern web interfaces without using JavaScript.

## Features

- Pure HTML and CSS
- Smooth fade-in and fade-out transition
- Uses CSS custom properties for easy customization
- Responsive design
- No JavaScript required
- Easy to reuse in different projects

## File Structure

```
fade-out-modal/
│── demo.html
│── style.css
└── README.md
```

## How to Use

1. Include the stylesheet in your HTML file.

```html
<link rel="stylesheet" href="style.css">
```

2. Add a button or link to open the modal.

```html
<a href="#modal" class="open-btn">Open Modal</a>
```

3. Add the modal structure.

```html
<div id="modal" class="modal">
    <div class="modal-box">
        <h2>Upgrade to Pro</h2>

        <p>
            Unlock advanced analytics, unlimited projects and premium support.
        </p>

        <div class="buttons">
            <a href="#" class="close-btn">Cancel</a>
            <button>Upgrade</button>
        </div>
    </div>
</div>
```

Opening the modal changes the URL target, and clicking **Cancel** removes the target, creating a smooth fade-out effect using only CSS.

## Customization

The component uses CSS variables, so changing the animation is straightforward.

```css
:root {
    --modal-duration: 0.35s;
    --modal-easing: ease;
    --modal-scale: 0.95;

    --primary-color: #4f46e5;
    --overlay-color: rgba(0, 0, 0, 0.55);
}
```

You can modify these values to change the animation speed, easing, scale, or colors.

## Browser Support

Works in all modern browsers that support:

- CSS Variables
- CSS Transitions
- `:target` selector

## Demo

Open **demo.html** in your browser to see the component in action.

## Tech Stack

- HTML5
- CSS3
- No JavaScript
**Note:** This example uses the CSS `:target` selector for opening and closing the modal, so no JavaScript is required.