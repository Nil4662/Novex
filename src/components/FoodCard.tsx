import { useLang } from '../context/LanguageContext';
import type { Food } from '../types';
import { getImageUrl, formatPrice } from '../utils/format';
import { CATEGORY_MAP } from '../data/categories';
import SmartImage from './SmartImage';

// ============================================================================
//  کارت غذا — Premium food card with details and demo buy button.
// ============================================================================

interface FoodCardProps {
  food: Food;
  onDetails: (food: Food) => void;
  onBuy: (food: Food) => void;
}

export default function FoodCard({ food, onDetails, onBuy }: FoodCardProps) {
  const { lang, t } = useLang();
  const name = lang === 'fa' ? food.nameFa : food.nameEn;
  const desc = lang === 'fa' ? food.descFa : food.descEn;
  const category = CATEGORY_MAP[food.category];
  const categoryName = category ? (lang === 'fa' ? category.nameFa : category.nameEn) : '';

  return (
    <article className="food-card reveal-card">
      <div className="food-card__image-wrap">
        <SmartImage
          src={getImageUrl(food.image)}
          alt={name}
          loading="lazy"
          className="food-card__image"
        />
        {food.popular && <span className="food-card__badge food-card__badge--popular">{t('popularBadge')}</span>}
        {food.featured && <span className="food-card__badge food-card__badge--featured">{t('featuredBadge')}</span>}
      </div>
      <div className="food-card__body">
        <span className="food-card__category">{categoryName}</span>
        <h3 className="food-card__name">{name}</h3>
        <p className="food-card__desc">{desc}</p>
        <div className="food-card__footer">
          <span className="food-card__price">{formatPrice(food, lang)}</span>
          <div className="food-card__actions">
            <button className="btn btn--ghost btn--sm" onClick={() => onDetails(food)} type="button">
              {t('viewDetails')}
            </button>
            <button className="btn btn--primary btn--sm" onClick={() => onBuy(food)} type="button">
              {t('demoBuy')}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
