var webpack = require('webpack');
var path = require('path');
var buildPath = path.resolve(__dirname,'../build');
var dps = require('../package.json').dependencies;

module.exports = {
    entry: {
        'react': Object.keys(dps)
    },
    output:{
        path: buildPath,
        filename: '[name].dll.js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.resolve(__dirname,'../build/[name]-manifest.json'),
            name: '[name]_library'//和output里面的library保持一致
        })
    ],
    debug: true
}