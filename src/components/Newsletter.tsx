/**
 * خبرنامه — Newsletter (demo only)
 * ------------------------------------------------------------------
 * فرم هیچ داده‌ای ارسال یا ذخیره نمی‌کند؛ فقط اعتبارسنجی و پیام نمایشی.
 */

import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageProvider';
import { IconArrow } from './Icons';
import { Reveal } from './Reveal';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function Newsletter() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'ok' | 'error'>('idle');

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    setStatus(EMAIL_PATTERN.test(email.trim()) ? 'ok' : 'error');
  };

  return (
    <section className="section section--newsletter" aria-labelledby="newsletter-title">
      <div className="container">
        <Reveal>
          <div className="newsletter">
            <span className="newsletter__deco" aria-hidden="true" />
            <div className="newsletter__text">
              <p className="eyebrow">{t('newsletter.eyebrow')}</p>
              <h2 id="newsletter-title">{t('newsletter.title')}</h2>
              <p className="newsletter__desc">{t('newsletter.desc')}</p>
            </div>

            <form className="newsletter__form" onSubmit={submit} noValidate>
              <label className="sr-only" htmlFor="newsletter-email">
                {t('newsletter.placeholder')}
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setStatus('idle');
                }}
                placeholder={t('newsletter.placeholder')}
                aria-invalid={status === 'error'}
              />
              <button type="submit" className="btn btn--primary">
                {t('newsletter.button')}
                <IconArrow size={18} />
              </button>
              <p className="newsletter__privacy">{t('newsletter.privacy')}</p>
              {status !== 'idle' && (
                <p className={`newsletter__msg ${status === 'ok' ? 'is-ok' : 'is-error'}`} role="status">
                  {status === 'ok' ? t('newsletter.success') : t('newsletter.error')}
                </p>
              )}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
