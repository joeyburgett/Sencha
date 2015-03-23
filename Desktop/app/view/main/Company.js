/**
 * Created by Joey Burgett on 3/15/2015.
 */
Ext.define('Desktop.view.main.Company', {
    extend: 'Ext.window.Window',
    xtype: 'dialog',

    requires: [
        //'Desktop.view.main.CompanyDataView',
        'Desktop.view.main.CompanyController',
        'Desktop.view.main.CompanyForm',
        'Desktop.model.CompanyModel',
        'Desktop.view.main.CompanyGrid',
        //'Desktop.view.main.CompanyPanel',
        'Desktop.view.main.CompanyViewModel'
    ],

    controller: 'company',

    autoShow: true,

    viewModel: {
        type: 'company'
    },

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    defaults: {
        border: true
    },

    items: [{
        xtype: 'companygrid',
        title: 'Companies',
        height: 220
    }, {
        xtype: 'companyform',
        title: 'Company Form',
        height: 150
    }]
});