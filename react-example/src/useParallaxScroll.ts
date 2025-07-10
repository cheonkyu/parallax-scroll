import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export function useParallaxScroll() {
  const sec4Ref = useRef<HTMLDivElement>(null);
  const sec4InnerRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.pageYOffset);
      // 섹션4 가로 슬라이드
      if (!sec4Ref.current || !sec4InnerRef.current) return;
      const section4Top = sec4Ref.current.offsetTop;
      const section4Height = sec4Ref.current.offsetHeight;
      const scrollY = window.pageYOffset;
      if (scrollY >= section4Top) {
        let progress = (scrollY - section4Top) / (section4Height - window.innerHeight);
        progress = Math.min(progress, 1);
        let sectionProgress = progress * 3;
        let currentSection = Math.floor(sectionProgress);
        let sectionProgressInSection = sectionProgress - currentSection;
        let snapThreshold = 0.3;
        let targetSection;
        if (sectionProgressInSection > snapThreshold) {
          targetSection = Math.min(currentSection + 1, 2);
        } else {
          targetSection = currentSection;
        }
        let translateX = -targetSection * 100;
        gsap.to(sec4InnerRef.current, { left: `${translateX}vw`, ease: 'power2.out', duration: 0.5 });
      } else {
        gsap.to(sec4InnerRef.current, { left: '0vw', ease: 'power2.out', duration: 0.5 });
      }
      requestAnimationFrame(handleScroll);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollTop, sec4Ref, sec4InnerRef };
} 