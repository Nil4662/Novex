/**
 * مدیریت زبان — Language provider
 * ------------------------------------------------------------------
 * زبان پیش‌فرض فارسی است. انتخاب کاربر در localStorage ذخیره می‌شود و
 * ویژگی‌های lang و dir روی تگ <html> تنظیم می‌شوند (فارسی: rtl، انگلیسی: ltr).
 */

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { Lang } from '../data/types';
import { dictionaries, type TranslationKey } from './translations';

const STORAGE_KEY = 'zagros-lang';

interface LanguageContextValue {
  lang: Lang;
  dir: 'rtl' | 'ltr';
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: (key: TranslationKey, vars?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readInitialLang(): Lang {
  if (typeof window === 'undefined') return 'fa';
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === 'en' ? 'en' : 'fa';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.title = dictionaries[lang]['meta.title'];
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);
  const toggleLang = useCallback(() => setLangState((prev) => (prev === 'fa' ? 'en' : 'fa')), []);

  const t = useCallback(
    (key: TranslationKey, vars?: Record<string, string | number>) => {
      const template = dictionaries[lang][key] ?? key;
      if (!vars) return template;
      return Object.keys(vars).reduce(
        (text, name) => text.replaceAll(`{${name}}`, String(vars[name])),
        template,
      );
    },
    [lang],
  );

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, dir: lang === 'fa' ? 'rtl' : 'ltr', setLang, toggleLang, t }),
    [lang, setLang, toggleLang, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return context;
}
