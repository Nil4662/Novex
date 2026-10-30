/**
 * دسته‌های اصلی، زیرشاخه‌ها و محتوای بنر اصلی (Hero)
 * ------------------------------------------------------------------
 * نام هر دسته و زیرشاخه به هر دو زبان اینجا تعریف شده است.
 * محتوای بنر اصلی هر دسته (تیتر، توضیح، دکمه) هم در همین فایل است؛
 * بنابراین با تغییر یک دسته، بنر اصلی خودکار عوض می‌شود.
 */

import type { CategoryId } from './types';

export interface SubCategory {
  id: string;
  fa: string;
  en: string;
}

export interface HeroContent {
  eyebrow: { fa: string; en: string };
  /** تیتر دو خطی؛ خط دوم با استایل تأکیدی نمایش داده می‌شود. */
  title: { fa: [string, string]; en: [string, string] };
  desc: { fa: string; en: string };
  cta: { fa: string; en: string };
  badge: { fa: string; en: string };
  dish: { fa: string; en: string };
  note: { fa: string; en: string };
}

export interface Category {
  id: CategoryId;
  fa: string;
  en: string;
  short: { fa: string; en: string };
  desc: { fa: string; en: string };
  subs: SubCategory[];
  hero: HeroContent;
}

export const categories: Category[] = [
  {
    id: 'iranian',
    fa: 'غذاهای اصیل ایرانی',
    en: 'Traditional Iranian',
    short: { fa: 'ایرانی', en: 'Iranian' },
    desc: {
      fa: 'خورشت‌های کندپخته، پلوهای زعفرانی و کباب‌های زغالی.',
      en: 'Slow-cooked stews, saffron rice and charcoal-grilled kebabs.',
    },
    subs: [
      { id: 'stew', fa: 'خورشت و پلو', en: 'Rice & Stews' },
      { id: 'kebab', fa: 'کباب ایرانی', en: 'Persian Kebabs' },
      { id: 'local', fa: 'غذاهای محلی و نانی', en: 'Local & Bread Dishes' },
    ],
    hero: {
      eyebrow: { fa: 'آشپزخانه ایرانی', en: 'Persian Kitchen' },
      title: { fa: ['طعمِ اصیلِ', 'آشپزخانهٔ ایرانی'], en: ['The Soul of', 'Persian Cooking'] },
      desc: {
        fa: 'برنج دم‌کشیده با زعفران، خورشت‌های چندساعته و کباب‌های زغالی؛ دست‌پخت ایرانی با وسواس یک رستوران بین‌المللی.',
        en: 'Saffron-steeped rice, stews simmered for hours and charcoal kebabs — Persian home cooking with international precision.',
      },
      cta: { fa: 'دیدن منوی ایرانی', en: 'Explore Persian Menu' },
      badge: { fa: '۵۰٪ تخفیف نمایشی', en: 'DEMO 50% OFF' },
      dish: { fa: 'کباب سلطانی', en: 'Soltani Kebab' },
      note: { fa: 'با برنج زعفرانی و کره', en: 'With saffron rice & butter' },
    },
  },
  {
    id: 'fastfood',
    fa: 'فست فود',
    en: 'Fast Food',
    short: { fa: 'فست فود', en: 'Fast Food' },
    desc: {
      fa: 'پیتزای نانوایی، برگرهای اسْمش و مرغ سوخاری ترد.',
      en: 'Stone-baked pizza, smash burgers and crackling fried chicken.',
    },
    subs: [
      { id: 'pizza', fa: 'پیتزا', en: 'Pizza' },
      { id: 'burger', fa: 'برگر', en: 'Burgers' },
      { id: 'sandwich', fa: 'ساندویچ و شاورما', en: 'Sandwiches & Shawarma' },
      { id: 'chicken', fa: 'مرغ سوخاری و پیش‌غذا', en: 'Fried Chicken & Sides' },
    ],
    hero: {
      eyebrow: { fa: 'کوره و آتش', en: 'Fire & Cheese' },
      title: { fa: ['برگرِ زغالی', 'با پنیرِ ذوب‌شده'], en: ['Flame-Grilled', 'Pure Craving'] },
      desc: {
        fa: 'گوشت چرخ‌کردهٔ تازه روی شعله، پنیر چدار ذوب‌شده و نان بریوش تُست‌شده — همان چیزی که یک عصر جمعه می‌خواهد.',
        en: 'Fresh-ground beef over open flame, molten cheddar and a toasted brioche bun — exactly what a Friday evening asks for.',
      },
      cta: { fa: 'دیدن منوی فست فود', en: 'Explore Fast Food Menu' },
      badge: { fa: 'ست ویژه نمایشی', en: 'DEMO COMBO' },
      dish: { fa: 'برگر دوبل اسْمش', en: 'Double Smash Burger' },
      note: { fa: 'دو لایه گوشت، چدار، سس مخصوص', en: 'Double patty, cheddar, house sauce' },
    },
  },
  {
    id: 'seafood',
    fa: 'غذاهای دریایی',
    en: 'Seafood',
    short: { fa: 'دریایی', en: 'Seafood' },
    desc: {
      fa: 'ماهی گریل‌شده، میگو، کالاماری و سوشی تازه.',
      en: 'Grilled fish, shrimp, calamari and freshly rolled sushi.',
    },
    subs: [
      { id: 'fish', fa: 'ماهی و غذای دریایی', en: 'Fish & Seafood' },
      { id: 'sushi', fa: 'سوشی و ژاپنی', en: 'Sushi & Japanese' },
    ],
    hero: {
      eyebrow: { fa: 'از دریا تا میز', en: 'Sea to Table' },
      title: { fa: ['تازگی از', 'عمقِ دریا'], en: ['Fresh From', 'the Deep'] },
      desc: {
        fa: 'ماهی سالمون با پوست تُرد، میگوی کره‌ای و رول‌های سوشی که همان لحظه پیچیده می‌شوند.',
        en: 'Crisp-skinned salmon, butter-basted shrimp and sushi rolls pressed to order.',
      },
      cta: { fa: 'دیدن منوی دریایی', en: 'Explore Seafood Menu' },
      badge: { fa: 'تازهٔ روز (نمایشی)', en: "TODAY'S CATCH (DEMO)" },
      dish: { fa: 'سالمون گریل‌شده', en: 'Grilled Salmon' },
      note: { fa: 'با لیمو و کرهٔ سبز', en: 'With lemon & herb butter' },
    },
  },
  {
    id: 'drinks',
    fa: 'نوشیدنی‌ها',
    en: 'Drinks',
    short: { fa: 'نوشیدنی', en: 'Drinks' },
    desc: {
      fa: 'دوغ سنتی، نوشابه‌های خنک، آبمیوهٔ تازه و قهوه.',
      en: 'Doogh, chilled sodas, fresh juices and coffee.',
    },
    subs: [
      { id: 'traditional', fa: 'نوشیدنی سنتی', en: 'Traditional Drinks' },
      { id: 'soft', fa: 'نوشابه', en: 'Soft Drinks' },
      { id: 'juice', fa: 'آبمیوه و شیک', en: 'Juices & Smoothies' },
      { id: 'hot', fa: 'نوشیدنی گرم', en: 'Hot Drinks' },
    ],
    hero: {
      eyebrow: { fa: 'نوشیدنی‌خانه', en: 'The Bar' },
      title: { fa: ['نوشیدنیِ خنک', 'برای هر طعم'], en: ['Cool Sips,', 'Warm Moments'] },
      desc: {
        fa: 'دوغِ آبعلی با نعنا، شربت زعفران با یخ، آبمیوهٔ تازه و اسپرسوی غلیظ — نوشیدنی‌ای که غذا را کامل می‌کند.',
        en: 'Mint doogh, iced saffron sharbat, cold-pressed juice and rich espresso — the drink that finishes the plate.',
      },
      cta: { fa: 'دیدن منوی نوشیدنی', en: 'Explore Drink Menu' },
      badge: { fa: 'سرو سرد و تازه', en: 'SERVED ICE COLD' },
      dish: { fa: 'دوغ آبعلی', en: 'Abali Doogh' },
      note: { fa: 'با نعنا و پودر گل محمدی', en: 'With mint & rose petal' },
    },
  },
];

export const categoryById = (id: CategoryId): Category =>
  categories.find((c) => c.id === id) ?? categories[0];

export const subLabel = (category: Category, subId: string): { fa: string; en: string } =>
  category.subs.find((s) => s.id === subId) ?? { fa: subId, en: subId };
