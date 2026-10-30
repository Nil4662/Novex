/**
 * هدر سایت — Site header
 * ------------------------------------------------------------------
 * نوار اطلاعات بالا، ناوبری چسبان با حالت فشرده، منوی کشویی دسته‌ها،
 * جست‌وجو، تغییر زبان، دکمهٔ سفارش و منوی موبایل.
 * نام طراح (Nila) در نوار بالایی هدر نمایش داده می‌شود.
 */

import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { brand } from '../config/brand';
import { categories } from '../data/categories';
import { useLanguage } from '../i18n/LanguageProvider';
import { IconChevronDown, IconClock, IconMenuBars, IconSearch } from './Icons';
import { LangSwitch } from './LangSwitch';
import { MobileMenu } from './MobileMenu';
import { SearchOverlay } from './SearchOverlay';

export function Header() {
  const { lang, t } = useLanguage();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
    setDropdownOpen(false);
  }, [location.pathname, location.search, location.hash]);

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="topbar">
          <div className="container topbar__inner">
            <p className="topbar__item">
              <IconClock size={14} />
              <span>{t('top.hours')}</span>
            </p>
            <p className="topbar__item topbar__item--demo">
              <span className="topbar__pulse" aria-hidden="true" />
              {t('top.demo')}
            </p>
            <div className="topbar__right">
              <span className="topbar__credit">{brand.creditHeader[lang]}</span>
              <LangSwitch compact />
            </div>
          </div>
        </div>

        <div className="nav">
          <div className="container nav__inner">
            <Link to="/" className="brand" aria-label={`${brand.name[lang]} — ${brand.tagline[lang]}`}>
              <span className="brand__mark" aria-hidden="true">
                {brand.latinName.charAt(0)}
              </span>
              <span className="brand__text">
                <strong>{brand.latinName}</strong>
                <small>{brand.tagline[lang]}</small>
              </span>
            </Link>

            <nav className="nav__links" aria-label={t('nav.mobileMenu')}>
              <NavLink to="/" end className={({ isActive }) => (isActive ? 'is-active' : '')}>
                {t('nav.home')}
              </NavLink>
              <NavLink to="/menu" className={({ isActive }) => (isActive ? 'is-active' : '')}>
                {t('nav.menu')}
              </NavLink>

              <div
                className={`nav__dropdown ${dropdownOpen ? 'is-open' : ''}`}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  type="button"
                  className="nav__dropdown-toggle"
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                >
                  {t('nav.categories')}
                  <IconChevronDown size={16} />
                </button>

                <div className="mega" role="menu">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      to={`/menu?category=${category.id}`}
                      className="mega__col"
                      role="menuitem"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <span className="mega__title">{category[lang]}</span>
                      <span className="mega__desc">{category.desc[lang]}</span>
                      <span className="mega__subs">
                        {category.subs.map((sub) => sub[lang]).join(' · ')}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/#about">{t('nav.about')}</Link>
              <Link to="/#contact">{t('nav.contact')}</Link>
            </nav>

            <div className="nav__actions">
              <button
                type="button"
                className="nav__icon"
                onClick={() => setSearchOpen(true)}
                aria-label={t('nav.search')}
              >
                <IconSearch size={20} />
              </button>

              <div className="nav__lang">
                <LangSwitch />
              </div>

              <Link to="/menu" className="btn btn--primary btn--sm nav__cta">
                {t('nav.order')}
              </Link>

              <button
                type="button"
                className="nav__burger"
                onClick={() => setMobileOpen(true)}
                aria-label={t('nav.mobileMenu')}
              >
                <IconMenuBars size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <MobileMenu onClose={() => setMobileOpen(false)} onOpenSearch={() => setSearchOpen(true)} />
      )}
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </>
  );
}
