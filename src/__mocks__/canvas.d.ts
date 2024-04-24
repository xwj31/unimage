declare module "canvas" {
  export function createCanvas(
    width: number,
    height: number
  ): {
    width: number;
    height: number;
    getContext(
      contextType: "2d",
      attrs?: {
        alpha?: boolean;
      }
    ): {
      fillStyle: string | CanvasGradient | CanvasPattern | null;
      fillRect(x: number, y: number, width: number, height: number): void;
      getImageData(sx: number, sy: number, sw: number, sh: number): ImageData;
    };
  };
}
