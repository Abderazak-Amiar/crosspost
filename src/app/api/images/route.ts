import { fileToBuffer } from '@/utils/functions';
import prisma from '@/lib/db';
import { writeFileSync, readFileSync } from 'fs';
import { NextRequest, NextResponse } from 'next/server';
import { join } from 'path';
import { addImage, deleteImage, getImages } from '@/actions/actions';
import { crosspostImagesT } from '@/lib/types';

export const POST = async (request: NextRequest) => {
  const data = await request.formData();
  const file: File | null = data.get('file') as unknown as File;
  if (!file) {
    return NextResponse.json({ success: false });
  }
  const buffer = await fileToBuffer(file);
  const path = join('public/', 'images', file.name);

  await addImage({ src: file.name });
  writeFileSync(path, buffer);

  return NextResponse.json({ success: buffer });
};

export const GET = async (request: NextRequest) => {
  const images: crosspostImagesT = await getImages();
  if (images) {
    return NextResponse.json({ images: images }, { status: 200 });
  } else {
    return NextResponse.json(
      { error: 'Please upload your images' },
      { status: 404 },
    );
  }
};

export const DELETE = async (request: NextRequest) => {
  const data = await request.json();
  const res = await deleteImage(data.id);
  return NextResponse.json({ res });
};

export const dynamic = 'force-static';
