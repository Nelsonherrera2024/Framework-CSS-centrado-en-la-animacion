# Bug Fix #2085: prefers-reduced-motion in Scroll Progress Bar

## What does this do?
Adds a `@media (prefers-reduced-motion: reduce)` block to
`components/scroll-progress.css` so the scroll progress bar
is static (non-animated) when users have enabled reduced motion
in their OS or browser accessibility settings.

## How is it used?
The fix is transparent to existing users. Users who prefer
reduced motion will automatically get:
- animation: none on .ease-scroll-progress
- transform: scaleX(1) so the bar is still visible

No HTML changes required.

```css
@media (prefers-reduced-motion: reduce) {
  .ease-scroll-progress {
    animation: none;
    transform: scaleX(1);
  }
}
```

## Why is this useful?
WCAG 2.1 Success Criterion 2.3.3 (Level AAA) requires web
pages to respect `prefers-reduced-motion`. Without this fix
the progress bar's scroll-driven animation continuously
runs for all users, including those with vestibular disorders.

## Tech Stack
- CSS (media queries, no frameworks)

## Affected Files
- components/scroll-progress.css

Issue: #2085
Labels: type:bug, level:beginner, accessibility, GSSoC-26
