export function b642Blob(b64Data: any, contentType: any, sliceSize: any) {
  'use client';
  contentType = contentType || '';
  sliceSize = sliceSize || 512;

  const byteCharacters = window.atob(b64Data.split(',')[1]);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    let byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: contentType });
  return blob;
}

export const fileToBuffer = async (file: File) => {
  const bytes = await file.arrayBuffer();
  return Buffer.from(bytes);
};
