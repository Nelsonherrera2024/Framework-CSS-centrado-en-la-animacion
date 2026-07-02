import React from 'react';

export interface TimelineItem {
  id: string;
  title: string;
  description: string;
  date: string;
}

interface AnimatedTimelineProps {
  items: TimelineItem[];
}

/**
 * AnimatedTimeline Component
 * This is a React Server Component (or Client Component) that uses EaseMotion CSS.
 * It demonstrates 0 CLS and hydration mismatch as animations are CSS-driven.
 */
export const AnimatedTimeline: React.FC<AnimatedTimelineProps> = ({ items }) => {
  return (
    <div className="ease-slide-up-in ease-duration-500 ease-delay-100" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }} className="ease-text-glow ease-hover-scale">
        EaseMotion Timeline
      </h2>
      <div style={{ position: 'relative', borderLeft: '2px solid var(--primary)', paddingLeft: '2rem' }}>
        {items.map((item, index) => (
          <div 
            key={item.id} 
            className={`ease-slide-right-in ease-duration-500 ease-hover-lift glass-panel`}
            style={{ 
              marginBottom: '2rem', 
              padding: '1.5rem', 
              animationDelay: `${index * 150}ms` 
            }}
          >
            <div 
              className="ease-pulse"
              style={{ 
                position: 'absolute', 
                left: '-2.6rem', 
                top: '1.5rem', 
                width: '1rem', 
                height: '1rem', 
                backgroundColor: 'var(--primary)', 
                borderRadius: '50%',
                border: '3px solid var(--background)'
              }} 
            />
            <span style={{ fontSize: '0.875rem', color: 'var(--primary)', fontWeight: 'bold' }}>
              {item.date}
            </span>
            <h3 style={{ margin: '0.5rem 0', fontSize: '1.25rem' }}>{item.title}</h3>
            <p style={{ margin: 0, opacity: 0.8, lineHeight: '1.5' }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
