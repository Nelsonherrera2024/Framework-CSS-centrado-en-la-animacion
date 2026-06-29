import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import * as Dialog from '@radix-ui/primitive'; // Headless accessible wireframe mappings

// Mimicking our declarative JSX React framework interface wrapper
interface AnimateProps {
  children: React.ReactNode;
  type: 'fade-in' | 'scale-up' | 'slide-in-right' | 'layout-shift';
  delay?: number;
  hover?: 'lift' | 'glint-trigger' | 'none';
  className?: string;
}

const Animate: React.FC<AnimateProps> = ({ children, type, delay = 0, hover = 'none', className = '' }) => {
  const animationClass = `ease-${type}`;
  const hoverClass = hover !== 'none' ? `ease-hover-${hover}` : '';
  const delayStyle = delay ? { animationDelay: `${delay}ms` } : {};

  return (
    <div 
      className={`ease-animate-container ${animationClass} ${hoverClass} ${className}`} 
      style={delayStyle}
    >
      {children}
    </div>
  );
};

const meta: Meta<typeof Animate> = {
  title: 'Design System/Integration Core/Animate Matrix',
  component: Animate,
  parameters: {
    layout: 'centered',
    chromatic: { diffThreshold: 0.15, pauseAnimationAtEnd: true },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Animate>;

/**
 * MATRIX TEST 1: Rapid Interrupted Hover Triggers & Boundary Overrides
 * Validates that micro-interactions do not cause jumpy layout recalculations when cursor quickly enters/exits.
 */
export const FastInterruptedHovers: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', padding: '2rem', background: '#090d16' }}>
      <Animate type="fade-in" hover="lift">
        <div style={{ background: '#101726', border: '1px solid #1f2a3f', padding: '1.5rem', borderRadius: '6px', cursor: 'pointer' }}>
          <span style={{ color: '#6366f1', fontSize: '0.75rem', fontWeight: 700 }}>CLUSTER_NODE_01</span>
          <p style={{ margin: '0.5rem 0 0 0', color: '#fff', fontSize: '0.9rem' }}>Fast hover boundary check loop</p>
        </div>
      </Animate>
      <Animate type="fade-in" hover="lift" delay={100}>
        <div style={{ background: '#101726', border: '1px solid #1f2a3f', padding: '1.5rem', borderRadius: '6px', cursor: 'pointer' }}>
          <span style={{ color: '#10b981', fontSize: '0.75rem', fontWeight: 700 }}>CLUSTER_NODE_02</span>
          <p style={{ margin: '0.5rem 0 0 0', color: '#fff', fontSize: '0.9rem' }}>Hardware state memory isolation</p>
        </div>
      </Animate>
    </div>
  ),
};

/**
 * MATRIX TEST 2: Accessible Headless Primitive Modal Backdrop Scaling
 * Integrates Radix UI structural logic with declarative entrance layers for screen-readers.
 */
export const HeadlessModalBackdropScale: Story = {
  render: () => (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      {/* Simulation layout containing forced open elements for Chromatic visual regression tracking */}
      <div style={{ position: 'relative', width: '480px', background: '#090d16', border: '1px solid #1f2a3f', borderRadius: '8px', overflow: 'hidden' }}>
        {/* Backdrop Element Layer */}
        <div className="ease-fade-in" style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', zIndex: 1 }} />
        
        {/* Core Modal Dialog Container Box */}
        <div role="dialog" aria-modal="true" aria-labelledby="modal-tx-title" className="ease-scale-up" style={{ position: 'relative', zIndex: 2, margin: '4rem auto', width: '80%', background: '#101726', padding: '2rem', borderRadius: '6px', border: '1px solid #314261', textAlign: 'left' }}>
          <span style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 800, letterSpacing: '0.05em' }}>ACCESSIBLE MODAL SUITE</span>
          <h3 id="modal-tx-title" style={{ color: '#fff', margin: '0.5rem 0', fontSize: '1.2rem' }}>Rebalance Institutional Liquidity</h3>
          <p style={{ color: '#64748b', fontSize: '0.85rem', margin: '0 0 1.5rem 0' }}>Are you sure you want to transfer $1.2M USD across distributed shards?</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
            <button style={{ background: 'transparent', border: '1px solid #1f2a3f', color: '#64748b', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>Cancel</button>
            <button style={{ background: '#6366f1', border: 'none', color: '#fff', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 600 }}>Confirm Swap</button>
          </div>
        </div>
      </div>
    </div>
  ),
};

/**
 * MATRIX TEST 3: Continuous Grid Reordering Layout Shifts
 * Ensures layout shifts are tracked fluidly without snapping elements out of position.
 */
export const ContinuousLayoutReordering: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '400px', padding: '2rem', background: '#090d16' }}>
      <div className="ease-layout-shift" style={{ display: 'flex', justifyContent: 'space-between', background: '#101726', border: '1px solid #1f2a3f', padding: '1rem', borderRadius: '4px' }}>
        <strong style={{ color: '#fff', fontSize: '0.85rem' }}>1. Primary Audit Feed Worker Pipeline</strong>
        <span style={{ color: '#64748b', fontSize: '0.75rem' }}>INDEX_0</span>
      </div>
      <div className="ease-layout-shift" style={{ display: 'flex', justifyContent: 'space-between', background: '#101726', border: '1px solid #1f2a3f', padding: '1rem', borderRadius: '4px' }}>
        <strong style={{ color: '#fff', fontSize: '0.85rem' }}>2. Secondary Ingress Route Health Monitor</strong>
        <span style={{ color: '#64748b', fontSize: '0.75rem' }}>INDEX_1</span>
      </div>
    </div>
  ),
};