const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/',
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
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
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
      pkg: require(path.resolve(__dirname, '../package.json')),
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'index.html'
    }),
    new ManifestPlugin({
      fileName: 'manifest.json',
      publicPath: path.resolve(__dirname, '../public'),
    }),
  ],
  devServer: {
    historyApiFallback: true, // redirect all server requests to /index.html
    contentBase: path.resolve(__dirname, '../dist'),
    compress:true,
    port: 8080,
    open: true
  }
};
