/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    extend: 'Desktop.Application',
    name: 'Desktop',
    controllers: [
        'Main'
    ],
    launch: function () {
        Ext.widget('dialog', {
            autoShow: true,
            width: 1015,
            height: 400,
            renderTo: Ext.getBody()
        });
    }
});
