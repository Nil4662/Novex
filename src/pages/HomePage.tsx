import { useState, useMemo, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import type { Food } from '../types';
import { FOODS } from '../data/foods';
import { CATEGORIES } from '../data/categories';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import FoodGrid from '../components/FoodGrid';
import FoodDetailsModal from '../components/FoodDetailsModal';
import SearchBar from '../components/SearchBar';
import FilterPanel, { DEFAULT_FILTERS, type FilterState } from '../components/FilterPanel';
import Footer from '../components/Footer';

// ============================================================================
//  صفحه اصلی — HomePage: orchestrates hero, categories, search, filters,
//  food grid, modal, about, contact and footer.
// ============================================================================

export default function HomePage() {
  const { t, lang } = useLang();
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const [activeCategory, setActiveCategory] = useState<string | 'all'>('all');
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);

  const categoriesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // فیلتر غذاها بر اساس جستجو، فیلترها و دسته فعال.
  const filteredFoods = useMemo(() => {
    return FOODS.filter((f) => {
      // جستجو در زبان فعلی.
      if (search.trim()) {
        const q = search.trim().toLowerCase();
        const name = (lang === 'fa' ? f.nameFa : f.nameEn).toLowerCase();
        const otherName = (lang === 'fa' ? f.nameEn : f.nameFa).toLowerCase();
        if (!name.includes(q) && !otherName.includes(q)) return false;
      }
      // دسته فعال از کارت‌ها.
      if (activeCategory !== 'all' && f.category !== activeCategory) return false;
      // فیلتر دسته پنل.
      if (filters.category !== 'all' && f.category !== filters.category) return false;
      if (filters.subcategory !== 'all' && f.subcategory !== filters.subcategory) return false;
      if (filters.protein !== 'all' && f.protein !== filters.protein) return false;
      if (filters.prepStyle !== 'all' && f.prepStyle !== filters.prepStyle) return false;
      if (filters.popularOnly && !f.popular) return false;
      // محدوده قیمت (به تومان مقایسه می‌شود).
      const price = lang === 'fa' ? f.priceToman : f.priceUsd;
      if (price < filters.minPrice) return false;
      const max = filters.maxPrice || Infinity;
      if (price > max) return false;
      return true;
    });
  }, [search, filters, activeCategory, lang]);

  // اسکرول نرم به بخش‌ها.
  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleNavigate = (section: string) => {
    if (section === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (section === 'categories') {
      scrollTo(categoriesRef);
    } else if (section === 'about') {
      scrollTo(aboutRef);
    } else if (section === 'contact') {
      scrollTo(contactRef);
    } else if (section.startsWith('cat-')) {
      const catId = section.slice(4);
      setActiveCategory(catId);
      scrollTo(menuRef);
    }
  };

  const handleBuy = (food: Food) => {
    setSelectedFood(null);
    navigate('/demo-purchase', { state: { foodId: food.id } });
  };

  // انیمیشن ظاهرشدن با اسکرول (IntersectionObserver) — احترام به reduced-motion.
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = document.querySelectorAll('.reveal, .reveal-card');
    if (prefersReduced) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filteredFoods, lang]);

  // رندر مجدد observer هنگام تغییر زبان (برای re-trigger).
  const subcats =
    activeCategory !== 'all'
      ? CATEGORIES.find((c) => c.id === activeCategory)?.subcategories ?? []
      : [];

  return (
    <div className="app">
      <Header onNavigate={handleNavigate} />

      <main>
        <Hero onExplore={() => scrollTo(categoriesRef)} />

        {/* دسته‌بندی‌ها */}
        <section className="section section--categories" ref={categoriesRef} id="categories">
          <div className="container">
            <div className="section__head reveal">
              <h2 className="section__title">{t('categoriesTitle')}</h2>
              <p className="section__subtitle">{t('categoriesSubtitle')}</p>
            </div>
            <div className="category-grid">
              {CATEGORIES.map((c) => (
                <CategoryCard
                  key={c.id}
                  category={c}
                  active={activeCategory === c.id}
                  onSelect={(id) => {
                    setActiveCategory(id);
                    scrollTo(menuRef);
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* منو و فیلترها */}
        <section className="section section--menu" ref={menuRef} id="menu">
          <div className="container">
            <div className="section__head reveal">
              <h2 className="section__title">
                {activeCategory !== 'all'
                  ? lang === 'fa'
                    ? CATEGORIES.find((c) => c.id === activeCategory)?.nameFa
                    : CATEGORIES.find((c) => c.id === activeCategory)?.nameEn
                  : t('navMenu')}
              </h2>
              <p className="section__subtitle">{t('heroSubtitle')}</p>
            </div>

            <div className="menu-layout">
              <div className="menu-layout__filters">
                <FilterPanel filters={filters} setFilters={setFilters} />
              </div>
              <div className="menu-layout__main">
                <SearchBar value={search} onChange={setSearch} />

                {/* زیردسته‌های دسته فعال */}
                {subcats.length > 0 && (
                  <div className="subcat-tabs">
                    {subcats.map((s) => (
                      <button
                        key={s.id}
                        className={`subcat-tab ${filters.subcategory === s.id ? 'subcat-tab--active' : ''}`}
                        onClick={() =>
                          setFilters({
                            ...filters,
                            subcategory: filters.subcategory === s.id ? 'all' : s.id,
                          })
                        }
                        type="button"
                      >
                        {lang === 'fa' ? s.nameFa : s.nameEn}
                      </button>
                    ))}
                  </div>
                )}

                <FoodGrid
                  foods={filteredFoods}
                  onDetails={setSelectedFood}
                  onBuy={handleBuy}
                />
              </div>
            </div>
          </div>
        </section>

        {/* درباره ما */}
        <section className="section section--about" ref={aboutRef} id="about">
          <div className="container">
            <div className="about reveal">
              <h2 className="section__title">{t('aboutTitle')}</h2>
              <p className="about__text">{t('aboutText')}</p>
              <ul className="about__points">
                <li>{t('aboutPoint1')}</li>
                <li>{t('aboutPoint2')}</li>
                <li>{t('aboutPoint3')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* تماس */}
        <ContactSection contactRef={contactRef} />
      </main>

      <Footer onNavigate={handleNavigate} />

      <FoodDetailsModal
        food={selectedFood}
        onClose={() => setSelectedFood(null)}
        onSelectFood={setSelectedFood}
        onBuy={handleBuy}
      />
    </div>
  );
}

// ============================================================================
//  بخش تماس — Contact form (demo only, client-side validation).
// ============================================================================
function ContactSection({ contactRef }: { contactRef: React.RefObject<HTMLDivElement> }) {
  const { t } = useLang();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = t('formErrorName');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t('formErrorEmail');
    if (!form.message.trim()) e.message = t('formErrorMessage');
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    }
  };

  return (
    <section className="section section--contact" ref={contactRef} id="contact">
      <div className="container container--narrow">
        <div className="contact reveal">
          <h2 className="section__title">{t('contactTitle')}</h2>
          <p className="contact__subtitle">{t('contactSubtitle')}</p>
          {submitted ? (
            <div className="contact__success" role="status">
              <p>{t('formSuccess')}</p>
              <button className="btn btn--ghost" onClick={() => setSubmitted(false)} type="button">
                {t('formSubmit')}
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="form-field">
                <label htmlFor="c-name">{t('formName')}</label>
                <input
                  id="c-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  aria-invalid={!!errors.name}
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>
              <div className="form-field">
                <label htmlFor="c-email">{t('formEmail')}</label>
                <input
                  id="c-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>
              <div className="form-field">
                <label htmlFor="c-msg">{t('formMessage')}</label>
                <textarea
                  id="c-msg"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  aria-invalid={!!errors.message}
                />
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>
              <button className="btn btn--primary" type="submit">{t('formSubmit')}</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
