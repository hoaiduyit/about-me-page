const express = require('express'),
    path = require('path'),
    http = require('http');

const app = express();

const PORT = process.env.PORT || 9090;

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type");
    next();
});
app.use(express.static(path.join(__dirname, '.')));

http.createServer(app).listen(PORT);
console.log('Server is running');