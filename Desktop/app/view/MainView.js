/**
 * Created by Joey Burgett on 3/15/2015.
 */
Ext.define('Desktop.view.MainView', {
    extend: 'Ext.window.Window',
    alias: 'widget.dialog',
    tools:[{
        type: 'refresh',
        tooltip: 'Requery API',
        handler: function() {
            Ext.getStore('CompanyStore').reload();
        }
    }],

    initComponent: function () {
        var me = this,
            cfg = {};

        Ext.apply(cfg, {
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            defaults: {
                flex: 1
            },
            items: [{
                xtype: 'container',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                defaults: {
                    flex: 1,
                    margin: 5
                },
                items: [{
                    title: 'Company Grid',
                    xtype: 'companygrid'
                }, {
                    title: 'Template View',
                    layout: 'fit',
                    items: [{
                        xtype: 'companydataview'
                    }]
                }]
            }, {
                xtype: 'container',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                defaults: {
                    flex: 1,
                    margin: 5
                },
                items: [{
                    title: 'Company Form',
                    xtype: 'companyform',
                    frame: true
                }, {
                    title: 'Company Panel',
                    xtype: 'companypanel'
                }]
            }]
        });

        Ext.apply(me, cfg);

        me.callParent(arguments);
    }
});