/**
 * بنر تبلیغاتی میانی — Mid-page promo banner
 * ------------------------------------------------------------------
 * نوار قرمز با تصویر و قیمت نمایشی. هیچ تایمر یا ادعای «فرصت محدود» وجود
 * ندارد؛ ساعت‌شمارها نمایشی نیستند چون اصلاً استفاده نشده‌اند.
 */

import { Link } from 'react-router-dom';
import { midPromo } from '../data/promotions';
import { useLanguage } from '../i18n/LanguageProvider';
import { formatPrice } from '../utils/formatPrice';
import { FoodImage } from './FoodImage';
import { IconArrow } from './Icons';
import { Reveal } from './Reveal';

export function MidPromo() {
  const { lang, t } = useLanguage();

  return (
    <section className="section section--midpromo" aria-labelledby="midpromo-title">
      <div className="container">
        <Reveal>
          <div className="midpromo">
            <div className="midpromo__text">
              <p className="eyebrow eyebrow--invert">
                <span className="eyebrow__line" aria-hidden="true" />
                {t('midpromo.eyebrow')}
              </p>
              <h2 id="midpromo-title">{midPromo.title[lang]}</h2>
              <p className="midpromo__desc">{midPromo.desc[lang]}</p>
              <div className="midpromo__foot">
                <span className="midpromo__price">
                  <small>{t('promo.demoPrice')}</small>
                  {formatPrice(lang, midPromo)}
                </span>
                <Link to="/menu?category=fastfood" className="btn btn--dark">
                  {t('midpromo.cta')}
                  <IconArrow size={18} />
                </Link>
              </div>
            </div>

            <div className="midpromo__media">
              <FoodImage src={midPromo.image} alt={midPromo.title[lang]} ratio="5 / 4" showFilename={false} />
              <span className="midpromo__tag">{t('midpromo.decor')}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
