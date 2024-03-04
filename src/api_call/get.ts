import { getImagesT } from '@/lib/types';
import axios from 'axios';

export const getImages = (): Promise<getImagesT> => {
  const res = axios.get('/api/images');

  const data = res.then((res) => res.data as getImagesT);
  console.log('==>getImages', data);
  return data;
};
