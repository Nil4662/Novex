import type { Lang, Food } from '../types';
import { IMAGE_BASE, FALLBACK_IMAGE } from '../config';

// ============================================================================
//  ابزار قالب‌بندی قیمت — Price formatting per language.
//  قیمت‌ها نمایشی هستند و تبدیل زنده انجام نمی‌شود.
// ============================================================================

const FA_DIGITS = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

export function formatPrice(food: Food, lang: Lang): string {
  if (lang === 'fa') {
    // قالب‌بندی تومان با ارقام فارسی و جداکننده هزارگان.
    const grouped = food.priceToman.toLocaleString('en-US');
    const fa = grouped.replace(/[0-9]/g, (d) => FA_DIGITS[Number(d)]);
    return `${fa} تومان`;
  }
  return `$${food.priceUsd.toFixed(2)}`;
}

// نمایش محدوده قیمت برای فیلتر — به تومان یا دلار.
export function formatPriceValue(value: number, lang: Lang): string {
  if (lang === 'fa') {
    const grouped = value.toLocaleString('en-US');
    return grouped.replace(/[0-9]/g, (d) => FA_DIGITS[Number(d)]);
  }
  return `$${value.toFixed(0)}`;
}

// ============================================================================
//  ابزار مسیر تصویر — Image path resolution with fallback.
//  مسیر کامل تصویر از IMAGE_BASE + فیلد image ساخته می‌شود.
// ============================================================================

export function getImageUrl(image: string): string {
  return `${IMAGE_BASE}/${image}`;
}

export function getFallbackImage(): string {
  return `${FALLBACK_IMAGE}`;
}
