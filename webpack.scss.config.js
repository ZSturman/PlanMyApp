const path = require("path");
const glob = require("glob");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Entry: Find all .scss files in the src/components folder
const entries = {};
glob.sync("./src/components/**/*.scss").forEach((file) => {
  const relativePath = path.relative("./src/components", file);
  const withoutExtension = relativePath.replace(/\.scss$/, "");
  entries[withoutExtension] = file;
});

module.exports = (env) => {
  return {
    mode: "production",
    entry: entries,
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].css", // this will use the keys from the entries object
    },
    module: {
      rules: [
        {
          test: /\.module\.scss$/,
          use: [
            env.production ? MiniCssExtractPlugin.loader : "style-loader",
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: !env.production,
              },
            },
            'sass-loader',
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
      new CopyWebpackPlugin({
        patterns: Object.keys(entries).map((name) => {
          return {
            from: path.resolve(__dirname, 'dist', `${name}.css`),
            to: path.resolve(__dirname, 'src', 'components', `${name}.css`),
          };
        }),
      }),
    ],
    watchOptions: {
      ignored: /node_modules/,
    },
  };
};
