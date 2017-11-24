const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function  resolve(dir) {
  return path.resolve(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: resolve('src/main.js')
  },

  output: { /* 出口 */
    filename: '[name].js',
    path: resolve('dist'),
  },

  resolve: {
    alias: {
      '@': resolve('src'),
      'pages': resolve('src/pages')
    }
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader?cacheDirectory=true'],
        include: resolve('src')
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'image/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      inject: true
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return (
          module.resource && 
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(path.resolve(__dirname, '../node_modules')) === 0
        )
      }
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    })
  ]
}
