import { useState, useEffect } from 'react';
import { useLang } from '../context/LanguageContext';
import { BRAND, DESIGNER } from '../config';
import { CATEGORIES } from '../data/categories';
import LanguageSwitcher from './LanguageSwitcher';

// ============================================================================
//  هدر و ناوبری — Sticky responsive header with mobile hamburger menu.
// ============================================================================

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const { t, lang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // وقتی منوی موبایل باز است، اسکرول بدنه را قفل کن.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const brand = lang === 'fa' ? BRAND.nameFa : BRAND.nameEn;

  const handleNav = (section: string) => {
    setMenuOpen(false);
    onNavigate(section);
  };

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        <button className="header__brand" onClick={() => handleNav('hero')} aria-label="Home">
          <span className="header__logo" aria-hidden="true">🔥</span>
          <span className="header__brand-name">{brand}</span>
        </button>

        <nav className="header__nav" aria-label="Main navigation">
          <button onClick={() => handleNav('hero')}>{t('navHome')}</button>
          <button onClick={() => handleNav('categories')}>{t('navCategories')}</button>
          <button onClick={() => handleNav('about')}>{t('navAbout')}</button>
          <button onClick={() => handleNav('contact')}>{t('navContact')}</button>
        </nav>

        <div className="header__actions">
          <LanguageSwitcher />
          <button className="header__menu-btn" onClick={() => handleNav('categories')}>
            {t('navMenu')}
          </button>
          <button
            className="header__hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            type="button"
          >
            <span className={`hamburger-bar ${menuOpen ? 'is-open' : ''}`} />
            <span className={`hamburger-bar ${menuOpen ? 'is-open' : ''}`} />
            <span className={`hamburger-bar ${menuOpen ? 'is-open' : ''}`} />
          </button>
        </div>
      </div>

      <span className="header__credit">{t('designerCreditHeader')}</span>

      {/* منوی موبایل */}
      <div
        className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className="mobile-menu__nav" aria-label="Mobile navigation">
          <button onClick={() => handleNav('hero')}>{t('navHome')}</button>
          <button onClick={() => handleNav('categories')}>{t('navCategories')}</button>
          <button onClick={() => handleNav('about')}>{t('navAbout')}</button>
          <button onClick={() => handleNav('contact')}>{t('navContact')}</button>
        </nav>
        <div className="mobile-menu__categories">
          {CATEGORIES.map((c) => (
            <button key={c.id} onClick={() => handleNav(`cat-${c.id}`)}>
              {lang === 'fa' ? c.nameFa : c.nameEn}
            </button>
          ))}
        </div>
        <div className="mobile-menu__credit">طراحی سایت با {DESIGNER}</div>
      </div>
      {menuOpen && <div className="mobile-menu__overlay" onClick={() => setMenuOpen(false)} />}
    </header>
  );
}
