// ============================================================================
//  مرکزی‌ترین فایل پیکربندی پروژه — همه تنظیمات برند و رنگ‌ها اینجا قرار دارند.
//  Central configuration: brand name, colors, and image base path.
//  برای تغییر نام برند، رنگ‌ها یا مسیر تصاویر فقط این فایل را ویرایش کنید.
// ============================================================================

export const BRAND = {
  // نام رستوران — برای تغییر فقط این مقدار را عوض کنید.
  nameFa: 'آتش و زعفران',
  nameEn: 'Fire & Saffron',
  taglineFa: 'طعم‌هایی که فراموش نمی‌شوند',
  taglineEn: 'Flavors You Never Forget',
};

// پالت رنگ تأییدشده — برای تغییر رنگ‌ها این مقادیر را ویرایش کنید.
export const COLORS = {
  white: '#FFFFFF',
  black: '#111111',
  strongOrange: '#FF6B00',
  softOrange: '#FFB36B',
  red: '#E53935',
  yellow: '#FFC928',
};

// مسیر پایه تصاویر — همه تصاویر داخل پوشه public/images قرار دارند.
export const IMAGE_BASE = '/images';

// طراح سایت — این نام همیشه باید با حروف لاتین «Nila» باقی بماند.
export const DESIGNER = 'Nila';

// مسیر تصویر جایگزین (fallback) برای مواردی که تصویر غذا موجود نیست.
export const FALLBACK_IMAGE = '/images/icons/placeholder.svg';
