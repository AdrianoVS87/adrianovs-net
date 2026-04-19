import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

const postsContent: Record<string, { title: string; date: string; readingTime?: string; content: string }> = {
  'java-ai-agent-underrated-stack-2026': {
    title: 'Why Java + AI Agent Infrastructure Is the Most Underrated Stack of 2026',
    date: '2026-04-19',
    readingTime: '3 min read',
    content: `For the past year, I've been running an autonomous AI agent system in production that handles real business operations for a UK telecoms client. It reads emails from non-technical business managers, classifies requests by priority, generates code changes, runs CI/CD pipelines, and deploys to production — all with human approval as the safety gate. It reduced turnaround time from days to under 2 hours.

I built it on top of a Java backend with Spring Boot. And I think this combination — enterprise Java with AI agent orchestration — is the most underrated stack in software engineering right now.

Here's why.

Most AI agent frameworks live in the Python world: LangChain, CrewAI, AutoGen. They're great for prototyping. But when you need production-grade reliability, strict type safety, battle-tested dependency injection, and integration with existing enterprise systems, Python starts to show cracks.

Meanwhile, thousands of Fortune 500 companies run on Java. Schools, hospitals, banks, government — all of them are quietly asking: "How do we bring AI into what we already have?" Bolting on Python microservices is one answer. Integrating AI natively into Spring Boot with Spring AI is a much better one.

In my work, I built a self-assembling agent system that orchestrates specialized workers: email analysts, code engineers, QA reviewers, deploy operators. Each agent has typed capabilities and safety constraints. A QA agent can't write code. A code agent can't deploy without QA passing. The orchestrator handles ambiguity through confidence thresholds — low confidence always escalates to a human.

This kind of production thinking — constraints, audit trails, compensation flows, human approval gates — is exactly what Java engineers have been doing for decades. We just didn't call it "agents." We called it "enterprise integration patterns."

The future of AI in business isn't replacing developers. It's giving them leverage. And Java developers who understand both worlds are rare.

If you want to see what this looks like in practice, [Toptal's network of elite Java engineers](https://www.toptal.com/developers/java) is a great place to find the kind of builders who combine deep backend expertise with modern AI tooling. That's where I want to be.

---

*— Adriano Viera dos Santos*
*Senior Full-stack Developer | Java · Spring Boot · AI Workflow Automation*`,
  },
  'building-nexus': {
    title: 'Building Nexus: Event-Driven Microservices with Saga Orchestration',
    date: '2026-04-08',
    content: `
## Why Event-Driven Architecture for E-Commerce

Traditional monolithic e-commerce systems break under load. A single checkout operation touches inventory, payment, shipping, and notifications — and if any one step fails mid-transaction, you end up with inconsistent state and angry customers.

Event-driven architecture solves this by decoupling services through asynchronous messages. Each service owns its slice of truth, reacts to events, and emits its own. The result: independent scalability, resilience to partial failures, and a clear audit trail of everything that happened.

Nexus is my production-grade implementation of this pattern — 7 Maven modules, 53 commits, and a system that handles the full e-commerce lifecycle end-to-end.

## The Saga Pattern: Orchestration Over Choreography

Nexus uses the orchestration variant of Saga rather than choreography. In choreography, each service listens for events and knows what to do next — but this distributes business logic across every service, making the overall flow invisible and hard to reason about.

With orchestration, a central Saga coordinator drives the workflow: place order → request payment → reserve inventory → confirm order → dispatch shipping. If payment fails, the coordinator explicitly triggers compensating transactions to roll back the state. The business process lives in one place, and failures are handled deterministically.

## CQRS with Redis Read Model

Nexus separates reads from writes using CQRS. Write operations go through Spring Boot command handlers that emit domain events to Kafka. A separate query service consumes those events and maintains a Redis read model optimised for fast lookups.

This means the order list endpoint never touches the write database — it reads a pre-built projection from Redis, keeping query latency under 5ms even under load. The trade-off is eventual consistency, which is acceptable for most read views in e-commerce.

## Order Lifecycle as a State Machine

Every order moves through a strict state machine: PENDING → PAYMENT_REQUESTED → PAYMENT_CONFIRMED → INVENTORY_RESERVED → CONFIRMED → SHIPPED → DELIVERED (or CANCELLED at failure points). Invalid state transitions are rejected at the domain level, not just the API layer.

Real-time status is pushed to clients via WebSocket — the frontend React app receives CONFIRMED, SHIPPED, and DELIVERED events without polling.

## Custom Micrometer Metrics and Grafana Dashboards

Nexus instruments every Saga step with custom Micrometer counters and timers, exposed via Prometheus and visualised in Grafana. I track saga completion rates, compensation event frequency, Kafka consumer lag, and per-service p95 latency. When a dead letter queue starts filling up, the dashboard shows it immediately.

## What I Learned

Distributed transactions are harder than they look — but the Saga pattern makes them manageable when you commit to explicit compensation logic from day one. The biggest lesson: design for failure first, not as an afterthought. Dead letter queues, idempotency keys, and compensating transactions aren't optional extras — they're the core of any reliable event-driven system.

---

*Nexus is open source. Check it out on [GitHub](https://github.com/AdrianoVS87/nexus).*
    `.trim(),
  },
  'building-hookwatch': {
    title: 'Building HookWatch: AI Agent Observability with Spring Boot',
    date: '2025-03-15',
    content: `
## The Problem

As AI agents become more autonomous, observability becomes critical. When an agent makes 50 tool calls across multiple steps, you need to understand what happened, how much it cost, and where it failed.

## The Architecture

HookWatch ingests execution traces via webhook endpoints, stores them in PostgreSQL, and visualizes them as interactive directed graphs in a React frontend. Redis handles real-time updates.

**Core Stack:**
- Spring Boot 3.4 + Java 21 for the backend API
- React 18 + TypeScript for the frontend
- PostgreSQL 16 for persistent storage
- Redis 7 for caching and real-time events
- Docker for deployment

## The Agentic Process

What makes this project unique: it was built almost entirely through AI agent orchestration. I set up a 24/7 VPS, configured Claude Code and OpenClaw agents, and reviewed every PR myself.

The agents handled:
- Writing implementation code from architectural specs
- Creating comprehensive test suites
- Handling dependency management and Docker configuration
- Writing documentation

I handled:
- Architecture decisions
- Code review for every single PR
- Deployment and infrastructure
- Quality gates and merge decisions

## Key Learnings

1. **Agent observability needs agent observability** — bootstrapping problem solved by starting simple
2. **Webhook-based ingestion scales well** — no SDKs to maintain, any agent framework can emit traces
3. **Graph visualization reveals patterns** — seeing agent execution as a DAG immediately highlights inefficiencies

## What's Next

Active development continues. The roadmap includes cost anomaly detection, multi-agent workflow comparison, and a plugin system for different agent frameworks.

---

*HookWatch is open source. Check it out on [GitHub](https://github.com/AdrianoVS87/hookwatch).*
    `.trim(),
  },
};

function renderInlineLinks(text: string): React.ReactNode {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <a
        key={match.index}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#60a5fa] hover:underline"
      >
        {match[1]}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

export async function generateStaticParams() {
  return Object.keys(postsContent).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = postsContent[slug];
  if (!post) return { title: 'Post Not Found' };
  const description = post.content.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').slice(0, 160);
  return {
    title: post.title,
    description,
    openGraph: {
      title: post.title,
      description,
      type: 'article',
      publishedTime: post.date,
      authors: ['Adriano Viera dos Santos'],
      url: `https://adrianovs.net/blog/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = postsContent[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-[#60a5fa] hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5]">
      <article className="max-w-3xl mx-auto px-6 py-20">
        <Link
          href="/blog"
          className="text-[#a3a3a3] hover:text-[#60a5fa] transition-colors text-sm"
        >
          &larr; Back to Blog
        </Link>

        <header className="mt-8 mb-12">
          <div className="flex items-center gap-3 text-[#737373] text-sm">
            <time>{post.date}</time>
            {post.readingTime && (
              <>
                <span>·</span>
                <span>{post.readingTime}</span>
              </>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 leading-tight">{post.title}</h1>
        </header>

        <div className="prose prose-invert max-w-none prose-headings:text-[#e5e5e5] prose-p:text-[#a3a3a3] prose-strong:text-[#e5e5e5] prose-a:text-[#60a5fa] prose-code:text-[#60a5fa] prose-li:text-[#a3a3a3] prose-hr:border-[#262626]">
          {post.content.split('\n\n').map((block, i) => {
            if (block.startsWith('## ')) {
              return <h2 key={i} className="text-xl font-semibold mt-10 mb-4">{block.slice(3)}</h2>;
            }
            if (block.startsWith('**') && block.endsWith('**')) {
              return <p key={i} className="font-semibold text-[#e5e5e5] mt-4">{block.slice(2, -2)}</p>;
            }
            if (block.startsWith('- ')) {
              return (
                <ul key={i} className="list-disc list-inside space-y-1 text-[#a3a3a3] my-4">
                  {block.split('\n').map((item, j) => (
                    <li key={j}>{item.replace(/^- /, '')}</li>
                  ))}
                </ul>
              );
            }
            if (block.startsWith('1. ')) {
              return (
                <ol key={i} className="list-decimal list-inside space-y-1 text-[#a3a3a3] my-4">
                  {block.split('\n').map((item, j) => (
                    <li key={j}>{item.replace(/^\d+\.\s/, '')}</li>
                  ))}
                </ol>
              );
            }
            if (block.startsWith('---')) {
              return <hr key={i} className="border-[#262626] my-8" />;
            }
            if (block.startsWith('*') && block.endsWith('*')) {
              const text = block.slice(1, -1);
              return <p key={i} className="text-[#737373] italic mt-4">{renderInlineLinks(text)}</p>;
            }
            return <p key={i} className="text-[#a3a3a3] leading-relaxed my-4" style={{ lineHeight: 1.7 }}>{renderInlineLinks(block)}</p>;
          })}
        </div>
      </article>
    </div>
  );
}
