import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://adrianovs.net',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://adrianovs.net/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://adrianovs.net/blog/building-nexus',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://adrianovs.net/blog/building-hookwatch',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}
