import { useLang } from '../context/LanguageContext';
import type { Food } from '../types';
import FoodCard from './FoodCard';

// ============================================================================
//  شبکه غذاها — Adaptive food grid with empty state.
// ============================================================================

interface FoodGridProps {
  foods: Food[];
  onDetails: (food: Food) => void;
  onBuy: (food: Food) => void;
}

export default function FoodGrid({ foods, onDetails, onBuy }: FoodGridProps) {
  const { t } = useLang();

  if (foods.length === 0) {
    return (
      <div className="empty-state">
        <span className="empty-state__icon" aria-hidden="true">🍽️</span>
        <p className="empty-state__title">{t('noResults')}</p>
        <p className="empty-state__hint">{t('noResultsHint')}</p>
      </div>
    );
  }

  return (
    <div className="food-grid">
      {foods.map((food) => (
        <FoodCard key={food.id} food={food} onDetails={onDetails} onBuy={onBuy} />
      ))}
    </div>
  );
}
