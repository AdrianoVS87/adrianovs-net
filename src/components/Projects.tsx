'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

const projects = [
  { key: 'hookwatch', github: 'https://github.com/AdrianoVS87/hookwatch', live: 'https://hookwatch-one.vercel.app', featured: true },
  { key: 'safeOutdoor', github: null, live: 'https://safe-outdoor-app.vercel.app/', featured: false },
  { key: 'ipen', github: null, live: null, featured: false },
  { key: 'cba', github: null, live: null, featured: false },
] as const;

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
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

export default function Projects() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2 variants={itemVariants} className="section-heading mb-12">
            <span className="text-gray-500 font-mono text-lg">03.</span> {t('projects.title')}
          </motion.h2>

          {/* Featured project — hookwatch */}
          {featured && (
            <motion.div variants={itemVariants} className="project-card mb-8">
              <div
                className="glass-card p-8 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(16,185,129,0.06) 0%, rgba(59,130,246,0.04) 100%)',
                }}
              >
                {/* Featured badge */}
                <div
                  className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{
                    background: 'rgba(16,185,129,0.15)',
                    border: '1px solid rgba(16,185,129,0.3)',
                    color: '#10b981',
                  }}
                >
                  <StarIcon />
                  Featured Project
                </div>

                {/* Browser mockup bar */}
                <div
                  className="mb-6 px-4 py-2 rounded-t-lg flex items-center gap-2"
                  style={{ background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <div className="ml-3 flex-1 text-xs text-gray-600 font-mono">hookwatch-one.vercel.app</div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3
                      className="text-2xl font-bold font-mono mb-1"
                      style={{ color: '#10b981' }}
                    >
                      {t(`projects.${featured.key}.name`)}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{t(`projects.${featured.key}.subtitle`)}</p>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {t(`projects.${featured.key}.description`)}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {t(`projects.${featured.key}.tech`).split('·').map((tag) => (
                        <span
                          key={tag}
                          className="skill-tag text-xs font-mono px-2.5 py-1 rounded-full"
                          style={{
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: '#9ca3af',
                          }}
                        >
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                    <p className="text-emerald-400/70 text-xs mb-4">
                      {t(`projects.${featured.key}.status`)}
                    </p>
                    <div className="flex gap-4">
                      <a
                        href={featured.github!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors text-sm font-medium"
                      >
                        <GitHubIcon />
                        {t('projects.viewGithub')}
                      </a>
                      <a
                        href={featured.live!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors text-sm font-medium"
                      >
                        <ExternalLinkIcon />
                        {t('projects.viewLive')}
                      </a>
                    </div>
                  </div>

                  {/* Visual placeholder — terminal/console mock */}
                  <div
                    className="hidden md:flex flex-col rounded-xl overflow-hidden"
                    style={{ background: '#0d1117', border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <div
                      className="px-4 py-2 flex items-center gap-2 text-xs font-mono text-gray-600"
                      style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      terminal
                    </div>
                    <div className="p-4 font-mono text-xs space-y-1 flex-1">
                      <p><span className="text-emerald-400">$</span> <span className="text-gray-300">curl -X POST /api/traces</span></p>
                      <p className="text-gray-500">  &#123; &quot;agent&quot;: &quot;claude-sonnet&quot;, &quot;tokens&quot;: 1842 &#125;</p>
                      <p><span className="text-blue-400">✓</span> <span className="text-gray-400">Trace ingested in 3ms</span></p>
                      <p><span className="text-emerald-400">$</span> <span className="text-gray-300">GET /api/dashboard</span></p>
                      <p className="text-gray-500">  agents: 12 active · cost: $0.024</p>
                      <p><span className="text-yellow-400">◆</span> <span className="text-gray-400">Real-time websocket connected</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Other projects grid */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {others.map(({ key, github, live }) => {
              const tech = t(`projects.${key}.tech`);
              return (
                <motion.div key={key} variants={itemVariants} className="project-card">
                  <div className="glass-card p-6 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-100">
                          {t(`projects.${key}.name`)}
                        </h3>
                        <p className="text-emerald-400 text-xs mt-0.5">
                          {t(`projects.${key}.subtitle`)}
                        </p>
                      </div>
                      <div className="flex gap-3">
                        {github && (
                          <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-emerald-400 transition-colors">
                            <GitHubIcon />
                          </a>
                        )}
                        {live && (
                          <a href={live} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-emerald-400 transition-colors">
                            <ExternalLinkIcon />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed flex-1">
                      {t(`projects.${key}.description`)}
                    </p>
                    {tech && tech !== `projects.${key}.tech` && (
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {tech.split(/[·,]/).map((tag) => (
                          <span
                            key={tag}
                            className="skill-tag text-xs font-mono px-2 py-0.5 rounded"
                            style={{
                              background: 'rgba(255,255,255,0.04)',
                              border: '1px solid rgba(255,255,255,0.08)',
                              color: '#6b7280',
                            }}
                          >
                            {tag.trim()}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* View more */}
          <motion.div variants={itemVariants} className="text-center">
            <a
              href="https://github.com/AdrianoVS87"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium text-sm"
            >
              View More on GitHub →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
