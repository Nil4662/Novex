/**
 * بنر اصلی — Dynamic hero
 * ------------------------------------------------------------------
 * با انتخاب هر دسته (ایرانی، فست‌فود، دریایی، نوشیدنی) تصویر، تیتر، توضیح،
 * برچسب و متن دکمه به‌صورت نرم تغییر می‌کند. صفحه دوباره بارگذاری نمی‌شود.
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { heroImages, mascotImage } from '../config/images';
import { categories, categoryById } from '../data/categories';
import type { CategoryId } from '../data/types';
import { useLanguage } from '../i18n/LanguageProvider';
import { FoodImage } from './FoodImage';
import { IconArrow, IconTurtle } from './Icons';

interface HeroProps {
  active: CategoryId;
  onSelect: (id: CategoryId) => void;
}

function MascotSlot() {
  const { t } = useLanguage();
  const [failed, setFailed] = useState(true);

  return (
    <figure className="mascot" data-empty={failed ? 'true' : 'false'}>
      {!failed ? (
        <img src={mascotImage} alt="" onError={() => setFailed(true)} />
      ) : (
        <div className="mascot__empty">
          <IconTurtle size={26} />
          <span>{t('hero.mascots.title')}</span>
          <code dir="ltr">images/hero/mascots-turtles.png</code>
        </div>
      )}
    </figure>
  );
}

export function Hero({ active, onSelect }: HeroProps) {
  const { lang, t } = useLanguage();
  const category = categoryById(active);
  const hero = category.hero;
  const title = hero.title[lang];
  const dir = lang === 'fa' ? 'rtl' : 'ltr';

  return (
    <section className="hero" data-tone={active} aria-labelledby="hero-title">
      <div className="hero__texture" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__text" dir={dir}>
          <p className="eyebrow eyebrow--invert">
            <span className="eyebrow__line" aria-hidden="true" />
            {hero.eyebrow[lang]}
          </p>

          <h1 className="hero__title" id="hero-title" key={`title-${active}-${lang}`}>
            <span className="hero__title-line">{title[0]}</span>
            <span className="hero__title-line hero__title-line--accent">{title[1]}</span>
          </h1>

          <p className="hero__desc" key={`desc-${active}-${lang}`}>
            {hero.desc[lang]}
          </p>

          <div className="hero__actions">
            <Link to={`/menu?category=${active}`} className="btn btn--primary btn--lg">
              {hero.cta[lang]}
              <IconArrow size={18} />
            </Link>
            <div className="hero__dish">
              <span className="hero__dish-name">{hero.dish[lang]}</span>
              <span className="hero__dish-note">{hero.note[lang]}</span>
            </div>
          </div>

          <div className="hero__disclaimer">
            <span className="hero__disclaimer-dot" aria-hidden="true" />
            <p>
              <strong>{t('hero.disclaimerTitle')}</strong>
              <span>{t('hero.disclaimerText')}</span>
            </p>
          </div>

          <div className="hero__tabs" role="tablist" aria-label={t('hero.selectCategory')}>
            {categories.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={item.id === active}
                className={`hero__tab ${item.id === active ? 'is-active' : ''}`}
                onClick={() => onSelect(item.id)}
              >
                <span className="hero__tab-name">{item.short[lang]}</span>
                <span className="hero__tab-bar" aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>

        <div className="hero__media" key={`media-${active}`}>
          <FoodImage
            src={heroImages[active]}
            alt={`${hero.dish[lang]} — ${t('hero.imageLabel')}`}
            eager
            caption={hero.dish[lang]}
            className="hero__image"
          />
          <span className="hero__badge">{hero.badge[lang]}</span>
          <MascotSlot />
        </div>
      </div>
    </section>
  );
}
