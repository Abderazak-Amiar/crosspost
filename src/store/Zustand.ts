import { create } from 'zustand';

type GenerationState = {
  takePhoto: boolean;
  setTakePhoto: (takePhoto: boolean) => void;
  isPhotoUploaded: boolean;
  setIsPhotoUploaded: (takePhoto: boolean) => void;
  isPhotoDeleted: boolean;
  setIsPhotoDeleted: (isPhotoDeleted: boolean) => void;
  images: string[];
  setImages: (images: string[]) => void;
};
export const useGenerationStore = create<GenerationState>()((set) => ({
  takePhoto: false,
  setTakePhoto: (takePhoto: boolean) => set({ takePhoto }),
  isPhotoUploaded: false,
  setIsPhotoUploaded: (isPhotoUploaded: boolean) => set({ isPhotoUploaded }),
  isPhotoDeleted: false,
  setIsPhotoDeleted: (isPhotoDeleted: boolean) => set({ isPhotoDeleted }),
  images: [],
  setImages: (images: string[]) => set({ images }),
}));
