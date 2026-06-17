# EaseMotion — Connection Status / Offline Indicator

A premium, production-ready connection status banner for modern SaaS dashboards.

---

## 1. What does this do?

Detects whether the user's browser has a live network connection and displays a **fixed top banner** that communicates the current state:

| State | Appearance | Behaviour |
|-------|------------|-----------|
| **Offline** | Red glassmorphism bar, warning icon, pulsing dot | Slides down, shimmer sweep + reconnect progress animations, stays visible until connectivity returns |
| **Online (restored)** | Green glassmorphism bar, check-circle icon | Slides down, auto-dismisses after ~3 seconds (or on manual close) |
| **Hidden (default)** | Not visible | No layout shift — banner is off-screen via `translateY(-100%)` |

Network detection uses the native browser APIs:

```js
window.addEventListener("online",  handleOnline);
window.addEventListener("offline", handleOffline);
// plus an initial snapshot:
if (!navigator.onLine) handleOffline();
```

---

## 2. How is it used?

### Drop the HTML into your page

```html
<!-- In your <head> -->
<link rel="stylesheet" href="style.css" />

<!-- Fixed banner (place as first child of <body>) -->
<div
  id="connection-status"
  class="connection-status is-hidden"
  role="status"
  aria-live="polite"
  aria-atomic="true"
  aria-label="Network status"
>
  <div class="cs-inner">
    <span class="cs-dot"></span>
    <span class="cs-icon">
      <!-- online SVG icon -->
      <!-- offline SVG icon -->
    </span>
    <span class="cs-message">Connection Restored</span>
    <button class="cs-dismiss" aria-label="Dismiss notification">×</button>
  </div>
  <div class="cs-progress"></div>
</div>

<!-- Before </body> -->
<script src="script.js"></script>
```

> Copy the full icon SVGs from `demo.html` — they swap automatically via CSS.

### Offset your sticky navigation

If you have a sticky nav/topbar, add this rule so it doesn't get covered:

```css
body.banner-visible .your-topbar {
  margin-top: var(--banner-height); /* 48px */
  transition: margin-top 380ms cubic-bezier(0.16, 1, 0.3, 1);
}
```

The script adds `.banner-visible` to `<body>` whenever the banner is shown.

### Programmatic control / testing

```js
// Simulate states without disconnecting your network
window.ConnectionStatus.simulateOffline();
window.ConnectionStatus.simulateOnline();

// Read current state
window.ConnectionStatus.isOnline(); // → boolean
```

---

## 3. Why is it useful?

Modern SaaS users expect to know immediately when they've lost connectivity — especially in data-heavy dashboards where stale or unsaved data is a real risk. A silent failure is far worse than a clear, friendly warning.

**This component provides:**

- **Zero-dependency detection** — uses native browser APIs, no libraries required.
- **Non-disruptive UX** — the banner slides in from the top; the rest of the page layout adjusts gracefully without any content jumping.
- **Clear visual hierarchy** — red for danger (offline), green for success (restored), each with matching icons and copy that leaves no ambiguity.
- **Accessibility by default** — `aria-live="polite"` ensures screen readers announce the state change without interrupting the user mid-sentence; colour contrast meets WCAG AA; the dismiss button is keyboard-navigable.
- **Reduced-motion respect** — animations are disabled via `@media (prefers-reduced-motion: reduce)` for users who have opted out of motion in their OS settings.
- **Production-grade styling** — glassmorphism backdrop blur, shimmer sweep on the offline state, a pulsing reconnect progress bar, and a smooth slide-down/slide-up transition that feels native to modern SaaS products.

---

## File Structure

```
ease-connection-status/
├── demo.html     # Full SaaS dashboard demo showcasing the component
├── style.css     # All styles: component + dashboard shell + animations
├── script.js     # Network detection, state management, public API
└── README.md     # This file
```

---

## Customisation

All design tokens live in `:root` at the top of `style.css`:

```css
:root {
  --color-online:    #00C97A;   /* success green */
  --color-offline:   #FF4757;   /* danger red    */
  --banner-height:   48px;      /* banner height */
  --transition-speed: 380ms;    /* slide speed   */
}
```

Adjust `ONLINE_VISIBLE_MS` in `script.js` to change how long the "Connection Restored" banner stays visible before auto-dismissing (default: `3200`ms).