/**
 * پایگاه دادهٔ منو — Menu database
 * ------------------------------------------------------------------
 * فایل‌های دسته‌ها را جمع می‌کند و به آیتم‌های نهایی (MenuItem) تبدیل می‌کند.
 * برای افزودن غذای جدید کافی است آبجکت آن را در فایل دسته مربوطه اضافه کنید؛
 * این فایل خودکار آن را می‌خواند.
 */

import { itemImagePath } from '../config/images';
import { iranianItems } from './iranian';
import { fastFoodItems } from './fastfood';
import { seafoodItems } from './seafood';
import { drinkItems } from './drinks';
import type { CategoryId, DietTag, MenuItem, MenuSeed } from './types';

const splitEn = (value: string): string[] =>
  value.split(',').map((part) => part.trim()).filter(Boolean);

const splitFa = (value: string): string[] =>
  value.split(/[،,]/).map((part) => part.trim()).filter(Boolean);

function normalize(seed: MenuSeed, category: CategoryId): MenuItem {
  const img = seed.img ?? seed.id;
  const item: MenuItem = {
    id: seed.id,
    category,
    sub: seed.sub,
    en: seed.en,
    fa: seed.fa,
    descEn: seed.descEn,
    descFa: seed.descFa,
    toman: seed.toman,
    usd: seed.usd,
    ingEn: splitEn(seed.ingEn),
    ingFa: splitFa(seed.ingFa),
    serving: seed.serving,
    tags: seed.tags ?? [],
    allergens: seed.allergens ?? [],
    featured: seed.featured ?? false,
    img,
    image: '',
  };
  item.image = itemImagePath(item);
  return item;
}

export const menuItems: MenuItem[] = [
  ...iranianItems.map((item) => normalize(item, 'iranian')),
  ...fastFoodItems.map((item) => normalize(item, 'fastfood')),
  ...seafoodItems.map((item) => normalize(item, 'seafood')),
  ...drinkItems.map((item) => normalize(item, 'drinks')),
];

export const totalMenuItems = menuItems.length;

export const itemById = (id: string | null | undefined): MenuItem | undefined =>
  id ? menuItems.find((item) => item.id === id) : undefined;

export const itemsByCategory = (category: CategoryId): MenuItem[] =>
  menuItems.filter((item) => item.category === category);

export const itemsBySub = (category: CategoryId, sub: string | null): MenuItem[] =>
  menuItems.filter((item) => item.category === category && (!sub || item.sub === sub));

export const featuredItems: MenuItem[] = menuItems.filter((item) => item.featured);

export function relatedItems(item: MenuItem, limit = 3): MenuItem[] {
  const sameSub = menuItems.filter((i) => i.id !== item.id && i.sub === item.sub);
  const sameCategory = menuItems.filter(
    (i) => i.id !== item.id && i.category === item.category && i.sub !== item.sub,
  );
  return [...sameSub, ...sameCategory].slice(0, limit);
}

export interface MenuFilters {
  query?: string;
  category?: CategoryId | 'all';
  sub?: string | null;
  /** سقف قیمت به تومان (فیلتر فارسی) */
  maxToman?: number;
  /** سقف قیمت به دلار (فیلتر انگلیسی) */
  maxUsd?: number;
  tags?: DietTag[];
  featuredOnly?: boolean;
}

/** جست‌وجوی دوزبانه در نام، توضیح و مواد اولیه + همهٔ فیلترها با هم. */
export function filterMenu(filters: MenuFilters): MenuItem[] {
  const query = (filters.query ?? '').trim().toLowerCase();

  return menuItems.filter((item) => {
    if (filters.category && filters.category !== 'all' && item.category !== filters.category) return false;
    if (filters.sub && item.sub !== filters.sub) return false;
    if (filters.maxToman && item.toman > filters.maxToman) return false;
    if (filters.maxUsd && item.usd > filters.maxUsd) return false;
    if (filters.featuredOnly && !item.featured) return false;
    if (filters.tags && filters.tags.length > 0) {
      const hasAllTags = filters.tags.every((tag) => item.tags.includes(tag));
      if (!hasAllTags) return false;
    }
    if (query.length > 0) {
      const haystack = [
        item.en,
        item.fa,
        item.descEn,
        item.descFa,
        ...item.ingEn,
        ...item.ingFa,
      ]
        .join(' ')
        .toLowerCase();
      if (!haystack.includes(query)) return false;
    }
    return true;
  });
}

/** بالاترین قیمت تومانی منو — برای تنظیم سقف اسلایدر قیمت. */
export const maxTomanPrice = Math.max(...menuItems.map((item) => item.toman));
