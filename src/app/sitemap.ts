import { MetadataRoute } from 'next';

const BASE_URL = 'https://astro-promotions.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '#promotions',
    '#astro-packages',
    '#contactus',
    '#astr-fibre',
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}/${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
