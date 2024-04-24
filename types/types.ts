export type PixelData = { r: number; g: number; b: number; a?: number };

export interface ImageData {
  width: number;
  height: number;
  pixels: PixelData[];
}
