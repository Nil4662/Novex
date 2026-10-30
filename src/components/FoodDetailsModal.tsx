/**
 * مودال جزئیات غذا — Food details modal
 * ------------------------------------------------------------------
 * همهٔ محتوا از داده‌های مرکزی منو ساخته می‌شود؛ برای هر غذا کامپوننت جدا
 * لازم نیست. با Escape یا کلیک روی پس‌زمینه بسته می‌شود.
 */

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { MenuItem } from '../data/types';
import { categoryById, subLabel } from '../data/categories';
import { relatedItems } from '../data';
import { useLanguage } from '../i18n/LanguageProvider';
import { formatPrice } from '../utils/formatPrice';
import { FoodImage } from './FoodImage';
import { IconArrow, IconClose } from './Icons';

interface FoodDetailsModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onSelect: (item: MenuItem) => void;
}

export function FoodDetailsModal({ item, onClose, onSelect }: FoodDetailsModalProps) {
  const { lang, t } = useLanguage();

  useEffect(() => {
    if (!item) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.classList.add('is-locked');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('is-locked');
    };
  }, [item, onClose]);

  if (!item) return null;

  const category = categoryById(item.category);
  const sub = subLabel(category, item.sub);
  const name = lang === 'fa' ? item.fa : item.en;
  const altName = lang === 'fa' ? item.en : item.fa;
  const desc = lang === 'fa' ? item.descFa : item.descEn;
  const ingredients = lang === 'fa' ? item.ingFa : item.ingEn;
  const related = relatedItems(item, 3);

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="dish-modal-title">
      <div className="modal__backdrop" onClick={onClose} />

      <div className="modal__panel">
        <button type="button" className="modal__close" onClick={onClose} aria-label={t('food.close')}>
          <IconClose size={20} />
        </button>

        <div className="modal__media">
          <FoodImage src={item.image} alt={name} ratio="4 / 3" />
          <span className="modal__category">{lang === 'fa' ? category.fa : category.en}</span>
        </div>

        <div className="modal__body">
          <p className="modal__meta">
            {lang === 'fa' ? sub.fa : sub.en}
            <span aria-hidden="true">•</span>
            {t('common.demoPrice')}
          </p>

          <h2 className="modal__title" id="dish-modal-title">
            {name}
            <span className="modal__altname">{altName}</span>
          </h2>

          <p className="modal__desc">{desc}</p>

          <div className="modal__price-row">
            <strong className="modal__price">{formatPrice(lang, item)}</strong>
            <span className="modal__serving">
              {t('food.serving')}: {item.serving}
            </span>
          </div>

          <div className="modal__block">
            <h3>{t('food.ingredients')}</h3>
            <ul className="chip-list">
              {ingredients.map((ingredient) => (
                <li key={ingredient} className="chip">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          <div className="modal__grid">
            <div className="modal__block">
              <h3>{t('food.tags')}</h3>
              <ul className="tag-list">
                {item.tags.length === 0 && <li className="tag tag--muted">{t('common.demo')}</li>}
                {item.tags.map((tag) => (
                  <li key={tag} className={`tag tag--${tag}`}>
                    {t(`tags.${tag}` as 'tags.meat')}
                  </li>
                ))}
              </ul>
            </div>
            <div className="modal__block">
              <h3>{t('food.allergens')}</h3>
              <ul className="tag-list">
                {item.allergens.length === 0 && <li className="tag tag--muted">{t('food.noAllergens')}</li>}
                {item.allergens.map((allergen) => (
                  <li key={allergen} className="tag tag--allergen">
                    {t(`allergens.${allergen}` as 'allergens.gluten')}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="modal__note">{t('food.demoNote')}</p>

          <Link to={`/demo-purchase?item=${item.id}`} className="btn btn--primary btn--block">
            {t('food.purchase')}
            <IconArrow size={18} />
          </Link>

          {related.length > 0 && (
            <div className="modal__related">
              <h3>{t('food.related')}</h3>
              <ul>
                {related.map((relatedItem) => (
                  <li key={relatedItem.id}>
                    <button type="button" onClick={() => onSelect(relatedItem)}>
                      <FoodImage
                        src={relatedItem.image}
                        alt={lang === 'fa' ? relatedItem.fa : relatedItem.en}
                        ratio="1 / 1"
                        showFilename={false}
                      />
                      <span>{lang === 'fa' ? relatedItem.fa : relatedItem.en}</span>
                      <small>{formatPrice(lang, relatedItem)}</small>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
