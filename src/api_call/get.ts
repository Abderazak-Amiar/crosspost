import { getImagesT } from '@/lib/types';

export const getImages = async (): Promise<getImagesT> => {
  const res = await fetch('/api/images');

  const data = await res.json();
  return data;
};
