Title: feat(submissions): add CSS-only Toast Notification component with shimmer

Description
-----------
This PR adds a new example submission demonstrating a CSS-only toast notification component with a subtle shimmer, smooth slide-in/out animations, four semantic variants, and multiple position helpers.

Branch
- `submissions/toast-notification` (pushed to fork `Siddhu2k04/EaseMotion-css`)

Files
- `submissions/examples/toast-notification/style.css` — component CSS and variables
- `submissions/examples/toast-notification/demo.html` — demo page (static examples + interactive controls)
- `submissions/examples/toast-notification/demo.js` — tiny JS helper (demo-only) for programmatic toasts
- `submissions/examples/toast-notification/README.md` — documentation

How to preview locally
1. Checkout branch: `git checkout submissions/toast-notification`
2. Open `submissions/examples/toast-notification/demo.html` in your browser.

Suggested PR body (copy into GitHub PR):

```
Adds a new toast notification example (CSS-only) with variants, positions, shimmer effect, and hover-pause.

- Component is implemented in `style.css` and uses CSS variables for customization.
- Demo includes an optional `demo.js` to demonstrate programmatic usage (no dependency on the component itself).

Testing:
- Open the demo and verify each variant and position renders correctly.
- Click interactive controls to spawn toasts programmatically. Hover to pause.

Notes:
- This submission follows the EaseMotion naming conventions and adds files only under `submissions/examples/toast-notification/`.
```

PR URL to open in browser (fork):
https://github.com/Siddhu2k04/EaseMotion-css/pull/new/submissions/toast-notification

Upstream repo:
https://github.com/SAPTARSHI-coder/EaseMotion-css

Screenshots (add these files to the repo or upload via PR):
- `submissions/examples/toast-notification/screenshots/top-right.png`
- `submissions/examples/toast-notification/screenshots/interactive.png`
