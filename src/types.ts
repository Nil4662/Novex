// ============================================================================
//  تعریف نوع‌های داده پروژه — Food data type definitions.
// ============================================================================

export type Lang = 'fa' | 'en';
export type CategoryId = 'iranian' | 'fast-food' | 'seafood';
export type Protein = 'meat' | 'chicken' | 'seafood' | 'vegetarian';

export interface Subcategory {
  id: string;
  nameFa: string;
  nameEn: string;
}

export interface Category {
  id: CategoryId;
  nameFa: string;
  nameEn: string;
  descFa: string;
  descEn: string;
  image: string; // e.g. 'categories/category-iranian.jpg'
  subcategories: Subcategory[];
}

export interface Food {
  id: string;
  nameFa: string;
  nameEn: string;
  descFa: string;
  descEn: string;
  category: CategoryId;
  subcategory: string; // subcategory id
  priceToman: number; // fictional price in Iranian tomans
  priceUsd: number; // fictional price in US dollars
  image: string; // filename, e.g. 'iranian/ghormeh-sabzi.jpg'
  ingredientsFa: string[];
  ingredientsEn: string[];
  allergens?: string[]; // e.g. ['gluten', 'dairy']
  dietary?: string[]; // e.g. ['vegetarian', 'spicy']
  protein: Protein;
  prepStyle?: string; // preparation style id, e.g. 'grilled'
  popular?: boolean;
  featured?: boolean;
}
