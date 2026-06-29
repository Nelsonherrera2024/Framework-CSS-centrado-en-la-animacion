# Graceful Asset Recovery

This guide documents code robustness guidelines for asset validation and bundle generation scripts, showcasing a visual fallback recovery console.

---

## Technical Overview: The Truncation Bug

During file bundle checks, naively handling missing assets can overwrite existing targets with blank content. For instance:
- If a target build file is missing at verification startup, reading the file returns an empty string or throws an error.
- Pushing that empty string default back to the stylesheet overrides it, wiping out the minified layout:
  ```javascript
  // BUG: Overwrites file with blank string if reading fails
  const bundle = fs.readFileSync('dist/bundle.css', 'utf8') || '';
  fs.writeFileSync('dist/bundle.css', bundle);
  ```

---

## Best Practices for File Verification

1. **Existence Guards**:
   Always verify the file exists utilizing `fs.existsSync` before attempting reading:
   ```javascript
   if (!fs.existsSync(filePath)) {
       throw new Error(`Critical asset missing: ${filePath}`);
   }
   ```
2. **Error Recovery Tries**:
   Wrap file writes in `try-catch` boundaries to verify write operations succeed.
3. **CDN Fallback Scripts**:
   Include backup script references inside HTML headers to fetch stylesheet parameters from CDN networks if local links fail to load:
   ```html
   <link rel="stylesheet" href="style.css" onerror="this.onerror=null;this.href='https://cdn.jsdelivr.net/...'">
   ```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Click **Simulate Asset Fail** — observe the warning indicators and logs indicating missing stylesheet errors.
3. Click **Trigger Recovery Fallback** — verify the status indicators update to green, showing the fallback stylesheet loaded.
