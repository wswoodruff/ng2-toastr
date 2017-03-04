const webpack = require('webpack');

module.exports = {
  entry: {
    app: './app/boot.ts',
  },
  output: {
    filename: "bundle.js",
  },
  devtool: '#source-map',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      { test: /\.ts$/,
        loader: 'ts-loader',
      },

      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   minimize: true,
    //   compress: { warnings: false },
    // }),
  ],
};