/**
 * سرتیتر بخش‌ها — Section heading
 */

import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  sub?: string;
  align?: 'start' | 'center';
  tone?: 'light' | 'dark';
  action?: ReactNode;
  id?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = 'start',
  tone = 'light',
  action,
  id,
}: SectionHeadingProps) {
  return (
    <header className={`sec-head sec-head--${align} sec-head--${tone}`}>
      <div className="sec-head__text">
        <p className="eyebrow">
          <span className="eyebrow__line" aria-hidden="true" />
          {eyebrow}
        </p>
        <h2 className="sec-head__title" id={id}>
          {title}
        </h2>
        {sub && <p className="sec-head__sub">{sub}</p>}
      </div>
      {action && <div className="sec-head__action">{action}</div>}
    </header>
  );
}
