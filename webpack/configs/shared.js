const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const WebpackBar = require('webpackbar');
const paths = require('../utils/paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => ({
  mode: env.mode,
  context: paths.SRC_DIR,
  entry: {
    main: './index.js',
    login: './login.js',
    registration: './registration.js',
  },
  output: {
    path: paths.BUILD_DIR,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: paths.SRC_DIR,
        use: ['babel-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[path][name].[ext]',
              limit: 8192,
              esModule: false,
            },
          },
          'img-loader',
        ],
      },
      {
        test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              limit: 10000,
              mimetype: 'application/font-woff',
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.hbs$/,
        use: 'handlebars-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new WebpackBar(),
    new HtmlWebpackPlugin({
      template: './index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: './registration.html',
      filename: 'registration.html',
      chunks: ['registration'],
    }),
    new HtmlWebpackPlugin({
      template: './login.html',
      filename: 'login.html',
      chunks: ['login'],
    }),
  ],
});