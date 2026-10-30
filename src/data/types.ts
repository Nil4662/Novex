/**
 * انواع داده‌های منو — Types
 * ------------------------------------------------------------------
 * هر غذا در فایل‌های داخل پوشه data به شکل «MenuSeed» نوشته می‌شود و
 * سپس در فایل data/index.ts به «MenuItem» تبدیل (نرمال‌سازی) می‌شود.
 */

export type Lang = 'fa' | 'en';

export type CategoryId = 'iranian' | 'fastfood' | 'seafood' | 'drinks';

/** برچسب‌های غذایی — برای فیلترهای صفحه منو استفاده می‌شوند. */
export type DietTag = 'meat' | 'chicken' | 'seafood' | 'vegetarian' | 'vegan' | 'spicy' | 'raw';

/** آلرژن‌ها — ترجمه‌ی هر کلید در i18n/translations.ts قرار دارد. */
export type Allergen =
  | 'gluten'
  | 'dairy'
  | 'nuts'
  | 'fish'
  | 'shellfish'
  | 'sesame'
  | 'egg'
  | 'soy'
  | 'caffeine';

/** شکل خام هر آیتم در فایل‌های data (مواد اولیه به صورت رشته با کاما جدا می‌شود). */
export interface MenuSeed {
  /** شناسه یکتا و انگلیسی — نام فایل تصویر هم از همین ساخته می‌شود. */
  id: string;
  /** شناسه زیرشاخه (مثلاً pizza یا kebab). فهرست زیرشاخه‌ها در categories.ts است. */
  sub: string;
  en: string;
  fa: string;
  descEn: string;
  descFa: string;
  /** قیمت نمایشی به تومان (مثلاً 320000). */
  toman: number;
  /** قیمت نمایشی به دلار (مثلاً 8.9). */
  usd: number;
  /** مواد اولیه انگلیسی، جدا شده با کاما. */
  ingEn: string;
  /** مواد اولیه فارسی، جدا شده با «،». */
  ingFa: string;
  /** اندازه سرو (مثلاً "420 g" یا "330 ml"). */
  serving: string;
  tags?: DietTag[];
  allergens?: Allergen[];
  /** نمایش در بخش «محبوب‌ترین‌ها». */
  featured?: boolean;
  /** نام فایل تصویر بدون پسوند؛ اگر خالی باشد از id استفاده می‌شود. */
  img?: string;
}

/** آیتم نهایی منو که در کل سایت استفاده می‌شود. */
export interface MenuItem {
  id: string;
  category: CategoryId;
  sub: string;
  en: string;
  fa: string;
  descEn: string;
  descFa: string;
  toman: number;
  usd: number;
  ingEn: string[];
  ingFa: string[];
  serving: string;
  tags: DietTag[];
  allergens: Allergen[];
  featured: boolean;
  img: string;
  /** مسیر کامل تصویر، از config/images.ts ساخته می‌شود. */
  image: string;
}
