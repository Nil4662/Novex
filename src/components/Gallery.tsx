/**
 * گالری تصاویر — Food gallery strip
 * ------------------------------------------------------------------
 * هر کاشی نام فایل مورد انتظار را نشان می‌دهد تا جایگزینی تصویر ساده باشد.
 */

import { galleryImages } from '../config/images';
import { useLanguage } from '../i18n/LanguageProvider';
import { FoodImage } from './FoodImage';
import { Reveal } from './Reveal';

export function Gallery() {
  const { lang, t } = useLanguage();

  return (
    <section className="section section--gallery" aria-labelledby="gallery-title">
      <div className="container">
        <Reveal>
          <div className="gallery__head">
            <div>
              <p className="eyebrow">{t('gallery.eyebrow')}</p>
              <h2 id="gallery-title">{t('gallery.title')}</h2>
            </div>
            <p className="gallery__note">{t('gallery.note')}</p>
          </div>
        </Reveal>
      </div>

      <div className="gallery">
        {galleryImages.map((tile, index) => (
          <Reveal key={tile.file} delay={index * 60} className="gallery__cell">
            <figure className="gallery__tile">
              <FoodImage
                src={tile.file}
                alt={lang === 'fa' ? tile.captionFa : tile.captionEn}
                ratio="1 / 1"
                tone="promo"
              />
              <figcaption>{lang === 'fa' ? tile.captionFa : tile.captionEn}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
