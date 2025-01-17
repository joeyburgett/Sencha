﻿var http = require('http'),
    url = require('url'),
    bodyParser = require('body-parser'),
    express = require('express'),
    controllers = require('./controllers'),
    repository = require('./common/Repository.js');

var app = express();
app.use(bodyParser.json());

// Enable CORS
app.use(function(request, response, next){
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    response.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');

    next();
});

controllers.init(app);

var server = http.createServer(app);
server.listen(3000);

console.log('Server Listening.');

// TODO: Push notifications
var updater = require("./sockets");
updater.init(server);