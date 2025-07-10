import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const sectionStyles: React.CSSProperties = {
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '3rem',
  fontWeight: 'bold',
  color: 'white',
  margin: 0,
  padding: 0,
};

const panelColors = [
  { className: 's2', style: { background: 'orange' } },
  { className: 's3', style: { background: 'yellow', color: 'black' } },
  { className: 's4', style: { background: 'green' } },
];

export default function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(containerRef.current, {
        xPercent: -200,
        ease: 'none',
        scrollTrigger: {
          trigger: horizontalRef.current,
          start: 'top top',
          end: '+=3000',
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div style={{ ...sectionStyles, background: 'red' }}>Section 1</div>
      <div ref={horizontalRef} style={{ background: 'transparent', padding: 0 }}>
        <div
          ref={containerRef}
          style={{ display: 'flex', width: '300vw' }}
        >
          {panelColors.map((panel, idx) => (
            <div
              key={panel.className}
              style={{ ...sectionStyles, ...panel.style, flex: '0 0 100vw' }}
            >
              Section {idx + 2}
            </div>
          ))}
        </div>
      </div>
      <div style={{ ...sectionStyles, background: 'blue' }}>Section 5</div>
    </div>
  );
} 