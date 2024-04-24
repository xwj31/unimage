import { getImagePixelData } from "../imageProcessor";

test("should throw an error for an invalid image path", async () => {
  const invalidImagePath = "path/to/invalid/image.png";
  await expect(getImagePixelData(invalidImagePath)).rejects.toThrow();
});
