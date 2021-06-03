const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

 mode: 'development',
  entry: {
    index: './src/app/index.js',
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
     title: 'Mawashi front',
     template: './src/index.html'
    }),
  ],
  devServer: {
    contentBase: './dist',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};