const http = require('http');
const express = require('express');
const app = express();
const isDevMode = process.env.NODE_ENV === 'development';
const request = require('request');
const path = require('path');

app.use(require('morgan')('short'));

let webpack = null;
let webpackConfig = null;
let compiler = null;

(function initWebpack() {
    webpack = require('webpack');
    webpackConfig = require('./webpack/common.config');
    compiler = webpack(webpackConfig);

    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true, publicPath: '/'
    }));

    app.use(require('webpack-hot-middleware')(compiler, {
        log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000,
    }));

    app.use(express.static(__dirname + '/'));
})();

app.get('*', function root(req, res, next) {
    //res.sendFile(__dirname + '/index.html');

    /*const webpack = require('webpack');
    const webpackConfig = require('./config/webpack.common.config');
    const compiler = webpack(webpackConfig);*/

    const filename = path.join(compiler.outputPath,'index.html');
    compiler.outputFileSystem.readFile(filename, function(err, result){
        if (err) {
            return next(err);
        }
        res.set('content-type','text/html');
        res.send(result);
        res.end();
    });
});

const server = http.createServer(app);
server.listen(process.env.PORT || 3000, function onListen() {
    const address = server.address();
    console.log('Listening on: %j', address);
    console.log('URL: http://localhost:%d', address.port);
});
