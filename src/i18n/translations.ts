import type { Lang } from '../types';

// ============================================================================
//  دیکشنری ترجمه‌های رابط کاربری — Centralized UI translations.
//  همه متون رابط کاربری باید از این فایل گرفته شوند، نه به‌صورت پراکنده در کد.
// ============================================================================

export const TRANSLATIONS = {
  fa: {
    // جهت و زبان
    dir: 'rtl',
    langName: 'فارسی',
    otherLangName: 'English',
    otherLang: 'en' as Lang,

    // برند و نوار ناوبری
    navHome: 'خانه',
    navCategories: 'دسته‌بندی غذاها',
    navAbout: 'درباره ما',
    navContact: 'تماس',
    navMenu: 'مشاهده منو',
    designerCreditHeader: 'طراحی سایت با Nila',

    // هیرو
    heroBadge: 'نمونه‌کار نمایشی',
    heroTitle1: 'این سایت یک نمونه‌کار خیالی است',
    heroTitle2: 'تمام قیمت‌ها و دکمه‌های خرید صرفاً نمایشی هستند.',
    heroTagline: 'طعم‌هایی که فراموش نمی‌شوند',
    heroSubtitle: 'از عطر کباب ایرانی تا هیجان یک پیتزای داغ. دنیایی از طعم‌ها، در یک منوی جذاب.',
    heroCta: 'مشاهده منوی غذاها',

    // بخش دسته‌بندی‌ها
    categoriesTitle: 'دسته‌بندی غذاها',
    categoriesSubtitle: 'برای هر سلیقه، یک انتخاب خوشمزه',
    exploreCategory: 'مشاهده غذاها',

    // جستجو و فیلتر
    searchPlaceholder: 'جستجوی غذا…',
    filterTitle: 'فیلترها',
    filterCategory: 'دسته‌بندی',
    filterSubcategory: 'زیردسته',
    filterProtein: 'نوع پروتئین',
    filterPriceRange: 'محدوده قیمت',
    filterPopular: 'فقط محبوب‌ها',
    filterPrepStyle: 'نوع پخت',
    allOption: 'همه',
    minPrice: 'حداقل',
    maxPrice: 'حداکثر',
    clearFilters: 'پاک کردن فیلترها',
    showAll: 'نمایش همه',

    // پروتئین
    proteinMeat: 'گوشت',
    proteinChicken: 'مرغ',
    proteinSeafood: 'دریایی',
    proteinVegetarian: 'گیاهی',

    // سبک پخت
    prepGrilled: 'گریل/کبابی',
    prepFried: 'سرخ‌شده',
    prepBaked: 'تنوری/پخته',
    prepStewed: 'خورشتی',
    prepSlowCooked: 'دَم‌کشیده',
    prepBraised: 'آب‌پز/بخارپز',
    prepPanSeared: 'تابه‌ای',

    // کارت غذا و مودال
    viewDetails: 'مشاهده جزئیات',
    demoBuy: 'خرید نمایشی',
    popularBadge: 'محبوب',
    featuredBadge: 'ویژه سرآشپز',
    ingredients: 'مواد اولیه',
    allergens: 'آلرژن‌ها',
    dietary: 'ویژگی رژیمی',
    relatedFoods: 'پیشنهادهای مرتبط',
    close: 'بسته شدن',
    fromSameCategory: 'از همین دسته',

    // آلرژن‌ها
    allergenGluten: 'گلوتن',
    allergenDairy: 'لبنیات',
    allergenEgg: 'تخم‌مرغ',
    allergenFish: 'ماهی',
    allergenShellfish: 'آبزیان پوست‌دار',
    allergenNuts: 'آجیل',
    allergenSoy: 'سویا',
    allergenSesame: 'کنجد',

    // رژیمی
    dietaryVegetarian: 'گیاهی',
    dietarySpicy: 'تند',

    // حالت خالی
    noResults: 'غذایی با این مشخصات یافت نشد.',
    noResultsHint: 'فیلترها را تغییر دهید یا عبارت دیگری جستجو کنید.',

    // درباره ما
    aboutTitle: 'درباره ما',
    aboutText:
      'این پروژه یک تجربه دیجیتال خیالی با هدف نمایش خلاقانه دنیای غذا، عکاسی خوراکی و طراحی رابط کاربری است. تمام غذاها، قیمت‌ها و تعاملات خرید صرفاً برای نمایش قابلیت‌های طراحی وب ایجاد شده‌اند.',
    aboutPoint1: 'بیش از ۱۰۰ غذای اصیل ایرانی، فست‌فود و دریایی',
    aboutPoint2: 'طراحی واکنش‌گرا و دوزبانه (فارسی RTL و انگلیسی LTR)',
    aboutPoint3: 'تصاویر قابل تعویض آسان برای کاربران مبتدی',

    // تماس
    contactTitle: 'تماس با ما',
    contactSubtitle: 'این فرم صرفاً نمایشی است و پیامی ارسال نمی‌شود.',
    formName: 'نام',
    formEmail: 'ایمیل',
    formMessage: 'پیام',
    formSubmit: 'ارسال پیام',
    formErrorName: 'لطفاً نام خود را وارد کنید.',
    formErrorEmail: 'لطفاً یک ایمیل معتبر وارد کنید.',
    formErrorMessage: 'لطفاً پیام خود را وارد کنید.',
    formSuccess: 'این فرم نمایشی است و پیامی ارسال یا ذخیره نمی‌شود. از وقت شما سپاسگزاریم!',

    // صفحه خرید نمایشی
    demoTitle: 'خرید نمایشی',
    demoMsg1: 'این سایت صرفاً یک نمونه‌کار نمایشی است.',
    demoMsg2: 'دکمه خرید واقعی نیست و هیچ سفارشی ثبت نمی‌شود.',
    backToMenu: 'بازگشت به منو',

    // فوتر
    footerDesc:
      'وب‌سایت نمایشی رستوران آتش و زعفران — از غذاهای اصیل ایرانی تا محبوب‌ترین طعم‌های جهان.',
    footerNav: 'ناوبری',
    footerCategories: 'دسته‌ها',
    footerDisclaimer: 'این یک پروژه نمونه‌کار خیالی است. تمام قیمت‌ها و دکمه‌های خرید نمایشی هستند.',
    footerRights: 'تمام حقوق محفوظ است.',
    footerDesigner: 'طراحی و توسعه با Nila',

    // عمومی
    currency: 'تومان',
    loading: 'در حال بارگذاری…',
    currencySymbol: 'تومان',
  },

  en: {
    dir: 'ltr',
    langName: 'English',
    otherLangName: 'فارسی',
    otherLang: 'fa' as Lang,

    navHome: 'Home',
    navCategories: 'Food Categories',
    navAbout: 'About',
    navContact: 'Contact',
    navMenu: 'View Menu',
    designerCreditHeader: 'Website Designed by Nila',

    heroBadge: 'Demo Portfolio',
    heroTitle1: 'This Is a Fictional Portfolio Project',
    heroTitle2: 'All prices and purchase buttons are for demonstration purposes only.',
    heroTagline: 'Flavors You Never Forget',
    heroSubtitle: 'From the aroma of Persian kebabs to the excitement of a fresh pizza. A world of flavors in one delicious menu.',
    heroCta: 'Explore the Menu',

    categoriesTitle: 'Food Categories',
    categoriesSubtitle: 'Something delicious for every taste',
    exploreCategory: 'View Foods',

    searchPlaceholder: 'Search foods…',
    filterTitle: 'Filters',
    filterCategory: 'Category',
    filterSubcategory: 'Subcategory',
    filterProtein: 'Protein type',
    filterPriceRange: 'Price range',
    filterPopular: 'Popular only',
    filterPrepStyle: 'Preparation style',
    allOption: 'All',
    minPrice: 'Min',
    maxPrice: 'Max',
    clearFilters: 'Clear filters',
    showAll: 'Show all',

    proteinMeat: 'Meat',
    proteinChicken: 'Chicken',
    proteinSeafood: 'Seafood',
    proteinVegetarian: 'Vegetarian',

    prepGrilled: 'Grilled',
    prepFried: 'Fried',
    prepBaked: 'Baked',
    prepStewed: 'Stewed',
    prepSlowCooked: 'Slow-cooked',
    prepBraised: 'Braised',
    prepPanSeared: 'Pan-seared',

    viewDetails: 'View details',
    demoBuy: 'Demo Buy',
    popularBadge: 'Popular',
    featuredBadge: "Chef's Special",
    ingredients: 'Ingredients',
    allergens: 'Allergens',
    dietary: 'Dietary',
    relatedFoods: 'You may also like',
    close: 'Close',
    fromSameCategory: 'From the same category',

    allergenGluten: 'Gluten',
    allergenDairy: 'Dairy',
    allergenEgg: 'Egg',
    allergenFish: 'Fish',
    allergenShellfish: 'Shellfish',
    allergenNuts: 'Nuts',
    allergenSoy: 'Soy',
    allergenSesame: 'Sesame',

    dietaryVegetarian: 'Vegetarian',
    dietarySpicy: 'Spicy',

    noResults: 'No foods found matching your criteria.',
    noResultsHint: 'Try adjusting your filters or searching for something else.',

    aboutTitle: 'About Us',
    aboutText:
      'This fictional project is a creative digital experience showcasing food, culinary photography, and modern interface design. All food listings, prices, and purchasing interactions are provided for demonstration purposes only.',
    aboutPoint1: 'Over 100 authentic Iranian, fast-food and seafood dishes',
    aboutPoint2: 'Responsive and bilingual design (Persian RTL & English LTR)',
    aboutPoint3: 'Easy image replacement for beginners',

    contactTitle: 'Contact Us',
    contactSubtitle: 'This form is for demonstration only and does not send any message.',
    formName: 'Name',
    formEmail: 'Email',
    formMessage: 'Message',
    formSubmit: 'Send message',
    formErrorName: 'Please enter your name.',
    formErrorEmail: 'Please enter a valid email address.',
    formErrorMessage: 'Please enter a message.',
    formSuccess: 'This is a demo form. No message was sent or stored. Thank you for your time!',

    demoTitle: 'Demo Purchase',
    demoMsg1: 'This website is a fictional portfolio project.',
    demoMsg2: 'The purchase button is for demonstration only. No real order has been placed.',
    backToMenu: 'Back to the menu',

    footerDesc:
      'Demo website for Fire & Saffron restaurant — from authentic Persian cuisine to the world’s favorite flavors.',
    footerNav: 'Navigation',
    footerCategories: 'Categories',
    footerDisclaimer: 'This is a fictional portfolio project. All prices and purchase buttons are for demonstration only.',
    footerRights: 'All rights reserved.',
    footerDesigner: 'Designed and Developed by Nila',

    currency: 'Toman',
    loading: 'Loading…',
    currencySymbol: 'Toman',
  },
} as const;

export type TranslationKey = keyof typeof TRANSLATIONS['fa'];
