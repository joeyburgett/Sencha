/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('Desktop.Application', {
    extend: 'Ext.app.Application',
    name: 'Desktop',

    views: [
        'login.Login',
        'login.Register',
        'main.Company'
    ],

    launch: function () {
        var token = localStorage.getItem('X-Access-Token');

        Ext.widget(token ? 'dialog' : 'login');
    }
});
