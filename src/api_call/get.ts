import { getImagesT } from '@/lib/types';
import axios from 'axios';

export const getImages = async (): Promise<getImagesT> => {
  const res = await fetch('/api/images');

  const data = await res.json();
  console.log('==>getImages', data);
  return data;
};
