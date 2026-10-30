/**
 * تصویر غذا — Food image with a designed fallback
 * ------------------------------------------------------------------
 * اگر فایل تصویر وجود نداشته باشد (یا خراب باشد) هرگز آیکون شکسته نمایش
 * داده نمی‌شود؛ به‌جای آن یک قاب طراحی‌شده با نام فایل مورد انتظار نشان
 * داده می‌شود تا کاربر بداند کدام فایل را باید اضافه کند.
 */

import { useState } from 'react';

type Tone = 'iranian' | 'fastfood' | 'seafood' | 'drinks' | 'promo' | 'neutral';

const toneGlyph = {
  iranian: 'pot',
  fastfood: 'burger',
  seafood: 'fish',
  drinks: 'cup',
  promo: 'plate',
  neutral: 'plate',
} as const;

function toneFromSrc(src: string): Tone {
  if (src.includes('/iranian/')) return 'iranian';
  if (src.includes('/fast-food/')) return 'fastfood';
  if (src.includes('/seafood/') || src.includes('/sushi/')) return 'seafood';
  if (src.includes('/drinks/')) return 'drinks';
  if (src.includes('/promotions/') || src.includes('/categories/') || src.includes('/hero/')) return 'promo';
  return 'neutral';
}

export interface FoodImageProps {
  src: string;
  alt: string;
  /** نسبت تصویر به شکل "4 / 3" — برای جلوگیری از پرش چیدمان */
  ratio?: string;
  /** تصویر بخش اصلی صفحه نباید lazy باشد */
  eager?: boolean;
  /** نمایش نام فایل روی قاب جایگزین */
  showFilename?: boolean;
  className?: string;
  /** متن کوتاه داخل قاب جایگزین */
  caption?: string;
  tone?: Tone;
}

const Glyphs = {
  pot: (
    <>
      <path d="M4 10h16v5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-5Z" />
      <path d="M2.5 10h19M8 6c0-1.4 1-2 1-3M12 6c0-1.4 1-2 1-3M16 6c0-1.4 1-2 1-3" />
    </>
  ),
  burger: (
    <>
      <path d="M4 9a8 8 0 0 1 16 0Z" />
      <path d="M4 12.5h16M4 16h16" />
      <path d="M5 19h14a1.5 1.5 0 0 0-1.5-1.5h-11A1.5 1.5 0 0 0 5 19Z" />
    </>
  ),
  fish: (
    <>
      <path d="M3 12s3.5-5 8-5 7.5 3.5 7.5 5-3 5-7.5 5-8-5-8-5Z" />
      <path d="M18.5 12 22 8.5v7L18.5 12Z" />
      <circle cx="8" cy="11" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
  cup: (
    <>
      <path d="M6 7h11l-1.2 11.5a2 2 0 0 1-2 1.8h-4.6a2 2 0 0 1-2-1.8L6 7Z" />
      <path d="M17 9h1.8a2.2 2.2 0 1 1 0 4.4H16.7M9 3.5v1.8M13 3.5v1.8" />
    </>
  ),
  plate: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
    </>
  ),
} as const;

export function FoodImage({
  src,
  alt,
  ratio,
  eager = false,
  showFilename = true,
  className = '',
  caption,
  tone,
}: FoodImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const resolvedTone = tone ?? toneFromSrc(src);
  const filename = src.replace(/^\/?images\//, '').replace(/^\//, '');

  return (
    <div
      className={`media media--${resolvedTone} ${showFilename ? 'media--labelled' : ''} ${className}`.trim()}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={eager ? 'high' : 'auto'}
        className={loaded && !failed ? 'media__img is-loaded' : 'media__img'}
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
      />

      {(!loaded || failed) && (
        <div className="media__fallback" aria-hidden="true">
          <svg
            className="media__glyph"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.1}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {Glyphs[toneGlyph[resolvedTone]]}
          </svg>
          {caption && <span className="media__caption">{caption}</span>}
          {showFilename && (
            <span className="media__chip" dir="ltr">
              {filename}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
