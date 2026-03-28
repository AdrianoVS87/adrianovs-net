'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

const jobs = [
  { key: 'paipe', bullets: 3 },
  { key: 'healthchess', bullets: 3 },
  { key: 'telus', bullets: 2 },
] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Experience() {
  const { t } = useI18n();
  const [expanded, setExpanded] = useState<string | null>('paipe');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24" style={{ background: '#0a0a0a' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2 variants={itemVariants} className="section-heading mb-16">
            <span className="text-gray-500 font-mono text-lg">02.</span> {t('experience.title')}
          </motion.h2>

          {/* Timeline */}
          <div className="relative">
            {/* Glowing vertical line */}
            <div
              className="absolute left-4 top-0 bottom-0 w-px"
              style={{
                background: 'linear-gradient(to bottom, #10b981, rgba(16,185,129,0.2), transparent)',
              }}
            />

            <div className="pl-14 space-y-6">
              {jobs.map(({ key, bullets }) => {
                const tech = t(`experience.${key}.tech`);
                const isExpanded = expanded === key;

                return (
                  <motion.div key={key} variants={itemVariants}>
                    {/* Timeline dot */}
                    <div
                      className="absolute left-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        background: isExpanded ? '#10b981' : '#141414',
                        border: `2px solid ${isExpanded ? '#10b981' : '#333'}`,
                        boxShadow: isExpanded ? '0 0 16px rgba(16,185,129,0.5)' : 'none',
                        marginTop: '0.75rem',
                      }}
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: isExpanded ? '#0a0a0a' : '#10b981' }}
                      />
                    </div>

                    {/* Card */}
                    <button
                      className="w-full text-left glass-card p-6 transition-all duration-300 cursor-pointer"
                      onClick={() => setExpanded(isExpanded ? null : key)}
                      aria-expanded={isExpanded}
                    >
                      {/* Header — always visible */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h3 className="text-base font-semibold text-gray-100">
                            {t(`experience.${key}.company`)}
                          </h3>
                          <p className="text-emerald-400 text-sm font-medium">
                            {t(`experience.${key}.role`)}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-gray-500 font-mono">
                            {t(`experience.${key}.period`)}
                          </span>
                          <span
                            className="text-gray-500 transition-transform duration-300"
                            style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M6 9l6 6 6-6" />
                            </svg>
                          </span>
                        </div>
                      </div>

                      {/* Expandable content */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: 'easeInOut' }}
                            style={{ overflow: 'hidden' }}
                          >
                            <div className="mt-4 space-y-3">
                              <p className="text-gray-400 text-sm leading-relaxed">
                                {t(`experience.${key}.description`)}
                              </p>
                              <ul className="space-y-2">
                                {Array.from({ length: bullets }, (_, i) => (
                                  <li key={i} className="text-gray-400 text-sm flex gap-2">
                                    <span className="text-emerald-400 mt-0.5 shrink-0">▹</span>
                                    <span>{t(`experience.${key}.bullet${i + 1}`)}</span>
                                  </li>
                                ))}
                              </ul>
                              {tech && (
                                <div className="flex flex-wrap gap-2 pt-2">
                                  {tech.split(',').map((tag) => (
                                    <span
                                      key={tag}
                                      className="text-xs font-mono px-2.5 py-1 rounded-full"
                                      style={{
                                        background: 'rgba(16,185,129,0.08)',
                                        border: '1px solid rgba(16,185,129,0.2)',
                                        color: '#6ee7b7',
                                      }}
                                    >
                                      {tag.trim()}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
