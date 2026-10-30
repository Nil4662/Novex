/**
 * صفحهٔ اصلی — Home page
 * ------------------------------------------------------------------
 * ترتیب بخش‌ها بر اساس مرجع طراحی: بنر اصلی، دسته‌ها، فهرست دسته،
 * معرفی، بنرهای تبلیغاتی، محبوب‌ترین‌ها، بنر میانی، آشپزخانه، مفهوم،
 * کمبو، خبرنامه، گالری و تماس.
 */

import { useState } from 'react';
import { AboutSection } from '../components/AboutSection';
import { CategoryStrip } from '../components/CategoryStrip';
import { CollectionSection } from '../components/CollectionSection';
import { ComboBanners } from '../components/ComboBanners';
import { ConceptSection } from '../components/ConceptSection';
import { ContactSection } from '../components/ContactSection';
import { CraftSection } from '../components/CraftSection';
import { FoodDetailsModal } from '../components/FoodDetailsModal';
import { Gallery } from '../components/Gallery';
import { Hero } from '../components/Hero';
import { MidPromo } from '../components/MidPromo';
import { Newsletter } from '../components/Newsletter';
import { PopularDishes } from '../components/PopularDishes';
import { PromoTrio } from '../components/PromoTrio';
import type { CategoryId, MenuItem } from '../data/types';

export function HomePage() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('iranian');
  const [selected, setSelected] = useState<MenuItem | null>(null);

  return (
    <>
      <Hero active={activeCategory} onSelect={setActiveCategory} />
      <CategoryStrip active={activeCategory} onSelect={setActiveCategory} />
      <CollectionSection active={activeCategory} onOpen={setSelected} />
      <AboutSection />
      <PromoTrio />
      <PopularDishes onOpen={setSelected} />
      <MidPromo />
      <CraftSection />
      <ConceptSection />
      <ComboBanners />
      <Newsletter />
      <Gallery />
      <ContactSection />

      <FoodDetailsModal item={selected} onClose={() => setSelected(null)} onSelect={setSelected} />
    </>
  );
}
