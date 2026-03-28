'use client';

import { useI18n } from '@/lib/i18n';

const stats = [
  { key: 'stat1', labelKey: 'stat1Label' },
  { key: 'stat2', labelKey: 'stat2Label' },
  { key: 'stat3', labelKey: 'stat3Label' },
  { key: 'stat4', labelKey: 'stat4Label' },
  { key: 'stat5', labelKey: 'stat5Label' },
];

export default function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">{t('about.title')}</h2>

        <div className="space-y-5 text-text-secondary leading-relaxed">
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
          <p>{t('about.p3')}</p>
          <p>{t('about.p4')}</p>
          <p className="text-accent">{t('about.p5')}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
          {stats.map(({ key, labelKey }) => (
            <div key={key} className="bg-bg-card border border-border rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-accent">{t(`about.${key}`)}</div>
              <div className="text-xs text-text-muted mt-1">{t(`about.${labelKey}`)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
