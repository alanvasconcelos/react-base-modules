const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve('public'),
    filename: '[name].bundle.js'
  },
  devServer: {
    port: 8080,
    contentBase: './public'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      modules: path.join(__dirname, '/node_modules')
    }
  },
  module: {
    rules: [
      {
        test: /.js[x]?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['react'],
              plugins: ['transform-object-rest-spread', 'babel-plugin-syntax-dynamic-import']
            }
          }
        ]
      },
      {
        test: /.css$/,
        loader: ['style-loader', 'css-loader']
      }
    ]
  },
  performance: {
    hints: false
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
}