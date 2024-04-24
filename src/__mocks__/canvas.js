// __mocks__/canvas.js
const createCanvas = function (width, height) {
  const canvas = {
    width,
    height,
    getContext: jest.fn().mockReturnValue({
      fillStyle: null,
      fillRect: jest.fn(),
      getImageData: jest.fn().mockReturnValue({
        data: new Uint8ClampedArray(width * height * 4),
      }),
    }),
  };
  return canvas;
};

module.exports = { createCanvas };
