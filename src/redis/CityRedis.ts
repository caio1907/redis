import Redis from 'async-redis';

const client = Redis.createClient();

export const getCache = async (cityId: string) => {
  return await client.get(cityId ?? 'allcities');
}

export const setCache = async (cityId: string, cityData: any) => {
  await client.setex(cityId ?? 'allcities', 25, JSON.stringify(cityData));
}