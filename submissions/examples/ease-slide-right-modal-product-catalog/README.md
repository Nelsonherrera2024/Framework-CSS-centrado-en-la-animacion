# Slide-Right Product Catalog Modal

## What does this do?
This is a Pure HTML & CSS slide-right modal customized specifically for Product Catalog layouts. It utilizes an elegant glassmorphism aesthetic (blur, transparency, soft border glow) and opens with a combined slide-right and scale transition, all without using any JavaScript.

## How is it used?
Link to `style.css` and arrange your HTML structure according to the EaseMotion class style:

```html
<!-- Catalog Trigger Button -->
<a href="#product-modal" id="open-btn" class="view-btn">View Details</a>

<!-- Modal Component -->
<div id="product-modal" class="ease-modal" role="dialog" aria-modal="true">
  <!-- Overlay (click outside to close) -->
  <a href="#open-btn" class="ease-modal__overlay" aria-label="Close details"></a>
  
  <!-- Modal Content Card -->
  <div class="ease-modal__content">
    <!-- Close Button (restores focus to open button) -->
    <a href="#open-btn" class="ease-modal__close" aria-label="Close details">&times;</a>
    
    <!-- 2-Column Product Layout -->
    <div class="modal-product-grid">
      <div class="modal-product-gallery">
        <img src="product.png" class="modal-product-image" alt="Product">
      </div>
      <div class="modal-product-details">
        <h2>Aether Watch</h2>
        <span class="price">$249</span>
        <p>Premium smart tracker description...</p>
        <button class="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Zero JS Dependency**: Toggle state is driven by native CSS `:target` logic.
- **Product-Focused Layout**: Built with a responsive 2-column detail grid (gallery/specifications), perfect for high-converting ecommerce platforms.
- **Accessibility & Focus Retention**: Leverages target elements to return focus to the exact button that triggered the modal, support for `:focus-visible`, and high contrast inputs.
- **Reduced Motion Support**: Completely turns off scale/translate transitions when `prefers-reduced-motion: reduce` is detected.
- **Configurable Tokens**: Highly customizable via CSS Custom Properties.

## Customization Variables
You can configure the appearance and animations of the modal using these CSS Custom Properties:

```css
.ease-modal {
  --ease-modal-duration: 0.5s;                            /* Animation duration */
  --ease-modal-easing: cubic-bezier(0.16, 1, 0.3, 1);       /* Easing function */
  --ease-modal-width: 820px;                               /* Modal width */
  --ease-modal-blur: 24px;                                 /* Blur intensity */
  --ease-modal-bg-opacity: 0.06;                           /* Background opacity */
  --ease-modal-radius: 28px;                               /* Border radius */
  --ease-modal-glow: 0 30px 60px -15px rgba(0, 0, 0, 0.6), /* Shadow/glow strength */
                     0 0 0 1px rgba(255, 255, 255, 0.1) inset,
                     0 0 45px rgba(16, 185, 129, 0.12);
}
```

## Tech Stack
- HTML5
- CSS3 (Vanilla CSS, custom properties, transition logic)

## Preview
Open `demo.html` directly in your browser.
