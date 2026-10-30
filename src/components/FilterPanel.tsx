/**
 * پنل فیلترها — Filter panel
 * ------------------------------------------------------------------
 * دسته، زیرشاخه، بازهٔ قیمت، نوع غذا و محبوب‌ترین‌ها. همهٔ فیلترها با جست‌وجو
 * ترکیب می‌شوند و دکمهٔ «پاک کردن» همه را برمی‌گرداند.
 */

import { categories } from '../data/categories';
import type { CategoryId, DietTag } from '../data/types';
import { useLanguage } from '../i18n/LanguageProvider';
import { IconClose, IconSliders } from './Icons';

export interface PricePreset {
  id: string;
  label: string;
  toman?: number;
  usd?: number;
}

export const pricePresets: Record<'fa' | 'en', PricePreset[]> = {
  fa: [
    { id: 'p1', label: 'تا ۳۰۰٬۰۰۰ تومان', toman: 300000 },
    { id: 'p2', label: 'تا ۶۰۰٬۰۰۰ تومان', toman: 600000 },
    { id: 'p3', label: 'تا ۱٬۰۰۰٬۰۰۰ تومان', toman: 1000000 },
  ],
  en: [
    { id: 'p1', label: 'Under $8', usd: 8 },
    { id: 'p2', label: 'Under $16', usd: 16 },
    { id: 'p3', label: 'Under $28', usd: 28 },
  ],
};

const dietTags: DietTag[] = ['meat', 'chicken', 'seafood', 'vegetarian', 'vegan', 'spicy'];

export interface FilterState {
  category: CategoryId | 'all';
  sub: string | null;
  priceId: string | null;
  tags: DietTag[];
  featuredOnly: boolean;
}

interface FilterPanelProps {
  value: FilterState;
  onChange: (patch: Partial<FilterState>) => void;
  onReset: () => void;
  resultCount: number;
  open: boolean;
  onClose: () => void;
}

export function FilterPanel({ value, onChange, onReset, resultCount, open, onClose }: FilterPanelProps) {
  const { lang, t } = useLanguage();

  const subs =
    value.category === 'all'
      ? categories.flatMap((category) => category.subs.map((sub) => ({ ...sub, category: category.id })))
      : categories.find((category) => category.id === value.category)?.subs ?? [];

  const toggleTag = (tag: DietTag) => {
    const next = value.tags.includes(tag) ? value.tags.filter((item) => item !== tag) : [...value.tags, tag];
    onChange({ tags: next });
  };

  return (
    <aside className={`filters ${open ? 'is-open' : ''}`} aria-label={t('menu.filters')}>
      <div className="filters__head">
        <h2>
          <IconSliders size={18} />
          {t('menu.filters')}
        </h2>
        <button type="button" className="filters__close" onClick={onClose} aria-label={t('menu.closeFilters')}>
          <IconClose size={18} />
        </button>
      </div>

      <div className="filters__group">
        <h3>{t('menu.category')}</h3>
        <ul className="filters__list">
          <li>
            <button
              type="button"
              className={value.category === 'all' ? 'is-active' : ''}
              onClick={() => onChange({ category: 'all', sub: null })}
            >
              {t('collection.allSubs')}
            </button>
          </li>
          {categories.map((category) => (
            <li key={category.id}>
              <button
                type="button"
                className={value.category === category.id ? 'is-active' : ''}
                onClick={() => onChange({ category: category.id, sub: null })}
              >
                {category[lang]}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="filters__group">
        <h3>{t('menu.subcategory')}</h3>
        <div className="filters__chips">
          <button
            type="button"
            className={`chip-btn ${value.sub === null ? 'is-active' : ''}`}
            onClick={() => onChange({ sub: null })}
          >
            {t('collection.allSubs')}
          </button>
          {subs.map((sub) => (
            <button
              key={`${sub.id}-${'category' in sub ? sub.category : value.category}`}
              type="button"
              className={`chip-btn ${value.sub === sub.id ? 'is-active' : ''}`}
              onClick={() => onChange({ sub: sub.id })}
            >
              {sub[lang]}
            </button>
          ))}
        </div>
      </div>

      <div className="filters__group">
        <h3>{t('menu.price')}</h3>
        <div className="filters__chips">
          <button
            type="button"
            className={`chip-btn ${value.priceId === null ? 'is-active' : ''}`}
            onClick={() => onChange({ priceId: null })}
          >
            {t('menu.priceAny')}
          </button>
          {pricePresets[lang].map((preset) => (
            <button
              key={preset.id}
              type="button"
              className={`chip-btn ${value.priceId === preset.id ? 'is-active' : ''}`}
              onClick={() => onChange({ priceId: preset.id })}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      <div className="filters__group">
        <h3>{t('menu.diet')}</h3>
        <ul className="filters__checks">
          {dietTags.map((tag) => (
            <li key={tag}>
              <label>
                <input
                  type="checkbox"
                  checked={value.tags.includes(tag)}
                  onChange={() => toggleTag(tag)}
                />
                <span>{t(`tags.${tag}` as 'tags.meat')}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <label className="filters__switch">
        <input
          type="checkbox"
          checked={value.featuredOnly}
          onChange={(event) => onChange({ featuredOnly: event.target.checked })}
        />
        <span>{t('menu.popularOnly')}</span>
      </label>

      <div className="filters__foot">
        <span className="filters__count">{t('menu.results', { count: resultCount })}</span>
        <button type="button" className="btn btn--ghost btn--sm" onClick={onReset}>
          {t('menu.reset')}
        </button>
      </div>
    </aside>
  );
}
