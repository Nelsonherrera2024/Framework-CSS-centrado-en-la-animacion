# Animated PIN / OTP Input Collection

**EaseMotion CSS — Issue #15831**  
`submissions/examples/pin-otp-input-collection/`

A segmented PIN / OTP entry component with smooth CSS animations for fill-pop, caret blink, error shake, and success glow. Three theme variants included. JS is limited to focus-management only — all visual states are driven by CSS classes.

---

## Files

| File | Purpose |
|---|---|
| `style.css` | All component styles and `@keyframes` |
| `demo.html` | Live demo with all variants and controls |
| `README.md` | This file |

---

## Classes

### Container

```html
<div class="ease-otp-row">…</div>
```

The flex row that holds the individual cells.  
Add a theme class here: `ease-otp-theme-dark`, `ease-otp-theme-neon`, or `ease-otp-theme-soft`.

### Cell wrapper

```html
<span class="ease-otp-cell">
  <input class="ease-otp-box ease-otp-fill-pop" … />
  <span class="ease-otp-caret"></span>
</span>
```

Each `ease-otp-cell` is a relative-positioned wrapper that hosts one input and the animated caret overlay.

### CSS classes reference

| Class | Element | Behaviour |
|---|---|---|
| `ease-otp-row` | `div` | Flex row; also accepts state classes `is-invalid` / `is-complete` |
| `ease-otp-cell` | `span` | Relative wrapper per digit; required for caret positioning |
| `ease-otp-box` | `input` | Single-digit cell with idle → focus → filled transitions |
| `ease-otp-fill-pop` | `input` | Scale pop `@keyframes` triggered by `.pop` class on fill |
| `ease-otp-caret` | `span` | Blinking cursor overlay; visible only while cell is focused and empty |
| `is-filled` | `input` | Added by JS when the cell has a digit; changes bg + border |
| `pop` | `input` | Added & removed by JS to replay the fill-pop animation |
| `is-invalid` | `ease-otp-row` | Triggers horizontal shake + red flash across all cells |
| `is-complete` | `ease-otp-row` | Triggers green glow across all cells |

---

## Usage

```html
<!-- Link the stylesheet -->
<link rel="stylesheet" href="style.css" />

<!-- Markup (cells injected by JS, or written manually) -->
<div class="ease-otp-row">
  <span class="ease-otp-cell">
    <input class="ease-otp-box ease-otp-fill-pop"
           type="text" inputmode="numeric" maxlength="1"
           autocomplete="one-time-code" />
    <span class="ease-otp-caret"></span>
  </span>
  <!-- repeat for each digit -->
</div>
```

To trigger states from your own JS:

```js
// Wrong code
row.classList.add('is-invalid');

// Correct code
row.classList.add('is-complete');

// Fill pop on a single cell
input.classList.remove('pop');
void input.offsetWidth;   // reflow
input.classList.add('pop');
```

---

## Themes

| Class on `ease-otp-row` | Look |
|---|---|
| *(none)* | Default — indigo accent on white |
| `ease-otp-theme-dark` | Deep navy background, violet accent |
| `ease-otp-theme-neon` | Black background, cyan / electric accent |
| `ease-otp-theme-soft` | Lavender background, pill-shaped cells |

---

## Animations

| Name | Keyframe | Description |
|---|---|---|
| `ease-otp-fill-pop` | `@keyframes ease-otp-fill-pop` | Elastic scale pop (0.28 s) on digit entry |
| `ease-otp-caret-blink` | `@keyframes ease-otp-caret-blink` | 1 s step-end blink on the empty focused cell |
| `ease-otp-error-shake` | `@keyframes ease-otp-error-shake` | 0.45 s horizontal shake + red flash on `.is-invalid` |
| `ease-otp-success-glow` | `@keyframes ease-otp-success-glow` | 0.7 s expanding green glow on `.is-complete` |

All animations respect `prefers-reduced-motion: reduce` — they are disabled and the caret is shown statically when the user prefers reduced motion.

---

## JS note

The `demo.html` includes a small vanilla JS snippet (~90 lines) for:

- Auto-advancing focus to the next cell on digit entry  
- Moving focus back on `Backspace`  
- Distributing pasted values across cells  
- Arrow-key navigation between cells  

This JS is **not** part of the EaseMotion CSS API. It may be replaced with any OTP input library or framework equivalent. All animation and visual state is CSS-only.

---

## Contributor

**Akanksha Thakur** (`@thakurakanksha288`)  
GSSoC 2026 — EaseMotion CSS