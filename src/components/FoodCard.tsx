/**
 * کارت غذا — Food card
 * ------------------------------------------------------------------
 * تصویر، نام، توضیح کوتاه، قیمت، دکمهٔ جزئیات و دکمهٔ خرید نمایشی.
 * با کلیک روی تصویر یا نام، مودال جزئیات باز می‌شود.
 */

import { Link } from 'react-router-dom';
import type { MenuItem } from '../data/types';
import { categoryById, subLabel } from '../data/categories';
import { useLanguage } from '../i18n/LanguageProvider';
import { formatPrice } from '../utils/formatPrice';
import { FoodImage } from './FoodImage';
import { IconArrow } from './Icons';

interface FoodCardProps {
  item: MenuItem;
  onOpen: (item: MenuItem) => void;
  variant?: 'default' | 'rail';
  index?: number;
}

export function FoodCard({ item, onOpen, variant = 'default', index = 0 }: FoodCardProps) {
  const { lang, t } = useLanguage();
  const category = categoryById(item.category);
  const name = lang === 'fa' ? item.fa : item.en;
  const desc = lang === 'fa' ? item.descFa : item.descEn;
  const sub = subLabel(category, item.sub);

  return (
    <article className={`food-card food-card--${variant}`} data-tone={item.category}>
      <button
        type="button"
        className="food-card__media"
        onClick={() => onOpen(item)}
        aria-label={`${t('food.details')}: ${name}`}
      >
        <FoodImage src={item.image} alt={name} ratio="4 / 3" className="food-card__image" />
        <span className="food-card__price">{formatPrice(lang, item)}</span>
      </button>

      <div className="food-card__body">
        <span className="food-card__meta">
          {lang === 'fa' ? sub.fa : sub.en}
          {item.featured && <span className="food-card__dot" aria-hidden="true" />}
          {item.featured && <span>{lang === 'fa' ? 'محبوب' : 'popular'}</span>}
        </span>

        <h3 className="food-card__title">
          <button type="button" onClick={() => onOpen(item)}>
            {name}
          </button>
        </h3>
        <p className="food-card__desc">{desc}</p>

        <div className="food-card__actions">
          <button type="button" className="btn btn--ghost btn--sm" onClick={() => onOpen(item)}>
            {t('food.details')}
          </button>
          <Link
            to={`/demo-purchase?item=${item.id}`}
            className="btn btn--icon btn--primary"
            aria-label={`${t('food.purchase')}: ${name}`}
          >
            <IconArrow size={18} />
          </Link>
        </div>
      </div>
      <span className="food-card__index" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>
    </article>
  );
}
