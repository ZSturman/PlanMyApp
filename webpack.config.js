const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/example/index.ts"),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", "jsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist/example"),
    filename: "[name][contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist/example"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-typescript"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "PMA Example",
      filename: "index.html",
      template: "src/example/template.html",
      inject: "body"
    }),
    //new BundleAnalyzerPlugin(),
  ],
};
