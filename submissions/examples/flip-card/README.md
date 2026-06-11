# ease-flip-card

3D CSS card flip on hover using `perspective` and `rotateY`. Zero JavaScript required.

## Usage

```html
<div class="ease-flip-card" style="width: 200px; height: 130px;">
  <div class="ease-flip-card__inner">
    <div class="ease-flip-card__front">Front content</div>
    <div class="ease-flip-card__back">Back content</div>
  </div>
</div>
```

## Required Structure

| Element | Role |
|---|---|
| `ease-flip-card` | Outer container — sets `perspective` |
| `ease-flip-card__inner` | The flipping element — `transform-style: preserve-3d` |
| `ease-flip-card__front` | Front face — visible by default |
| `ease-flip-card__back` | Back face — revealed on flip |

Set `width` and `height` on `ease-flip-card` (or a parent). The inner faces use `position: absolute; inset: 0` to fill it.

## Variants

| Class on `ease-flip-card` | Description |
|---|---|
| (none) | Hover flip, rotateY (horizontal) |
| `ease-flip-card--vertical` | Hover flip, rotateX (vertical) |
| `ease-flip-card--click` | Flip on focus/click — no hover |
| `ease-flip-card--fast` | 0.3s transition |
| `ease-flip-card--slow` | 1s transition |

## Click Variant

The click variant uses CSS `:focus-within` — wrap a hidden `<input type="checkbox">` inside using `ease-flip-card__trigger`:

```html
<div class="ease-flip-card ease-flip-card--click" style="width:200px;height:130px;" tabindex="0">
  <input class="ease-flip-card__trigger" type="checkbox" aria-label="Flip card" />
  <div class="ease-flip-card__inner">
    <div class="ease-flip-card__front">Front</div>
    <div class="ease-flip-card__back">Back</div>
  </div>
</div>
```

Clicking the card focuses the hidden checkbox, toggling `:focus-within` on the wrapper — no JavaScript needed.

## Submission

- **Author:** sudha09-git
- **Issue:** #3834
- **Files:** `style.css`, `demo.html`
