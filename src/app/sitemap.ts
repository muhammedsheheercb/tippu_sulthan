import { getFranchiseRestaurants } from '@/lib/getfranchiserestaurants';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || 'https://tipu-sultan.vercel.app/';
  const franchiseId = process.env.NEXT_PUBLIC_FRANCHISE_ID;

  let dynamicRoutes: MetadataRoute.Sitemap = [];

  if (franchiseId) {
    const restaurants = await getFranchiseRestaurants();

    const menuRoutes = restaurants.map(restaurant => ({
      url: `${baseUrl}/menu/${restaurant.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));

    const tableBookingRoutes = restaurants.map(restaurant => ({
      url: `${baseUrl}/table-booking/${restaurant.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));

    dynamicRoutes = [...menuRoutes, ...tableBookingRoutes];
  }

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/menu`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/table-booking`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/our-story`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    ...dynamicRoutes,
  ];
}
