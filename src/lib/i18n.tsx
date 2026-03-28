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
      contact: 'Contact',
    },
    hero: {
      title: 'Adriano Viera dos Santos',
      subtitle: 'Senior Java Engineer | Agentic Full Stack Developer',
      tagline: 'I build mission-critical systems where failure is not an option.',
      current: 'Currently architecting biometric security infrastructure for Brazil\'s statewide prison system.',
      viewProjects: 'View Projects',
      contactMe: 'Contact Me',
      downloadCV: 'Download CV',
    },
    about: {
      title: 'About',
      p1: "I'm a Senior Java Backend Engineer with 4+ years building scalable, mission-critical systems for government and healthcare sectors in Brazil. My current project: a statewide facial recognition microservice for Santa Catarina's prison management system (iPEN), processing biometric data across 50+ correctional facilities.",
      p2: "Before writing production code, I spent 4+ years training AI/ML models for Google Search and Meta's recommendation algorithms at TELUS International. I don't just use AI tools — I understand how these systems learn, fail, and improve.",
      p3: "Now I'm an agentic full stack developer. I ship production code using Claude Code, OpenClaw, and multi-agent orchestration daily. I built hookwatch — an open-source AI agent observability platform — autonomously via AI agents on a 24/7 VPS, reviewing and merging every PR myself.",
      p4: "Based in Florianópolis — Brazil's #1 tech hub and global digital nomad destination. Active member of Founder Haus and the local startup ecosystem alongside international founders from 30+ countries. 3x NASA Space Apps Challenge participant.",
      p5: 'Available for remote contract work. English (Fluent) · Portuguese (Native) · GMT-3.',
      stat1: '4+ years',
      stat1Label: 'Java / Spring Boot',
      stat2: '50+',
      stat2Label: 'Correctional Facilities',
      stat3: '4+ years',
      stat3Label: 'AI/ML Training (Google, Meta)',
      stat4: '3x',
      stat4Label: 'NASA Space Apps',
      stat5: '150,000+',
      stat5Label: 'Applicants → Selected (Digital House)',
    },
    experience: {
      title: 'Experience',
      paipe: {
        company: 'PAIPE Software',
        role: 'Full Stack Software Engineer',
        period: 'Apr 2025 – Present',
        description: 'Government contractor serving CIASC (Santa Catarina State IT Agency) and DPESP (São Paulo State Public Defender\'s Office).',
        bullet1: 'Solely architected vendor-agnostic facial recognition microservice for iPEN (statewide prison management system) in Quarkus 3 + Angular',
        bullet2: 'Device-agnostic architecture: Intelbras, Hikvision, any biometric vendor — zero code changes',
        bullet3: 'Reduced required prison officers per checkpoint from 3 to 1, eliminating ~66% manual verification overhead',
        tech: 'Java 21, Quarkus 3, Spring Boot, Angular, PostgreSQL, MS SQL Server, Docker, Redis',
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
        description: 'Trained and evaluated AI/ML systems for Google Search and Meta/Facebook recommendation algorithms.',
        bullet1: 'Data annotation, semantic analysis, NLP pipeline evaluation',
        bullet2: '100% English-only remote environment',
        tech: '',
      },
    },
    projects: {
      title: 'Projects',
      hookwatch: {
        name: 'hookwatch',
        subtitle: 'AI Agent Observability Platform',
        description: 'Real-time observability for AI agents. Ingests execution traces via webhook, visualizes as interactive graphs, tracks tokens, costs, latency.',
        tech: 'Spring Boot 3.4 · Java 21 · React 18 · TypeScript · PostgreSQL 16 · Redis 7 · Docker',
        status: 'Active development, 100+ commits',
      },
      safeOutdoor: {
        name: 'Safe Outdoor App',
        subtitle: 'NASA Space Apps Challenge 2024',
        description: 'Satellite data visualization app built nearly solo. Team Orn Space at Founder Haus Florianópolis.',
        tech: '',
        status: '',
      },
      ipen: {
        name: 'iPEN Facial Recognition',
        subtitle: 'Government — no public repo',
        description: 'Statewide biometric security system for Santa Catarina\'s prison management. Vendor-agnostic architecture integrating multiple biometric hardware vendors.',
        tech: 'Java 21 · Quarkus 3 · Angular',
        status: '',
      },
      cba: {
        name: 'CBA System',
        subtitle: 'Government — no public repo',
        description: 'Built for CIASC using Angular/TypeScript.',
        tech: 'Angular · TypeScript',
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
      ipe: {
        name: 'IPÊ Village 2026 — Architect Tier',
        institution: 'Popup city experiment, Florianópolis',
        period: 'Apr–May 2026',
      },
      web3: {
        name: 'Web3 Bootcamp (PSP Borderless Coding)',
        institution: 'Crypto Valley certificate track',
        period: 'Currently enrolled',
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
      contact: 'Contato',
    },
    hero: {
      title: 'Adriano Viera dos Santos',
      subtitle: 'Engenheiro Java Sênior | Desenvolvedor Full Stack Agêntico',
      tagline: 'Construo sistemas de missão crítica onde falha não é uma opção.',
      current: 'Atualmente arquitetando infraestrutura de segurança biométrica para o sistema prisional estadual do Brasil.',
      viewProjects: 'Ver Projetos',
      contactMe: 'Fale Comigo',
      downloadCV: 'Baixar CV',
    },
    about: {
      title: 'Sobre',
      p1: 'Sou Engenheiro Java Backend Sênior com 4+ anos construindo sistemas escaláveis e de missão crítica para setores governamentais e de saúde no Brasil. Meu projeto atual: um microsserviço de reconhecimento facial estadual para o sistema de gestão prisional de Santa Catarina (iPEN), processando dados biométricos em 50+ unidades prisionais.',
      p2: 'Antes de escrever código de produção, passei 4+ anos treinando modelos de IA/ML para o Google Search e algoritmos de recomendação da Meta na TELUS International. Eu não apenas uso ferramentas de IA — entendo como esses sistemas aprendem, falham e melhoram.',
      p3: 'Agora sou um desenvolvedor full stack agêntico. Entrego código de produção usando Claude Code, OpenClaw e orquestração multi-agente diariamente. Construí o hookwatch — uma plataforma open-source de observabilidade de agentes IA — autonomamente via agentes IA em um VPS 24/7, revisando e fazendo merge de cada PR pessoalmente.',
      p4: 'Baseado em Florianópolis — o principal hub de tecnologia do Brasil e destino global de nômades digitais. Membro ativo do Founder Haus e do ecossistema local de startups ao lado de fundadores internacionais de 30+ países. Participante 3x do NASA Space Apps Challenge.',
      p5: 'Disponível para trabalho remoto por contrato. Inglês (Fluente) · Português (Nativo) · GMT-3.',
      stat1: '4+ anos',
      stat1Label: 'Java / Spring Boot',
      stat2: '50+',
      stat2Label: 'Unidades Prisionais',
      stat3: '4+ anos',
      stat3Label: 'Treinamento IA/ML (Google, Meta)',
      stat4: '3x',
      stat4Label: 'NASA Space Apps',
      stat5: '150.000+',
      stat5Label: 'Candidatos → Selecionado (Digital House)',
    },
    experience: {
      title: 'Experiência',
      paipe: {
        company: 'PAIPE Software',
        role: 'Engenheiro de Software Full Stack',
        period: 'Abr 2025 – Presente',
        description: 'Contratada governamental atendendo CIASC (Agência de TI do Estado de Santa Catarina) e DPESP (Defensoria Pública do Estado de São Paulo).',
        bullet1: 'Arquitetei sozinho microsserviço de reconhecimento facial vendor-agnóstico para o iPEN (sistema de gestão prisional estadual) em Quarkus 3 + Angular',
        bullet2: 'Arquitetura device-agnóstica: Intelbras, Hikvision, qualquer fornecedor biométrico — zero alterações no código',
        bullet3: 'Reduziu oficiais prisionais necessários por checkpoint de 3 para 1, eliminando ~66% da verificação manual',
        tech: 'Java 21, Quarkus 3, Spring Boot, Angular, PostgreSQL, MS SQL Server, Docker, Redis',
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
        description: 'Treinou e avaliou sistemas de IA/ML para Google Search e algoritmos de recomendação da Meta/Facebook.',
        bullet1: 'Anotação de dados, análise semântica, avaliação de pipeline de NLP',
        bullet2: 'Ambiente remoto 100% em inglês',
        tech: '',
      },
    },
    projects: {
      title: 'Projetos',
      hookwatch: {
        name: 'hookwatch',
        subtitle: 'Plataforma de Observabilidade de Agentes IA',
        description: 'Observabilidade em tempo real para agentes IA. Ingere traces de execução via webhook, visualiza como grafos interativos, rastreia tokens, custos, latência.',
        tech: 'Spring Boot 3.4 · Java 21 · React 18 · TypeScript · PostgreSQL 16 · Redis 7 · Docker',
        status: 'Desenvolvimento ativo, 100+ commits',
      },
      safeOutdoor: {
        name: 'Safe Outdoor App',
        subtitle: 'NASA Space Apps Challenge 2024',
        description: 'App de visualização de dados de satélite construído quase solo. Equipe Orn Space no Founder Haus Florianópolis.',
        tech: '',
        status: '',
      },
      ipen: {
        name: 'iPEN Reconhecimento Facial',
        subtitle: 'Governo — sem repositório público',
        description: 'Sistema de segurança biométrica estadual para gestão prisional de Santa Catarina. Arquitetura vendor-agnóstica integrando múltiplos fornecedores de hardware biométrico.',
        tech: 'Java 21 · Quarkus 3 · Angular',
        status: '',
      },
      cba: {
        name: 'Sistema CBA',
        subtitle: 'Governo — sem repositório público',
        description: 'Construído para CIASC usando Angular/TypeScript.',
        tech: 'Angular · TypeScript',
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
      ipe: {
        name: 'IPÊ Village 2026 — Tier Arquiteto',
        institution: 'Experimento de cidade popup, Florianópolis',
        period: 'Abr–Mai 2026',
      },
      web3: {
        name: 'Bootcamp Web3 (PSP Borderless Coding)',
        institution: 'Certificação Crypto Valley',
        period: 'Atualmente matriculado',
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
