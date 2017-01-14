var webpack = require('webpack')
var path = require('path')
var config = require('./webpack.base.config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')//把css文件单独打包成一个文件
var HtmlWebpackPlugin = require('html-webpack-plugin')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')

var rootPath = config.commonPath.rootPath
var srcPath = config.commonPath.srcPath
var buildPath = config.commonPath.build

config.output.filename = '[name].js'
config.output.chunkFilename = '[id].js'//未被列在entry中，却又需要被打包出来的文件命名配置,异步加载时用
config.output.publicPath = '/'//这个地方写'/'浏览器访问localhost:8080，写'/static/'浏览器访问localhost:8080/static/

config.devtool = 'cheap-eval-source-map'

config.entry.app = [
    // 'eventsource-polyfill',
    // 'webpack-hot-middleware/client?reload=true',
    'webpack/hot/only-dev-server',
    'webpack-dev-server/client?http://0.0.0.0:3000',
    path.join(srcPath, 'index.js'),
]

config.module.loaders.push(
    {
        test: /\.css$/,
        loader: 'style!css'
    },
    {
        test: /\.scss$/,
        loader: 'style!css!sass'
    }
)

config.module.preLoaders=[{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }]


config.plugins.push(
    // new webpack.DllReferencePlugin({//确保vendor的版本不更新，提高打包效率
    //     context: __dirname,
    //     manifest: require(path.resolve(buildPath,'react.manifest.json')),
    //     name: 'react_library'
    // }),
    new webpack.optimize.OccurenceOrderPlugin(),//为模块分配ID
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].css')
    // new BrowserSyncPlugin(
    //     {
    //         host: '127.0.0.0',
    //         port: 9090,
    //         proxy: 'http://127.0.0.0:9090/',
    //         logConnections: false,
    //         notify: false
    //     },
    //     {
    //         reload: true
    //     }
    // )
)

module.exports = config