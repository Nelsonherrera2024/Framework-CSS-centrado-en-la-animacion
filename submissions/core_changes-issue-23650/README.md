# Source Map Generation for Build Script

1. **What does this do?**
   Enhances `scripts/build-minified-css.mjs` to generate source maps (`easemotion.min.css.map`) alongside the minified CSS bundle. The minified file includes a `/*# sourceMappingURL=easemotion.min.css.map */` comment. A `--no-map` flag is available to skip source map generation for CDN builds.

2. **How is it used?**

   ```bash
   # Build with source map (default)
   npm run build

   # Build without source map (CDN/production)
   node scripts/build-minified-css.mjs --no-map
   ```

3. **Files changed:**

   | File | Change |
   |---|---|
   | `scripts/build-minified-css.mjs` | Enhanced to track source origins during bundling and emit a `.map` file |
   | `easemotion.min.css` (output) | Now includes `/*# sourceMappingURL=... */` comment |
   | `easemotion.min.css.map` (new) | Source map mapping minified output back to original source files |

4. **Why is this useful?**
   Without source maps, debugging production CSS issues is extremely difficult — DevTools shows all rules coming from a single minified line. Source maps let developers trace minified CSS rules back to their original source files and line numbers, making debugging and maintenance significantly easier.
