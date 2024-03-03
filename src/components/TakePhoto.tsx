'use client';
import React, { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import Image from 'next/image';
import { Button } from '@mui/material';
import { b642Blob } from '@/utils/functions';
import { uploadImage } from '@/api_call/post';
import { useGenerationStore } from '@/store/Zustand';

function TakePhoto() {
  const { setTakePhoto, setIsPhotoUploaded, isPhotoUploaded } =
    useGenerationStore();
  const [img, setImg] = useState<string | null>(null);
  const [photos, setPhotos] = useState<string[]>([]);
  const webcamRef = useRef<Webcam>(null);

  const videoConstraints = {
    aspectRatio: 0.6666666667,
    facingMode: 'user',
    width: { min: 480 },
    height: { min: 720 },
  };
  const cancel = () => {
    setTakePhoto(false);
  };
  const capture = useCallback(() => {
    let imageSrc: string | null = '';
    if (webcamRef.current != null) {
      imageSrc = webcamRef.current.getScreenshot({ width: 480, height: 720 });
    }
    if (imageSrc) {
      setImg(imageSrc);
    }
  }, [webcamRef]);

  const saveImage = async () => {
    const dateNow = Date.now();
    const blob = img != null && b642Blob(img, 'image/webp', 512);
    const fileExtension = blob && blob.type.split('/')[1];
    let formData = new FormData();
    if (blob) {
      let file = new File([blob], 'image');
      let fileName: string = `${dateNow}.${fileExtension}`;
      setPhotos([...photos, fileName]);
      localStorage.setItem('images', JSON.stringify(photos));
      formData.append('file', file, fileName);
    }
    const status = await uploadImage(formData);
    if (status === 200) {
      setTakePhoto(false);
      setIsPhotoUploaded(!isPhotoUploaded);
    }
  };
  return (
    <div className="Container">
      {img === null ? (
        <>
          <Webcam
            height={720}
            width={480}
            audio={false}
            mirrored={false}
            imageSmoothing={true}
            ref={webcamRef}
            screenshotFormat="image/webp"
            screenshotQuality={0.92}
            forceScreenshotSourceSize={true}
            videoConstraints={videoConstraints}
          />
          <Button onClick={capture}>Capture photo</Button>
          <Button onClick={cancel}>Cancel</Button>
        </>
      ) : (
        <>
          <Image src={img} height={720} width={480} alt="screenshot" />
          <Button onClick={() => setImg(null)}>Retake</Button>
          <Button onClick={saveImage}>Save</Button>
        </>
      )}
    </div>
  );
}

export default TakePhoto;
