# Form Validation States

This submission implements explicit error and success form state validation helpers (`ease-input-error` and `ease-input-success`) to manage feedback messages, status icons, and input borders.

---

## Technical Overview

Providing clean validation feedback improves form usability. The validation classes are declared as:

### 1. Success State (`ease-input-success`)
- Changes input border to green.
- Appends a green checkmark status indicator inside the input wrapper.

### 2. Error State (`ease-input-error`)
- Changes input border to red.
- Appends a red warning icon indicator inside the input wrapper.
- Displays the block-level feedback message directly below the input.

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Click **Validate Form** with empty input values — verify both inputs turn red, display warning chevrons, and reveal validation feedback text.
3. Type a valid email (e.g. `test@example.com`) and password (e.g. `secret123`), then click **Validate Form** — verify inputs turn green, display checkmarks, and hide error messages.
