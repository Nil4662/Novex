/**
 * مسیر ناموجود — Not found
 */

import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageProvider';
import { IconArrow } from '../components/Icons';

export function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <section className="purchase-page">
      <div className="purchase-page__inner">
        <span className="purchase-page__mark" aria-hidden="true">
          404
        </span>
        <h1>{t('common.notFound')}</h1>
        <p className="purchase-page__line">{t('common.notFoundText')}</p>
        <div className="purchase-page__actions">
          <Link to="/" className="btn btn--primary">
            {t('common.home')}
            <IconArrow size={18} />
          </Link>
          <Link to="/menu" className="btn btn--ghost">
            {t('common.menu')}
          </Link>
        </div>
      </div>
    </section>
  );
}
