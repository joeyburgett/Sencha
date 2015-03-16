/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('Desktop.Application', {
    extend: 'Ext.app.Application',
    name: 'Desktop',
    controllers: [
        'Main'
    ],
    launch: function () {

        Ext.widget({
            xtype: 'dialog',
            renderTo: Ext.getBody(),
            height: 500,
            width: 700,
            frame: true,
            title: 'Complex Binding Sample'
        });
    }
});
