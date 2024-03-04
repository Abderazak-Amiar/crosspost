'use client';
import { CoverImageComponent, LayerBox } from '@/styled-components/styled';
import Image from 'next/image';
import React from 'react';
type coverImagePropsType = {
  src: string;
  alt: string;
  width: number;
  height: number;
  borderRaduisClass: string;
  layerBoxClass: string;
};
function CoverImage(props: Readonly<coverImagePropsType>) {
  const { src, alt, width, height, borderRaduisClass, layerBoxClass } = props;
  return (
    <CoverImageComponent item>
      <LayerBox className={layerBoxClass}></LayerBox>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{ zIndex: 40 }}
        className={borderRaduisClass}
      />
    </CoverImageComponent>
  );
}
export default CoverImage;
