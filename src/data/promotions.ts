/**
 * محتوای بنرهای تبلیغاتی و بخش‌های ثابت صفحه اصلی
 * ------------------------------------------------------------------
 * همه قیمت‌ها نمایشی هستند و در فایل utils/formatPrice.ts قالب‌بندی می‌شوند.
 */

import type { CategoryId } from './types';

export interface PromoCard {
  id: string;
  category: CategoryId;
  eyebrow: { fa: string; en: string };
  title: { fa: string; en: string };
  desc: { fa: string; en: string };
  toman: number;
  usd: number;
  image: string;
  tone: 'dark' | 'red' | 'yellow' | 'orange';
}

export const promoTrios: PromoCard[] = [
  {
    id: 'fried-chicken',
    category: 'fastfood',
    eyebrow: { fa: 'تازه از روغن', en: 'Fresh from the fryer' },
    title: { fa: 'مرغ سوخاری', en: 'Fried Chicken' },
    desc: {
      fa: 'پوستِ تُرد، گوشتِ آبدار و سسی که خودمان می‌سازیم.',
      en: 'Crackling crust, juicy meat and a sauce made in-house.',
    },
    toman: 290000,
    usd: 7.9,
    image: '/images/promotions/promo-fried-chicken.jpg',
    tone: 'dark',
  },
  {
    id: 'beef-burger',
    category: 'fastfood',
    eyebrow: { fa: 'پرفروش هفته', en: 'Best seller' },
    title: { fa: 'برگر گوشت', en: 'Beef Burger' },
    desc: {
      fa: 'گوشتِ تازه، پنیر چدار و نان تُست‌شده.',
      en: 'Fresh beef, cheddar and a toasted bun.',
    },
    toman: 350000,
    usd: 9.5,
    image: '/images/promotions/promo-beef-burger.jpg',
    tone: 'red',
  },
  {
    id: 'cheese-pizza',
    category: 'fastfood',
    eyebrow: { fa: 'از تنور سنگی', en: 'Stone oven' },
    title: { fa: 'پیتزا پنیری', en: 'Cheese Pizza' },
    desc: {
      fa: 'خمیر ۴۸ ساعته با سه نوع پنیر.',
      en: '48-hour dough with a three-cheese blend.',
    },
    toman: 380000,
    usd: 10.4,
    image: '/images/promotions/promo-cheese-pizza.jpg',
    tone: 'yellow',
  },
];

export const midPromo = {
  eyebrow: { fa: 'منوی ویژهٔ میان‌روز', en: 'Midday special' },
  title: { fa: 'کسادیلا با گوجه و پنیر', en: 'Quesadilla With Tomatoes' },
  desc: {
    fa: 'تورتیلای گریل‌شده، پنیر کش‌آمده، گوجهٔ گیلاسی و سالسای تازه. یک بشقاب که با چشم هم سیر می‌شوی.',
    en: 'Griddled tortilla, stretchy cheese, cherry tomato and fresh salsa — a plate you eat with your eyes first.',
  },
  toman: 265000,
  usd: 7.2,
  image: '/images/promotions/mid-promo-quesadilla.jpg',
};

export interface ComboBanner {
  id: string;
  eyebrow: { fa: string; en: string };
  title: { fa: string; en: string };
  desc: { fa: string; en: string };
  toman: number;
  usd: number;
  image: string;
  tone: 'dark' | 'yellow' | 'orange';
  large?: boolean;
}

export const comboBanners: ComboBanner[] = [
  {
    id: 'family-burger',
    eyebrow: { fa: 'ست خانوادگی', en: 'Family set' },
    title: { fa: 'کمبوی برگر برای چهار نفر', en: 'Burger Combo for Four' },
    desc: {
      fa: 'چهار برگر دوبل، دو سیب‌زمینی بزرگ و چهار نوشیدنی خنک.',
      en: 'Four double burgers, two large fries and four cold drinks.',
    },
    toman: 1290000,
    usd: 35.9,
    image: '/images/promotions/combo-burger-meal.jpg',
    tone: 'dark',
    large: true,
  },
  {
    id: 'kebab-platter',
    eyebrow: { fa: 'پلاتر ایرانی', en: 'Persian platter' },
    title: { fa: 'پلاتر کباب سلطانی', en: 'Soltani Kebab Platter' },
    desc: { fa: 'کباب برگ و کوبیده با برنج زعفرانی.', en: 'Barg & koobideh with saffron rice.' },
    toman: 890000,
    usd: 24.5,
    image: '/images/promotions/combo-persian-kebab.jpg',
    tone: 'yellow',
  },
  {
    id: 'seafood-special',
    eyebrow: { fa: 'سینی دریایی', en: 'Seafood tray' },
    title: { fa: 'سینی غذای دریایی', en: 'Seafood Special Tray' },
    desc: { fa: 'سالمون، میگو و کالاماری گریل‌شده.', en: 'Grilled salmon, shrimp and calamari.' },
    toman: 1450000,
    usd: 39.9,
    image: '/images/promotions/combo-seafood.jpg',
    tone: 'orange',
  },
];

export const craftStats = [
  { id: 'dishes', valueFa: '۱۸۰+', valueEn: '180+', label: { fa: 'آیتم در منوی نمایشی', en: 'items in the demo menu' } },
  { id: 'cuisines', valueFa: '۴', valueEn: '4', label: { fa: 'آشپزخانهٔ متفاوت', en: 'distinct kitchens' } },
  { id: 'langs', valueFa: '۲', valueEn: '2', label: { fa: 'زبان (فارسی و انگلیسی)', en: 'languages (Persian & English)' } },
] as const;

export const conceptPillars = [
  {
    id: 'typography',
    title: { fa: 'تایپوگرافی روایی', en: 'Editorial typography' },
    desc: {
      fa: 'تیترهای سریفِ بزرگ در کنار متن تیز و خوانا؛ هر بخش مثل یک صفحهٔ مجلهٔ غذا چیده شده است.',
      en: 'Large serif headlines paired with crisp body text — every section reads like a food-magazine spread.',
    },
  },
  {
    id: 'photography',
    title: { fa: 'عکاسی با نورپردازی سخت', en: 'Chiaroscuro food photography' },
    desc: {
      fa: 'یک منبع نور، سایه‌های عمیق و بافتِ واقعی غذا؛ هیچ عکسی برای پر کردن فضا استفاده نشده است.',
      en: 'One light source, deep shadows and real texture — no image is used just to fill a gap.',
    },
  },
  {
    id: 'bilingual',
    title: { fa: 'دوزبانهٔ واقعی', en: 'Truly bilingual' },
    desc: {
      fa: 'فارسی از راست به چپ و انگلیسی از چپ به راست؛ هر دو با فونت، فاصله و چیدمان مخصوص خودشان.',
      en: 'Persian flows right-to-left and English left-to-right, each with its own type, spacing and rhythm.',
    },
  },
] as const;
