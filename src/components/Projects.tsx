'use client';

import { useI18n } from '@/lib/i18n';

const projects = [
  {
    key: 'hookwatch',
    github: 'https://github.com/AdrianoVS87/hookwatch',
    live: 'https://hookwatch-one.vercel.app',
  },
  {
    key: 'safeOutdoor',
    github: null,
    live: 'https://safe-outdoor-app.vercel.app/',
  },
  {
    key: 'ipen',
    github: null,
    live: null,
  },
  {
    key: 'cba',
    github: null,
    live: null,
  },
] as const;

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  );
}

export default function Projects() {
  const { t } = useI18n();

  return (
    <section id="projects" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">{t('projects.title')}</h2>

        <div className="grid gap-6">
          {projects.map(({ key, github, live }) => {
            const tech = t(`projects.${key}.tech`);
            const status = t(`projects.${key}.status`);
            return (
              <div
                key={key}
                className="bg-bg-card border border-border rounded-lg p-6 hover:border-border-hover transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">
                      {t(`projects.${key}.name`)}
                    </h3>
                    <p className="text-accent text-sm">{t(`projects.${key}.subtitle`)}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    {github && (
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-accent transition-colors text-sm flex items-center gap-1"
                      >
                        {t('projects.viewGithub')} <ExternalLinkIcon />
                      </a>
                    )}
                    {live && (
                      <a
                        href={live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-accent transition-colors text-sm flex items-center gap-1"
                      >
                        {t('projects.viewLive')} <ExternalLinkIcon />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-text-secondary mt-3 text-sm">
                  {t(`projects.${key}.description`)}
                </p>
                {tech && tech !== `projects.${key}.tech` && (
                  <p className="text-text-muted text-xs mt-3 font-mono">{tech}</p>
                )}
                {status && status !== `projects.${key}.status` && (
                  <p className="text-accent/70 text-xs mt-2">{status}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
