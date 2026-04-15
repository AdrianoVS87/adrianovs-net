'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type Locale = 'en' | 'pt';

type NestedStrings = { [key: string]: string | NestedStrings };

const translations: Record<Locale, NestedStrings> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      blog: 'Blog',
      skills: 'Skills',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      title: 'Adriano Viera dos Santos',
      subtitle: 'I build AI-powered systems that solve real business problems.',
      tagline: 'I build AI-powered systems that solve real business problems.',
      current: 'Senior Full-stack Developer. I design and operate AI agent systems that automate business operations — compliance monitoring, intelligent triage, and end-to-end deployment pipelines — reducing client turnaround from days to under 2 hours.',
      viewProjects: 'View Projects',
      contactMe: 'Contact Me',
      downloadCV: 'Download CV',
    },
    about: {
      title: 'About',
      p1: "I'm a Senior Full-stack Developer with 4+ years building mission-critical Java systems for government clients in Brazil, and 4+ years contributing to AI/ML training programs for Google and Meta.",
      p2: "Currently, I design and operate AI-powered workflow automation systems in production. My agent orchestration platform (OpenClaw) runs 24/7, handling real business operations — compliance monitoring, email triage, code generation, and automated deployments — with human approval as the safety gate. This reduced client turnaround from days to under 2 hours.",
      p3: "On the government side, I built a vendor-agnostic facial recognition system serving 50+ correctional facilities in Santa Catarina, and maintain HR systems for São Paulo's Public Defender's Office.",
      p4: "I also acted as technical lead for a UK telecoms client, migrating their platform from WordPress to Next.js 14 + Sanity CMS + Vercel + Cloudflare. Based in Florianópolis, Brazil (UTC-3). Available for remote contract work.",
      p5: 'Available for remote contract work. English (Professional (B2+)) · Portuguese (Native) · UTC-3.',
      stat1: '4+ years',
      stat1Label: 'Software Engineering',
      stat2: '50+',
      stat2Label: 'Prison Facilities (iPEN)',
      stat3: '2',
      stat3Label: 'States Served (SP + SC)',
      stat4: '3',
      stat4Label: 'Sectors (Gov · Health · Tech)',
    },
    experience: {
      title: 'Experience',
      paipe: {
        company: 'PAIPE Software',
        role: 'Full Stack Software Engineer',
        period: 'Apr 2025 – Present',
        description: 'Government contractor serving CIASC (Santa Catarina State IT Agency) and DPESP (São Paulo State Public Defender\'s Office).',
        bullet1: 'Solely architected vendor-agnostic facial recognition microservice for iPEN (statewide prison management system) in Quarkus 3.33 + Angular 19.2',
        bullet2: 'Integrates Intelbras and Hikvision facial recognition terminals + multi-face detection cameras (multiple faces per frame) — vendor-agnostic, zero code changes',
        bullet3: 'Reduced required prison officers per checkpoint from 3 to 1, eliminating ~66% manual verification overhead',
        bullet4: 'Currently building the HR system for DPESP (São Paulo State Public Defender\'s Office) — Spring Boot + Java',
        tech: 'Java 21, Quarkus 3.33, Spring Boot, Angular 19.2, PostgreSQL, MS SQL Server, Docker, Redis',
      },
      phoneMast: {
        company: 'Phone Mast Advice Ltd (UK)',
        role: 'Technical Lead',
        period: '2025 – Present',
        description: 'Technical lead for UK telecoms client. Led WordPress to Next.js 14 migration. Own full stack: architecture, Sanity CMS integration, Vercel deployment, Cloudflare CDN, Google Ads API. Ongoing maintenance and AI-powered content automation via OpenClaw.',
        bullet1: 'Led complete platform migration from WordPress to Next.js 14 + Sanity CMS',
        bullet2: 'Own architecture, SSR/ISR strategy, DNS migration, CI/CD pipeline, and Google Ads API integration',
        bullet3: 'Ongoing maintenance with AI-powered content automation',
        tech: 'Next.js 14, Sanity CMS, TypeScript, Vercel, Cloudflare',
      },
      healthchess: {
        company: 'HealthChess Tecnologia',
        role: 'Java Backend Developer',
        period: 'Feb 2022 – Apr 2025',
        description: 'Healthcare platform serving dozens of clinics and anesthesiology cooperatives across Brazil.',
        bullet1: 'Built 20+ financial and clinical reports (JasperReports + PostgreSQL views joining 10+ tables)',
        bullet2: 'Legacy codebase modernization with SonarQube',
        bullet3: 'LGPD data compliance for sensitive patient records',
        tech: 'Java, Spring Boot, JSF, PrimeFaces, JPA/Hibernate, PostgreSQL, JasperReports',
      },
      telus: {
        company: 'TELUS International (Lionbridge AI)',
        role: 'Search Engine Evaluator & AI Training Specialist',
        period: 'Oct 2017 – Dec 2021',
        description: 'Evaluated search quality, annotated data, and assessed content relevance for Google Search and Meta/Facebook recommendation systems.',
        bullet1: 'Data annotation, semantic analysis, NLP pipeline evaluation',
        bullet2: '100% English-only remote environment',
        tech: '',
      },
    },
    projects: {
      title: 'Projects',
      openclaw: {
        name: 'OpenClaw',
        subtitle: 'AI Workflow Automation System (Production)',
        description: 'Production system running 24/7 that automates real business operations. Receives client requests via email, triages by priority, generates code changes, runs CI/CD pipeline, deploys to production — all with human approval. Role-based agent orchestration with specialized workers, multi-model routing, and full audit trail.',
        tech: 'Python · Claude Code · Codex CLI · Gmail API · Git · Vercel · PostgreSQL · Redis',
        status: 'Running in production — manages real client operations daily',
      },
      nexus: {
        name: 'Nexus',
        subtitle: 'Event-Driven E-Commerce Microservices',
        description: 'Production-grade microservices platform with Saga orchestration, CQRS, dead letter queues, JWT auth, and real-time order tracking via WebSocket. 7 Maven modules, 100+ tests, Swagger UI, Grafana dashboards.',
        tech: 'Java 21 · Spring Boot 3.4 · Kafka · PostgreSQL · Redis · React 18 · Docker',
        status: '53 commits, 100+ tests, full CI/CD',
      },
      HookWatch: {
        name: 'HookWatch',
        subtitle: 'AI Agent Observability Platform',
        description: 'Real-time observability for AI agents. Ingests execution traces via webhook, visualizes as interactive graphs, tracks tokens, costs, latency.',
        tech: 'Spring Boot 3.4 · Java 21 · React 18 · TypeScript · PostgreSQL 16 · Redis 7 · Docker',
        status: 'Active development, 100+ commits',
      },
      phoneMast: {
        name: 'Phone Mast Advice',
        subtitle: 'UK Telecoms Platform — Technical Lead',
        description: 'Led complete platform migration from WordPress to modern stack for a UK telecoms surveying firm. Owned architecture, SSR/ISR strategy, DNS migration, CI/CD pipeline, and Google Ads API integration. In production under ongoing maintenance.',
        tech: 'Next.js 14 · Sanity CMS · TypeScript · Vercel · Cloudflare · Google Ads API',
        status: 'In production — ongoing maintenance',
      },
      safeOutdoor: {
        name: 'Safe Outdoor App',
        subtitle: 'NASA Space Apps Challenge 2024',
        description: 'Satellite data visualization app built nearly solo. Team Orn Space at Founder Haus Florianópolis.',
        tech: '',
        status: '',
      },
      ipen: {
        name: 'iPEN — Facial Recognition & CBA',
        subtitle: 'Government — Santa Catarina Criminal Police',
        description: 'Statewide biometric security system for Santa Catarina\'s prison management (iPEN). Integrates Intelbras and Hikvision facial recognition terminals and multi-face detection cameras (multiple faces per frame). Vendor-agnostic architecture — any biometric hardware, zero code changes. Built as a Quarkus microservice for CIASC (Santa Catarina State IT Agency) via PAIPE Software (government contractor).',
        tech: 'Java 21 · Quarkus 3.33 · Angular 19.2 · PostgreSQL · MS SQL Server · Docker',
        status: '',
      },
      viewGithub: 'View on GitHub',
      viewLive: 'Live Demo',
    },
    skills: {
      title: 'Skills',
      coreBackend: 'Core Backend',
      frontend: 'Frontend',
      database: 'Database',
      devops: 'DevOps',
      ai: 'AI & Agentic',
      practices: 'Practices',
    },
    education: {
      title: 'Education',
      bsc: {
        name: 'BSc Information Systems',
        institution: 'Universidade Estácio de Sá',
        period: '2018–2023',
      },
      digitalHouse: {
        name: 'Certified Tech Developer',
        institution: 'Digital House Brasil',
        period: '2021–2023',
        note: 'Selected from 150,000+ applicants, 2,500 scholarships. Co-created by Mercado Libre (NYSE: MELI) and Globant (NYSE: GLOB).',
      },
      nasa: {
        name: '3x NASA Space Apps Challenge',
        institution: 'Founder Haus, Florianópolis',
        period: '2022, 2023, 2024',
      },
    },
    contact: {
      title: 'Contact',
      subtitle: "Let's work together. I'm available for remote contract work.",
      namePlaceholder: 'Name',
      emailPlaceholder: 'Email',
      messagePlaceholder: 'Message',
      send: 'Send Message',
      location: 'Florianópolis, SC, Brazil',
      timezone: 'GMT-3',
    },
    blog: {
      title: 'Blog',
      backHome: '← Back to Home',
      readMore: 'Read more →',
    },
    footer: {
      built: 'Built with Next.js, TypeScript & Tailwind CSS',
    },
  },
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      experience: 'Experiência',
      projects: 'Projetos',
      blog: 'Blog',
      skills: 'Habilidades',
      education: 'Educação',
      contact: 'Contato',
    },
    hero: {
      title: 'Adriano Viera dos Santos',
      subtitle: 'Construo sistemas com IA que resolvem problemas reais de negócio.',
      tagline: 'Construo sistemas com IA que resolvem problemas reais de negócio.',
      current: 'Desenvolvedor Full-stack Sênior. Projeto e opero sistemas de agentes IA que automatizam operações de negócio — monitoramento de conformidade, triagem inteligente e pipelines de deploy de ponta a ponta — reduzindo o tempo de resposta ao cliente de dias para menos de 2 horas.',
      viewProjects: 'Ver Projetos',
      contactMe: 'Fale Comigo',
      downloadCV: 'Baixar CV',
    },
    about: {
      title: 'Sobre',
      p1: 'Sou Desenvolvedor Full-stack Sênior com 4+ anos construindo sistemas Java de missão crítica para clientes governamentais no Brasil, e 4+ anos contribuindo para programas de treinamento de IA/ML para Google e Meta.',
      p2: 'Atualmente, projeto e opero sistemas de automação de workflow com IA em produção. Minha plataforma de orquestração de agentes (OpenClaw) roda 24/7, gerenciando operações reais de negócio — monitoramento de conformidade, triagem de e-mails, geração de código e deploys automatizados — com aprovação humana como barreira de segurança. Isso reduziu o tempo de resposta ao cliente de dias para menos de 2 horas.',
      p3: 'No lado governamental, construí um sistema de reconhecimento facial vendor-agnóstico atendendo 50+ unidades prisionais em Santa Catarina, e mantenho sistemas de RH para a Defensoria Pública do Estado de São Paulo.',
      p4: 'Também atuei como líder técnico para um cliente de telecomunicações do Reino Unido, migrando a plataforma de WordPress para Next.js 14 + Sanity CMS + Vercel + Cloudflare. Baseado em Florianópolis, Brasil (UTC-3). Disponível para trabalho remoto por contrato.',
      p5: 'Disponível para trabalho remoto por contrato. Inglês (Profissional (B2+)) · Português (Nativo) · UTC-3.',
      stat1: '4+ anos',
      stat1Label: 'Software Engineering',
      stat2: '50+',
      stat2Label: 'Unidades Prisionais (iPEN)',
      stat3: '2',
      stat3Label: 'Estados Atendidos (SP + SC)',
      stat4: '3',
      stat4Label: 'Setores (Gov · Saúde · Tech)',
    },
    experience: {
      title: 'Experiência',
      paipe: {
        company: 'PAIPE Software',
        role: 'Engenheiro de Software Full Stack',
        period: 'Abr 2025 – Presente',
        description: 'Contratada governamental atendendo CIASC (Agência de TI do Estado de Santa Catarina) e DPESP (Defensoria Pública do Estado de São Paulo).',
        bullet1: 'Arquitetei sozinho microsserviço de reconhecimento facial vendor-agnóstico para o iPEN (sistema de gestão prisional estadual) em Quarkus 3.33 + Angular 19.2',
        bullet2: 'Arquitetura device-agnóstica: Intelbras, Hikvision, qualquer fornecedor biométrico — zero alterações no código',
        bullet3: 'Reduziu oficiais prisionais necessários por checkpoint de 3 para 1, eliminando ~66% da verificação manual',
        bullet4: 'Atualmente desenvolvendo sistema de RH da DPESP (Defensoria Pública do Estado de São Paulo) — Spring Boot + Java',
        tech: 'Java 21, Quarkus 3.33, Spring Boot, Angular 19.2, PostgreSQL, MS SQL Server, Docker, Redis',
      },
      phoneMast: {
        company: 'Phone Mast Advice Ltd (UK)',
        role: 'Líder Técnico',
        period: '2025 – Presente',
        description: 'Líder técnico para cliente de telecomunicações do Reino Unido. Liderou migração de WordPress para Next.js 14. Responsável por toda a stack: arquitetura, integração Sanity CMS, deploy Vercel, CDN Cloudflare, Google Ads API. Manutenção contínua e automação de conteúdo via OpenClaw.',
        bullet1: 'Liderou migração completa da plataforma de WordPress para Next.js 14 + Sanity CMS',
        bullet2: 'Responsável pela arquitetura, estratégia SSR/ISR, migração DNS, pipeline CI/CD e integração Google Ads API',
        bullet3: 'Manutenção contínua com automação de conteúdo via IA',
        tech: 'Next.js 14, Sanity CMS, TypeScript, Vercel, Cloudflare',
      },
      healthchess: {
        company: 'HealthChess Tecnologia',
        role: 'Desenvolvedor Java Backend',
        period: 'Fev 2022 – Abr 2025',
        description: 'Plataforma de saúde atendendo dezenas de clínicas e cooperativas de anestesiologia em todo o Brasil.',
        bullet1: 'Construiu 20+ relatórios financeiros e clínicos (JasperReports + views PostgreSQL unindo 10+ tabelas)',
        bullet2: 'Modernização de código legado com SonarQube',
        bullet3: 'Conformidade LGPD para registros sensíveis de pacientes',
        tech: 'Java, Spring Boot, JSF, PrimeFaces, JPA/Hibernate, PostgreSQL, JasperReports',
      },
      telus: {
        company: 'TELUS International (Lionbridge AI)',
        role: 'Avaliador de Busca & Especialista em Treinamento de IA',
        period: 'Out 2017 – Dez 2021',
        description: 'Avaliou qualidade de busca, anotou dados e analisou relevância de conteúdo para Google Search e sistemas de recomendação da Meta/Facebook.',
        bullet1: 'Anotação de dados, análise semântica, avaliação de pipeline de NLP',
        bullet2: 'Ambiente remoto 100% em inglês',
        tech: '',
      },
    },
    projects: {
      title: 'Projetos',
      openclaw: {
        name: 'OpenClaw',
        subtitle: 'Sistema de Automação de Workflow com IA (Produção)',
        description: 'Sistema em produção rodando 24/7 que automatiza operações reais de negócio. Recebe requisições de clientes via e-mail, faz triagem por prioridade, gera alterações de código, executa pipeline CI/CD, faz deploy em produção — tudo com aprovação humana. Orquestração de agentes baseada em papéis com workers especializados, roteamento multi-modelo e trilha de auditoria completa.',
        tech: 'Python · Claude Code · Codex CLI · Gmail API · Git · Vercel · PostgreSQL · Redis',
        status: 'Rodando em produção — gerencia operações reais de clientes diariamente',
      },
      nexus: {
        name: 'Nexus',
        subtitle: 'Microsserviços E-Commerce Event-Driven',
        description: 'Plataforma de microsserviços production-grade com orquestração Saga, CQRS, dead letter queues, autenticação JWT e rastreamento de pedidos em tempo real via WebSocket. 7 módulos Maven, 100+ testes, Swagger UI, dashboards Grafana.',
        tech: 'Java 21 · Spring Boot 3.4 · Kafka · PostgreSQL · Redis · React 18 · Docker',
        status: '53 commits, 100+ testes, CI/CD completo',
      },
      HookWatch: {
        name: 'HookWatch',
        subtitle: 'Plataforma de Observabilidade de Agentes IA',
        description: 'Observabilidade em tempo real para agentes IA. Ingere traces de execução via webhook, visualiza como grafos interativos, rastreia tokens, custos, latência.',
        tech: 'Spring Boot 3.4 · Java 21 · React 18 · TypeScript · PostgreSQL 16 · Redis 7 · Docker',
        status: 'Desenvolvimento ativo, 100+ commits',
      },
      phoneMast: {
        name: 'Phone Mast Advice',
        subtitle: 'Plataforma de Telecomunicações UK — Líder Técnico',
        description: 'Liderou migração completa da plataforma de WordPress para stack moderno para empresa de telecomunicações do Reino Unido. Responsável pela arquitetura, estratégia SSR/ISR, migração DNS, pipeline CI/CD e integração com Google Ads API. Em produção com manutenção contínua.',
        tech: 'Next.js 14 · Sanity CMS · TypeScript · Vercel · Cloudflare · Google Ads API',
        status: 'Em produção — manutenção contínua',
      },
      safeOutdoor: {
        name: 'Safe Outdoor App',
        subtitle: 'NASA Space Apps Challenge 2024',
        description: 'App de visualização de dados de satélite construído quase solo. Equipe Orn Space no Founder Haus Florianópolis.',
        tech: '',
        status: '',
      },
      ipen: {
        name: 'iPEN — Reconhecimento Facial & CBA',
        subtitle: 'Governo — Polícia Penal de Santa Catarina',
        description: 'Sistema de segurança biométrica estadual para gestão prisional de Santa Catarina (iPEN). Integra terminais de reconhecimento facial e câmeras com detecção multi-face (múltiplas faces por frame) da Intelbras e Hikvision. Arquitetura vendor-agnostic — qualquer hardware biométrico, zero alteração de código. Microserviço Quarkus desenvolvido para o CIASC (Centro de Informática e Automação de SC) via PAIPE Software (empresa terceirizada vencedora da licitação).',
        tech: 'Java 21 · Quarkus 3.33 · Angular 19.2 · PostgreSQL · MS SQL Server · Docker',
        status: '',
      },
      viewGithub: 'Ver no GitHub',
      viewLive: 'Demo ao Vivo',
    },
    skills: {
      title: 'Habilidades',
      coreBackend: 'Backend Principal',
      frontend: 'Frontend',
      database: 'Banco de Dados',
      devops: 'DevOps',
      ai: 'IA & Agêntico',
      practices: 'Práticas',
    },
    education: {
      title: 'Educação',
      bsc: {
        name: 'Bacharelado em Sistemas de Informação',
        institution: 'Universidade Estácio de Sá',
        period: '2018–2023',
      },
      digitalHouse: {
        name: 'Certified Tech Developer',
        institution: 'Digital House Brasil',
        period: '2021–2023',
        note: 'Selecionado entre 150.000+ candidatos, 2.500 bolsas. Co-criado por Mercado Libre (NYSE: MELI) e Globant (NYSE: GLOB).',
      },
      nasa: {
        name: '3x NASA Space Apps Challenge',
        institution: 'Founder Haus, Florianópolis',
        period: '2022, 2023, 2024',
      },
    },
    contact: {
      title: 'Contato',
      subtitle: 'Vamos trabalhar juntos. Estou disponível para trabalho remoto por contrato.',
      namePlaceholder: 'Nome',
      emailPlaceholder: 'Email',
      messagePlaceholder: 'Mensagem',
      send: 'Enviar Mensagem',
      location: 'Florianópolis, SC, Brasil',
      timezone: 'GMT-3',
    },
    blog: {
      title: 'Blog',
      backHome: '← Voltar ao Início',
      readMore: 'Leia mais →',
    },
    footer: {
      built: 'Construído com Next.js, TypeScript & Tailwind CSS',
    },
  },
};

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

function getNestedValue(obj: NestedStrings, path: string): string {
  const keys = path.split('.');
  let current: string | NestedStrings = obj;
  for (const key of keys) {
    if (typeof current === 'string') return path;
    current = current[key];
    if (current === undefined) return path;
  }
  return typeof current === 'string' ? current : path;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');

  const t = useCallback(
    (key: string) => getNestedValue(translations[locale], key),
    [locale]
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useI18n must be used within I18nProvider');
  return context;
}
