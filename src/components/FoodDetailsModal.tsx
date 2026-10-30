import { useEffect, useRef } from 'react';
import { useLang } from '../context/LanguageContext';
import type { Food } from '../types';
import { getImageUrl, formatPrice } from '../utils/format';
import { FOODS } from '../data/foods';
import { CATEGORY_MAP } from '../data/categories';
import SmartImage from './SmartImage';

// ============================================================================
//  مودال جزئیات غذا — Reusable, accessible food details modal.
//  با کلید Escape یا کلیک روی پس‌زمینه بسته می‌شود.
// ============================================================================

interface FoodDetailsModalProps {
  food: Food | null;
  onClose: () => void;
  onSelectFood: (food: Food) => void;
  onBuy: (food: Food) => void;
}

const ALLERGEN_KEYS: Record<string, 'allergenGluten' | 'allergenDairy' | 'allergenEgg' | 'allergenFish' | 'allergenShellfish' | 'allergenNuts' | 'allergenSoy' | 'allergenSesame'> = {
  gluten: 'allergenGluten',
  dairy: 'allergenDairy',
  egg: 'allergenEgg',
  fish: 'allergenFish',
  shellfish: 'allergenShellfish',
  nuts: 'allergenNuts',
  soy: 'allergenSoy',
  sesame: 'allergenSesame',
};

export default function FoodDetailsModal({ food, onClose, onSelectFood, onBuy }: FoodDetailsModalProps) {
  const { lang, t } = useLang();
  const dialogRef = useRef<HTMLDivElement>(null);

  // بستن با Escape و قفل اسکرول بدنه.
  useEffect(() => {
    if (!food) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    // تمرکز اولیه روی مودال.
    dialogRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [food, onClose]);

  if (!food) return null;

  const name = lang === 'fa' ? food.nameFa : food.nameEn;
  const otherName = lang === 'fa' ? food.nameEn : food.nameFa;
  const desc = lang === 'fa' ? food.descFa : food.descEn;
  const ingredients = lang === 'fa' ? food.ingredientsFa : food.ingredientsEn;
  const category = CATEGORY_MAP[food.category];
  const categoryName = category ? (lang === 'fa' ? category.nameFa : category.nameEn) : '';

  // غذا‌های مرتبط از همان دسته.
  const related = FOODS.filter((f) => f.category === food.category && f.id !== food.id).slice(0, 4);

  const handleBackdrop = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleBackdrop} role="presentation">
      <div
        className="modal"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={name}
        tabIndex={-1}
      >
        <button className="modal__close" onClick={onClose} aria-label={t('close')} type="button">
          ✕
        </button>

        <div className="modal__content">
          <div className="modal__image-wrap">
            <SmartImage
              src={getImageUrl(food.image)}
              alt={name}
              loading="eager"
              className="modal__image"
            />
            {food.popular && <span className="modal__badge modal__badge--popular">{t('popularBadge')}</span>}
            {food.featured && <span className="modal__badge modal__badge--featured">{t('featuredBadge')}</span>}
          </div>

          <div className="modal__info">
            <span className="modal__category">{categoryName}</span>
            <h2 className="modal__name">{name}</h2>
            <p className="modal__other-name">{otherName}</p>
            <p className="modal__desc">{desc}</p>
            <div className="modal__price">{formatPrice(food, lang)}</div>

            <section className="modal__section">
              <h3 className="modal__section-title">{t('ingredients')}</h3>
              <ul className="modal__ingredients">
                {ingredients.map((ing, i) => (
                  <li key={i} className="modal__ingredient">{ing}</li>
                ))}
              </ul>
            </section>

            {food.allergens && food.allergens.length > 0 && (
              <section className="modal__section">
                <h3 className="modal__section-title">{t('allergens')}</h3>
                <div className="modal__tags">
                  {food.allergens.map((a) => (
                    <span key={a} className="tag tag--allergen">{t(ALLERGEN_KEYS[a] ?? 'allergenGluten')}</span>
                  ))}
                </div>
              </section>
            )}

            {food.dietary && food.dietary.length > 0 && (
              <section className="modal__section">
                <h3 className="modal__section-title">{t('dietary')}</h3>
                <div className="modal__tags">
                  {food.dietary.map((d) => (
                    <span key={d} className="tag tag--dietary">
                      {d === 'vegetarian' ? t('dietaryVegetarian') : t('dietarySpicy')}
                    </span>
                  ))}
                </div>
              </section>
            )}

            <button className="btn btn--primary modal__buy" onClick={() => onBuy(food)} type="button">
              {t('demoBuy')} — {formatPrice(food, lang)}
            </button>

            {related.length > 0 && (
              <section className="modal__section">
                <h3 className="modal__section-title">{t('relatedFoods')}</h3>
                <div className="modal__related">
                  {related.map((r) => (
                    <button
                      key={r.id}
                      className="related-item"
                      onClick={() => onSelectFood(r)}
                      type="button"
                    >
                      <SmartImage
                        src={getImageUrl(r.image)}
                        alt={lang === 'fa' ? r.nameFa : r.nameEn}
                        loading="lazy"
                        className="related-item__img"
                      />
                      <span className="related-item__name">{lang === 'fa' ? r.nameFa : r.nameEn}</span>
                      <span className="related-item__price">{formatPrice(r, lang)}</span>
                    </button>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
