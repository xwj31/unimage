import { renderTable } from "../tableRenderer";
import { createCanvas } from "canvas";

describe("renderTable", () => {
  test("should render an HTML table with correct pixel colors", () => {
    const canvas = createCanvas(2, 2);
    const ctx = canvas.getContext("2d");

    // Set pixel colors
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(0, 0, 1, 1);
    ctx.fillStyle = "#00ff00";
    ctx.fillRect(1, 0, 1, 1);
    ctx.fillStyle = "#0000ff";
    ctx.fillRect(0, 1, 1, 1);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(1, 1, 1, 1);

    const imageData = ctx.getImageData(0, 0, 2, 2);
    const pixels = Array.from(imageData.data);

    const tableHtml = renderTable({
      width: 2,
      height: 2,
      pixels: [
        { r: pixels[0], g: pixels[1], b: pixels[2], a: pixels[3] },
        { r: pixels[4], g: pixels[5], b: pixels[6], a: pixels[7] },
        { r: pixels[8], g: pixels[9], b: pixels[10], a: pixels[11] },
        { r: pixels[12], g: pixels[13], b: pixels[14], a: pixels[15] },
      ],
    });

    const expectedHtml = `<table><tr><td style="background-color: #ff0000;"></td><td style="background-color: #00ff00;"></td></tr><tr><td style="background-color: #0000ff;"></td><td style="background-color: #ffffff;"></td></tr></table>`;
    expect(tableHtml).toBe(expectedHtml);
  });
});
