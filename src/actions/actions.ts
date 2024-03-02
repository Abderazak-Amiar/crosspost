'use server';

import prisma from '@/lib/db';
import { crosspostImageT, crosspostImagesT } from '@/lib/types';

export const getImages = async (): Promise<crosspostImagesT> => {
  const images: crosspostImagesT = await prisma.crosspostImages.findMany();
  return images;
};
export const addImage = async (image: Omit<crosspostImageT, 'id'>) => {
  await prisma.crosspostImages.create({
    data: image,
  });
};
export const deleteImage = async (id: number): Promise<crosspostImageT> => {
  const res = await prisma.crosspostImages.delete({
    where: { id: id },
  });
  return res;
};
