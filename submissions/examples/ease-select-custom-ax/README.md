# ease-select-custom – Styled Custom Select

A fully styled replacement for the native <select> element. It features a custom trigger button, an animated dropdown that scales in from the top, keyboard accessibility (arrow keys, enter, escape), and a checkmark on the selected option.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-py-16, ease-mx-auto, ease-w-full
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-8
- **Components:** ease-card, ease-btn, ease-btn-primary
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500, ease-transition

## How it works
- A hidden checkbox toggles the dropdown open/close state.
- The dropdown uses 	ransform: scaleY(0) to scaleY(1) with a transition for the reveal animation.
- Options are radio inputs styled as list items; the :checked pseudo‑class adds a checkmark and bold text.
- JavaScript adds keyboard navigation: Arrow Down/Up to move focus, Enter to select, Escape to close.
- The component respects prefers-reduced-motion.

## How to use
1. Copy the HTML, CSS, and JS from demo.html into your project.
2. Ensure the path to easemotion.css is correct.
3. Open demo.html in any modern browser.
