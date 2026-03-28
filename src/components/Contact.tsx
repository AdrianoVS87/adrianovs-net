'use client';

import { useI18n } from '@/lib/i18n';

export default function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="py-24 bg-bg-secondary">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 section-heading">{t('contact.title')}</h2>
        <p className="text-text-secondary mb-8">{t('contact.subtitle')}</p>

        <form
          action="mailto:info@adrianovs.net"
          method="POST"
          encType="text/plain"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder={t('contact.namePlaceholder')}
            required
            className="w-full bg-bg-card border border-border rounded-lg px-4 py-3 text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
          />
          <input
            type="email"
            name="email"
            placeholder={t('contact.emailPlaceholder')}
            required
            className="w-full bg-bg-card border border-border rounded-lg px-4 py-3 text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
          />
          <textarea
            name="message"
            rows={5}
            placeholder={t('contact.messagePlaceholder')}
            required
            className="w-full bg-bg-card border border-border rounded-lg px-4 py-3 text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-accent text-bg font-medium rounded-lg hover:bg-accent-hover transition-colors"
          >
            {t('contact.send')}
          </button>
        </form>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-text-muted">
          <span>{t('contact.location')}</span>
          <span className="hidden sm:inline">·</span>
          <span>{t('contact.timezone')}</span>
          <span className="hidden sm:inline">·</span>
          <div className="flex items-center gap-4">
            <a href="https://github.com/AdrianoVS87" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/adrianovs87/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-accent transition-colors">Upwork</a>
          </div>
        </div>
      </div>
    </section>
  );
}
