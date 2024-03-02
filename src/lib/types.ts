export type crosspostImageT = {
  id: number;
  src: string;
};

export type crosspostImagesT = crosspostImageT[];
export type getImagesT = {
  images: crosspostImagesT;
};
