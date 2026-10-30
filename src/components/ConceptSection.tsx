/**
 * بخش مفهوم پروژه — Concept / brand presentation
 * ------------------------------------------------------------------
 * جای «نظرات مشتریان» را گرفته است: هیچ نظر یا امتیاز ساختگی وجود ندارد.
 */

import { conceptPillars } from '../data/promotions';
import { useLanguage } from '../i18n/LanguageProvider';
import { IconSparkle } from './Icons';
import { Reveal } from './Reveal';

export function ConceptSection() {
  const { lang, t } = useLanguage();

  return (
    <section className="section section--concept" aria-labelledby="concept-title">
      <div className="container concept">
        <Reveal className="concept__quote-wrap">
          <span className="concept__mark" aria-hidden="true">
            “
          </span>
          <p className="eyebrow">{t('concept.eyebrow')}</p>
          <h2 className="concept__title" id="concept-title">
            {t('concept.title')}
          </h2>
          <blockquote className="concept__quote">{t('concept.quote')}</blockquote>
          <footer className="concept__source">
            <IconSparkle size={16} />
            {t('concept.quoteSource')}
          </footer>
        </Reveal>

        <ul className="pillars">
          {conceptPillars.map((pillar, index) => (
            <Reveal delay={index * 80} key={pillar.id}>
              <li className="pillar">
                <span className="pillar__index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{pillar.title[lang]}</h3>
                <p>{pillar.desc[lang]}</p>
              </li>
            </Reveal>
          ))}
        </ul>

        <p className="concept__note">{t('concept.note')}</p>
      </div>
    </section>
  );
}
