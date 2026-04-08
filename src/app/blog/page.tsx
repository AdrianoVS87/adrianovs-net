import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on Java, AI agents, and building mission-critical systems.',
};

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

const posts: BlogPost[] = [
  {
    slug: 'building-nexus',
    title: 'Building Nexus: Event-Driven Microservices with Saga Orchestration',
    date: '2026-04-08',
    excerpt:
      'How I built a production-grade event-driven e-commerce platform with Saga orchestration, CQRS, Kafka, and real-time WebSocket order tracking — and what I learned about distributed systems failures.',
  },
  {
    slug: 'building-hookwatch',
    title: 'Building hookwatch: AI Agent Observability with Spring Boot',
    date: '2025-03-15',
    excerpt:
      'How I built an open-source observability platform for AI agents — autonomously via AI agents on a 24/7 VPS, reviewing and merging every PR myself.',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5]">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="mb-12">
          <Link
            href="/"
            className="text-[#a3a3a3] hover:text-[#60a5fa] transition-colors text-sm"
          >
            &larr; Back to Home
          </Link>
          <h1 className="text-4xl font-bold mt-6">Blog</h1>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-[#262626] pb-8">
              <Link href={`/blog/${post.slug}`} className="group">
                <time className="text-[#737373] text-sm">{post.date}</time>
                <h2 className="text-xl font-semibold mt-1 group-hover:text-[#60a5fa] transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#a3a3a3] mt-2">{post.excerpt}</p>
                <span className="text-[#60a5fa] text-sm mt-3 inline-block">
                  Read more &rarr;
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
