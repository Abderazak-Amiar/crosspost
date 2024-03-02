export function b642Blob(b64Data: any, contentType: any, sliceSize: any) {
  'use client';
  contentType = contentType || '';
  sliceSize = sliceSize || 512;

  var byteCharacters = window.atob(b64Data.split(',')[1]);
  var byteArrays = [];

  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    var slice = byteCharacters.slice(offset, offset + sliceSize);

    var byteNumbers = new Array(slice.length);
    for (var i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    var byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }

  var blob = new Blob(byteArrays, { type: contentType });
  return blob;
}

export const fileToBuffer = async (file: File) => {
  const bytes = await file.arrayBuffer();
  return Buffer.from(bytes);
};
