# Cookie Consent Banner with Bottom Slide Slide

1. **What does this do?**  
   It renders a slide-up cookie preference banner at the bottom of the page, allowing users to toggle preference parameters (essential, analytics, marketing) and saving selections in local storage.

2. **How is it used?**  
   Apply the `.cookie-banner-overlay` class on banner containers, and `.cookie-card-body` on inner cards:
   ```html
   <div class="cookie-banner-overlay">
     <div class="cookie-card-body">
       <div class="banner-row">
         <h4>Consent Title</h4>
       </div>
     </div>
   </div>
   ```

3. **Why is it useful?**  
   It provides an elegant slide-up entrance animation to request user preferences while saving selection states to comply with privacy regulations.
