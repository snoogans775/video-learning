const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const dotenv = require('dotenv');

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', 'index.js'],
  devServer : {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    port: 3003
  },
  devtool : 'source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'tccmedia.js',
    // publicPath: '/'
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    alias: {
      react: path.join(__dirname, 'node_modules', 'react'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            }
          }
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({template: './src/index.html'}),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed)
    })
  ],
};
