# Elastic Click Bounce

A reusable CSS animation that provides an elastic bounce effect whenever an element is clicked or activated. The animation briefly compresses the element, expands it slightly beyond its original size, and smoothly settles back, creating satisfying visual feedback.

## Features

* 🎯 Pure CSS implementation
* ⚡ Lightweight and reusable
* ✨ Elastic click animation
* 🎨 Works with buttons, cards, and icons
* 📱 Responsive design
* 🔧 Easy to customize

## Folder Structure

```text
u-elastic-click-bounce-20874/
├── demo.html
├── style.css
└── README.md
```

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Apply the class to any clickable element:

```html
<button class="elastic-click">
    Save Changes
</button>
```

Or use it with cards and icons:

```html
<div class="card elastic-click">
    Interactive Card
</div>
```

## Customization

Modify the animation timing:

```css
.elastic-click:active {
    animation: elasticBounce .6s ease;
}
```

You can also customize:

* Button colors
* Animation duration
* Border radius
* Scale values
* Shadow effects

## Browser Support

Works in all modern browsers supporting:

* CSS Animations
* CSS Transforms
* CSS Transitions
* Flexbox
* CSS Grid

## Demo Includes

* Four animated buttons
* Interactive card
* Animated icon set
* Responsive layout

## License

Submitted as an example contribution for the **EaseMotion CSS** project under the repository's license.
