const path = require("path");
const glob = require("glob");

module.exports = {
  mode: "development",
  entry: glob.sync("./src/components/**/*.scss"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "components-styles.css",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // Injects CSS into the DOM
          "css-loader", // Translates CSS into CommonJS
          "sass-loader", // Compiles Sass to CSS
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  watchOptions: {
    ignored: /node_modules/,
  },
};
