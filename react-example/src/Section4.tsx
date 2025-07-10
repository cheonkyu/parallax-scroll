import React, { ForwardedRef } from 'react';

interface Section4Props {
  sec4Ref: React.Ref<HTMLDivElement>;
  sec4InnerRef: React.Ref<HTMLDivElement>;
}

const sec4Colors = [
  'rgba(255, 95, 95, 1)',
  'rgba(255, 195, 95, 1)',
  'rgba(155, 195, 95, 1)'
];

export default function Section4({ sec4Ref, sec4InnerRef }: Section4Props) {
  return (
    <section
      id="section4"
      className="parallaxs__item"
      ref={sec4Ref}
      style={{ width: '100vw', height: '400vh', background: '#444', position: 'relative', zIndex: 4000 }}
    >
      <div ref={sec4InnerRef} className="sec4" style={{ position: 'fixed', left: 0, top: 0, width: '300vw', height: '100%', display: 'flex', transition: 'left 0.5s', zIndex: 1 }}>
        {sec4Colors.map((color, i) => (
          <article key={i} style={{ width: '100vw', height: '100vh', background: color, position: 'relative' }}>
            <span className="parallaxs__item__num">04-{i+1}</span>
          </article>
        ))}
      </div>
    </section>
  );
} 