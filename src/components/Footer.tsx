/**
 * فوتر — Site footer
 * ------------------------------------------------------------------
 * چهار ستون، شبکه‌های اجتماعی نمایشی، سلب مسئولیت و اعتبار طراحی Nila.
 */

import { Link } from 'react-router-dom';
import { brand } from '../config/brand';
import { categories } from '../data/categories';
import { useLanguage } from '../i18n/LanguageProvider';
import { socialIcons } from './Icons';
import { LangSwitch } from './LangSwitch';

export function Footer() {
  const { lang, t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand brand--footer">
              <span className="brand__mark" aria-hidden="true">
                {brand.latinName.charAt(0)}
              </span>
              <span className="brand__text">
                <strong>{brand.latinName}</strong>
                <small>{brand.tagline[lang]}</small>
              </span>
            </Link>
            <p className="footer-brand__desc">{t('footer.about')}</p>
            <ul className="footer-brand__contact">
              <li>{brand.demo.address[lang]}</li>
              <li dir="ltr">{brand.demo.phone}</li>
              <li dir="ltr">{brand.demo.email}</li>
            </ul>
          </div>

          <nav className="footer-col" aria-label={t('footer.products')}>
            <h3>{t('footer.products')}</h3>
            <ul>
              {categories.map((category) => (
                <li key={category.id}>
                  <Link to={`/menu?category=${category.id}`}>{category[lang]}</Link>
                </li>
              ))}
              <li>
                <Link to="/menu?featured=1">{t('popular.title')}</Link>
              </li>
            </ul>
          </nav>

          <nav className="footer-col" aria-label={t('footer.links')}>
            <h3>{t('footer.links')}</h3>
            <ul>
              <li>
                <Link to="/">{t('nav.home')}</Link>
              </li>
              <li>
                <Link to="/menu">{t('nav.menu')}</Link>
              </li>
              <li>
                <Link to="/#about">{t('nav.about')}</Link>
              </li>
              <li>
                <Link to="/#contact">{t('nav.contact')}</Link>
              </li>
              <li>
                <Link to="/demo-purchase">{t('purchase.badge')}</Link>
              </li>
            </ul>
          </nav>

          <div className="footer-col">
            <h3>{t('footer.hours')}</h3>
            <ul className="footer-hours">
              <li>
                <span>{t('footer.hoursWeekday')}</span>
                <span dir="ltr">{t('footer.hoursWeekdayTime')}</span>
              </li>
              <li>
                <span>{t('footer.hoursWeekend')}</span>
                <span dir="ltr">{t('footer.hoursWeekendTime')}</span>
              </li>
            </ul>
            <p className="footer-hours__note">{t('footer.hoursNote')}</p>

            <h3 className="footer-col__sub">{t('footer.follow')}</h3>
            <ul className="footer-socials">
              {brand.socials.map((name) => {
                const Icon = socialIcons[name];
                return (
                  <li key={name}>
                    <span className="social" title={`${name} (${t('common.demo')})`}>
                      <Icon size={18} />
                    </span>
                  </li>
                );
              })}
            </ul>
            <div className="footer-lang">
              <LangSwitch />
            </div>
          </div>
        </div>

        <p className="footer-disclaimer">{t('footer.disclaimer')}</p>

        <div className="footer-bottom">
          <p className="footer-credit">{brand.creditFooter[lang]}</p>
          <p className="footer-copy">
            © {brand.year} {brand.latinName} — {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
