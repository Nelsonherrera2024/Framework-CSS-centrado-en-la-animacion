# CSS Count-Up Number

## 1. What does this do?
Animated counting number that increments from 0 to a target value using CSS `@property` and `counter-set` — no JavaScript needed.

## 2. How is it used?
Add a `.counter` element with a modifier class for the target value (`.counter-100`, `.counter-250`, `.counter-500`). The number counts up automatically on load.
```html
<div class="counter counter-100">0</div>
```

## 3. Why is it useful?
Pure CSS animated counters without any JavaScript. Uses `@property` to animate an integer and `counter-set` to render it. Respects `prefers-reduced-motion` by jumping to the final value when motion is reduced.
