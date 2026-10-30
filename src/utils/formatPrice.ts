/**
 * قالب‌بندی قیمت — Price formatting
 * ------------------------------------------------------------------
 * فارسی: تومان با رقم‌های فارسی. انگلیسی: دلار.
 * هیچ تبدیل ارزی واقعی انجام نمی‌شود؛ هر دو قیمت در داده‌ها ثابت هستند.
 */

import type { Lang } from '../data/types';

const tomanFormatter = new Intl.NumberFormat('fa-IR');
const usdFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function formatPrice(lang: Lang, price: { toman: number; usd: number }): string {
  if (lang === 'fa') return `${tomanFormatter.format(price.toman)} تومان`;
  return usdFormatter.format(price.usd);
}

export function formatToman(value: number): string {
  return `${tomanFormatter.format(value)} تومان`;
}
