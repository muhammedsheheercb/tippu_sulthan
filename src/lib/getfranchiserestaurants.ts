import type { Restaurant } from '@/types/restaurant';

interface FranchiseApiResponse {
  success: boolean;
  message: string;
  data: {
    total: number;
    restaurants: Restaurant[];
  };
}

/**
 * Fetches all restaurants for a franchise
 * This runs on the SERVER only - cached for 1 hour
 */
export async function getFranchiseRestaurants(): Promise<Restaurant[]> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const franchiseId = process.env.NEXT_PUBLIC_FRANCHISE_ID;

  if (!apiUrl || !franchiseId) {
    console.error(
      '❌ Missing API URL or Franchise ID in environment variables',
    );
    return [];
  }

  const url = `${apiUrl}/franchisee-service/franchisee/${franchiseId}/restaurants`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // IMPORTANT: Cache the response for 1 hour
      next: {
        revalidate: 3600,
        tags: ['restaurants'],
      },
    });

    if (!response.ok) {
      console.error('❌ [Server] API returned error:', response.status);
      return [];
    }

    const json: FranchiseApiResponse = await response.json();

    if (json.success && json.data.restaurants) {
      return json.data.restaurants;
    }

    console.warn('⚠️ [Server] No restaurants in response');
    return [];
  } catch (error) {
    console.error('❌ [Server] Error fetching restaurants:', error);
    return [];
  }
}

/**
 * Fetches a single restaurant by ID
 */
export async function getFranchiseRestaurantById(
  restaurantId: string,
): Promise<Restaurant | null> {
  const restaurants = await getFranchiseRestaurants();
  return restaurants.find(r => r._id === restaurantId) || null;
}

/**
 * Gets the first (default) restaurant
 */
export async function getDefaultFranchiseRestaurant(): Promise<Restaurant | null> {
  const restaurants = await getFranchiseRestaurants();
  return restaurants.length > 0 ? restaurants[0] : null;
}
