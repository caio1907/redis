import fetch from 'node-fetch'
import { setCache } from '../redis/CityRedis';

export const getCity = async (id: string) => {
  const city = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/distritos/${id}`).then(response => response.json());
  if(city){
    setCache(id, city);
  }
  return city
}