'use client';

import { useI18n } from '@/lib/i18n';

const stats = [
  { key: 'stat1', labelKey: 'stat1Label', accent: 'blue' },
  { key: 'stat2', labelKey: 'stat2Label', accent: 'purple' },
  { key: 'stat3', labelKey: 'stat3Label', accent: 'blue' },
  { key: 'stat4', labelKey: 'stat4Label', accent: 'purple' },
  { key: 'stat5', labelKey: 'stat5Label', accent: 'blue' },
];

export default function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 section-heading">{t('about.title')}</h2>

        {/* Two-column text layout with border-left accent */}
        <div className="grid md:grid-cols-2 gap-6 text-text-secondary leading-relaxed">
          <div
            className="space-y-4 pl-4 border-l-2 border-transparent hover:border-accent transition-colors duration-300"
          >
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
          </div>
          <div
            className="space-y-4 pl-4 border-l-2 border-transparent hover:border-accent-purple transition-colors duration-300"
          >
            <p>{t('about.p3')}</p>
            <p>{t('about.p4')}</p>
          </div>
        </div>

        <p className="text-accent mt-6 font-medium">{t('about.p5')}</p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
          {stats.map(({ key, labelKey, accent }) => (
            <div
              key={key}
              className="stat-card bg-bg-card border border-border rounded-2xl p-5 text-center backdrop-blur-sm"
            >
              <div
                className="text-4xl font-bold leading-tight"
                style={{ color: accent === 'purple' ? 'var(--color-accent-purple)' : 'var(--color-accent)' }}
              >
                {t(`about.${key}`)}
              </div>
              <div className="text-xs text-text-muted mt-2">{t(`about.${labelKey}`)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
