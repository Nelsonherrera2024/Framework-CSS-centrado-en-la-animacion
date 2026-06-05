# Advanced React Integration Guide

## What does this do?

This example demonstrates advanced integration patterns for using EaseMotion CSS in React applications, including state-based animations, conditional rendering, animated lists, and route transitions.

---

## How is it used?

### Install EaseMotion CSS

```bash
npm install easemotion-css
```

### Import in main.jsx

```jsx
import 'easemotion-css/core/variables.css';
import 'easemotion-css/core/base.css';
import 'easemotion-css/core/animations.css';
import 'easemotion-css/core/utilities.css';
```

### Basic Usage

```jsx
<div className="ease-card ease-slide-up">
  Welcome to EaseMotion CSS
</div>
```

### State-Based Animation

```jsx
const [active, setActive] = useState(false);

<div className={`ease-card ${active ? 'ease-shake' : ''}`}>
  Interactive Card
</div>
```

### Conditional Rendering

```jsx
{showMessage && (
  <div className="ease-fade-in">
    Saved successfully!
  </div>
)}
```

### Animated Lists

```jsx
{items.map((item, index) => (
  <div
    key={item}
    className={`ease-slide-up ease-delay-${(index + 1) * 100}`}
  >
    {item}
  </div>
))}
```

### Route Transitions

```jsx
<div key={location.pathname} className="ease-fade-in ease-slide-up">
  {children}
</div>
```

---

## Why is it useful?

React applications rely heavily on dynamic rendering and component state. This guide demonstrates practical patterns for applying EaseMotion CSS animations in real-world React workflows while maintaining clean and readable JSX.
