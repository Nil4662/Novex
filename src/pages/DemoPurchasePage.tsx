/**
 * صفحهٔ خرید نمایشی — Demo purchase page
 * ------------------------------------------------------------------
 * هیچ پرداختی انجام نمی‌شود. این مسیر با رفرش مستقیم هم کار می‌کند.
 */

import { Link, useSearchParams } from 'react-router-dom';
import { itemById } from '../data';
import { useLanguage } from '../i18n/LanguageProvider';
import { formatPrice } from '../utils/formatPrice';
import { FoodImage } from '../components/FoodImage';
import { IconArrow } from '../components/Icons';

export function DemoPurchasePage() {
  const { lang, t } = useLanguage();
  const [params] = useSearchParams();
  const item = itemById(params.get('item'));

  return (
    <section className="purchase-page">
      <div className="purchase-page__inner">
        <span className="purchase-page__badge">{t('purchase.badge')}</span>
        <span className="purchase-page__mark" aria-hidden="true">
          !
        </span>

        <h1>{item ? (lang === 'fa' ? item.fa : item.en) : t('purchase.title')}</h1>

        {item && (
          <div className="purchase-page__item">
            <FoodImage
              src={item.image}
              alt={lang === 'fa' ? item.fa : item.en}
              ratio="1 / 1"
              showFilename={false}
            />
            <div>
              <p className="purchase-page__label">{t('purchase.item')}</p>
              <p className="purchase-page__price">{formatPrice(lang, item)}</p>
            </div>
          </div>
        )}

        <p className="purchase-page__title">{t('purchase.title')}</p>
        <p className="purchase-page__line">{t('purchase.line1')}</p>
        <p className="purchase-page__muted">{t('purchase.line2')}</p>

        <div className="purchase-page__actions">
          <Link to="/menu" className="btn btn--primary">
            {t('purchase.backMenu')}
            <IconArrow size={18} />
          </Link>
          <Link to="/" className="btn btn--ghost">
            {t('purchase.backHome')}
          </Link>
        </div>
      </div>
    </section>
  );
}
