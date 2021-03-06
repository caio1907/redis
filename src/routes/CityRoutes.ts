import express from 'express'
import { getCity } from '../controllers/CityController';
import { getCache } from '../redis/CityRedis';

const router = express.Router();

router.get('/:id?', async (req, res) => {
  const { id } = req.params;
  const cache = await getCache(id);
  return res.json(cache ? JSON.parse(cache as any) : await getCity(id));
})

export default router;