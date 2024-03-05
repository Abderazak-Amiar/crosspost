'use client';
import { Box, Grid } from '@mui/material';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import CoverTitle from './CoverTitle';
import TakePhoto from '../TakePhoto';
import {
  ButtonDone,
  ButtonUpload,
  ButtonUploadDisabled,
  ButtonsGrid,
  CoverGrid,
  CustomPopover,
  ImageCoverGrid,
  ImagesListBox,
  SelectImageBox,
  SelectedImageBox,
  SelectedImageGrid,
} from '@/styled-components/styled';
import CoverImage from './CoverImage';
import { useGenerationStore } from '@/store/Zustand';
import DeleteIcon from '@mui/icons-material/Delete';
import ImageIcon from '@mui/icons-material/Image';
import { getImages } from '@/api_call/get';
import { crosspostImageT, crosspostImagesT } from '@/lib/types';
import Image from 'next/image';
import { deleteImage } from '@/api_call/delete';
import { DeleteIconStyle, ImageIconStyle } from '@/style/style';
import { BASE_URL } from '@/utils/const';

function Cover() {
  const {
    takePhoto,
    setTakePhoto,
    isPhotoUploaded,
    setIsPhotoDeleted,
    setIsPhotoUploaded,
    isPhotoDeleted,
  } = useGenerationStore();
  const [anchorEl, setAnchorEl] = useState<HTMLElement>();
  const [images, setImages] = useState<crosspostImagesT>();
  const [selectedImage, setSelectedImage] = useState<crosspostImageT | null>({
    id: 0,
    src: '',
  });
  const upload = (e: SyntheticEvent) => {
    setTakePhoto(true);
    const element = document.getElementById('home_page');
    element && setAnchorEl(element);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await getImages();
      setImages(res.images);
      setSelectedImage(null);
    };
    fetchData();
    return () => {
      setIsPhotoUploaded(false);
      setIsPhotoDeleted(false);
    };
  }, [isPhotoUploaded, isPhotoDeleted, setIsPhotoDeleted, setIsPhotoUploaded]);
  const selectImage = (image: crosspostImageT) => {
    setSelectedImage(image);
  };
  const deleteImageById = async (id: number) => {
    const data: crosspostImageT = await deleteImage(id);
    data.id === id && setIsPhotoDeleted(!isPhotoDeleted);
  };
  const setSpecialStyle = (
    index: number,
    isLastElement: boolean,
    isLayerBox: boolean,
  ) => {
    if (index === 0) {
      return 'TLeftTRightBR';
    }
    if (isLastElement) {
      return 'BLeftBRightBR';
    }
    if (index === 0 && isLayerBox) {
      return 'layerBoxBR';
    }
    if (isLastElement && isLayerBox) {
      return 'layerBoxBR';
    }
  };
  return (
    <CoverGrid>
      <Grid item>
        <CoverTitle />
      </Grid>
      <SelectedImageGrid item>
        {selectedImage && (
          <Image
            src={`${BASE_URL}/photos/${selectedImage?.src}`}
            alt="Selected Image"
            width={220}
            height={330}
            style={{ borderRadius: '28px' }}
          />
        )}
        {!selectedImage && (
          <SelectedImageBox>
            <Box>
              <ImageIcon sx={ImageIconStyle} />
            </Box>
          </SelectedImageBox>
        )}
      </SelectedImageGrid>
      <ImageCoverGrid item>
        {images?.map((img, index) => (
          <ImagesListBox key={img.id}>
            <DeleteIcon
              onClick={() => deleteImageById(img.id)}
              sx={DeleteIconStyle}
            />
            <SelectImageBox onClick={() => selectImage(img)}>
              <CoverImage
                src={`${BASE_URL}/photos/${img.src}`}
                alt="Cover Image"
                width={90}
                height={160}
                borderRaduisClass={
                  setSpecialStyle(index, index === images?.length - 1, false)!
                }
                layerBoxClass={
                  setSpecialStyle(index, index === images?.length - 1, true)!
                }
              />
            </SelectImageBox>
          </ImagesListBox>
        ))}
      </ImageCoverGrid>
      <Grid item>
        {takePhoto && (
          <CustomPopover
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'center',
              horizontal: 'center',
            }}
            open={true}
          >
            <TakePhoto />
          </CustomPopover>
        )}
      </Grid>
      <ButtonsGrid item>
        {images?.length! < 6 ? (
          <ButtonUpload onClick={upload}>Upload</ButtonUpload>
        ) : (
          <ButtonUploadDisabled>Upload</ButtonUploadDisabled>
        )}

        <ButtonDone>Done</ButtonDone>
      </ButtonsGrid>
    </CoverGrid>
  );
}

export default Cover;
