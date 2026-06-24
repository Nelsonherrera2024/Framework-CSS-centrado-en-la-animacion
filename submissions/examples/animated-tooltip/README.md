# animated-tooltip – CSS‑Only Animated Tooltip & Popover

A pure CSS tooltip and popover component with smooth fade+slide animation and 4 directional variants. No JavaScript.

## Tooltip features
- **4 positions:** top, right, bottom, left (selected via data-tooltip-pos attribute on the wrapper).
- **Arrow/pointer** created with CSS borders.
- **Hover trigger** with a cubic-bezier transition.

## Popover features
- Larger content box that opens on click (checkbox hack).
- Contains a close button (label for the checkbox) and can be dismissed.
- Styled card with shadow.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-gap-6, ease-flex-wrap, ease-py-16, ease-mb-12, ease-mt-12
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400, ease-text-lg, ease-font-semibold, ease-text-gray-600
- **Spacing:** ease-mb-4, ease-mb-8, ease-mb-2, ease-mt-2
- **Components:** ease-btn, ease-btn-primary, ease-btn-secondary
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How it works
- Tooltip wrappers are relative containers; the tooltip box is absolutely positioned.
- On hover, opacity and transform transition smoothly.
- The data-tooltip-pos attribute determines position and arrow direction.
- The popover uses a hidden checkbox: clicking the label toggles the checkbox, which reveals the popover via the :checked pseudo-class.
- All animations respect prefers-reduced-motion.

## How to use
1. Copy the HTML and CSS into your project.
2. Ensure the path to easemotion.css is correct.
3. Open demo.html in any modern browser.
