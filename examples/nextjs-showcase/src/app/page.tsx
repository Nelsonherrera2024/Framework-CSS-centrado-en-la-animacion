import React from 'react';
import { AnimatedTimeline } from '../components/AnimatedTimeline';
import ClientCounter from '../components/ClientCounter';

export default function Home() {
  const timelineData = [
    {
      id: '1',
      title: 'Initialize Next.js Showcase',
      description: 'Bootstrap a Next.js App Router project configured without Tailwind.',
      date: 'Step 1'
    },
    {
      id: '2',
      title: 'Integrate EaseMotion CSS',
      description: 'Link EaseMotion locally and configure PurgeCSS for production optimizations.',
      date: 'Step 2'
    },
    {
      id: '3',
      title: 'Zero CLS Server Components',
      description: 'Render beautiful animated components on the server without JS.',
      date: 'Step 3'
    },
    {
      id: '4',
      title: 'Seamless Hydration',
      description: 'Mix server and client components flawlessly with CSS-only animations.',
      date: 'Step 4'
    }
  ];

  return (
    <main style={{ minHeight: '100vh', padding: '4rem 1rem', overflowX: 'hidden' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: '4rem' }} className="ease-slide-down-in ease-duration-700">
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', letterSpacing: '-0.05em' }} className="ease-text-glow">
            Next.js + <span style={{ color: 'var(--primary)' }}>EaseMotion</span>
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>
            A demonstration of seamless Server & Client components without hydration mismatches or layout shifts, powered purely by CSS animations.
          </p>
        </header>

        {/* Server Component */}
        <AnimatedTimeline items={timelineData} />

        {/* Client Component */}
        <div className="ease-slide-up-in ease-duration-700 ease-delay-300">
          <ClientCounter />
        </div>
      </div>
    </main>
  );
}
