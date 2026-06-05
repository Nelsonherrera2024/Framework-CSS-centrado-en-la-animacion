# CSS Count Up

**What does this do?**
Animates a stat number from zero to its configured target value when the card scrolls into view.

**How is it used?**
```html
<article class="count-card">
  <span class="count-label">Retention lift</span>
  <strong class="ease-count-up" style="--ease-count-target: 95"></strong>
</article>
```

Add `.is-visible` to the `.ease-count-up` element, or to one of its parents, to start the count.

**Why is it useful?**
Metric counters are common in dashboards, landing pages, and proof sections, and this version keeps the motion mostly in CSS with configurable targets, suffixes, and easing. That makes it a good fit for EaseMotion CSS because the maintainer can standardize the class names while preserving a small, reusable animation pattern.
