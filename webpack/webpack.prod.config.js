var webpack = require('webpack');
var config = require('./webpack.base.config.js');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

config.output.filename = '[name].[chunkhash:6].js';
config.output.chunkFilename = '[id].[chunkhash:6].js';

config.devtool = 'cheap-source-map';

config.module.loaders.push(
     {
        test: /\.css/,
        loader:ExtractTextPlugin.extract('style-loader','css-loader') //将.css的文件通过style标签内联到html里面
    },
    {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract('style-loader','css-loader','sass-loader')
    }
)

config.plugins.push(
    // new CopyWebpackPlugin([//拷贝资源插件
    //     {
    //         context: config.commonPath.rootPath,
    //         from: 'static/*',
    //         ignore:['*.md']
    //     }
    // ]),
    new webpack.optimize.DedupePlugin(),// 查找相等或近似的模块，避免在最终生成的文件中出现重复的模块
    new webpack.optimize.UglifyJsPlugin({//压缩混淆代码
        compress: {
            warnings: false
        }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),// 按引用频度来排序 ID，以便达到减少文件大小的效果
    new webpack.optimize.CommonsChunkPlugin({//抽取出第三方资源
        names: ['vendor', 'manifest']
    }),
    new ExtractTextPlugin('[name].[contenthash:6].css',{
        allChunks: true
    })
)

module.exports = config;