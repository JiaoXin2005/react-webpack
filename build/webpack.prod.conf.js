const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf.js')

module.exports = merge(baseWebpackConfig, {
  devtool: '#source-map',
  output: {
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              minimize: true
            }
          }, 'postcss-loader', 'sass-loader']
        })
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    new ExtractTextPlugin({
      filename: 'css/[name].css'
    }),

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),

    new CleanWebpackPlugin(['dist/*'], {
      root: path.resolve(__dirname, '../')
    })
  ]
})
