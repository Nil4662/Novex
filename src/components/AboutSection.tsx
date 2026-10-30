/**
 * بخش دربارهٔ ما — Introduction / About
 * ------------------------------------------------------------------
 * چیدمان نامتقارن: تصویر بزرگ با قاب نارنجی و متن + سه ویژگی.
 */

import { brand } from '../config/brand';
import { sectionImages } from '../config/images';
import { useLanguage } from '../i18n/LanguageProvider';
import { FoodImage } from './FoodImage';
import { IconClock, IconSparkle, IconStewPot } from './Icons';
import { Reveal } from './Reveal';

const features = [
  { key: 'about.feature1', Icon: IconSparkle },
  { key: 'about.feature2', Icon: IconStewPot },
  { key: 'about.feature3', Icon: IconClock },
] as const;

export function AboutSection() {
  const { lang, t } = useLanguage();

  return (
    <section className="section section--about" id="about" aria-labelledby="about-title">
      <span className="deco-line deco-line--about" aria-hidden="true" />
      <div className="container about">
        <Reveal className="about__media">
          <div className="about__frame">
            <FoodImage
              src={sectionImages.about}
              alt={lang === 'fa' ? 'غذای امضای رستوران' : 'Signature dish'}
              ratio="4 / 5"
              className="about__image"
            />
          </div>
          <span className="about__stamp">
            <strong>{brand.latinName}</strong>
            <small>{brand.tagline[lang]}</small>
          </span>
        </Reveal>

        <div className="about__text">
          <Reveal>
            <p className="eyebrow">
              <span className="eyebrow__line" aria-hidden="true" />
              {t('about.eyebrow')}
            </p>
            <h2 className="about__title" id="about-title">
              {t('about.title')}
            </h2>
            <p className="about__body">{t('about.body')}</p>
            <p className="about__claim">{t('about.claim')}</p>
          </Reveal>

          <ul className="feature-list">
            {features.map((feature, index) => (
              <li className="feature" key={feature.key}>
                <Reveal delay={index * 90} className="feature__inner">
                  <span className="feature__icon" aria-hidden="true">
                    <feature.Icon size={22} />
                  </span>
                  <div>
                    <h3>{t(`${feature.key}.title` as 'about.feature1.title')}</h3>
                    <p>{t(`${feature.key}.desc` as 'about.feature1.desc')}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
