import { useLang } from '../context/LanguageContext';
import { BRAND } from '../config';
import { getImageUrl } from '../utils/format';
import SmartImage from './SmartImage';

// ============================================================================
//  بخش هیرو — Cinematic, asymmetrical hero section.
//  شامل متن نمایشی، دکمه فراخوان و عناصر تصویری شناور.
// ============================================================================

interface HeroProps {
  onExplore: () => void;
}

export default function Hero({ onExplore }: HeroProps) {
  const { t, lang } = useLang();
  const tagline = lang === 'fa' ? BRAND.taglineFa : BRAND.taglineEn;

  return (
    <section className="hero" id="hero">
      {/* شکل‌های تزئینی پس‌زمینه */}
      <div className="hero__blob hero__blob--1" aria-hidden="true" />
      <div className="hero__blob hero__blob--2" aria-hidden="true" />

      <div className="hero__inner">
        {/* نیمه متن */}
        <div className="hero__text">
          <span className="hero__badge reveal">{t('heroBadge')}</span>
          <h1 className="hero__title reveal">
            <span className="hero__title-line">{t('heroTitle1')}</span>
            <span className="hero__title-line hero__title-line--accent">{t('heroTitle2')}</span>
          </h1>
          <p className="hero__tagline reveal">{tagline}</p>
          <p className="hero__subtitle reveal">{t('heroSubtitle')}</p>
          <button className="btn btn--primary hero__cta reveal" onClick={onExplore}>
            {t('heroCta')}
            <span className="btn__arrow" aria-hidden="true">→</span>
          </button>
        </div>

        {/* نیمه تصویری — ترکیب غذا و شخصیت‌های لاک‌پشت کارتونی */}
        <div className="hero__visual">
          <div className="hero__turtle" aria-hidden="true">
            {/* لاک‌پشت‌های کارتونی اصیل (بدون کپی از فرنچایز) — SVG */}
            <svg viewBox="0 0 200 200" className="hero__turtle-svg" role="img" aria-label="Cartoon turtle chef">
              <ellipse cx="100" cy="120" rx="70" ry="55" fill="#2e7d32" />
              <ellipse cx="100" cy="120" rx="52" ry="42" fill="#43a047" />
              <path d="M40 120 Q100 60 160 120 Q100 90 40 120Z" fill="#66bb6a" opacity="0.7" />
              <circle cx="100" cy="70" r="32" fill="#43a047" />
              <circle cx="88" cy="65" r="5" fill="#fff" />
              <circle cx="112" cy="65" r="5" fill="#fff" />
              <circle cx="89" cy="66" r="2.5" fill="#111" />
              <circle cx="113" cy="66" r="2.5" fill="#111" />
              <path d="M82 80 Q100 95 118 80" stroke="#111" strokeWidth="3" fill="none" strokeLinecap="round" />
              <rect x="78" y="48" width="44" height="10" rx="3" fill="#FF6B00" />
              <rect x="86" y="40" width="28" height="12" rx="3" fill="#FFB36B" />
              <circle cx="155" cy="135" r="8" fill="#43a047" />
            </svg>
          </div>

          <div className="hero__plate hero__plate--main float-a">
            <SmartImage
              src={getImageUrl('hero/hero-pizza.jpg')}
              alt="Fresh pizza"
              lazy={false}
            />
          </div>
          <div className="hero__plate hero__plate--2 float-b">
            <SmartImage src={getImageUrl('hero/hero-kebab.jpg')} alt="Persian kebab" />
          </div>
          <div className="hero__plate hero__plate--3 float-c">
            <SmartImage src={getImageUrl('hero/hero-seafood.jpg')} alt="Seafood dish" />
          </div>

          <span className="hero__sparkle hero__sparkle--1" aria-hidden="true">✦</span>
          <span className="hero__sparkle hero__sparkle--2" aria-hidden="true">✦</span>
        </div>
      </div>
    </section>
  );
}
