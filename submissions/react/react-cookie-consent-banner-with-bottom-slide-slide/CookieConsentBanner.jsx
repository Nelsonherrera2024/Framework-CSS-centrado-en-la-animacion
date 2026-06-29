import React, { useState, useEffect } from 'react';

/**
 * CookieConsentBanner Component
 * Renders a bottom slide cookie consent banner with customizable preferences.
 * Persists user preference selection in localStorage.
 * 
 * @param {Object} props
 * @param {string} [props.cookieName='easemotion_consent'] - Key name for localStorage
 * @param {string} [props.accentColor='#8b5cf6'] - Button and highlight accent color
 * @param {Function} [props.onAccept] - Triggered when consent is saved
 * @param {Function} [props.onDecline] - Triggered when consent is declined
 */
export default function CookieConsentBanner({
  cookieName = 'easemotion_consent',
  accentColor = '#8b5cf6',
  onAccept,
  onDecline
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  
  // Consent Preferences Toggles
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already made a selection
    const savedConsent = localStorage.getItem(cookieName);
    if (!savedConsent) {
      // Small delay to trigger the slide-up entrance animation cleanly
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, [cookieName]);

  const handleAction = (type, prefs) => {
    setIsExiting(true);
    
    // Slide down exit timing animation
    setTimeout(() => {
      setIsVisible(false);
      setIsExiting(false);
      localStorage.setItem(cookieName, JSON.stringify({ type, prefs }));

      if (type === 'accept' && onAccept) onAccept(prefs);
      if (type === 'decline' && onDecline) onDecline();
    }, 400);
  };

  const handleAcceptAll = () => {
    const allPrefs = { essential: true, analytics: true, marketing: true };
    handleAction('accept', allPrefs);
  };

  const handleAcceptSelected = () => {
    handleAction('accept', preferences);
  };

  const handleDecline = () => {
    const nonePrefs = { essential: true, analytics: false, marketing: false };
    handleAction('decline', nonePrefs);
  };

  const togglePreference = (key) => {
    if (key === 'essential') return; // Essential cannot be disabled
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  if (!isVisible) return null;

  return (
    <div
      className={`cookie-banner-wrapper ${isExiting ? 'ease-slide-out-bottom' : 'ease-slide-in-bottom'}`}
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        padding: '1.5rem',
        boxSizing: 'border-box'
      }}
    >
      {/* Banner Container */}
      <div
        className="cookie-banner-card"
        style={{
          maxWidth: '850px',
          margin: '0 auto',
          backgroundColor: '#0b0f19',
          border: '1px solid #1f2937',
          borderRadius: '12px',
          padding: '1.5rem',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.4)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem'
        }}
      >
        {/* Basic Panel info */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div style={{ flex: '1', minWidth: '280px', textAlign: 'left' }}>
            <h4 style={{ margin: '0 0 0.25rem 0', color: '#f9fafb', fontSize: '1.1rem', fontWeight: 700 }}>
              Cookie Consent Preferences
            </h4>
            <p style={{ margin: 0, color: '#9ca3af', fontSize: '0.85rem', lineHeight: 1.5 }}>
              We use cookies to personalize your experience and analyze our traffic. Customize your preferences below.
            </p>
          </div>

          {/* Action Button Controls */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => setShowPreferences(!showPreferences)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                border: '1px solid #1f2937',
                backgroundColor: '#030712',
                color: '#fff',
                fontSize: '0.85rem',
                cursor: 'pointer',
                fontWeight: 600
              }}
            >
              {showPreferences ? 'Hide Preferences' : 'Preferences'}
            </button>
            <button
              onClick={handleDecline}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                border: '1px solid #1f2937',
                backgroundColor: '#030712',
                color: '#fff',
                fontSize: '0.85rem',
                cursor: 'pointer',
                fontWeight: 600
              }}
            >
              Decline
            </button>
            <button
              onClick={handleAcceptAll}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: accentColor,
                color: '#fff',
                fontSize: '0.85rem',
                cursor: 'pointer',
                fontWeight: 700
              }}
            >
              Accept All
            </button>
          </div>
        </div>

        {/* Preferences Toggle Drawer */}
        {showPreferences && (
          <div
            className="ease-fade-in"
            style={{
              borderTop: '1px solid #1f2937',
              paddingTop: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              textAlign: 'left'
            }}
          >
            {/* Essential cookies */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f9fafb' }}>Essential Cookies</span>
                <p style={{ margin: 0, fontSize: '0.75rem', color: '#6b7280' }}>Required for standard functionality (always enabled).</p>
              </div>
              <input type="checkbox" checked disabled style={{ cursor: 'not-allowed' }} />
            </div>

            {/* Analytics cookies */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f9fafb' }}>Analytics Cookies</span>
                <p style={{ margin: 0, fontSize: '0.75rem', color: '#6b7280' }}>Helps us measure site performance and visitor stats.</p>
              </div>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={() => togglePreference('analytics')}
                style={{ cursor: 'pointer' }}
              />
            </div>

            {/* Marketing cookies */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f9fafb' }}>Marketing Cookies</span>
                <p style={{ margin: 0, fontSize: '0.75rem', color: '#6b7280' }}>Used for targeting ads and promotion campaigns.</p>
              </div>
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={() => togglePreference('marketing')}
                style={{ cursor: 'pointer' }}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
              <button
                onClick={handleAcceptSelected}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: '#10b981',
                  color: '#fff',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  fontWeight: 700
                }}
              >
                Accept Selected
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .ease-slide-in-bottom {
          animation: slideInBottom 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .ease-slide-out-bottom {
          animation: slideOutBottom 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes slideInBottom {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        @keyframes slideOutBottom {
          from { transform: translateY(0); }
          to { transform: translateY(100%); }
        }
      `}</style>
    </div>
  );
}
