# Footer CSS Optimization (ss)

1. **What does this do?**  
   Analyzes `components/footer.css` (~21KB, 724 lines) and provides a 6-step strategy to reduce it to ~8KB by extracting inline SVG icons, consolidating light mode overrides, removing duplicate transitions, merging orb code, combining responsive breakpoints, and using CSS shorthand.

2. **How is it used?**  
   Review the breakdown and strategies in `demo.html`, then apply to `components/footer.css`:

   - Extract 7 inline SVG data URIs into separate file (-4.5 KB)
   - Replace `@media (prefers-color-scheme: light)` with `[data-theme="light"]` (-1.0 KB)
   - Move `transition` declarations to parent level (-0.5 KB)
   - Merge `::before`/`::after` orb styles (-0.5 KB)
   - Fold 480px breakpoint into 768px (-0.5 KB)
   - Use `margin-inline`, remove `!important` (-0.3 KB)

3. **Why is it useful?**  
   Footer CSS is the largest component at ~21KB — bigger than tooltips, modals, and tabs combined. Optimizing to ~8KB makes the framework leaner, improves CDN delivery, and reduces page load time.
