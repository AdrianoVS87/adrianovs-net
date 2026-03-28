'use client';

import { useI18n } from '@/lib/i18n';

const items = ['bsc', 'digitalHouse', 'nasa', 'ipe', 'web3'] as const;

export default function Education() {
  const { t } = useI18n();

  return (
    <section id="education" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">{t('education.title')}</h2>

        <div className="space-y-6">
          {items.map((key) => {
            const note = t(`education.${key}.note`);
            const hasNote = note !== `education.${key}.note`;
            return (
              <div key={key} className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                <div>
                  <h3 className="font-semibold">{t(`education.${key}.name`)}</h3>
                  <p className="text-text-secondary text-sm">
                    {t(`education.${key}.institution`)} · {t(`education.${key}.period`)}
                  </p>
                  {hasNote && (
                    <p className="text-text-muted text-sm mt-1">{note}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
