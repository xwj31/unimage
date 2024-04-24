// index.ts
import { getImagePixelData } from "./imageProcessor";
import { renderTable } from "./tableRenderer";

export async function generatePixels(imagePath: string): Promise<string> {
  const imageData = await getImagePixelData(imagePath);
  return renderTable(imageData);
}

export function sayHi(): string {
  console.log("Hello, World!");
  return "Hello, World!";
}
