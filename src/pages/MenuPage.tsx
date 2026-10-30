/**
 * صفحهٔ منو — Full menu page
 * ------------------------------------------------------------------
 * جست‌وجو + فیلترها + فهرست غذاها.
 * وضعیت جست‌وجو و دسته در آدرس صفحه نگه داشته می‌شود
 * (مثلاً /menu?category=seafood&sub=sushi&q=سالمون) تا با رفرش هم برگردد و
 * لینک‌های منوی هدر، جست‌وجوی قبلی را با خودشان نبرند.
 */

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { totalMenuItems, filterMenu } from '../data';
import { categories } from '../data/categories';
import type { CategoryId, DietTag, MenuItem } from '../data/types';
import { FilterPanel, pricePresets, type FilterState } from '../components/FilterPanel';
import { FoodCard } from '../components/FoodCard';
import { FoodDetailsModal } from '../components/FoodDetailsModal';
import { IconClose, IconSearch, IconSliders } from '../components/Icons';
import { Reveal } from '../components/Reveal';
import { useLanguage } from '../i18n/LanguageProvider';

const defaultFilters: FilterState = {
  category: 'all',
  sub: null,
  priceId: null,
  tags: [],
  featuredOnly: false,
};

const isCategory = (value: string | null): value is CategoryId =>
  Boolean(value) && categories.some((category) => category.id === value);

export function MenuPage() {
  const { lang, t } = useLanguage();
  const [params, setParams] = useSearchParams();
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [query, setQuery] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selected, setSelected] = useState<MenuItem | null>(null);

  const categoryParam = params.get('category');
  const subParam = params.get('sub');
  const featuredParam = params.get('featured');
  const queryParam = params.get('q') ?? '';

  // آدرس → وضعیت (لینک‌های هدر، رفرش صفحه و دکمهٔ back مرورگر)
  useEffect(() => {
    setQuery(queryParam);
    setFilters((prev) => ({
      ...prev,
      category: isCategory(categoryParam) ? categoryParam : 'all',
      sub: subParam,
      featuredOnly: featuredParam === '1',
    }));
  }, [categoryParam, subParam, featuredParam, queryParam]);

  const activeCategory = categories.find((category) => category.id === filters.category);
  const pricePreset = pricePresets[lang].find((preset) => preset.id === filters.priceId);

  const results = useMemo(
    () =>
      filterMenu({
        query,
        category: filters.category,
        sub: filters.sub,
        tags: filters.tags as DietTag[],
        featuredOnly: filters.featuredOnly,
        maxToman: pricePreset?.toman,
        maxUsd: pricePreset?.usd,
      }),
    [query, filters, pricePreset],
  );

  /** وضعیت → آدرس؛ بدون افزودن تاریخچهٔ جدید (replace). */
  const syncUrl = (next: {
    query?: string;
    category?: CategoryId | 'all';
    sub?: string | null;
    featuredOnly?: boolean;
  }) => {
    const nextQuery = next.query ?? query;
    const nextCategory = next.category ?? filters.category;
    const nextSub = 'sub' in next ? next.sub : filters.sub;
    const nextFeatured = next.featuredOnly ?? filters.featuredOnly;

    const search = new URLSearchParams();
    if (nextQuery) search.set('q', nextQuery);
    if (nextCategory !== 'all') search.set('category', nextCategory);
    if (nextSub && nextCategory !== 'all') search.set('sub', nextSub);
    if (nextFeatured) search.set('featured', '1');
    setParams(search, { replace: true });
  };

  const update = (patch: Partial<FilterState>) => {
    const nextCategory = ('category' in patch ? patch.category : filters.category) ?? 'all';
    const nextSub = ('sub' in patch ? patch.sub : filters.sub) ?? null;
    setFilters((prev) => ({ ...prev, ...patch }));

    if ('category' in patch || 'sub' in patch || 'featuredOnly' in patch) {
      syncUrl({ category: nextCategory, sub: nextSub, featuredOnly: patch.featuredOnly });
    }
  };

  const changeQuery = (value: string) => {
    setQuery(value);
    syncUrl({ query: value });
  };

  const reset = () => {
    setFilters(defaultFilters);
    setQuery('');
    setParams({}, { replace: true });
  };

  return (
    <div className="menu-page">
      <section className="page-hero">
        <div className="container page-hero__inner">
          <p className="eyebrow eyebrow--invert">
            <span className="eyebrow__line" aria-hidden="true" />
            {t('nav.menu')}
          </p>
          <h1>{t('menu.title')}</h1>
          <p className="page-hero__sub">{t('menu.subtitle', { count: totalMenuItems })}</p>

          <form className="menu-search" onSubmit={(event) => event.preventDefault()} role="search">
            <IconSearch size={20} />
            <input
              type="search"
              value={query}
              onChange={(event) => changeQuery(event.target.value)}
              placeholder={t('menu.search')}
              aria-label={t('menu.searchLabel')}
            />
            {query && (
              <button type="button" onClick={() => changeQuery('')} aria-label={t('common.close')}>
                <IconClose size={18} />
              </button>
            )}
          </form>

          <div className="menu-page__cats">
            <button
              type="button"
              className={filters.category === 'all' ? 'is-active' : ''}
              onClick={() => update({ category: 'all', sub: null })}
            >
              {t('collection.allSubs')}
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={filters.category === category.id ? 'is-active' : ''}
                onClick={() => update({ category: category.id, sub: null })}
              >
                {category[lang]}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--menu-list">
        <div className="container menu-layout">
          <FilterPanel
            value={filters}
            onChange={update}
            onReset={reset}
            resultCount={results.length}
            open={filtersOpen}
            onClose={() => setFiltersOpen(false)}
          />

          <div className="menu-results">
            <div className="menu-results__head">
              <button
                type="button"
                className="btn btn--ghost btn--sm menu-results__toggle"
                onClick={() => setFiltersOpen(true)}
              >
                <IconSliders size={16} />
                {t('menu.showFilters')}
              </button>
              <p className="menu-results__count">
                {activeCategory ? `${activeCategory[lang]} — ` : ''}
                {t('menu.results', { count: results.length })}
              </p>
            </div>

            {results.length === 0 ? (
              <div className="menu-empty">
                <h2>{t('menu.empty')}</h2>
                <p>{t('menu.emptyHint')}</p>
                <button type="button" className="btn btn--dark" onClick={reset}>
                  {t('menu.reset')}
                </button>
              </div>
            ) : (
              <div className="food-grid food-grid--menu">
                {results.map((item, index) => (
                  <Reveal key={item.id} delay={Math.min(index, 8) * 45}>
                    <FoodCard item={item} onOpen={setSelected} index={index} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <FoodDetailsModal item={selected} onClose={() => setSelected(null)} onSelect={setSelected} />
    </div>
  );
}
