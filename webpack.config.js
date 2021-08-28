const path = require('path');
// const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.ts'
  },
  output: {
    filename: '[name].bundle.js', // app.bundle.js
    path: path.resolve(__dirname, 'build')
  },
  devServer: {
    port: 8080,
    // contentBase: path.join(__dirname, 'assets'), // where webpack-dev-server should look for static files
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    // new webpack.HotModuleReplacementPlugin(), // this should not be in production https://webpack.js.org/guides/production
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css'
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }
};