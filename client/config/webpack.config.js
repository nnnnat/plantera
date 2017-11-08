var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'scripts.js',
    path: path.resolve('./dist')
  },
  resolve: { extensions: ['.js', '.jsx', '.css'] },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'html-loader?interpolate' },
      { test: /\.js|jsx$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { modules: true, importLoaders: 1, localIdentName: '[local]' }
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: './config/postcss.config.js'
                }
              }
            }
          ]
        })
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    historyApiFallback: true,
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/html/base.html' }),
    new ExtractTextPlugin({ filename: 'styles.css', allChunks: true })
  ]
}
