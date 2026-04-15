'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

const items = [
  {
    key: 'bsc',
    icon: '🎓',
    badge: null,
    glowBadge: false,
  },
  {
    key: 'digitalHouse',
    icon: '🏆',
    badge: 'Top 1.7%',
    glowBadge: false,
  },
  {
    key: 'nasa',
    icon: '🚀',
    badge: '3x',
    glowBadge: false,
  },
] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Education() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" className="py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section heading */}
          <motion.h2 variants={itemVariants} className="section-heading mb-12">
            <span style={{ color: '#00ff41', fontFamily: 'var(--font-jetbrains-mono)', fontSize: '1rem' }}>
              05.
            </span>
            <span className="text-white ml-3">{t('education.title')}</span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map(({ key, icon, badge, glowBadge }) => {
              const note = t(`education.${key}.note`);
              const hasNote = note !== `education.${key}.note`;

              return (
                <motion.div
                  key={key}
                  variants={itemVariants}
                  className="glass-card p-5 flex flex-col gap-3 relative"
                >
                  {/* Badge */}
                  {badge && (
                    <span
                      className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        fontFamily: 'var(--font-jetbrains-mono)',
                        background: glowBadge ? 'rgba(0,255,65,0.15)' : 'rgba(0,255,65,0.08)',
                        border: `1px solid ${glowBadge ? 'rgba(0,255,65,0.5)' : 'rgba(0,255,65,0.2)'}`,
                        color: '#00ff41',
                        boxShadow: glowBadge ? '0 0 12px rgba(0,255,65,0.3)' : 'none',
                      }}
                    >
                      {badge}
                    </span>
                  )}

                  <span className="text-2xl">{icon}</span>

                  <div>
                    <h3 className="font-semibold text-white text-sm leading-snug pr-16">
                      {t(`education.${key}.name`)}
                    </h3>
                    <p
                      className="text-xs mt-1"
                      style={{ color: '#00ff41' }}
                    >
                      {t(`education.${key}.institution`)}
                    </p>
                    <p
                      className="text-xs mt-1"
                      style={{ color: '#71717a', fontFamily: 'var(--font-jetbrains-mono)' }}
                    >
                      {t(`education.${key}.period`)}
                    </p>
                  </div>

                  {hasNote && (
                    <p className="text-xs leading-relaxed" style={{ color: '#71717a' }}>
                      {note}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
