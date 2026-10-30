import { useLang } from '../context/LanguageContext';
import { BRAND } from '../config';
import { CATEGORIES } from '../data/categories';
import LanguageSwitcher from './LanguageSwitcher';

// ============================================================================
//  فوتر — Polished footer with navigation, categories, disclaimer and credit.
// ============================================================================

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const { t, lang } = useLang();
  const brand = lang === 'fa' ? BRAND.nameFa : BRAND.nameEn;

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__col footer__col--brand">
          <div className="footer__brand">
            <span className="footer__logo" aria-hidden="true">🔥</span>
            <span className="footer__brand-name">{brand}</span>
          </div>
          <p className="footer__desc">{t('footerDesc')}</p>
          <LanguageSwitcher />
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">{t('footerNav')}</h4>
          <ul className="footer__links">
            <li><button onClick={() => onNavigate('hero')}>{t('navHome')}</button></li>
            <li><button onClick={() => onNavigate('categories')}>{t('navCategories')}</button></li>
            <li><button onClick={() => onNavigate('about')}>{t('navAbout')}</button></li>
            <li><button onClick={() => onNavigate('contact')}>{t('navContact')}</button></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">{t('footerCategories')}</h4>
          <ul className="footer__links">
            {CATEGORIES.map((c) => (
              <li key={c.id}>
                <button onClick={() => onNavigate(`cat-${c.id}`)}>
                  {lang === 'fa' ? c.nameFa : c.nameEn}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__disclaimer">{t('footerDisclaimer')}</p>
        <p className="footer__credit">
          © {new Date().getFullYear()} {brand}. {t('footerRights')} {t('footerDesigner')}
        </p>
      </div>
    </footer>
  );
}
