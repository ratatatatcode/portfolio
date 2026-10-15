import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/siteConfig';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteConfig.siteUrl}/momendoom/privacy-policy`,
      lastModified: new Date('2026-10-16'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
