/**
 * بخش تجربهٔ آشپزخانه — Craft section
 * ------------------------------------------------------------------
 * تصویر بزرگ + تیتر + آمار نمایشی (که واقعاً دربارهٔ همین نمونه‌کار است).
 */

import { sectionImages } from '../config/images';
import { craftStats } from '../data/promotions';
import { useLanguage } from '../i18n/LanguageProvider';
import { FoodImage } from './FoodImage';
import { Reveal } from './Reveal';

export function CraftSection() {
  const { lang, t } = useLanguage();

  return (
    <section className="section section--craft" aria-labelledby="craft-title">
      <div className="container craft">
        <Reveal className="craft__media">
          <FoodImage
            src={sectionImages.craft}
            alt={lang === 'fa' ? 'بشقاب امضای آشپز' : "Chef's signature plate"}
            ratio="5 / 6"
            className="craft__image"
          />
          <span className="craft__caption">{t('craft.demoLabel')}</span>
        </Reveal>

        <div className="craft__text">
          <Reveal>
            <p className="eyebrow">{t('craft.eyebrow')}</p>
            <h2 id="craft-title">{t('craft.title')}</h2>
            <p className="craft__body">{t('craft.body')}</p>
          </Reveal>

          <ul className="stats">
            {craftStats.map((stat, index) => (
              <Reveal delay={index * 90} key={stat.id}>
                <li className="stat">
                  <span className="stat__value">{lang === 'fa' ? stat.valueFa : stat.valueEn}</span>
                  <span className="stat__label">{stat.label[lang]}</span>
                </li>
              </Reveal>
            ))}
          </ul>
          <p className="craft__note">{t('craft.demoLabel')}</p>
        </div>
      </div>
    </section>
  );
}
