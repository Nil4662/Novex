/**
 * منوی موبایل — Mobile navigation panel
 */

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { brand } from '../config/brand';
import { categories } from '../data/categories';
import { useLanguage } from '../i18n/LanguageProvider';
import { IconChevronDown, IconClose } from './Icons';
import { LangSwitch } from './LangSwitch';

interface MobileMenuProps {
  onClose: () => void;
  onOpenSearch: () => void;
}

export function MobileMenu({ onClose, onOpenSearch }: MobileMenuProps) {
  const { lang, t } = useLanguage();
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  useEffect(() => {
    document.body.classList.add('is-locked');
    return () => document.body.classList.remove('is-locked');
  }, []);

  return (
    <div className="mobile-nav" role="dialog" aria-modal="true" aria-label={t('nav.mobileMenu')}>
      <div className="mobile-nav__head">
        <span className="mobile-nav__brand">{brand.latinName}</span>
        <button type="button" className="mobile-nav__close" onClick={onClose} aria-label={t('nav.close')}>
          <IconClose size={22} />
        </button>
      </div>

      <nav className="mobile-nav__links" aria-label={t('nav.mobileMenu')}>
        <Link to="/" onClick={onClose}>
          {t('nav.home')}
        </Link>
        <Link to="/menu" onClick={onClose}>
          {t('nav.menu')}
        </Link>

        {categories.map((category) => (
          <div className="mobile-nav__group" key={category.id}>
            <button
              type="button"
              onClick={() => setOpenCategory((prev) => (prev === category.id ? null : category.id))}
              aria-expanded={openCategory === category.id}
            >
              {category[lang]}
              <IconChevronDown size={18} />
            </button>
            {openCategory === category.id && (
              <ul>
                <li>
                  <Link to={`/menu?category=${category.id}`} onClick={onClose}>
                    {t('collection.allSubs')}
                  </Link>
                </li>
                {category.subs.map((sub) => (
                  <li key={sub.id}>
                    <Link to={`/menu?category=${category.id}&sub=${sub.id}`} onClick={onClose}>
                      {sub[lang]}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <Link to="/#about" onClick={onClose}>
          {t('nav.about')}
        </Link>
        <Link to="/#contact" onClick={onClose}>
          {t('nav.contact')}
        </Link>
      </nav>

      <div className="mobile-nav__foot">
        <button type="button" className="btn btn--ghost btn--block" onClick={onOpenSearch}>
          {t('nav.search')}
        </button>
        <Link to="/menu" className="btn btn--primary btn--block" onClick={onClose}>
          {t('nav.order')}
        </Link>
        <LangSwitch />
        <p className="mobile-nav__credit">{brand.creditHeader[lang]}</p>
      </div>
    </div>
  );
}
