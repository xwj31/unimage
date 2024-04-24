module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  setupFiles: ["jest-canvas-mock"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
