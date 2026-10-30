/**
 * محبوب‌ترین غذاها — Popular dishes rail
 * ------------------------------------------------------------------
 * نوار افقی با اسکرول نرم و دکمه‌های جهت. روی موبایل با کشیدن انگشت کار می‌کند.
 */

import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { featuredItems } from '../data';
import type { MenuItem } from '../data/types';
import { useLanguage } from '../i18n/LanguageProvider';
import { FoodCard } from './FoodCard';
import { IconChevronEnd, IconChevronStart } from './Icons';
import { SectionHeading } from './SectionHeading';

interface PopularDishesProps {
  onOpen: (item: MenuItem) => void;
}

export function PopularDishes({ onOpen }: PopularDishesProps) {
  const { lang, t } = useLanguage();
  const railRef = useRef<HTMLDivElement | null>(null);

  const scrollRail = (direction: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    const sign = getComputedStyle(rail).direction === 'rtl' ? -1 : 1;
    rail.scrollBy({ left: direction * sign * Math.min(rail.clientWidth * 0.8, 640), behavior: 'smooth' });
  };

  return (
    <section className="section section--popular" aria-labelledby="popular-title">
      <div className="container">
        <SectionHeading
          eyebrow={t('popular.eyebrow')}
          title={t('popular.title')}
          tone="dark"
          id="popular-title"
          action={
            <div className="rail-nav">
              <button type="button" onClick={() => scrollRail(-1)} aria-label={t('popular.prev')}>
                <IconChevronStart size={20} />
              </button>
              <button type="button" onClick={() => scrollRail(1)} aria-label={t('popular.next')}>
                <IconChevronEnd size={20} />
              </button>
            </div>
          }
        />

        <div className="rail" ref={railRef} role="list">
          {featuredItems.map((item, index) => (
            <div className="rail__item" role="listitem" key={item.id}>
              <FoodCard item={item} onOpen={onOpen} variant="rail" index={index} />
            </div>
          ))}
        </div>

        <div className="rail__foot">
          <p>{t('popular.swipe')}</p>
          <Link to="/menu" className="btn btn--outline-light btn--sm">
            {t('popular.viewAll')}
          </Link>
        </div>
      </div>
    </section>
  );
}
