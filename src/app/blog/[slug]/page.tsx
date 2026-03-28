import Link from 'next/link';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

const postsContent: Record<string, { title: string; date: string; content: string }> = {
  'building-hookwatch': {
    title: 'Building hookwatch: AI Agent Observability with Spring Boot',
    date: '2025-03-15',
    content: `
## The Problem

As AI agents become more autonomous, observability becomes critical. When an agent makes 50 tool calls across multiple steps, you need to understand what happened, how much it cost, and where it failed.

## The Architecture

hookwatch ingests execution traces via webhook endpoints, stores them in PostgreSQL, and visualizes them as interactive directed graphs in a React frontend. Redis handles real-time updates.

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

*hookwatch is open source. Check it out on [GitHub](https://github.com/AdrianoVS87/hookwatch).*
    `.trim(),
  },
};

export async function generateStaticParams() {
  return Object.keys(postsContent).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = postsContent[slug];
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.title,
    description: post.content.slice(0, 160),
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
          <time className="text-[#737373] text-sm">{post.date}</time>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">{post.title}</h1>
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
              return <p key={i} className="text-[#737373] italic mt-4">{block.slice(1, -1)}</p>;
            }
            return <p key={i} className="text-[#a3a3a3] leading-relaxed my-4">{block}</p>;
          })}
        </div>
      </article>
    </div>
  );
}
