const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "unimage.js",
    path: path.resolve(__dirname, "dist"),
    library: "Unimage", // Replace with your library name
    libraryTarget: "window", // Export as a UMD library
  },
  mode: "development",
};
