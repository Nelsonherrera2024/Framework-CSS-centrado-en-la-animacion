# Fix: core/tabs.js Memory Leak & Event Listener Accumulation

**Fixes:** [#30731](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/30731)

---

## 🐛 Bug Description

The `initializeTabs()` function in `core/tabs.js` attaches a global `window` resize event listener and `change` event listeners to all tab inputs every time it is called. Since the `MutationObserver` triggers `initializeTabs()` on *every* DOM mutation (such as class changes, adding elements, etc.), these event listeners accumulate indefinitely, leading to a severe memory leak and performance degradation.

---

## ✅ Fix

1. Bind the `window` resize listener globally outside `initializeTabs()` so it is only attached once.
2. Mark initialized tab containers using a `data-tabs-initialized` attribute to prevent re-binding event listeners to their inputs.

```javascript
  // Fix snippet for core/tabs.js:
  function initializeTabs() {
    var tabContainers = document.querySelectorAll('.ease-tabs');
    if (tabContainers.length === 0) return;

    // ... processing logic ...

    Array.prototype.forEach.call(tabContainers, function (container, containerIndex) {
      // Prevent double initialization
      if (container.hasAttribute('data-tabs-initialized')) return;
      container.setAttribute('data-tabs-initialized', 'true');

      var inputs = container.querySelectorAll('.ease-tab-input');
      // Only attach listeners to uninitialized tabs
      Array.prototype.forEach.call(inputs, function (input) {
        input.addEventListener('change', function () {
          updateUnderlineWidth(container);
        });
      });
    });
  }

  // Bind resize listener globally once
  var resizeTimeout;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function () {
      var tabContainers = document.querySelectorAll('.ease-tabs');
      Array.prototype.forEach.call(tabContainers, function (container) {
        updateUnderlineWidth(container);
      });
    }, 150);
  });
```

---

## 📁 Submission Contents

| File | Purpose |
|------|---------|
| `demo.html` | Interactive demo showing that DOM mutations no longer leak event listeners |
| `style.css` | Demo page styling |
| `README.md` | This documentation file |
