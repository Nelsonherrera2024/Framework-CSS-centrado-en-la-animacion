# ease-morphing-blob – CSS‑Only Morphing Blob Shape

An organic, smoothly morphing blob shape created with pure CSS. The order-radius property is animated across multiple keyframe stops to produce a liquid-like, continuously changing form.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-mx-auto, ease-py-16
- **Background:** ease-bg-gray-100
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-8
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How it works
- The blob is a single <div> with a gradient background.
- Its order-radius is animated through a 6‑second @keyframes loop with multiple stops, each defining a different asymmetrical shape.
- The lternate direction and ease-in-out timing create a smooth back‑and‑forth morphing effect.
- A soft box‑shadow adds depth.
- The animation respects prefers-reduced-motion by snapping to a perfect circle.

## How to use
1. Add the class lob to any block element.
2. Copy style.css into your project.
3. Ensure the path to easemotion.css is correct.
