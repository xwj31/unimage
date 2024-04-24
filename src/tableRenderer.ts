import type { PixelData, ImageData } from "../types";

function rgbToHex(pixel: PixelData): string {
  const componentToHex = (c: number) => {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  return (
    "#" +
    componentToHex(pixel.r) +
    componentToHex(pixel.g) +
    componentToHex(pixel.b)
  );
}

export function renderTable(
  imageData: ImageData,
  targetWidth?: number,
  targetHeight?: number
): string {
  if (targetHeight !== undefined && targetWidth !== undefined) {
    return renderTableAndScale(imageData, targetWidth, targetHeight);
  } else {
    return renderTableAndFit(imageData);
  }
}

function renderTableAndFit(imageData: ImageData): string {
  let html = `<table style="border-collapse: collapse;">`;
  for (let y = 0; y < imageData.height; y++) {
    html += "<tr>";

    for (let x = 0; x < imageData.width; x++) {
      const pixelIndex = y * imageData.width + x;
      const pixel = imageData.pixels[pixelIndex];
      const hexColor = pixel ? rgbToHex(pixel) : new Error("Pixel not found");

      html += `<td style="background-color: ${hexColor};"></td>`;
    }

    html += "</tr>";
  }

  html += "</table>";

  return html;
}

function renderTableAndScale(
  imageData: ImageData,
  targetWidth: number,
  targetHeight: number
): string {
  const scaleX = targetWidth / imageData.width;
  const scaleY = targetHeight / imageData.height;

  let html = `<table style="border-collapse: collapse;">`;

  for (let y = 0; y < targetHeight; y++) {
    html += "<tr>";

    for (let x = 0; x < targetWidth; x++) {
      const originalX = Math.floor(x / scaleX);
      const originalY = Math.floor(y / scaleY);
      const pixelIndex = originalY * imageData.width + originalX;
      const pixel = imageData.pixels[pixelIndex];
      const hexColor = pixel ? rgbToHex(pixel) : "#000000";

      html += `<td style="background-color: ${hexColor};"></td>`;
    }

    html += "</tr>";
  }

  html += "</table>";

  return html;
}
