/**
 * تغییر زبان — Language switch
 */

import { useLanguage } from '../i18n/LanguageProvider';

export function LangSwitch({ compact = false }: { compact?: boolean }) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className={`lang-switch ${compact ? 'lang-switch--compact' : ''}`} role="group" aria-label={t('nav.language')}>
      <button
        type="button"
        className={lang === 'fa' ? 'is-active' : ''}
        onClick={() => setLang('fa')}
        aria-pressed={lang === 'fa'}
      >
        FA
      </button>
      <span className="lang-switch__sep" aria-hidden="true" />
      <button
        type="button"
        className={lang === 'en' ? 'is-active' : ''}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
    </div>
  );
}
