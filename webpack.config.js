const webpack = require('webpack');
const path = require('path');

const DEV_SERVER = process.argv[1].indexOf('webpack-dev-server') !== -1;
const DEV = DEV_SERVER || process.env.DEV;

module.exports = {
  mode: DEV ? 'development' : 'production',
  entry: {
    app: "./app/entryPoint.js"
  },

  devtool: DEV ? 'eval' :'source-map',

  output: {
    path: path.join(__dirname, "dist"),
    publicPath: 'dist/',
    filename: "[name].bundle.js"
  },

  resolve: {
    extensions: ['.js']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre",
        exclude: [/@uirouter/]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: { loader: 'babel-loader' }
      }
    ]
  }
};
