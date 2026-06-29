# Text Reveal / Typewriter — Issue #30438

CSS-only text reveal animations including typewriter and character-by-character reveal.

## Classes

| Class | Effect |
|-------|--------|
| `.ease-typewriter` | Typewriter width-reveal |
| `.ease-typewriter-cursor` | Blinking cursor |
| `.ease-text-reveal` | Character fade-in (child spans) |
| `.ease-text-reveal-fade-up` | Fade + slide up |

## CSS Variables

- `--ease-tw-speed` (seconds per char, default 0.08s)
- `--ease-tw-steps` (number of characters)
- `--ease-tr-duration` (each char animation, default 0.4s)
- `--ease-tr-delay` (stagger delay between chars, default 0.05s)
