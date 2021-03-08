import Redis from 'redis';
import AsyncRedis from 'async-redis';

const port:number = process.env.REDIS_URL ? Number(process.env.REDIS_URL) : 6379

const redis = Redis.createClient(port);
const client = AsyncRedis.decorate(redis);

export const getCache = async (cityId: string) => {
  return await client.get(cityId ?? 'allcities');
}

export const setCache = async (cityId: string, cityData: any) => {
  await client.setex(cityId ?? 'allcities', 25, JSON.stringify(cityData));
}