# راهنمای تصاویر پروژهٔ ZAGROS

این فایل دقیقاً توضیح می‌دهد هر تصویر کجاست، چه نامی باید داشته باشد و چطور آن را
جایگزین کنید. **برای هیچ تغییری لازم نیست کد را باز کنید.**

---

## ۱. قاعدهٔ کلی (سه قدم)

1. فایل تصویر شما باید **JPG** باشد (پسوند `.jpg` یا `.jpeg` — توصیه: `.jpg`).
2. فایل را در **پوشهٔ درست** داخل `public/images` کپی کنید.
3. نام فایل را **دقیقاً** برابر نامی بگذارید که در همین راهنما آمده است
   (حروف کوچک انگلیسی، خط تیره به‌جای فاصله).

سپس صفحه را رفرش کنید. همین.

> تا وقتی فایل یک تصویر وجود نداشته باشد، سایت به‌جای آیکون شکسته یک **قاب طراحی‌شده**
> با آیکون غذا و **نام فایل مورد انتظار** نشان می‌دهد. به این ترتیب همیشه می‌دانید
> چه فایلی باید اضافه کنید.

---

## ۲. ساختار پوشه‌ها

```
public/
  images/
    hero/          بنر اصلی هر دسته + تصویر کاراکترها
    categories/    تصویر چهار کارت دسته‌بندی
    iranian/       غذاهای ایرانی
    fast-food/     پیتزا، برگر، ساندویچ، مرغ سوخاری
    seafood/       ماهی و غذای دریایی
    sushi/         سوشی و غذاهای ژاپنی
    drinks/        نوشیدنی‌ها
    promotions/    بنرهای تبلیغاتی و تصاویر بخش‌ها
    gallery/       گالری پایین صفحه
```

---

## ۳. مشخصات پیشنهادی تصاویر

| نوع تصویر | نسبت پیشنهادی | اندازهٔ پیشنهادی | حجم هدف |
| --- | --- | --- | --- |
| بنر اصلی (hero) | افقی، حدود ۴:۳ | ۱۶۰۰ × ۱۲۰۰ | ۱۵۰ تا ۲۵۰ کیلوبایت |
| کارت دسته‌بندی | ۴:۳ | ۸۰۰ × ۶۰۰ | ۶۰ تا ۱۲۰ کیلوبایت |
| کارت غذا | ۴:۳ | ۸۰۰ × ۶۰۰ | ۴۰ تا ۱۲۰ کیلوبایت |
| بنر تبلیغاتی | عمودی یا مربع | ۱۲۰۰ × ۱۲۰۰ | ۸۰ تا ۱۸۰ کیلوبایت |
| گالری | مربع (۱:۱) | ۶۰۰ × ۶۰۰ | ۴۰ تا ۹۰ کیلوبایت |
| کاراکترها (PNG) | افقی | ۸۰۰ × ۵۰۰ | بدون پس‌زمینه |

- کیفیت JPEG حدود ۷۵ تا ۸۵ مناسب است.
- قبل از کم‌کردن حجم، **اندازهٔ تصویر** را کم کنید، نه کیفیت را.
- از تصویری استفاده کنید که **واقعاً همان غذا** باشد؛ عکس بی‌ربط بدتر از قاب خالی است.

---

## ۴. تصاویر بنر اصلی (Hero)

| نام فایل | کجا استفاده می‌شود |
| --- | --- |
| `images/hero/hero-iranian.jpg` | بنر دستهٔ «غذاهای اصیل ایرانی» |
| `images/hero/hero-fast-food.jpg` | بنر دستهٔ «فست فود» |
| `images/hero/hero-seafood.jpg` | بنر دستهٔ «غذاهای دریایی» |
| `images/hero/hero-drinks.jpg` | بنر دستهٔ «نوشیدنی‌ها» |
| `images/hero/mascots-turtles.png` | دو کاراکتر لاک‌پشت (PNG با پس‌زمینهٔ شفاف) |

**دربارهٔ کاراکترهای لاک‌پشت:** در نسخهٔ فعلی هیچ تصویر کاراکتری وجود ندارد، بنابراین
یک قاب خالیِ برچسب‌دار در گوشهٔ بنر نمایش داده می‌شود. اگر تصویر اصلی کاراکترها را
دارید، آن را با نام `mascots-turtles.png` در پوشهٔ `public/images/hero` بگذارید تا
خودکار جایگزین شود. این دو کاراکتر باید اورجینال باشند (کپی کاراکترهای شناخته‌شده نباشند).

---

## ۵. تصاویر چهار دسته‌بندی

```
images/categories/category-iranian.jpg
images/categories/category-fast-food.jpg
images/categories/category-seafood.jpg
images/categories/category-drinks.jpg
```

---

## ۶. تصاویر بخش‌های ثابت صفحهٔ اصلی

```
images/promotions/about-signature-dish.jpg     ← تصویر بخش «دربارهٔ ما»
images/promotions/mid-promo-quesadilla.jpg     ← بنر میانی قرمز
images/promotions/craft-chef-plate.jpg         ← بخش «آشپزخانه»
images/promotions/promo-fried-chicken.jpg      ← کارت تبلیغاتی مرغ سوخاری
images/promotions/promo-beef-burger.jpg        ← کارت تبلیغاتی برگر
images/promotions/promo-cheese-pizza.jpg       ← کارت تبلیغاتی پیتزا
images/promotions/combo-burger-meal.jpg        ← کمبوی خانواده (کارت بزرگ)
images/promotions/combo-persian-kebab.jpg      ← کمبوی کباب ایرانی
images/promotions/combo-seafood.jpg            ← سینی غذای دریایی
```

---

## ۷. تصاویر گالری

```
images/gallery/gallery-01.jpg     ← بال مرغ تند
images/gallery/gallery-02.jpg     ← برگر و سیب‌زمینی
images/gallery/gallery-03.jpg     ← مرغ سوخاری
images/gallery/gallery-04.jpg     ← بوریتو
images/gallery/gallery-05.jpg     ← پیتزا
images/gallery/gallery-06.jpg     ← نوشیدنی خنک
```

---

## ۸. تصاویر غذاهای ایرانی (۵۵ فایل)

پوشه: `public/images/iranian/`

```
iranian/ghormeh-sabzi.jpg
iranian/gheymeh.jpg
iranian/gheymeh-bademjan.jpg
iranian/fesenjan.jpg
iranian/celery-stew.jpg
iranian/okra-stew.jpg
iranian/spinach-plum-stew.jpg
iranian/zucchini-stew.jpg
iranian/meatball-stew.jpg
iranian/vavishka.jpg
iranian/loobia-polo.jpg
iranian/adas-polo.jpg
iranian/baghali-polo.jpg
iranian/zereshk-polo.jpg
iranian/shirin-polo.jpg
iranian/morasa-polo.jpg
iranian/albaloo-polo.jpg
iranian/sabzi-polo-fish.jpg
iranian/shirazi-cabbage-rice.jpg
iranian/dampokhtak.jpg
iranian/istanbuli-polo.jpg
iranian/reshteh-polo.jpg
iranian/tahchin-chicken.jpg
iranian/baghali-ghatogh.jpg
iranian/mushroom-stew.jpg
iranian/koobideh-kebab.jpg
iranian/barg-kebab.jpg
iranian/soltani-kebab.jpg
iranian/vaziri-kebab.jpg
iranian/joojeh-kebab.jpg
iranian/saffron-chicken-kebab.jpg
iranian/sour-chicken-kebab.jpg
iranian/chenjeh-kebab.jpg
iranian/bakhtiari-kebab.jpg
iranian/shishlik-kebab.jpg
iranian/loghmeh-kebab.jpg
iranian/northern-sour-kebab.jpg
iranian/kabab-tabei.jpg
iranian/bonab-kebab.jpg
iranian/abgoosht.jpg
iranian/dizi.jpg
iranian/kaleh-joosh.jpg
iranian/kashk-bademjan.jpg
iranian/mirza-ghasemi.jpg
iranian/tabrizi-koofteh.jpg
iranian/kotlet.jpg
iranian/shami-kebab.jpg
iranian/kuku-sabzi.jpg
iranian/potato-kuku.jpg
iranian/ashkeneh.jpg
iranian/yatimcheh.jpg
iranian/stuffed-grape-leaves.jpg
iranian/stuffed-peppers.jpg
iranian/haleem.jpg
iranian/ash-reshteh.jpg
```

---

## ۹. تصاویر فست‌فود (۴۸ فایل)

پوشه: `public/images/fast-food/`

```
fast-food/margherita-pizza.jpg
fast-food/neapolitan-pizza.jpg
fast-food/pepperoni-pizza.jpg
fast-food/four-cheese-pizza.jpg
fast-food/capricciosa-pizza.jpg
fast-food/diavola-pizza.jpg
fast-food/calzone.jpg
fast-food/hawaiian-pizza.jpg
fast-food/american-pizza.jpg
fast-food/chicago-deep-dish.jpg
fast-food/new-york-pizza.jpg
fast-food/bbq-chicken-pizza.jpg
fast-food/vegetable-pizza.jpg
fast-food/beef-mushroom-pizza.jpg
fast-food/steak-pizza.jpg
fast-food/chicken-alfredo-pizza.jpg
fast-food/supreme-pizza.jpg
fast-food/classic-burger.jpg
fast-food/cheeseburger.jpg
fast-food/double-cheeseburger.jpg
fast-food/smash-burger.jpg
fast-food/mushroom-swiss-burger.jpg
fast-food/bbq-burger.jpg
fast-food/spicy-burger.jpg
fast-food/crispy-chicken-burger.jpg
fast-food/grilled-chicken-burger.jpg
fast-food/vegetarian-burger.jpg
fast-food/chefs-special-burger.jpg
fast-food/chicken-shawarma.jpg
fast-food/beef-shawarma.jpg
fast-food/mixed-shawarma.jpg
fast-food/falafel.jpg
fast-food/steak-sandwich.jpg
fast-food/grilled-chicken-sandwich.jpg
fast-food/club-sandwich.jpg
fast-food/hot-dog.jpg
fast-food/crispy-chicken-sandwich.jpg
fast-food/smoked-beef-sandwich.jpg
fast-food/fried-chicken.jpg
fast-food/spicy-wings.jpg
fast-food/chicken-nuggets.jpg
fast-food/french-fries.jpg
fast-food/loaded-cheese-fries.jpg
fast-food/onion-rings.jpg
fast-food/chicken-strips.jpg
fast-food/caesar-salad.jpg
fast-food/greek-salad.jpg
fast-food/garden-salad.jpg
```

---

## ۱۰. تصاویر غذای دریایی (۱۷ فایل)

پوشه: `public/images/seafood/`

```
seafood/grilled-salmon.jpg
seafood/rainbow-trout.jpg
seafood/fried-fish.jpg
seafood/grilled-fish.jpg
seafood/southern-fried-fish.jpg
seafood/crispy-fried-shrimp.jpg
seafood/grilled-shrimp.jpg
seafood/battered-shrimp.jpg
seafood/shrimp-rice.jpg
seafood/ghalieh-mahi.jpg
seafood/ghalieh-meygoo.jpg
seafood/shrimp-pasta.jpg
seafood/seafood-pasta.jpg
seafood/seafood-risotto.jpg
seafood/seafood-soup.jpg
seafood/calamari.jpg
seafood/cooked-mussels.jpg
```

---

## ۱۱. تصاویر سوشی (۱۵ فایل)

پوشه: `public/images/sushi/`

```
sushi/salmon-nigiri.jpg
sushi/tuna-nigiri.jpg
sushi/california-roll.jpg
sushi/philadelphia-roll.jpg
sushi/dragon-roll.jpg
sushi/spicy-salmon-roll.jpg
sushi/spicy-tuna-roll.jpg
sushi/shrimp-tempura-roll.jpg
sushi/maki-roll.jpg
sushi/futomaki.jpg
sushi/salmon-sashimi.jpg
sushi/tuna-sashimi.jpg
sushi/vegetable-tempura.jpg
sushi/salmon-poke-bowl.jpg
sushi/shrimp-poke-bowl.jpg
```

---

## ۱۲. تصاویر نوشیدنی‌ها (۴۶ فایل)

پوشه: `public/images/drinks/`

```
drinks/abali-doogh.jpg
drinks/carbonated-doogh.jpg
drinks/local-doogh.jpg
drinks/mint-doogh.jpg
drinks/shallot-doogh.jpg
drinks/plain-doogh.jpg
drinks/saffron-sharbat.jpg
drinks/orange-blossom-sharbat.jpg
drinks/bidmeshk-sharbat.jpg
drinks/sekanjabin.jpg
drinks/khakshir.jpg
drinks/basil-seed-drink.jpg
drinks/coca-cola.jpg
drinks/coca-cola-zero.jpg
drinks/coca-cola-light.jpg
drinks/fanta-orange.jpg
drinks/fanta-lemon.jpg
drinks/sprite.jpg
drinks/pepsi.jpg
drinks/pepsi-zero.jpg
drinks/7up.jpg
drinks/mirinda.jpg
drinks/mountain-dew.jpg
drinks/schweppes.jpg
drinks/fresh-orange-juice.jpg
drinks/apple-juice.jpg
drinks/pomegranate-juice.jpg
drinks/watermelon-juice.jpg
drinks/mango-juice.jpg
drinks/pineapple-juice.jpg
drinks/lemonade.jpg
drinks/mixed-fruit-juice.jpg
drinks/carrot-juice.jpg
drinks/strawberry-smoothie.jpg
drinks/banana-milkshake.jpg
drinks/chocolate-milkshake.jpg
drinks/espresso.jpg
drinks/americano.jpg
drinks/cappuccino.jpg
drinks/latte.jpg
drinks/iced-coffee.jpg
drinks/hot-chocolate.jpg
drinks/black-tea.jpg
drinks/herbal-tea.jpg
drinks/bottled-water.jpg
drinks/sparkling-water.jpg
```

**جمع کل: ۱۸۱ تصویر غذا و نوشیدنی + ۲۳ تصویر بخش‌ها = ۲۰۴ فایل**

---

## ۱۳. اگر فایل تصویر نباشد چه می‌شود؟

- هیچ آیکون شکسته‌ای نمایش داده نمی‌شود.
- به‌جای تصویر، یک قاب رنگی هماهنگ با دستهٔ غذا و نام فایل مورد انتظار دیده می‌شود.
- به‌محض اضافه‌کردن فایل با نام درست، تصویر خودکار جای قاب را می‌گیرد
  (بدون تغییر کد و بدون بستن سرور).

---

## ۱۴. افزودن تصویر برای غذای جدید

اگر غذایی با `id` برابر `my-new-dish` در فایل `src/data/iranian.ts` اضافه کنید،
تصویر آن باید در این مسیر باشد:

```
public/images/iranian/my-new-dish.jpg
```

- برای فست‌فود: `public/images/fast-food/<id>.jpg`
- برای غذای دریایی: `public/images/seafood/<id>.jpg`
- برای سوشی: `public/images/sushi/<id>.jpg`
- برای نوشیدنی: `public/images/drinks/<id>.jpg`

اگر مسیرهای تصویر را می‌خواهید ببینید، همه در یک فایل متمرکز هستند:
`src/config/images.ts`

---

## ۱۵. نکات کیفیت

1. یک عکس تکراری برای چند غذای مختلف استفاده نکنید.
2. برای هر غذا همان غذا را نشان دهید؛ «قرمه سبزی» باید قرمه سبزی باشد.
3. نورپردازی سخت و سایه‌های عمیق، حس عکاسی رستوران حرفه‌ای می‌دهد.
4. پس‌زمینهٔ شلوغ یا لوگوهای تجاری روی بشقاب را حذف کنید.
5. تصویر افقی برای کارت‌ها و تصویر عمودی برای بنرهای تبلیغاتی بهترین نتیجه را می‌دهد.

---

**طراحی و توسعه وب‌سایت توسط Nila**
