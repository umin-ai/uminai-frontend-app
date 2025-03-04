import { MetadataRoute } from 'next';

const BASE_URL = 'https://umin.ai';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}/${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
