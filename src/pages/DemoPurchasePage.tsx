import { useNavigate, useLocation } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';

// ============================================================================
//  صفحه خرید نمایشی — Demo purchase page (no real order).
//  این صفحه با refresh مستقیم هم کار می‌کند.
// ============================================================================

export default function DemoPurchasePage() {
  const { t } = useLang();
  const navigate = useNavigate();
  const location = useLocation();
  // foodId در state وجود دارد اما چون خرید واقعی نیست فقط برای ارجاع استفاده می‌شود.
  const _state = location.state as { foodId?: string } | null;
  void _state;

  return (
    <div className="demo-page">
      <div className="demo-page__card">
        <span className="demo-page__icon" aria-hidden="true">🛒</span>
        <h1 className="demo-page__title">{t('demoTitle')}</h1>
        <p className="demo-page__msg">{t('demoMsg1')}</p>
        <p className="demo-page__msg demo-page__msg--muted">{t('demoMsg2')}</p>
        <button
          className="btn btn--primary demo-page__btn"
          onClick={() => navigate('/')}
          type="button"
        >
          {t('backToMenu')}
        </button>
      </div>
    </div>
  );
}
