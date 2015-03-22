/**
 * Created by Joey Burgett on 3/20/2015.
 */
var ServerSentEvent = require('../common/ServerSentEvent'),
    util = require('util'),
    config = require('../config/env'),
    redis = require('redis'),
    publisherClient = redis.createClient();

SSEController = function () {};

SSEController.prototype.setEvent = function(request, response) {
    publisherClient.publish('events', util.format('"%s" event created', request.params.name));
    response.writeHead(200, ServerSentEvent.HEADER);
    response.write(util.format('"%s" broadcast to all subscribers"', request.params.name));
    response.end();
};

SSEController.prototype.getMonitor = function (request, response) {
    request.socket.setTimeout(Infinity);

    var messageCount = 0;
    var subscriber = redis.createClient();

    subscriber.subscribe("events");

    subscriber.on("error", function (err) {
        console.log("Error: " + err);
    });

    // Message from Redis connection
    subscriber.on("message", function (channel, message) {
        var response = {
            id: messageCount++,
            data: message
        };

        response.write(ServerSentEvent.objectToSSE(response));
    });

    response.writeHead(200, ServerSentEvent.HEADER);

    request.on("close", function () {
        subscriber.unsubscribe();
        subscriber.quit();
    });
};

SSEController.prototype.getText = function (request, response) {
    response.writeHead(200, ServerSentEvent.HEADER);

    this.setInterval(function () {
        if (ServerSentEvent.textQueue.length > 0) {
            var message = {
                id: new Date().toLocaleTimeString(),
                data: ServerSentEvent.textQueue.pop()
            };

            response.write(ServerSentEvent.objectToSSE(message));
        }
    }, config.sse.textInterval);
};

SSEController.prototype.getEvent = function (request, response) {
    response.writeHead(200, ServerSentEvent.HEADER);

    this.setInterval(function () {
        if (ServerSentEvent.eventQueue.length > 0) {
            var event = ServerSentEvent.eventQueue.pop(),
                message = {
                    id: new Date().toLocaleTimeString(),
                    event: 'foo',
                    data: {
                        date: event.date,
                        message: event.message
                    }
                };

            response.write(ServerSentEvent.objectToSSE(message));
        }
    }, config.sse.objectInterval);
};

setInterval(function () {
    var date = new Date().toLocaleTimeString();
    ServerSentEvent.eventQueue.push({
        message: 'a message',
        date: date
    });
    ServerSentEvent.textQueue.push('[' + date + '] a message');
}, 3000);

module.exports = new SSEController();