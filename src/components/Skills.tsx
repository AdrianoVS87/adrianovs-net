'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

const categories = [
  { key: 'coreBackend', emoji: '⚡', skills: ['Java 21', 'Spring Boot', 'Quarkus', 'REST APIs', 'Microservices', 'JPA/Hibernate'] },
  { key: 'frontend', emoji: '🎨', skills: ['Angular', 'React', 'TypeScript', 'Next.js', 'Tailwind CSS'] },
  { key: 'database', emoji: '🗄', skills: ['PostgreSQL', 'MS SQL Server', 'Redis'] },
  { key: 'devops', emoji: '🛠️', skills: ['Docker', 'Git', 'CI/CD', 'Linux', 'nginx'] },
  { key: 'ai', emoji: '🤖', skills: ['Claude Code', 'OpenClaw', 'Multi-agent orchestration', 'Python', 'Framer Motion'] },
  { key: 'practices', emoji: '📋', skills: ['Agile/Scrum', 'TDD', 'Code Review', 'SonarQube', 'LGPD Compliance'] },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Skills() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2 variants={itemVariants} className="section-heading mb-12">
            <span className="text-gray-500 font-mono text-lg">05.</span> {t('skills.title')}
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map(({ key, emoji, skills }) => (
              <motion.div
                key={key}
                variants={itemVariants}
                className="glass-card p-6 transition-all duration-200"
              >
                <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-200 mb-4">
                  <span className="text-xl">{emoji}</span>
                  {t(`skills.${key}`)}
                </h3>
                {/* Horizontal scroll on mobile */}
                <div className="flex flex-wrap gap-2 overflow-x-auto">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-tag text-xs font-mono px-2.5 py-1 rounded-full whitespace-nowrap"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: '#9ca3af',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
