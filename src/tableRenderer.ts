// tableRenderer.ts

import { PixelData, ImageData } from "../types";

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

export function renderTable(imageData: ImageData): string {
  let html = `<table style="border-collapse: collapse;">`;

  for (let y = 0; y < imageData.height; y++) {
    html += "<tr>";

    for (let x = 0; x < imageData.width; x++) {
      const pixelIndex = y * imageData.width + x;
      const pixel = imageData.pixels[pixelIndex];
      const hexColor = rgbToHex(pixel);

      html += `<td style="background-color: ${hexColor};"></td>`;
    }

    html += "</tr>";
  }

  html += "</table>";

  return html;
}
