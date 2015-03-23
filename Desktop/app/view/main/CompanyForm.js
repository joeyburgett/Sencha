/**
 * Created by Joey Burgett on 3/15/2015.
 */
Ext.define('Desktop.view.main.CompanyForm', {
    extend: 'Ext.form.Panel',
    xtype: 'companyform',

    requires: [
        'Ext.form.field.Text'
    ],

    bodyPadding: 10,

    bind: {
        //title: '<h3>{currentCompany.name}</h3>'
    },

    modelValidation: true,

    fieldDefaults: {
        labelWidth: 70,
        labelAlign: 'right',
        selectOnFocus: true,
        flex: 1,
        anchor: '100%'
    },

    items: [{
        fieldLabel: 'Title',
        bind: '{currentCompany:title}'
    }, {
        layout: 'hbox',
        anchor: '100%',
        defaults: {
            xtype: 'textfield'
        },
        items: [{
            fieldLabel: 'Name',
            bind: '{currentCompany.name}'
        },{
            fieldLabel: 'License',
            bind: '{currentCompany.license}'
        }]
    }],

    buttons: [{
        text: 'Save',
        handler: 'save',
        disabled: true,
        bind: {
            disabled: '{!status.dirtyAndValid}'
        }
    }, {
        text: 'Cancel',
        handler: 'cancel',
        disabled: true,
        bind: {
            disabled: '{!status.dirty}'
        }
    }]
});