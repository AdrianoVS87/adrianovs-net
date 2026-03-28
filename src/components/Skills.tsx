'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

const terminalLines = [
  { cmd: '$ cat backend.txt', out: 'Java 21 · Spring Boot · Quarkus · REST APIs · Microservices · JPA/Hibernate' },
  { cmd: '$ cat frontend.txt', out: 'Angular · React · TypeScript · Next.js · Tailwind CSS' },
  { cmd: '$ cat devops.txt', out: 'Docker · Git · CI/CD · Linux · Redis · PostgreSQL · nginx' },
  { cmd: '$ cat agentic.txt', out: 'Claude Code · OpenClaw · Multi-agent orchestration · Python' },
];

function Terminal({ inView }: { inView: boolean }) {
  const [visibleLines, setVisibleLines] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    let i = 0;
    const showNext = () => {
      if (i >= terminalLines.length * 2) return;
      setVisibleLines(i + 1);
      i++;
      setTimeout(showNext, 120);
    };
    setTimeout(showNext, 300);
  }, [inView]);

  return (
    <div
      className="rounded-xl overflow-hidden w-full max-w-2xl mx-auto"
      style={{
        background: '#0d1117',
        border: '1px solid rgba(0,255,65,0.15)',
        fontFamily: 'var(--font-jetbrains-mono)',
      }}
    >
      {/* Terminal title bar */}
      <div
        className="px-4 py-3 flex items-center gap-2"
        style={{ background: '#161b22', borderBottom: '1px solid rgba(0,255,65,0.08)' }}
      >
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-4 text-xs" style={{ color: '#6e7681' }}>
          adriano@a1x:~/skills
        </span>
      </div>

      {/* Terminal body */}
      <div className="p-5 text-sm space-y-3">
        {terminalLines.map((line, i) => {
          const cmdIndex = i * 2;
          const outIndex = i * 2 + 1;
          return (
            <div key={i}>
              {visibleLines > cmdIndex && (
                <p style={{ color: '#00ff41' }}>{line.cmd}</p>
              )}
              {visibleLines > outIndex && (
                <p className="ml-2" style={{ color: '#8b949e' }}>{line.out}</p>
              )}
            </div>
          );
        })}

        {/* Blinking cursor */}
        <p style={{ color: '#00ff41' }}>
          <span>$ </span>
          <span className="animate-blink">▋</span>
        </p>
      </div>
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="py-24">
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
              04.
            </span>
            <span className="text-white ml-3">{t('skills.title')}</span>
          </motion.h2>

          <motion.div variants={itemVariants}>
            <Terminal inView={inView} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
