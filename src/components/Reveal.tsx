import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
}

function Reveal({ children, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!node || motion.matches || !('IntersectionObserver' in window)) return;

    // Content stays visible by default; animation is progressive enhancement.
    node.classList.add('reveal-pending');
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          node.classList.remove('reveal-pending');
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    const showImmediately = () => {
      if (motion.matches) {
        node.classList.remove('reveal-pending');
        observer.disconnect();
      }
    };
    observer.observe(node);
    motion.addEventListener('change', showImmediately);
    return () => {
      observer.disconnect();
      motion.removeEventListener('change', showImmediately);
      node.classList.remove('reveal-pending');
    };
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

export default Reveal;
