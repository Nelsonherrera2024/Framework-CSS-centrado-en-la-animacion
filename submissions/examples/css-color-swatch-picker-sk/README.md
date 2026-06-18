# CSS Color Swatch Picker

A color swatch selector using hidden radio inputs and the `:checked` + `~` sibling combinator.

## Usage
```html
<div class="swatch-picker">
  <input type="radio" name="swatch" id="swatch-red" class="swatch-picker__input">
  <label for="swatch-red" class="swatch-picker__swatch" style="--swatch: #e74c3c"></label>
  <div class="swatch-picker__preview">Pick a color</div>
</div>
```

## Why EaseMotion CSS?
Interactive color selection UI using pure CSS and the radio-button checked hack.
