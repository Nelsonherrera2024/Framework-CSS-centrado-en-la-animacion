# Cookie Consent Banner with Bottom Slide Slide

A modular, copy-paste ready React component that renders a cookie consent preference banner. It slides up from the bottom of the screen, allows toggling details settings categories (Essential, Analytics, Marketing), and remembers user selections by writing to `localStorage`.

---

## 📦 Installation

This component has zero external dependencies outside React and standard EaseMotion CSS libraries.

1. Copy [CookieConsentBanner.jsx](./CookieConsentBanner.jsx) into your React component directory.
2. Link the core EaseMotion CSS stylesheet inside your application entry file (e.g. `App.js` or `main.js`):

```javascript
import 'ease-motion-css/easemotion.css';
```

---

## 🚀 Usage Example

```jsx
import React from 'react';
import CookieConsentBanner from './CookieConsentBanner';

export default function App() {
  const handleAccept = (preferences) => {
    console.log('Consent saved:', preferences);
    // e.g. initialize Google Analytics or Facebook Pixel based on preferences
  };

  const handleDecline = () => {
    console.log('Consent declined.');
  };

  return (
    <div className="container" style={{ padding: '3rem', backgroundColor: '#030712', minHeight: '100vh', color: '#fff' }}>
      <h2>Welcome to Our Platform</h2>
      <p>Scroll down or navigate the site. The cookie banner slides up automatically.</p>
      
      <CookieConsentBanner 
        cookieName="platform_user_consent" 
        accentColor="#8b5cf6"
        onAccept={handleAccept}
        onDecline={handleDecline}
      />
    </div>
  );
}
```

---

## ⚙️ Props Specifications

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `cookieName` | `string` | `'easemotion_consent'` | The key name used to store consent JSON in local storage. |
| `accentColor` | `string` | `'#8b5cf6'` | Accent color used for primary Action CTA buttons. |
| `onAccept` | `Function` | *Optional* | Callback executed when selection is saved, passing preferences values. |
| `onDecline` | `Function` | *Optional* | Callback executed when declined, setting analytics and marketing to false. |
