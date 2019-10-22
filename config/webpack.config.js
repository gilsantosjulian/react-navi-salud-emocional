const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const indextInput = './src/index.html';
const indexOutput = 'index.html';

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
      extensions: [
        '.js',
        '.ts',
        '.tsx',
        '.json',
        '.scss',
        '.css',
        '.png',
        '.svg',
        '.jpeg',
        '.jpg',
      ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'images',
          },
        }, ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: indexOutput,
      template: indextInput,
    })
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
