# Stepper / Wizard Component — EaseMotion CSS Submission

A multi-step progress indicator for checkout flows, onboarding wizards, and multi-page forms.

## Classes

| Class | Description |
|---|---|
| `stepper` | Container for all steps (horizontal by default) |
| `stepper.vertical` | Vertical layout variant |
| `stepper-step` | Individual step wrapper |
| `stepper-step.active` | Current active step |
| `stepper-step.completed` | Completed step (purple fill) |
| `stepper-step.error` | Error state (red) |
| `stepper-circle` | The numbered/icon circle indicator |
| `stepper-label` | Text label below the circle |

## Usage

```html
<div class="stepper">
  <div class="stepper-step completed">
    <div class="stepper-circle">✓</div>
    <div class="stepper-label">Account</div>
  </div>
  <div class="stepper-step active">
    <div class="stepper-circle">2</div>
    <div class="stepper-label">Details</div>
  </div>
  <div class="stepper-step">
    <div class="stepper-circle">3</div>
    <div class="stepper-label">Payment</div>
  </div>
</div>
```

## How to Test

1. Open `demo.html` directly in a browser
2. Click Next/Back to animate through horizontal steps
3. Observe completed (purple), active (glowing), and error (red) states
4. Scroll to vertical stepper for the order-tracking variant

## EaseMotion CSS Fit

Human-readable class names, composable states, CSS transitions only — no dependencies.
