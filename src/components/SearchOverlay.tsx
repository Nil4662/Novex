/**
 * پنجرهٔ جست‌وجوی سریع — Quick search overlay
 * ------------------------------------------------------------------
 * جست‌وجو در نام، توضیح و مواد اولیه به هر دو زبان. با Enter به صفحهٔ منو
 * با پارامتر q می‌رود.
 */

import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { filterMenu } from '../data';
import { categoryById } from '../data/categories';
import { useLanguage } from '../i18n/LanguageProvider';
import { formatPrice } from '../utils/formatPrice';
import { IconArrow, IconClose, IconSearch } from './Icons';

export function SearchOverlay({ onClose }: { onClose: () => void }) {
  const { lang, t } = useLanguage();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.classList.add('is-locked');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('is-locked');
    };
  }, [onClose]);

  const results = query.trim().length > 1 ? filterMenu({ query }).slice(0, 6) : [];

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate(`/menu?q=${encodeURIComponent(query.trim())}`);
    onClose();
  };

  return (
    <div className="search-overlay" role="dialog" aria-modal="true" aria-label={t('nav.search')}>
      <div className="search-overlay__backdrop" onClick={onClose} />
      <div className="search-overlay__panel">
        <form className="search-overlay__form" onSubmit={submit}>
          <IconSearch size={22} />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t('menu.search')}
            aria-label={t('menu.searchLabel')}
          />
          <button type="button" className="search-overlay__close" onClick={onClose} aria-label={t('common.close')}>
            <IconClose size={20} />
          </button>
        </form>

        {results.length > 0 && (
          <ul className="search-overlay__results">
            {results.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => {
                    navigate(`/menu?q=${encodeURIComponent(lang === 'fa' ? item.fa : item.en)}`);
                    onClose();
                  }}
                >
                  <span className="search-overlay__name">
                    {lang === 'fa' ? item.fa : item.en}
                    <small>{categoryById(item.category)[lang]}</small>
                  </span>
                  <span className="search-overlay__price">{formatPrice(lang, item)}</span>
                </button>
              </li>
            ))}
          </ul>
        )}

        {query.trim().length > 1 && results.length === 0 && (
          <p className="search-overlay__empty">{t('menu.empty')}</p>
        )}

        <button type="submit" className="search-overlay__all" onClick={submit}>
          {t('nav.viewAllMenu')}
          <IconArrow size={16} />
        </button>
      </div>
    </div>
  );
}
