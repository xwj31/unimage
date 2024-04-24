import type { PixelData, ImageData } from "../types/types";

export async function getImagePixelData(imagePath: string): Promise<ImageData> {
  console.log("image", imagePath);
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

  for (let i = 0; i < imageData.data.length; i += 4) {
    pixels.push({
      r: imageData.data[i],
      g: imageData.data[i + 1],
      b: imageData.data[i + 2],
      a: imageData.data[i + 3],
    } as PixelData);
  }

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
