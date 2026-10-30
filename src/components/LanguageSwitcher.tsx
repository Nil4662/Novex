import { useLang } from '../context/LanguageContext';
import { TRANSLATIONS } from '../i18n/translations';

// ============================================================================
//  تعویض‌کننده زبان — Language switcher button.
//  با کلیک روی آن بین فارسی و انگلیسی جابه‌جا می‌شود.
// ============================================================================

export default function LanguageSwitcher() {
  const { lang, toggleLang } = useLang();
  const otherLangName = TRANSLATIONS[lang].otherLangName;

  return (
    <button
      className="lang-switch"
      onClick={toggleLang}
      aria-label={`Switch to ${otherLangName}`}
      type="button"
    >
      <span className="lang-switch__icon" aria-hidden="true">🌐</span>
      <span className="lang-switch__label">{otherLangName}</span>
    </button>
  );
}
