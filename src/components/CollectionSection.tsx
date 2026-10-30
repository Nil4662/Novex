/**
 * فهرست غذای دستهٔ فعال — Category collection
 * ------------------------------------------------------------------
 * با تغییر دستهٔ انتخاب‌شده، زیرشاخه‌ها و شش آیتم این بخش هم عوض می‌شوند.
 */

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { itemsBySub, itemsByCategory } from '../data';
import { categoryById } from '../data/categories';
import type { CategoryId, MenuItem } from '../data/types';
import { useLanguage } from '../i18n/LanguageProvider';
import { FoodCard } from './FoodCard';
import { IconArrow } from './Icons';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

interface CollectionSectionProps {
  active: CategoryId;
  onOpen: (item: MenuItem) => void;
}

export function CollectionSection({ active, onOpen }: CollectionSectionProps) {
  const { lang, t } = useLanguage();
  const [sub, setSub] = useState<string | null>(null);
  const category = categoryById(active);

  useEffect(() => {
    setSub(null);
  }, [active]);

  const items = (sub ? itemsBySub(active, sub) : itemsByCategory(active)).slice(0, 6);
  const total = itemsByCategory(active).length;

  return (
    <section className="section section--collection" aria-labelledby="collection-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={t('collection.eyebrow')}
            title={category[lang]}
            sub={t('collection.sub')}
            id="collection-title"
          />
        </Reveal>

        <div className="sub-chips sub-chips--filters">
          <button
            type="button"
            className={`sub-chips__item ${sub === null ? 'is-active' : ''}`}
            onClick={() => setSub(null)}
          >
            {t('collection.allSubs')}
          </button>
          {category.subs.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`sub-chips__item ${sub === item.id ? 'is-active' : ''}`}
              onClick={() => setSub(item.id)}
            >
              {item[lang]}
            </button>
          ))}
        </div>

        <div className="food-grid" key={`${active}-${sub ?? 'all'}`}>
          {items.map((item, index) => (
            <Reveal key={item.id} delay={index * 60}>
              <FoodCard item={item} onOpen={onOpen} index={index} />
            </Reveal>
          ))}
        </div>

        <div className="collection__foot">
          <Link to={`/menu?category=${active}`} className="btn btn--dark">
            {t('collection.viewAll', { count: total })}
            <IconArrow size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
