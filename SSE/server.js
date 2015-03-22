/**
 * Created by Joey Burgett on 3/20/2015.
 */
var express = require('express'),
    app = express(),
    config = require('./config/env'),
    api = require('./routes'),
    bodyParser = require('body-parser');

module.exports = app;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/', api);

// No matching route found
app.use(function (request, response, next) {
    var error = new Error('404 - Not Found');
    error.status = 404;

    next(error);
});

app.listen(config.express.port);
console.log('SSE server started on port: http://localhost:' + (config.express.port));