'use client';

import React, { useState } from 'react';

export default function ClientCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="glass-panel ease-hover-scale" style={{ padding: '2rem', textAlign: 'center', marginTop: '3rem', maxWidth: '400px', margin: '3rem auto' }}>
      <h3 className="ease-text-glow" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Client Component Interactivity</h3>
      <p style={{ marginBottom: '1rem', opacity: 0.8 }}>Clicks: {count}</p>
      <button 
        className="ease-hover-lift"
        onClick={() => setCount(c => c + 1)}
        style={{
          background: 'var(--primary)',
          color: 'var(--background)',
          border: 'none',
          padding: '0.75rem 1.5rem',
          borderRadius: '0.5rem',
          fontSize: '1rem',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Click Me (No Hydration Mismatch!)
      </button>
    </div>
  );
}
