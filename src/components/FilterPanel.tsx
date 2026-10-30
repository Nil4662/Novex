import { useLang } from '../context/LanguageContext';
import { CATEGORIES, CATEGORY_MAP } from '../data/categories';
import { FOODS } from '../data/foods';
import type { CategoryId, Protein } from '../types';

// ============================================================================
//  پنل فیلتر — Working filter panel: category, subcategory, protein,
//  price range, popular, preparation style.
// ============================================================================

export interface FilterState {
  category: CategoryId | 'all';
  subcategory: string | 'all';
  protein: Protein | 'all';
  minPrice: number;
  maxPrice: number;
  popularOnly: boolean;
  prepStyle: string | 'all';
}

export const DEFAULT_FILTERS: FilterState = {
  category: 'all',
  subcategory: 'all',
  protein: 'all',
  minPrice: 0,
  maxPrice: 0,
  popularOnly: false,
  prepStyle: 'all',
};

// محدوده قیمت واقعی بر اساس داده‌ها (به تومان).
const MAX_TOMAN = Math.max(...FOODS.map((f) => f.priceToman));
const MAX_USD = Math.max(...FOODS.map((f) => f.priceUsd));

interface FilterPanelProps {
  filters: FilterState;
  setFilters: (f: FilterState) => void;
}

const PROTEINS: { id: Protein; key: 'proteinMeat' | 'proteinChicken' | 'proteinSeafood' | 'proteinVegetarian' }[] = [
  { id: 'meat', key: 'proteinMeat' },
  { id: 'chicken', key: 'proteinChicken' },
  { id: 'seafood', key: 'proteinSeafood' },
  { id: 'vegetarian', key: 'proteinVegetarian' },
];

const PREP_STYLES: { id: string; key: 'prepGrilled' | 'prepFried' | 'prepBaked' | 'prepStewed' | 'prepSlowCooked' | 'prepBraised' | 'prepPanSeared' }[] = [
  { id: 'grilled', key: 'prepGrilled' },
  { id: 'fried', key: 'prepFried' },
  { id: 'baked', key: 'prepBaked' },
  { id: 'stewed', key: 'prepStewed' },
  { id: 'slow-cooked', key: 'prepSlowCooked' },
  { id: 'braised', key: 'prepBraised' },
  { id: 'pan-seared', key: 'prepPanSeared' },
];

export default function FilterPanel({ filters, setFilters }: FilterPanelProps) {
  const { t, lang } = useLang();

  const subcats =
    filters.category === 'all'
      ? []
      : CATEGORY_MAP[filters.category]?.subcategories ?? [];

  const maxLimit = lang === 'fa' ? MAX_TOMAN : MAX_USD;
  const step = lang === 'fa' ? 50000 : 1;
  const fmt = (v: number) => (lang === 'fa' ? `${(v).toLocaleString('en-US').replace(/[0-9]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[Number(d)])}` : `$${v.toFixed(0)}`);

  const update = (patch: Partial<FilterState>) => setFilters({ ...filters, ...patch });

  return (
    <div className="filter-panel">
      <div className="filter-panel__header">
        <h3 className="filter-panel__title">{t('filterTitle')}</h3>
        <button
          className="filter-panel__clear"
          onClick={() => setFilters({ ...DEFAULT_FILTERS, maxPrice: maxLimit })}
          type="button"
        >
          {t('clearFilters')}
        </button>
      </div>

      {/* دسته‌بندی */}
      <div className="filter-group">
        <label className="filter-group__label">{t('filterCategory')}</label>
        <select
          className="filter-select"
          value={filters.category}
          onChange={(e) => update({ category: e.target.value as CategoryId | 'all', subcategory: 'all' })}
        >
          <option value="all">{t('allOption')}</option>
          {CATEGORIES.map((c) => (
            <option key={c.id} value={c.id}>
              {lang === 'fa' ? c.nameFa : c.nameEn}
            </option>
          ))}
        </select>
      </div>

      {/* زیردسته */}
      {subcats.length > 0 && (
        <div className="filter-group">
          <label className="filter-group__label">{t('filterSubcategory')}</label>
          <select
            className="filter-select"
            value={filters.subcategory}
            onChange={(e) => update({ subcategory: e.target.value })}
          >
            <option value="all">{t('allOption')}</option>
            {subcats.map((s) => (
              <option key={s.id} value={s.id}>
                {lang === 'fa' ? s.nameFa : s.nameEn}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* پروتئین */}
      <div className="filter-group">
        <label className="filter-group__label">{t('filterProtein')}</label>
        <div className="filter-chips">
          <button
            className={`chip ${filters.protein === 'all' ? 'chip--active' : ''}`}
            onClick={() => update({ protein: 'all' })}
            type="button"
          >
            {t('allOption')}
          </button>
          {PROTEINS.map((p) => (
            <button
              key={p.id}
              className={`chip ${filters.protein === p.id ? 'chip--active' : ''}`}
              onClick={() => update({ protein: filters.protein === p.id ? 'all' : p.id })}
              type="button"
            >
              {t(p.key)}
            </button>
          ))}
        </div>
      </div>

      {/* سبک پخت */}
      <div className="filter-group">
        <label className="filter-group__label">{t('filterPrepStyle')}</label>
        <div className="filter-chips">
          <button
            className={`chip ${filters.prepStyle === 'all' ? 'chip--active' : ''}`}
            onClick={() => update({ prepStyle: 'all' })}
            type="button"
          >
            {t('allOption')}
          </button>
          {PREP_STYLES.map((p) => (
            <button
              key={p.id}
              className={`chip ${filters.prepStyle === p.id ? 'chip--active' : ''}`}
              onClick={() => update({ prepStyle: filters.prepStyle === p.id ? 'all' : p.id })}
              type="button"
            >
              {t(p.key)}
            </button>
          ))}
        </div>
      </div>

      {/* محدوده قیمت */}
      <div className="filter-group">
        <label className="filter-group__label">
          {t('filterPriceRange')}: {fmt(filters.minPrice)} — {fmt(Math.max(filters.minPrice, filters.maxPrice))}
        </label>
        <div className="filter-range">
          <input
            type="range"
            min={0}
            max={maxLimit}
            step={step}
            value={filters.minPrice}
            onChange={(e) => update({ minPrice: Math.min(Number(e.target.value), filters.maxPrice) })}
            aria-label={t('minPrice')}
          />
          <input
            type="range"
            min={0}
            max={maxLimit}
            step={step}
            value={filters.maxPrice || maxLimit}
            onChange={(e) => update({ maxPrice: Math.max(Number(e.target.value), filters.minPrice) })}
            aria-label={t('maxPrice')}
          />
        </div>
      </div>

      {/* محبوب‌ها */}
      <div className="filter-group">
        <label className="filter-toggle">
          <input
            type="checkbox"
            checked={filters.popularOnly}
            onChange={(e) => update({ popularOnly: e.target.checked })}
          />
          <span>{t('filterPopular')}</span>
        </label>
      </div>
    </div>
  );
}
