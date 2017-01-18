var path = require("path")
var webpack = require("webpack")
var HtmlWebpackPlugin = require('html-webpack-plugin')
var rootPath = path.resolve(__dirname,'..')
var srcPath = path.join(rootPath,'src')
var env = process.env.NODE_ENV.trim()
var commonPath = {
    rootPath: rootPath,
    srcPath: srcPath,
    build: path.join(rootPath,'build'),
    indexHtml: path.join(srcPath,'index.html'),
    staticDir: path.join(rootPath,'static')//不需要编译的静态资源
}
var config = {
    commonPath: commonPath,
    entry: {
        app: path.join(commonPath.srcPath, 'index.js'),
        vendor: [//要单独打包的公共文件
            'react',
            'react-dom',
        ]
    },//可以是数组、对象、字符串
    output: {
        path: commonPath.build,//存放打包后文件的输出目录
        publicPath: '/static/'//指定资源文件引用的目录
    },
     resolve: {
        extensions: ["", ".js", ".css", ".jsx", ".json"], 
        alias: {}//配置别名    
    },
    
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                loaders: ["react-hot", "babel?cacheDirectory=true"],//热更新，babel是babel-loader的简写，将Es6转为ES5,加快打包速度
                exclude: path.join(rootPath, 'node_modules')//排除这个文件
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'url',
                query: {
                    limit: 10240, //10KB以下使用base64
                    name: 'img/[name]-[hash:6].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/,
                loader: 'url-loader?limit=10240&name=[name]-[hash:6].[ext]'//图标字体和文件
            },
        ]
    },
    eslint: {
        configFile: path.join(commonPath.rootPath,'.eslintrc')
    },
    plugins: [
        new HtmlWebpackPlugin({
            // filename: 'index.html',
            title: 'Home',
            template:commonPath.indexHtml,
            favicon: path.join(commonPath.srcPath,'favicon.ico'),
            // inject: 'body'
        }),
        new webpack.DefinePlugin({
            __DEV__: env === 'development',
            __PROD__: env === 'production'
        })
    ],
   
}

module.exports = config