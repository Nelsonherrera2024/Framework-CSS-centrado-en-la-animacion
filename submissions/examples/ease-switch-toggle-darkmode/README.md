# Component: ease-switch-toggle-darkmode

Accessible dark/light theme toggle switches with three animated design variations.

## Variations
1. **Classic Switch** — pill-track, sliding thumb, bouncy "pop" animation on toggle, glow shadow while active.
2. **Scenic Switch** — day clouds fade out, night sky with staggered twinkling stars fades in.
3. **Minimal Button** — icon-only circular button with a slow breathing glow while in dark mode.

All three share:
- A ripple pulse on press (`:active`)
- Spring-eased sun/moon icon rotation
- Full keyboard accessibility (`:focus-visible` outlines, native checkbox semantics)
- `prefers-reduced-motion` support (disables all animation/transition)

## Usage
```html
<label class="switch-track" for="switch1">
  <input type="checkbox" id="switch1" class="switch-input">
  <div class="switch-classic">
    <div class="switch-thumb">
      <svg class="icon-svg icon-sun">...</svg>
      <svg class="icon-svg icon-moon">...</svg>
    </div>
  </div>
</label>
```
```js
document.querySelectorAll('.switch-input').forEach(cb => {
  cb.addEventListener('change', e => {
    document.documentElement.setAttribute('data-theme', e.target.checked ? 'dark' : 'light');
  });
});
```

## Preview
Open `demo.html` directly in a browser — no build step required.