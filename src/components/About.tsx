'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

const stats = [
  { key: 'stat1', labelKey: 'stat1Label', icon: '☕', target: 4, suffix: '+ yrs', color: '#10b981' },
  { key: 'stat2', labelKey: 'stat2Label', icon: '🏛️', target: 50, suffix: '+', color: '#3b82f6' },
  { key: 'stat3', labelKey: 'stat3Label', icon: '🤖', target: 4, suffix: '+ yrs', color: '#10b981' },
  { key: 'stat4', labelKey: 'stat4Label', icon: '🚀', target: 3, suffix: 'x', color: '#f59e0b' },
];

function AnimatedCounter({ target, suffix, color }: { target: number; suffix: string; color: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const step = Math.ceil(duration / target);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} style={{ color }} className="text-4xl font-bold font-mono">
      {count}{suffix}
    </span>
  );
}

function highlight(text: string) {
  const keywords = ['mission-critical', 'facial recognition', 'Google Search', 'OpenClaw', 'missão crítica', 'reconhecimento facial'];
  let result = text;
  keywords.forEach((kw) => {
    result = result.replace(
      new RegExp(kw, 'gi'),
      `<span style="color:#10b981;font-weight:600">${kw}</span>`
    );
  });
  return result;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2 variants={itemVariants} className="section-heading mb-12">
            <span className="text-gray-500 font-mono text-lg">01.</span> {t('about.title')}
          </motion.h2>

          {/* Split layout: text 60% + stats 40% */}
          <div className="grid md:grid-cols-5 gap-12">
            {/* Text — 3 of 5 cols */}
            <motion.div variants={itemVariants} className="md:col-span-3 space-y-4 text-gray-400 leading-relaxed text-[0.95rem]">
              <p dangerouslySetInnerHTML={{ __html: highlight(t('about.p1')) }} />
              <p dangerouslySetInnerHTML={{ __html: highlight(t('about.p2')) }} />
              <p dangerouslySetInnerHTML={{ __html: highlight(t('about.p3')) }} />
              <p dangerouslySetInnerHTML={{ __html: highlight(t('about.p4')) }} />
              <p className="text-emerald-400 font-medium">{t('about.p5')}</p>
            </motion.div>

            {/* Stats — 2 of 5 cols */}
            <motion.div variants={itemVariants} className="md:col-span-2 grid grid-cols-2 gap-4 content-start">
              {stats.map(({ key, labelKey, icon, target, suffix, color }) => (
                <motion.div
                  key={key}
                  variants={itemVariants}
                  className="stat-card glass-card p-5 flex flex-col items-center text-center gap-2"
                >
                  <span className="text-2xl">{icon}</span>
                  <AnimatedCounter target={target} suffix={suffix} color={color} />
                  <span className="text-xs text-gray-500 leading-tight">{t(`about.${labelKey}`)}</span>
                </motion.div>
              ))}
              {/* 150k special stat - spans full width */}
              <motion.div
                variants={itemVariants}
                className="stat-card glass-card p-5 flex flex-col items-center text-center gap-2 col-span-2"
              >
                <span className="text-2xl">🏆</span>
                <span className="text-4xl font-bold font-mono" style={{ color: '#a78bfa' }}>150k+</span>
                <span className="text-xs text-gray-500 leading-tight">{t('about.stat5Label')}</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
