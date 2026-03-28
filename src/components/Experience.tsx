'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

const jobs = [
  { key: 'paipe', label: 'PAIPE', bullets: 3 },
  { key: 'healthchess', label: 'HealthChess', bullets: 3 },
  { key: 'telus', label: 'TELUS', bullets: 2 },
] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Experience() {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState<string>('paipe');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const activeJob = jobs.find((j) => j.key === activeTab)!;
  const tech = t(`experience.${activeJob.key}.tech`);

  return (
    <section id="experience" className="py-24">
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
              02.
            </span>
            <span className="text-white ml-3">{t('experience.title')}</span>
          </motion.h2>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Tab list */}
            <motion.div
              variants={itemVariants}
              className="flex md:flex-col gap-0 border-b md:border-b-0 md:border-l border-zinc-800 overflow-x-auto md:overflow-x-visible"
              style={{ minWidth: '140px' }}
            >
              {jobs.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className="px-5 py-3 text-sm text-left whitespace-nowrap transition-all duration-200 relative"
                  style={{
                    fontFamily: 'var(--font-jetbrains-mono)',
                    color: activeTab === key ? '#00ff41' : '#71717a',
                    background: activeTab === key ? 'rgba(0,255,65,0.05)' : 'transparent',
                  }}
                >
                  {/* Active indicator */}
                  <span
                    className="absolute left-0 top-0 bottom-0 w-0.5 md:block hidden transition-all duration-200"
                    style={{
                      background: activeTab === key ? '#00ff41' : 'transparent',
                    }}
                  />
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 md:hidden transition-all duration-200"
                    style={{
                      background: activeTab === key ? '#00ff41' : 'transparent',
                    }}
                  />
                  {label}
                </button>
              ))}
            </motion.div>

            {/* Tab content */}
            <motion.div variants={itemVariants} className="flex-1 min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.25 }}
                  className="relative pl-8"
                >
                  {/* Vertical timeline line */}
                  <div
                    className="absolute left-0 top-2 bottom-0 w-px"
                    style={{
                      background: 'linear-gradient(to bottom, #00ff41, rgba(0,255,65,0.1))',
                    }}
                  />
                  {/* Glowing dot */}
                  <div
                    className="absolute left-0 top-1.5 w-2 h-2 rounded-full -translate-x-[3px]"
                    style={{
                      background: '#00ff41',
                      boxShadow: '0 0 12px rgba(0,255,65,0.8)',
                    }}
                  />

                  {/* Job header */}
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-white">
                      {t(`experience.${activeJob.key}.role`)}
                      <span style={{ color: '#00ff41' }}>
                        {' '}@ {t(`experience.${activeJob.key}.company`)}
                      </span>
                    </h3>
                    <p
                      className="text-sm mt-1"
                      style={{ color: '#71717a', fontFamily: 'var(--font-jetbrains-mono)' }}
                    >
                      {t(`experience.${activeJob.key}.period`)}
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                    {t(`experience.${activeJob.key}.description`)}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-5">
                    {Array.from({ length: activeJob.bullets }, (_, i) => (
                      <li key={i} className="text-sm flex gap-2" style={{ color: '#a1a1aa' }}>
                        <span style={{ color: '#00ff41' }} className="mt-0.5 shrink-0">▸</span>
                        <span>{t(`experience.${activeJob.key}.bullet${i + 1}`)}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  {tech && tech !== `experience.${activeJob.key}.tech` && (
                    <div className="flex flex-wrap gap-2">
                      {tech.split(',').map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded"
                          style={{
                            fontFamily: 'var(--font-jetbrains-mono)',
                            background: 'rgba(0,255,65,0.05)',
                            border: '1px solid rgba(0,255,65,0.2)',
                            color: '#00ff41',
                          }}
                        >
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
