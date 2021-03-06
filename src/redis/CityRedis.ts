import Redis from 'async-redis';

const client = Redis.createClient();

export const getCache = async (cityId: string) => {
  return await client.get(cityId);
}

export const setCache = async (cityId: string, cityData: any) => {
  await client.setex(cityId, 5, JSON.stringify(cityData));
}