# Ease Onboarding Stepper

A responsive and animated onboarding stepper component built using pure HTML and CSS.

## Features

- Completed step state
- Active step highlighting
- Pending step styling
- Pulse animation for active step
- Smooth hover effects
- Horizontal desktop layout
- Vertical mobile layout
- Reduced motion accessibility support
- Clean and reusable structure

## File Structure

```text
ease-onboarding-stepper-pr/
├── demo.html
├── style.css
└── README.md
```

## Usage

1. Include `style.css` in your project.
2. Copy the onboarding stepper HTML structure from `demo.html`.
3. Customize step labels and states as needed.

## States

### Completed

```html
<div class="step completed">
```

### Active

```html
<div class="step active">
```

### Pending

```html
<div class="step">
```

## Responsive Design

- Horizontal layout on desktop.
- Vertical layout on mobile devices.

## Accessibility

- High contrast colors.
- Reduced motion support using:

```css
@media (prefers-reduced-motion: reduce)
```

## Author

Pr241singh