import { getImagePixelData } from "./imageProcessor";
import { renderTable } from "./tableRenderer";

export async function generatePixels(
  imagePath: string,
  width?: number,
  height?: number
): Promise<string> {
  const imageData = await getImagePixelData(imagePath);
  return renderTable(imageData, width, height);
}
