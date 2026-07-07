## What does this do?
A pure CSS accordion component that uses a smooth "zoom-out" scale transition when expanding content — no JavaScript required.

## How is it used?
Use the native `<details>` / `<summary>` HTML pattern with the provided classes:

\`\`\`html
<details class="zoom-accordion-item">
  <summary>Your question</summary>
  <div class="zoom-accordion-content">
    <p>Your answer</p>
  </div>
</details>
\`\`\`

Customize via CSS custom properties on `.zoom-accordion`:
- `--accordion-duration` (default: 0.35s)
- `--accordion-easing` (default: ease-in-out)
- `--accordion-scale` (default: 0.96)

## Why is it useful?
Since it uses native `<details>`/`<summary>`, it's fully keyboard accessible (Tab + Enter/Space) and requires zero JavaScript overhead — perfect for marketing landing pages that need lightweight, accessible interactivity.