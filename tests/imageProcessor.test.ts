import { getImagePixelData } from "../src/imageProcessor";
import { createCanvas } from "canvas";

describe("getImagePixelData", () => {
  test("should return correct image data for a valid image", async () => {
    const imagePath = "path/to/test/image.png";
    const imageData = await getImagePixelData(imagePath);

    // Mock the expected image data
    const canvas = createCanvas(100, 100);
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(0, 0, 100, 100);
    const expectedImageData = ctx.getImageData(0, 0, 100, 100);

    expect(imageData.width).toBe(100);
    expect(imageData.height).toBe(100);
    expect(imageData.pixels.length).toBe(expectedImageData.data.length / 4);

    for (let i = 0; i < imageData.pixels.length; i++) {
      const pixel = imageData.pixels[i];
      const expectedPixel = {
        r: expectedImageData.data[i * 4],
        g: expectedImageData.data[i * 4 + 1],
        b: expectedImageData.data[i * 4 + 2],
        a: expectedImageData.data[i * 4 + 3],
      };

      expect(pixel).toEqual(expectedPixel);
    }
  });

  test("should throw an error for an invalid image path", async () => {
    const invalidImagePath = "path/to/invalid/image.png";
    await expect(getImagePixelData(invalidImagePath)).rejects.toThrow();
  });
});
