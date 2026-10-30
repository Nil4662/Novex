import { useLang } from '../context/LanguageContext';
import type { Category } from '../types';
import { getImageUrl } from '../utils/format';
import SmartImage from './SmartImage';

// ============================================================================
//  کارت دسته‌بندی — Large attractive category card.
// ============================================================================

interface CategoryCardProps {
  category: Category;
  onSelect: (id: string) => void;
  active: boolean;
}

export default function CategoryCard({ category, onSelect, active }: CategoryCardProps) {
  const { lang } = useLang();
  const name = lang === 'fa' ? category.nameFa : category.nameEn;
  const desc = lang === 'fa' ? category.descFa : category.descEn;

  return (
    <button
      className={`category-card ${active ? 'category-card--active' : ''}`}
      onClick={() => onSelect(category.id)}
      aria-pressed={active}
      type="button"
    >
      <div className="category-card__image">
        <SmartImage src={getImageUrl(category.image)} alt={name} lazy={false} />
        <div className="category-card__overlay" />
      </div>
      <div className="category-card__body">
        <h3 className="category-card__title">{name}</h3>
        <p className="category-card__desc">{desc}</p>
        <span className="category-card__count">
          {category.subcategories.length} {lang === 'fa' ? 'زیردسته' : 'subcategories'}
        </span>
      </div>
    </button>
  );
}
