import React from 'react';
import { useParallaxScroll } from './useParallaxScroll';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Section8 from './Section8';
import Section9 from './Section9';

export default function ParallaxScroll() {
  const { scrollTop, sec4Ref, sec4InnerRef } = useParallaxScroll();

  return (
    <div style={{ position: 'relative', width: '100vw', minHeight: '900vh', background: '#111' }}>
      <header style={{ position: 'fixed', zIndex: 10000, left: 20, top: 20, color: '#fff' }}>
        <h1>Javascript Parallax Effect09</h1>
        <p>패럴랙스 이펙트 : 가로세로효과</p>
        <ul style={{ display: 'flex', gap: 8, marginTop: 8 }}>
          {[...Array(9)].map((_, i) => (
            <li key={i} style={{ listStyle: 'none' }}>
              <a
                href={`#section${i+1}`}
                style={{
                  border: '1px solid #fff',
                  borderRadius: 10,
                  padding: '2px 10px',
                  background: i === 3 ? '#fff' : 'transparent',
                  color: i === 3 ? '#000' : '#fff',
                }}
              >
                {i+1}
              </a>
            </li>
          ))}
        </ul>
      </header>
      <main style={{ width: '100vw' }}>
        <div className="parallaxs__wrap">
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 sec4Ref={sec4Ref} sec4InnerRef={sec4InnerRef} />
          <Section5 />
          <Section6 />
          <Section7 />
          <Section8 />
          <Section9 />
        </div>
      </main>
      <aside className="parallax__info" style={{ position: 'fixed', left: 20, bottom: 20, background: 'rgba(0,0,0,0.6)', color: '#fff', padding: 20, borderRadius: 10, fontSize: 14, zIndex: 10000 }}>
        <div className="scroll">scrollTop : <span>{Math.round(scrollTop)}</span>px</div>
      </aside>
    </div>
  );
} 