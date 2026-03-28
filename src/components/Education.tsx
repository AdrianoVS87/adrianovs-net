'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

const items = [
  { key: 'bsc', icon: '🎓', badge: null },
  { key: 'digitalHouse', icon: '🏆', badge: '150,000+ applicants' },
  { key: 'nasa', icon: '🚀', badge: null },
  { key: 'ipe', icon: '🌱', badge: '2026' },
  { key: 'web3', icon: '⛓️', badge: null },
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
    <section id="education" className="py-24" style={{ background: '#0a0a0a' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2 variants={itemVariants} className="section-heading mb-12">
            <span className="text-gray-500 font-mono text-lg">06.</span> {t('education.title')}
          </motion.h2>

          {/* Horizontal card layout on desktop */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map(({ key, icon, badge }) => {
              const note = t(`education.${key}.note`);
              const hasNote = note !== `education.${key}.note`;
              return (
                <motion.div
                  key={key}
                  variants={itemVariants}
                  className="glass-card p-6 flex flex-col gap-3 relative"
                >
                  {/* Badge */}
                  {badge && (
                    <span
                      className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        background: 'rgba(16,185,129,0.1)',
                        border: '1px solid rgba(16,185,129,0.3)',
                        color: '#10b981',
                      }}
                    >
                      {badge}
                    </span>
                  )}

                  <span className="text-2xl">{icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-100 text-sm leading-snug pr-8">
                      {t(`education.${key}.name`)}
                    </h3>
                    <p className="text-emerald-400 text-xs mt-1">
                      {t(`education.${key}.institution`)}
                    </p>
                    <p className="text-gray-600 text-xs font-mono mt-1">
                      {t(`education.${key}.period`)}
                    </p>
                  </div>
                  {hasNote && (
                    <p className="text-gray-500 text-xs leading-relaxed">{note}</p>
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
