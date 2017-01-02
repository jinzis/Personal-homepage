var  express = require('express');
var webpack = require('webpack');
var path = require('path');
var config = require('./webpack.dev.config');
var DevMidddleWare = require('webpack-dev-middleware');
var HotMiddleWare = require('webpack-hot-middleware');
var app = express();

var compiler = webpack(config);

app.use('/static',express.static(config.commonPath.staticDir));

app.use(require('connect-history-api-fallback')());

app.use(DevMidddleWare(compiler,{
    noInfo: true,
    publicPath: config.commonPath.build
}));

app.use(HotMiddleWare(compiler));

app.listen(8080, function(err) {
    err && console.log(err);
})