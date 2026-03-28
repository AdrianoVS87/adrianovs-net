'use client';

import { useI18n } from '@/lib/i18n';

const jobs = [
  { key: 'paipe', bullets: 3 },
  { key: 'healthchess', bullets: 3 },
  { key: 'telus', bullets: 2 },
] as const;

export default function Experience() {
  const { t } = useI18n();

  return (
    <section id="experience" className="py-24 bg-bg-secondary">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 section-heading">{t('experience.title')}</h2>

        <div className="relative border-l border-border pl-8 space-y-12">
          {jobs.map(({ key, bullets }) => {
            const tech = t(`experience.${key}.tech`);
            return (
              <div key={key} className="relative">
                <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-accent border-4 border-bg-secondary" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                  <h3 className="text-lg font-semibold">{t(`experience.${key}.company`)}</h3>
                  <span className="text-text-muted text-sm">·</span>
                  <span className="text-accent text-sm">{t(`experience.${key}.role`)}</span>
                </div>
                <p className="text-text-muted text-sm mb-3">{t(`experience.${key}.period`)}</p>
                <p className="text-text-secondary mb-3">{t(`experience.${key}.description`)}</p>
                <ul className="space-y-1.5">
                  {Array.from({ length: bullets }, (_, i) => (
                    <li key={i} className="text-text-secondary text-sm flex gap-2">
                      <span className="text-accent mt-0.5 shrink-0">▹</span>
                      <span>{t(`experience.${key}.bullet${i + 1}`)}</span>
                    </li>
                  ))}
                </ul>
                {tech && (
                  <p className="text-text-muted text-xs mt-3 font-mono">{tech}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
