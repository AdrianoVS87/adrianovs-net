'use client';

import { useI18n } from '@/lib/i18n';

const categories = [
  { key: 'coreBackend', skills: ['Java 21', 'Spring Boot', 'Quarkus', 'REST APIs', 'Microservices', 'JPA/Hibernate'] },
  { key: 'frontend', skills: ['Angular', 'React', 'TypeScript'] },
  { key: 'database', skills: ['PostgreSQL', 'MS SQL Server', 'Redis'] },
  { key: 'devops', skills: ['Docker', 'Git', 'CI/CD', 'Linux'] },
  { key: 'ai', skills: ['Claude Code', 'OpenClaw', 'Multi-agent orchestration', 'Python'] },
  { key: 'practices', skills: ['Agile/Scrum', 'TDD', 'Code Review', 'SonarQube', 'LGPD Compliance'] },
];

export default function Skills() {
  const { t } = useI18n();

  return (
    <section id="skills" className="py-24 bg-bg-secondary">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">{t('skills.title')}</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(({ key, skills }) => (
            <div key={key}>
              <h3 className="text-sm font-semibold text-accent mb-3">{t(`skills.${key}`)}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs text-text-secondary bg-bg-card border border-border rounded px-2.5 py-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
