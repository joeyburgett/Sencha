/**
 * Created by Joey Burgett on 3/15/2015.
 */
Ext.define('Desktop.view.main.CompanyGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'companygrid',

    requires: [
        'Ext.grid.plugin.CellEditing'
    ],

    plugins: [{
        ptype: 'cellediting'
    }],

    modelValidation: true,

    bind: {
        store: '{companies}'
    },

    reference: 'companyGrid',

    columns: [{
        text: 'Company Name',
        dataIndex: 'name',
        flex: 1,
        editor: {
            bind: '{currentCompany.name}',
            selectOnFocus: true
        }
    }, {
        text: 'Title',
        dataIndex: 'title',
        editor: {
            bind: '{currentCompany.title}',
            selectOnFocus: true
        }
    }, {
        text: 'License',
        dataIndex: 'license',
        editor: {
            bind: '{currentCompany.license}',
            selectOnFocus: true
        }
    }]
});