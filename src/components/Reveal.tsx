/**
 * انیمیشن ورود با اسکرول — Scroll reveal
 * ------------------------------------------------------------------
 * با IntersectionObserver کلاس is-visible را اضافه می‌کند.
 * اگر کاربر در سیستم خود «کاهش حرکت» را فعال کرده باشد، CSS انیمیشن را
 * غیرفعال می‌کند و محتوا بدون حرکت نمایش داده می‌شود.
 */

import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** تأخیر به میلی‌ثانیه برای ورود پله‌ای */
  delay?: number;
  style?: CSSProperties;
  id?: string;
}

export function Reveal({ children, className = '', delay = 0, style, id }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ ...style, ['--reveal-delay' as string]: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
