import type { Lang } from '../types';
import { TRANSLATIONS, type TranslationKey } from '../i18n/translations';

// ============================================================================
//  Context مدیریت زبان — Language context for the whole app.
//  زبان پیش‌فرض فارسی است. انتخاب کاربر در localStorage ذخیره می‌شود.
// ============================================================================

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

interface LangContextValue {
  lang: Lang;
  dir: 'rtl' | 'ltr';
  t: (key: TranslationKey) => string;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextValue | null>(null);

const STORAGE_KEY = 'fs-lang';

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'fa';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'fa' || stored === 'en') return stored;
  return 'fa'; // Persian is the default language.
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const dir = TRANSLATIONS[lang].dir as 'rtl' | 'ltr';

  useEffect(() => {
    // به‌روزرسانی ویژگی‌های lang و dir روی سند HTML هنگام تغییر زبان.
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang, dir]);

  const setLang = (l: Lang) => setLangState(l);
  const toggleLang = () => setLangState((prev) => (prev === 'fa' ? 'en' : 'fa'));

  const t = (key: TranslationKey) => TRANSLATIONS[lang][key];

  return (
    <LangContext.Provider value={{ lang, dir, t, setLang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
