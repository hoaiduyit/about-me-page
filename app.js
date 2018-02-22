const express = require('express'),
    path = require('path'),
    http = require('http'),
    body = require('body-parser'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpack = require('webpack');

const app = express();

const compiler = webpack({
    entry: './src/js/app.js',
    output: {
        path:'/',
        filename: 'index.js',
    },

    devServer: {
        inline: true,
        port: 9090
    },

    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
});

app.use(webpackDevMiddleware(compiler));

app.use(body.urlencoded({
    extended: true
}));

app.use(body.json());

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type");
    next();
});
app.use(express.static(path.join(__dirname, '.')));

http.createServer(app).listen(9090);
console.log('Server is running');