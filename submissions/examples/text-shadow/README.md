# Text Shadow Utilities

CSS utility classes for the `text-shadow` property.

## Usage

```html
<div class="shadow-none">...</div>
```

## Classes

- `.shadow-none` — text-shadow: none;
- `.shadow-sm` — text-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
- `.shadow` — text-shadow: 0 1px 3px 0 rgba(0,0,0,0.1);
- `.shadow-md` — text-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
- `.shadow-lg` — text-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
- `.shadow-xl` — text-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
- `.shadow-2xl` — text-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
- `.shadow-primary` — text-shadow: 0 4px 14px 0 rgba(99,102,241,0.4);
- `.shadow-danger` — text-shadow: 0 4px 14px 0 rgba(239,68,68,0.4);
- `.shadow-success` — text-shadow: 0 4px 14px 0 rgba(16,185,129,0.4);
- `.shadow-warning` — text-shadow: 0 4px 14px 0 rgba(245,158,11,0.4);
- `.shadow-white` — text-shadow: 0 0 10px rgba(255,255,255,0.8);
- `.shadow-glow` — text-shadow: 0 0 20px rgba(99,102,241,0.6);
- `.shadow-glow-lg` — text-shadow: 0 0 40px rgba(99,102,241,0.8);
- `.shadow-dark` — text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
- `.shadow-italic` — font-style: italic; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);

## Responsive

- `sm:` prefix for 640px+
- `lg:` prefix for 1024px+

## Dark Mode

- `dark:` prefix for `prefers-color-scheme: dark`
## Reduced Motion

- `motion-safe:` prefix for `prefers-reduced-motion: reduce`
