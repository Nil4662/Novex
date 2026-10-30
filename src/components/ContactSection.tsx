/**
 * بخش تماس — Contact (demo form)
 * ------------------------------------------------------------------
 * فیلدها اعتبارسنجی می‌شوند و بعد پیام نمایشی نشان داده می‌شود؛ هیچ درخواستی
 * به سرور ارسال نمی‌شود.
 */

import { useState } from 'react';
import { brand } from '../config/brand';
import { useLanguage } from '../i18n/LanguageProvider';
import { IconArrow, IconClock, IconMail, IconPhone, IconPin } from './Icons';
import { Reveal } from './Reveal';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

interface FormState {
  name: string;
  email: string;
  message: string;
}

export function ContactSection() {
  const { lang, t } = useLanguage();
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sent, setSent] = useState(false);

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    const nextErrors: Partial<FormState> = {};
    if (form.name.trim().length < 2) nextErrors.name = t('contact.errName');
    if (!EMAIL_PATTERN.test(form.email.trim())) nextErrors.email = t('contact.errEmail');
    if (form.message.trim().length < 10) nextErrors.message = t('contact.errMessage');

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    }
  };

  return (
    <section className="section section--contact" id="contact" aria-labelledby="contact-title">
      <div className="container contact">
        <Reveal className="contact__aside">
          <p className="eyebrow">{t('contact.eyebrow')}</p>
          <h2 id="contact-title">{t('contact.title')}</h2>
          <p className="contact__desc">{t('contact.desc')}</p>

          <ul className="contact__info">
            <li>
              <IconPin size={18} />
              <span>
                <small>{t('footer.address')}</small>
                {brand.demo.address[lang]}
              </span>
            </li>
            <li>
              <IconPhone size={18} />
              <span>
                <small>{t('footer.support')}</small>
                <span dir="ltr">{brand.demo.phone}</span>
              </span>
            </li>
            <li>
              <IconClock size={18} />
              <span>
                <small>{t('footer.hours')}</small>
                {brand.demo.hours[lang]}
              </span>
            </li>
            <li>
              <IconMail size={18} />
              <span>
                <small>{t('footer.support')}</small>
                <span dir="ltr">{brand.demo.email}</span>
              </span>
            </li>
          </ul>
        </Reveal>

        <Reveal className="contact__form-wrap" delay={100}>
          <form className="contact__form" onSubmit={submit} noValidate>
            <div className="field">
              <label htmlFor="contact-name">{t('contact.name')}</label>
              <input
                id="contact-name"
                type="text"
                value={form.name}
                onChange={(event) => update('name', event.target.value)}
                placeholder={t('contact.namePlaceholder')}
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name && <p className="field__error">{errors.name}</p>}
            </div>

            <div className="field">
              <label htmlFor="contact-email">{t('contact.email')}</label>
              <input
                id="contact-email"
                type="email"
                dir="ltr"
                value={form.email}
                onChange={(event) => update('email', event.target.value)}
                placeholder={t('contact.emailPlaceholder')}
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && <p className="field__error">{errors.email}</p>}
            </div>

            <div className="field">
              <label htmlFor="contact-message">{t('contact.message')}</label>
              <textarea
                id="contact-message"
                rows={5}
                value={form.message}
                onChange={(event) => update('message', event.target.value)}
                placeholder={t('contact.messagePlaceholder')}
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && <p className="field__error">{errors.message}</p>}
            </div>

            <button type="submit" className="btn btn--primary btn--block">
              {t('contact.send')}
              <IconArrow size={18} />
            </button>

            {sent && (
              <p className="contact__success" role="status">
                {t('contact.success')}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
