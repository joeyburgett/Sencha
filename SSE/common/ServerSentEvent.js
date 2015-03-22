/**
 * Created by Joey Burgett on 3/21/2015.
 */
var _ = require('underscore'),
    util = require('util');

ServerSentEvent = function () {
    this.eventQueue = [];
    this.textQueue = [];
    this.HEADER = {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*'
    };
};

ServerSentEvent.prototype.objectToString = function (key, value) {
    var message = util.format('"%s":', key);

    if (_.isObject(value)) {
        _.each(value, function (v, k) {
            message += util.format('[%s]', objectToString(k, v));
        });
    }
    else if (_.isArray(value)) {
        message += util.format('[%s]', value.join(','));
    }
    else {
        message += util.format('"%s"', value);
    }

    return message;
};

ServerSentEvent.prototype.objectToSSE = function (obj) {
    var message = '';

    if (_.isString(obj)) {
        message = util.format('data:%s\n', obj);
    }
    else if (_.isObject(obj)
        && !_.isUndefined(obj)
        && !_.isNull(obj)) {

        if (!_.isUndefined(obj.id)
            && !_.isNull(obj.id)) {
            message += util.format('id:%s\n', obj.id);
        }

        if (!_.isUndefined(obj.event)
            && !_.isNull(obj.event)) {
            message += util.format('event:%s\n', obj.event);
        }

        if (_.isNumber(obj.retry)) {
            message += util.format('retry:%s\n', obj.retry);
        }

        if (!_.isUndefined(obj.data)
            && !_.isNull(obj.data)) {
            if (_.isObject(obj.data)) {
                message += 'data: {';

                var messages = [];

                _.each(obj.data, function (val, key) {
                    messages.push(ServerSentEvent.prototype.objectToString(key, val));
                });

                message += messages.join(',') + "}\n";
            }
            else if (_.isArray(obj.data)) {
                message += util.format('data:[%s]\n', obj.data.split(','));
            }
            else {
                message += util.format('data:%s\n', obj.data);
            }
        }
    }
    message += '\n';
    return message;
};

module.exports = new ServerSentEvent();