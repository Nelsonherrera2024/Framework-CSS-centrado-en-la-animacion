# List Style Position Utilities

Utility CSS classes for controlling `list-style-position` on list elements.

## Files
- `demo.html` – Demonstration page showing inside/outside positioning for unordered and ordered lists.
- `style.css` – Utility classes:
  - `.list-inside` – `list-style-position: inside;`
  - `.list-outside` – `list-style-position: outside;`
  - Alias classes `.lsp-inside` and `.lsp-outside` used in the demo.
- `README.md` – This documentation.

## Usage
Include the stylesheet and apply the desired class to a `<ul>` or `<ol>`:

```html
<link rel="stylesheet" href="style.css" />
<ul class="list-inside">
  <li>Item with inside positioning</li>
</ul>
<ol class="list-outside">
  <li>Item with outside positioning</li>
</ol>
```

Open `demo.html` in a browser to see the utilities in action.
