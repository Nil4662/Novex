import type { Category } from '../types';

// ============================================================================
//  تعریف دسته‌بندی‌های اصلی و زیردسته‌ها — Main categories and subcategories.
//  هر دسته یک تصویر دارد که در پوشه public/images/categories قرار می‌گیرد.
// ============================================================================

export const CATEGORIES: Category[] = [
  {
    id: 'iranian',
    nameFa: 'غذاهای اصیل ایرانی',
    nameEn: 'Traditional Iranian Cuisine',
    descFa: 'از خورشت‌های اصیل تا کباب‌های دودی و نان‌های سنتی — طعم واقعی ایران.',
    descEn: 'From authentic stews to smoky kebabs and traditional bread dishes — the real taste of Iran.',
    image: 'categories/category-iranian.jpg',
    subcategories: [
      { id: 'rice-stews', nameFa: 'پلوها و خورشت‌ها', nameEn: 'Rice Dishes & Stews' },
      { id: 'kebabs', nameFa: 'کباب‌های ایرانی', nameEn: 'Iranian Kebabs' },
      { id: 'bread-based', nameFa: 'نان و غذاهای سنتی', nameEn: 'Bread-Based Dishes' },
    ],
  },
  {
    id: 'fast-food',
    nameFa: 'فست فود',
    nameEn: 'Fast Food',
    descFa: 'پیتزا، برگر، شاورما و مرغ سوخاری — هیجان طعم‌های محبوب جهان.',
    descEn: 'Pizza, burgers, shawarma and fried chicken — the excitement of the world’s favorite flavors.',
    image: 'categories/category-fast-food.jpg',
    subcategories: [
      { id: 'pizza', nameFa: 'پیتزا', nameEn: 'Pizza' },
      { id: 'burgers', nameFa: 'برگر', nameEn: 'Burgers' },
      { id: 'shawarma-sandwiches', nameFa: 'شاورما و ساندویچ', nameEn: 'Shawarma & Sandwiches' },
      { id: 'fried-chicken-sides', nameFa: 'مرغ سوخاری و پیش‌غذا', nameEn: 'Fried Chicken & Sides' },
    ],
  },
  {
    id: 'seafood',
    nameFa: 'غذاهای دریایی',
    nameEn: 'Seafood',
    descFa: 'ماهی، میگو، سوشی و قلیه — تازگی دریا در هر بشقاب.',
    descEn: 'Fish, shrimp, sushi and stews — the freshness of the sea on every plate.',
    image: 'categories/category-seafood.jpg',
    subcategories: [
      { id: 'fish-main', nameFa: 'ماهی و غذای اصلی دریایی', nameEn: 'Fish & Seafood Mains' },
      { id: 'sushi', nameFa: 'سوشی', nameEn: 'Sushi' },
    ],
  },
];

export const CATEGORY_MAP: Record<string, Category> = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c]),
);
