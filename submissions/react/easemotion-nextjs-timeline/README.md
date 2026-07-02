# Animated Timeline Component

A server-rendered compatible React component showcasing the use of EaseMotion CSS for 0 CLS and hydration-mismatch-free animations.

## Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| `items` | `TimelineItem[]` | An array of timeline items to display. |

### `TimelineItem` Interface
- `id` (string): Unique identifier.
- `title` (string): Title of the event.
- `description` (string): Details about the event.
- `date` (string): Formatted date string.

## Usage Example

```tsx
import { AnimatedTimeline } from './AnimatedTimeline';

const mockData = [
  { id: '1', title: 'Start', description: 'Project initialization', date: 'Jan 2026' }
];

export default function App() {
  return <AnimatedTimeline items={mockData} />;
}
```

## Features
- Implements `ease-slide-up-in`, `ease-slide-right-in`, `ease-pulse`, and `ease-hover-lift` from EaseMotion CSS.
- Zero dependencies outside of React and EaseMotion.
- Fully compatible with Server Components.
