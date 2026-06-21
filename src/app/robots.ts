import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://magnaye.online/sitemap.xml',
    host: 'https://magnaye.online',
  };
}
