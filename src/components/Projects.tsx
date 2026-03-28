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

function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: '#00ff41' }}>
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function BrowserMockup() {
  return (
    <div
      className="hidden md:flex flex-col rounded-xl overflow-hidden h-full"
      style={{ background: '#0d1117', border: '1px solid rgba(0,255,65,0.1)' }}
    >
      {/* Chrome bar */}
      <div
        className="px-4 py-3 flex items-center gap-2"
        style={{ background: '#161b22', borderBottom: '1px solid rgba(0,255,65,0.08)' }}
      >
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <div
          className="ml-3 flex-1 px-3 py-1 rounded text-xs"
          style={{
            background: '#0d1117',
            color: '#6e7681',
            fontFamily: 'var(--font-jetbrains-mono)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          hookwatch-one.vercel.app
        </div>
      </div>

      {/* Content area */}
      <div className="p-4 font-mono text-xs space-y-2 flex-1">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-[#00ff41] animate-pulse" />
          <span style={{ color: '#00ff41' }}>hookwatch</span>
          <span style={{ color: '#6e7681' }}>— observability platform</span>
        </div>
        <div className="space-y-1.5">
          <p><span style={{ color: '#00ff41' }}>$</span> <span style={{ color: '#c9d1d9' }}>POST /api/traces</span></p>
          <p style={{ color: '#6e7681' }}>  {'{'}  agent: &quot;claude-sonnet&quot;, tokens: 1842  {'}'}</p>
          <p><span style={{ color: '#58a6ff' }}>✓</span> <span style={{ color: '#8b949e' }}>Trace ingested · 3ms</span></p>
          <p><span style={{ color: '#00ff41' }}>$</span> <span style={{ color: '#c9d1d9' }}>GET /api/dashboard</span></p>
          <p style={{ color: '#6e7681' }}>  agents: 12 active · cost: $0.024</p>
          <p><span style={{ color: '#d29922' }}>◆</span> <span style={{ color: '#8b949e' }}>WebSocket connected</span></p>
        </div>
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

export default function Projects() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24">
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
              03.
            </span>
            <span className="text-white ml-3">{t('projects.title')}</span>
          </motion.h2>

          {/* Featured project */}
          {featured && (
            <motion.div variants={itemVariants} className="mb-10">
              <div
                className="rounded-xl p-6 md:p-8 relative overflow-hidden"
                style={{
                  background: 'rgba(17,17,17,0.8)',
                  border: '1px solid rgba(0,255,65,0.12)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Left: browser mockup */}
                  <BrowserMockup />

                  {/* Right: project info */}
                  <div>
                    <p
                      className="text-xs mb-2 tracking-widest"
                      style={{ color: '#00ff41', fontFamily: 'var(--font-jetbrains-mono)' }}
                    >
                      Featured Project
                    </p>
                    <h3
                      className="text-2xl font-bold mb-1"
                      style={{ fontFamily: 'var(--font-jetbrains-mono)', color: '#e4e4e7' }}
                    >
                      {t(`projects.${featured.key}.name`)}
                    </h3>
                    <p className="text-sm mb-4" style={{ color: '#00ff41' }}>
                      {t(`projects.${featured.key}.subtitle`)}
                    </p>

                    <div
                      className="p-4 rounded-lg mb-4 text-sm leading-relaxed"
                      style={{
                        background: 'rgba(0,0,0,0.4)',
                        border: '1px solid rgba(0,255,65,0.06)',
                        color: '#a1a1aa',
                      }}
                    >
                      {t(`projects.${featured.key}.description`)}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {t(`projects.${featured.key}.tech`).split('·').map((tag) => (
                        <span
                          key={tag}
                          className="skill-tag text-xs px-2.5 py-1 rounded"
                          style={{
                            fontFamily: 'var(--font-jetbrains-mono)',
                            background: 'rgba(0,255,65,0.05)',
                            border: '1px solid rgba(0,255,65,0.15)',
                            color: '#a1a1aa',
                          }}
                        >
                          {tag.trim()}
                        </span>
                      ))}
                    </div>

                    <p
                      className="text-xs mb-5"
                      style={{ color: '#00ff41', opacity: 0.7, fontFamily: 'var(--font-jetbrains-mono)' }}
                    >
                      {t(`projects.${featured.key}.status`)}
                    </p>

                    <div className="flex gap-5">
                      <a
                        href={featured.github!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium transition-colors duration-200 hover:text-[#00ff41]"
                        style={{ color: '#a1a1aa' }}
                      >
                        <GitHubIcon />
                        {t('projects.viewGithub')}
                      </a>
                      <a
                        href={featured.live!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium transition-colors duration-200 hover:text-[#00ff41]"
                        style={{ color: '#a1a1aa' }}
                      >
                        <ExternalLinkIcon />
                        {t('projects.viewLive')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Other projects grid */}
          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            {others.map(({ key, github, live }) => {
              const tech = t(`projects.${key}.tech`);
              const hasTech = tech && tech !== `projects.${key}.tech`;
              return (
                <motion.div key={key} variants={itemVariants}>
                  <div
                    className="glass-card p-6 h-full flex flex-col group relative"
                    style={{ minHeight: '200px' }}
                  >
                    {/* Top: folder icon + links */}
                    <div className="flex items-start justify-between mb-4">
                      <FolderIcon />
                      <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        {github && (
                          <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors duration-200 hover:text-[#00ff41]"
                            style={{ color: '#71717a' }}
                          >
                            <GitHubIcon size={17} />
                          </a>
                        )}
                        {live && (
                          <a
                            href={live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors duration-200 hover:text-[#00ff41]"
                            style={{ color: '#71717a' }}
                          >
                            <ExternalLinkIcon size={15} />
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 className="font-semibold text-white mb-1 text-sm">
                      {t(`projects.${key}.name`)}
                    </h3>
                    <p className="text-xs mb-2" style={{ color: '#00ff41' }}>
                      {t(`projects.${key}.subtitle`)}
                    </p>
                    <p className="text-sm leading-relaxed flex-1" style={{ color: '#71717a' }}>
                      {t(`projects.${key}.description`)}
                    </p>

                    {hasTech && (
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {tech.split(/[·,]/).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5 rounded"
                            style={{
                              fontFamily: 'var(--font-jetbrains-mono)',
                              background: 'rgba(0,255,65,0.04)',
                              border: '1px solid rgba(0,255,65,0.1)',
                              color: '#71717a',
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

          {/* View full archive */}
          <motion.div variants={itemVariants} className="text-center">
            <a
              href="https://github.com/AdrianoVS87"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-colors duration-200 hover:opacity-70"
              style={{ color: '#00ff41', fontFamily: 'var(--font-jetbrains-mono)' }}
            >
              View Full Project Archive →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
