/**
 * سه بنر تبلیغاتی — Promotional trio
 * ------------------------------------------------------------------
 * هر کارت با تصویر تمام‌قد و پوشش رنگی متفاوت (مشکی، قرمز، زرد).
 */

import { Link } from 'react-router-dom';
import { promoTrios } from '../data/promotions';
import { useLanguage } from '../i18n/LanguageProvider';
import { formatPrice } from '../utils/formatPrice';
import { FoodImage } from './FoodImage';
import { IconArrow } from './Icons';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function PromoTrio() {
  const { lang, t } = useLanguage();

  return (
    <section className="section section--promo" aria-labelledby="promo-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={t('promo.eyebrow')}
            title={t('promo.title')}
            id="promo-title"
            action={
              <Link to="/menu" className="btn btn--ghost btn--sm">
                {t('nav.viewAllMenu')}
                <IconArrow size={16} />
              </Link>
            }
          />
        </Reveal>

        <div className="promo-grid">
          {promoTrios.map((promo, index) => (
            <Reveal key={promo.id} delay={index * 90}>
              <article className={`promo-card promo-card--${promo.tone}`}>
                <FoodImage
                  src={promo.image}
                  alt={promo.title[lang]}
                  showFilename={false}
                  className="promo-card__media"
                />
                <div className="promo-card__body">
                  <p className="promo-card__eyebrow">{promo.eyebrow[lang]}</p>
                  <h3>{promo.title[lang]}</h3>
                  <p className="promo-card__desc">{promo.desc[lang]}</p>
                  <div className="promo-card__foot">
                    <span className="promo-card__price">
                      <small>{t('promo.demoPrice')}</small>
                      {formatPrice(lang, promo)}
                    </span>
                    <Link to={`/menu?category=${promo.category}`} className="btn btn--light btn--sm">
                      {t('promo.order')}
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
