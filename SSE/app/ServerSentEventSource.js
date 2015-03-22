Ext.define('ServerSentEventSource', {
    alias: 'widget.eventsource',
    requires: ['Ext.util.TaskManager'],
    mixins: {
        observable: 'Ext.util.Observable'
    },

    config: {
        url: ''
    },

    CONNECTING: 0,
    OPEN: 1,
    CLOSING: 2,
    CLOSED: 3,

    constructor: function (cfg) {
        var me = this;

        if (Ext.isEmpty(cfg)) {
            Ext.Error.raise('URL is required!');
            return null;
        }

        if (Ext.isString(cfg)) {
            cfg = {
                url: cfg
            };
        }

        me.initConfig(cfg);
        me.mixins.observable.constructor.call(me, cfg);

        me.addEvents('open','error','close','message');

        try {
            me.init();
        }
        catch (err) {
            Ext.Error.raise(err);
            return null;
        }

        return me;
    },

    isReady: function () {
        return (this.getStatus() === this.OPEN);
    },

    getStatus: function () {
        return this.es.readyState;
    },

    close: function () {
        var me = this;

        me.es.close();
        me.fireEvent('close', me);

        return me;
    },

    init: function () {
        var me = this;

        if (Ext.isEmpty(EventSource))
            throw 'SSE not supported.';

        me.es = new EventSource(me.getUrl());

        me.es.onopen = function () {
            me.fireEvent('open', me);

            for (var event in me.events) {
                me.attachEvent(event);
            }
        };

        me.es.onerror = function (error) {
            me.fireEvent('error', me, error);
        };

        me.es.onclose = function () {
            me.fireEvent('close', me);
        };

        me.es.onmessage = Ext.bind(me.receiveMessage, this);
    },

    receiveMessage: function (message, event) {
        var me = this,
            msg = Ext.JSON.decode(message.data, true);

        if (Ext.isEmpty(msg))
            msg = message.data;

        event = event || 'message';
        me.fireEvent(event, me, msg);
    },

    attachEvent: function (event) {
        var me = this;

        if (!me.hasListener(event)) {
            me.es.addEventListener(event, function (message) {
                me.receiveMessage(message, event);
            });
        }
    },

    detachEvent: function (event) {
        var me = this;

        if (me.hasListener(event)) {
            me.es.removeEventListener(event, function (message) {
                me.receiveMessage(message, event);
            });
        }
    },

    addListener: function (event, fn, scope, options) {
        var me = this;

        if (!Ext.isEmpty(me.es)) {
            if (Ext.isString(event)) {
                me.attachEvent(event);
            }
            else {
                for (var eventName in event) {
                    me.attachEvent(eventName);
                }
            }
        }

        me.mixins.observable.addListener.apply(me, arguments);
    },

    removeListener: function (event, fn, scope, options) {
        var me = this;

        if (!Ext.isEmpty(me.es)) {
            if (Ext.isString(event)) {
                me.detachEvent(event);
            }
            else {
                for (var eventName in event) {
                    me.detachEvent(eventName);
                }
            }
        }

        me.mixins.observable.removeListener.apply(me, arguments);
    }
});