/**
 * Created by Joey Burgett on 3/20/2015.
 */
Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'ServerSentEventSource': 'ServerSentEventSource.js'
    }
});

Ext.require(['ServerSentEventSource']);

Ext.onReady(function () {
    var esText = null,
        esEvent = null;

    Ext.create('Ext.container.Container', {
        renderTo: Ext.getBody(),

        layout: {
            type: 'hbox',
            align: 'middle',
            pack: 'center'
        },

        items: [{
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            width: 800,

            items: [{
                xtype: 'panel',

                title: 'SSE Consumer',
                titleAlign: 'center',

                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },

                items: [{
                    xtype: 'panel',
                    title: 'Plain Text',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [{
                        xtype: 'container',
                        html: '<div id="logText" style="height: 260px; border: black solid 1px; padding: 5px; overflow: auto"></div>'
                    }],
                    bbar: {
                        type: 'toolbar',
                        items: [{
                            text: 'Connect',
                            name: 'connect',
                            listeners: {
                                click: function (btn) {
                                    var logText = Ext.get('logText');

                                    logText.dom.innerHTML += "Opening text notifications channel...<br />";
                                    btn.hide();
                                    btn.up('toolbar').down('button[name=close]').show();

                                    esText = Ext.create('ServerSentEventSource', {
                                        url: 'http://localhost:3000/text',
                                        listeners: {
                                            open: function (es) {
                                                logText.dom.innerHTML += "Text notifications channel opened!<br />";
                                            },
                                            close: function (es) {
                                                logText.dom.innerHTML += "Text notifications channel closed!<br />";
                                            },
                                            error: function (es, error) {
                                                Ext.Error.raise(error);
                                            },
                                            message: function (es, message) {
                                                logText.dom.innerHTML += message + "<br />";
                                            }
                                        }
                                    });
                                }
                            }
                        }, {
                            text: 'Close',
                            name: 'close',
                            hidden: true,
                            listeners: {
                                click: function (btn) {
                                    esText.close();
                                    btn.hide();
                                    btn.up('toolbar').down('button[name=connect]').show();
                                }
                            }
                        }]
                    }
                }, {
                    xtype: 'panel',
                    title: 'Event (Object)',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [{
                        xtype: 'container',
                        html: '<div id="logEvent" style="height: 260px; border: black solid 1px; padding: 5px; overflow: auto"></div>'
                    }],
                    bbar: {
                        type: 'toolbar',
                        items: [{
                            text: 'Connect',
                            name: 'connect',
                            listeners: {
                                click: function (btn) {
                                    var logEvent = Ext.get('logEvent');

                                    logEvent.dom.innerHTML += "Opening event notifications channel...<br />";
                                    btn.hide();
                                    btn.up('toolbar').down('button[name=close]').show();

                                    esEvent = Ext.create('ServerSentEventSource', {
                                        url: 'http://localhost:3000/event',
                                        listeners: {
                                            open: function (es) {
                                                logEvent.dom.innerHTML += "Event notifications channel opened!<br />";
                                            },
                                            close: function (es) {
                                                logEvent.dom.innerHTML += "Event notifications channel closed!<br />";
                                            },
                                            error: function (es, error) {
                                                Ext.Error.raise(error);
                                            }
                                        }
                                    });

                                    esEvent.on('foo', function (es, message) {
                                        logEvent.dom.innerHTML += 'event: foo' + ' - {date:' + message.date + ', msg:' + message.message + "}<br />";
                                    });
                                }
                            }
                        }, {
                            text: 'Close',
                            name: 'close',
                            hidden: true,
                            listeners: {
                                click: function (btn) {
                                    esEvent.close();
                                    btn.hide();
                                    btn.up('toolbar').down('button[name=connect]').show();
                                }
                            }
                        }]
                    }
                }]
            }]
        }]
    });
});