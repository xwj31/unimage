import type { PixelData, ImageData } from "../types/types";

export async function getImagePixelData(imagePath: string): Promise<ImageData> {
  const image = await loadImage(imagePath);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("Failed to create canvas context");
  }

  canvas.width = image.width;
  canvas.height = image.height;
  ctx.drawImage(image, 0, 0);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const pixels: PixelData[] = [];

  imageData.data.forEach((value, index) => {
    if (index % 4 === 0) {
      pixels.push({
        r: value,
        g: imageData.data[index + 1],
        b: imageData.data[index + 2],
        a: imageData.data[index + 3],
      } as PixelData);
    }
  });

  return {
    width: canvas.width,
    height: canvas.height,
    pixels,
  };
}

function loadImage(imagePath: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = imagePath;
  });
}
