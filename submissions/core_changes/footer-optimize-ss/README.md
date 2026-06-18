# Footer CSS Optimization (ss)

1. **What does this do?**  
   Analyzes `components/footer.css` (~21KB, 724 lines) and provides a 6-step optimization strategy to reduce it to ~8KB by extracting SVG icons, consolidating light mode overrides, removing duplicate transitions, reducing animated orb code, combining responsive breakpoints, and using CSS shorthand.

2. **How is it used?**  
   Review the analysis in `demo.html` and the strategies below, then apply the patches to `components/footer.css`:

   - Extract 7 inline SVG data URIs into a separate `footer-icons.css` file (saves ~4.5 KB)
   - Replace `@media (prefers-color-scheme: light)` with `[data-theme="light"]` selectors (saves ~1 KB)
   - Remove individual `transition` declarations, set at parent level (saves ~0.5 KB)
   - Merge `::before`/`::after` orb declarations (saves ~0.5 KB)
   - Combine 480px breakpoint into 768px block (saves ~0.5 KB)
   - Use `margin-inline`, remove `!important`, use shorthand (saves ~0.3 KB)

3. **Why is it useful?**  
   The footer CSS is the largest component file at ~21KB, larger than tooltips (7KB), modals (7KB), and tabs (12KB) combined in some cases. Optimizing it to ~8KB makes the framework leaner, improves CDN delivery, and aligns with the "zero bloat" philosophy.
