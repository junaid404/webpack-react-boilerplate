/* eslint-disable no-unneeded-ternary */
/* eslint-disable new-cap */

const path = require('path');
const webpack = require('webpack');
const eslint = require('eslint');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production' ? true : false;

module.exports = {
  entry: './src/index.js',
  mode: isProd ? 'production' : 'development',
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, './build'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, './build'),
    index: 'index.html',
    port: 3000,
    open: true,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          formatter: eslint.CLIEngine.getFormatter('stylish'),
          emitWarning: isProd,
        },
      },
      {
        exclude: '/node_modules/',
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|giff|svg|ico)$/,
        use: ['file-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(woff2|woff|ttf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        },
      },
    ],
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.css', '.scss'],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*'],
    }),
    new htmlWebpackPlugin({
      favicon: './public/favicon.ico',
      template: './public/index.html',
      filename: 'index.html',
    }),
  ],
  devtool: isProd ? 'eval-cheap-module-source-map' : false,
};
