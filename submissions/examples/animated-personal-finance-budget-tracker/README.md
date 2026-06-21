# Animated Personal Finance Budget Tracker

1. **What does this do?**  
   An interactive personal finance budget tracker dashboard designed to display monthly income, expenses, remaining balances, budget category breakdowns (Housing, Dining, Shopping, Entertainment) with custom animatable progress bars, recent transactions, and an animated circular SVG savings goal progress ring.

2. **How is it used?**  
   The component is written to be self-contained and modular. All class names are isolated with the `apf-` prefix to prevent namespace collisions.

   ### HTML Dashboard Outline
   ```html
   <main class="apf-dashboard-shell">
     <div class="apf-card">
       <!-- Header & theme controls -->
       <header class="apf-header">
         <h1 class="apf-title">Personal Finance Tracker</h1>
       </header>

       <!-- Stats block -->
       <section class="apf-summary-grid">
         <div class="apf-summary-card">
           <strong id="totalIncome">$4,800.00</strong>
           <span>Monthly Income</span>
         </div>
       </section>

       <!-- Two column content grid -->
       <div class="apf-grid">
         <!-- Left side: Category limits & creation forms -->
         <section class="apf-left-col">
           <div class="apf-panel">
             <h2 class="apf-section-title">Spending Categories</h2>
             <div class="apf-category-item">
               <div class="apf-progress-track">
                 <div class="apf-progress-fill" id="fill-housing" style="width: 80%;"></div>
               </div>
             </div>
           </div>
         </section>

         <!-- Right side: Savings circle & recent transactions list -->
         <section class="apf-right-col">
           <div class="apf-panel apf-savings-panel">
             <!-- Circular SVG Ring Progress -->
             <svg class="apf-progress-ring" width="140" height="140">
               <circle class="apf-progress-ring-fill" stroke-width="10" r="58" cx="70" cy="70" id="progressRingFill" />
             </svg>
           </div>
         </section>
       </div>
     </div>
   </main>
   ```

3. **Why is it useful?**  
   - **Full Interactive Mockup**: Unlike static examples, this dashboard has a built-in transaction logger, a dark/light mode toggle with smooth transitions, and live updates.
   - **State-Synchronized CSS Animations**: Transitions are managed by CSS transition and animation engines (triggered by JS state changes setting variables like `--apf-pct` and SVG `stroke-dashoffset`).
   - **Hardware Accelerated**: Visual states are optimized for rendering speed.
   - **A11y Compliant**: Focus indicators are styled specifically for keyboard navigation (`:focus-visible`), and a full `@media (prefers-reduced-motion: reduce)` block disables layout transforms and velocity calculations for users with motion sensitivities.
