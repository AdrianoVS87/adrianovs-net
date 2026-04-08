'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

interface StatItem {
  value: string;
  numericTarget: number;
  suffix: string;
  label: string;
}

const statItems: StatItem[] = [
  { value: '4+', numericTarget: 4, suffix: '+', label: 'Years SWE' },
  { value: '50+', numericTarget: 50, suffix: '+', label: 'Prison Facilities' },
  { value: '2', numericTarget: 2, suffix: '', label: 'States (SP + SC)' },
  { value: '3', numericTarget: 3, suffix: '', label: 'Sectors' },
];

function AnimatedCounter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      // easeOut: slow at the end
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      current = Math.round(target * eased);
      setCount(current);
      if (step >= steps) {
        clearInterval(timer);
        setCount(target);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span
      className="text-3xl font-bold tabular-nums"
      style={{ color: '#00ff41', fontFamily: 'var(--font-jetbrains-mono)' }}
    >
      {count}{suffix}
    </span>
  );
}

function highlight(text: string) {
  const keywords = [
    'mission-critical',
    'facial recognition',
    'Google Search',
    'Claude Code, OpenClaw',
    'Claude Code',
    'OpenClaw',
    'missão crítica',
    'reconhecimento facial',
  ];
  let result = text;
  keywords.forEach((kw) => {
    result = result.replace(
      new RegExp(kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'),
      `<span style="color:#00ff41;font-weight:600">$&</span>`
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
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-24">
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
              01.
            </span>
            <span className="text-white ml-3">About Me</span>
          </motion.h2>

          {/* Split layout: 55% text + 45% stats */}
          <div className="grid md:grid-cols-11 gap-12">

            {/* Text — 6 of 11 cols */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-6 space-y-4 leading-relaxed text-[0.94rem]"
              style={{ color: '#a1a1aa' }}
            >
              <p dangerouslySetInnerHTML={{ __html: highlight(t('about.p1')) }} />
              <p dangerouslySetInnerHTML={{ __html: highlight(t('about.p2')) }} />
              <p dangerouslySetInnerHTML={{ __html: highlight(t('about.p3')) }} />
              <p dangerouslySetInnerHTML={{ __html: highlight(t('about.p4')) }} />
              <p style={{ color: '#00ff41' }} className="font-medium">{t('about.p5')}</p>
            </motion.div>

            {/* Stats — 5 of 11 cols */}
            <motion.div
              ref={statsRef}
              variants={itemVariants}
              className="md:col-span-5 grid grid-cols-2 gap-3 content-start"
            >
              {statItems.map(({ numericTarget, suffix, label }, i) => (
                <div
                  key={i}
                  className="glass-card stat-card p-4 flex flex-col items-center text-center gap-1"
                >
                  <AnimatedCounter target={numericTarget} suffix={suffix} inView={statsInView} />
                  <span className="text-xs leading-tight" style={{ color: '#71717a' }}>
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
