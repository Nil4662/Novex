/**
 * بنرهای کمبو — Combo banners
 * ------------------------------------------------------------------
 * یک کارت بزرگ + دو کارت کوچک با پس‌زمینه‌های متفاوت.
 */

import { Link } from 'react-router-dom';
import { comboBanners } from '../data/promotions';
import { useLanguage } from '../i18n/LanguageProvider';
import { formatPrice } from '../utils/formatPrice';
import { FoodImage } from './FoodImage';
import { IconArrow } from './Icons';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function ComboBanners() {
  const { lang, t } = useLanguage();

  return (
    <section className="section section--combos" aria-labelledby="combos-title">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow={t('combo.eyebrow')} title={t('combo.title')} id="combos-title" />
        </Reveal>

        <div className="combo-grid">
          {comboBanners.map((combo, index) => (
            <Reveal
              key={combo.id}
              delay={index * 90}
              className={`combo-grid__cell ${combo.large ? 'combo-grid__cell--large' : ''}`}
            >
              <article className={`combo combo--${combo.tone} ${combo.large ? 'combo--large' : ''}`}>
                <FoodImage
                  src={combo.image}
                  alt={combo.title[lang]}
                  showFilename={false}
                  className="combo__media"
                />
                <div className="combo__body">
                  <p className="combo__eyebrow">{combo.eyebrow[lang]}</p>
                  <h3>{combo.title[lang]}</h3>
                  <p className="combo__desc">{combo.desc[lang]}</p>
                  <div className="combo__foot">
                    <span className="combo__price">{formatPrice(lang, combo)}</span>
                    <Link to="/menu" className="combo__link">
                      {t('combo.cta')}
                      <IconArrow size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
