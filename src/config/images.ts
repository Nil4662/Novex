/**
 * تنظیمات تصاویر — Image configuration
 * ------------------------------------------------------------------
 * همه مسیرهای تصویر در کل پروژه از همین فایل ساخته می‌شوند.
 * برای جایگزینی یک تصویر کافی است فایل JPG خود را با همان نام و در همان
 * پوشه قرار دهید؛ نیازی به تغییر کد نیست.
 *
 * ساختار پوشه‌ها (داخل پوشه public):
 *   public/images/hero/            تصاویر بنر اصلی و کاراکترها
 *   public/images/categories/      تصاویر چهار دسته اصلی
 *   public/images/iranian/         غذاهای ایرانی
 *   public/images/fast-food/       فست‌فود (پیتزا، برگر، ساندویچ، مرغ سوخاری)
 *   public/images/seafood/         غذاهای دریایی
 *   public/images/sushi/           سوشی و غذاهای ژاپنی
 *   public/images/drinks/          نوشیدنی‌ها
 *   public/images/promotions/      بنرهای تبلیغاتی
 *   public/images/gallery/         گالری تصاویر
 */

import type { CategoryId, MenuItem } from '../data/types';

export const IMAGE_BASE = '/images';

/** پوشه‌ی تصویر برای هر دسته اصلی. */
const CATEGORY_FOLDER: Record<CategoryId, string> = {
  iranian: 'iranian',
  fastfood: 'fast-food',
  seafood: 'seafood',
  drinks: 'drinks',
};

/** پوشه‌ی تصویر یک آیتم (سوشی پوشه‌ی جداگانه دارد). */
export function itemFolder(item: Pick<MenuItem, 'category' | 'sub'>): string {
  if (item.category === 'seafood' && item.sub === 'sushi') return 'sushi';
  return CATEGORY_FOLDER[item.category];
}

/** مسیر کامل تصویر یک آیتم منو. */
export function itemImagePath(item: Pick<MenuItem, 'category' | 'sub' | 'img'>): string {
  return `${IMAGE_BASE}/${itemFolder(item)}/${item.img}.jpg`;
}

/** تصاویر بنر اصلی برای هر دسته — با کلیک روی دسته، بنر عوض می‌شود. */
export const heroImages = {
  iranian: `${IMAGE_BASE}/hero/hero-iranian.jpg`,
  fastfood: `${IMAGE_BASE}/hero/hero-fast-food.jpg`,
  seafood: `${IMAGE_BASE}/hero/hero-seafood.jpg`,
  drinks: `${IMAGE_BASE}/hero/hero-drinks.jpg`,
} as const;

/** تصویر دو کاراکتر لاک‌پشت کارتونی (اختیاری). */
export const mascotImage = `${IMAGE_BASE}/hero/mascots-turtles.png`;

/** تصاویر چهار دسته اصلی. */
export const categoryImages: Record<CategoryId, string> = {
  iranian: `${IMAGE_BASE}/categories/category-iranian.jpg`,
  fastfood: `${IMAGE_BASE}/categories/category-fast-food.jpg`,
  seafood: `${IMAGE_BASE}/categories/category-seafood.jpg`,
  drinks: `${IMAGE_BASE}/categories/category-drinks.jpg`,
};

/** تصاویر بخش‌های ثابت صفحه اصلی. */
export const sectionImages = {
  about: `${IMAGE_BASE}/promotions/about-signature-dish.jpg`,
  midPromo: `${IMAGE_BASE}/promotions/mid-promo-quesadilla.jpg`,
  craft: `${IMAGE_BASE}/promotions/craft-chef-plate.jpg`,
  promoChicken: `${IMAGE_BASE}/promotions/promo-fried-chicken.jpg`,
  promoBurger: `${IMAGE_BASE}/promotions/promo-beef-burger.jpg`,
  promoPizza: `${IMAGE_BASE}/promotions/promo-cheese-pizza.jpg`,
  comboLarge: `${IMAGE_BASE}/promotions/combo-burger-meal.jpg`,
  comboSaffron: `${IMAGE_BASE}/promotions/combo-persian-kebab.jpg`,
  comboSeafood: `${IMAGE_BASE}/promotions/combo-seafood.jpg`,
} as const;

/** نام فایل‌های گالری (شش تصویر). */
export const galleryImages = [
  { file: `${IMAGE_BASE}/gallery/gallery-01.jpg`, captionFa: 'بال مرغ تند', captionEn: 'Spicy wings' },
  { file: `${IMAGE_BASE}/gallery/gallery-02.jpg`, captionFa: 'برگر و سیب‌زمینی', captionEn: 'Burger & fries' },
  { file: `${IMAGE_BASE}/gallery/gallery-03.jpg`, captionFa: 'مرغ سوخاری', captionEn: 'Crispy chicken' },
  { file: `${IMAGE_BASE}/gallery/gallery-04.jpg`, captionFa: 'بوریتو', captionEn: 'Burrito' },
  { file: `${IMAGE_BASE}/gallery/gallery-05.jpg`, captionFa: 'پیتزا', captionEn: 'Pizza' },
  { file: `${IMAGE_BASE}/gallery/gallery-06.jpg`, captionFa: 'نوشیدنی خنک', captionEn: 'Cool drinks' },
] as const;

/** فهرست کامل نام فایل‌های مورد انتظار — در IMAGE_GUIDE.md هم آمده است. */
export const expectedImageFiles = {
  hero: Object.values(heroImages),
  mascots: [mascotImage],
  categories: Object.values(categoryImages),
  sections: Object.values(sectionImages),
  gallery: galleryImages.map((g) => g.file),
};
