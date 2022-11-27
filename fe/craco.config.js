const webpack = require("webpack");

module.exports = {
  webpack: {
    plugins: {
      add: [
        new webpack.ProvidePlugin({
          process: "process/browser.js",
        }),
        new webpack.DefinePlugin({
          "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
        }),
      ],
      loaders: [{ test: /\.(png|jpg)$/, loader: "url-loader?limit=8192" }],
    },
  },
};
