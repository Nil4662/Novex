/**
 * نوار دسته‌بندی‌ها — Category strip
 * ------------------------------------------------------------------
 * چهار دستهٔ اصلی + زیرشاخه‌های دستهٔ انتخاب‌شده.
 */

import { Link } from 'react-router-dom';
import { categoryImages } from '../config/images';
import { categories } from '../data/categories';
import type { CategoryId } from '../data/types';
import { useLanguage } from '../i18n/LanguageProvider';
import { FoodImage } from './FoodImage';
import { IconArrow } from './Icons';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

interface CategoryStripProps {
  active: CategoryId;
  onSelect: (id: CategoryId) => void;
}

export function CategoryStrip({ active, onSelect }: CategoryStripProps) {
  const { lang, t } = useLanguage();
  const activeCategory = categories.find((category) => category.id === active) ?? categories[0];

  return (
    <section className="section section--categories" id="categories" aria-labelledby="categories-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={t('categories.eyebrow')}
            title={t('categories.title')}
            sub={t('categories.sub')}
            id="categories-title"
            action={
              <Link to={`/menu?category=${active}`} className="btn btn--ghost btn--sm">
                {t('nav.menu')}
                <IconArrow size={16} />
              </Link>
            }
          />
        </Reveal>

        <div className="cat-strip" role="tablist" aria-label={t('categories.eyebrow')}>
          {categories.map((category, index) => {
            const isActive = category.id === active;
            return (
              <Reveal key={category.id} delay={index * 80} className="cat-strip__item">
                <button
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`cat-card ${isActive ? 'is-active' : ''}`}
                  onClick={() => onSelect(category.id)}
                >
                  <span className="cat-card__index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="cat-card__media">
                    <FoodImage
                      src={categoryImages[category.id]}
                      alt={category[lang]}
                      ratio="4 / 3"
                      showFilename={false}
                      className="cat-card__image"
                    />
                  </span>
                  <span className="cat-card__body">
                    <span className="cat-card__title">{category[lang]}</span>
                    <span className="cat-card__desc">{category.desc[lang]}</span>
                    <span className="cat-card__foot">
                      <span className="cat-card__cta">{t('categories.explore')}</span>
                      <span className="cat-card__arrow" aria-hidden="true">
                        <IconArrow size={16} />
                      </span>
                    </span>
                  </span>
                  {isActive && <span className="cat-card__state">{t('categories.active')}</span>}
                </button>
              </Reveal>
            );
          })}
        </div>

        <div className="sub-chips" key={active}>
          <span className="sub-chips__label">{activeCategory[lang]}</span>
          {activeCategory.subs.map((sub) => (
            <Link
              key={sub.id}
              to={`/menu?category=${active}&sub=${sub.id}`}
              className="sub-chips__item"
            >
              {sub[lang]}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
