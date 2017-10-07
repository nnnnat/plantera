var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')

module.exports = {
  entry: './src/inedx.js',
  output: {
    filename: 'scripts.js',
    path: path.resolve('./dist')
  },
  resolve: { extensions: ['.js', '.jsx', '.css'] },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'html=loader?interpolate' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?modules&importLoaders=1&localIdentName=[name]_[local]!postcss-loader' }) },
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
