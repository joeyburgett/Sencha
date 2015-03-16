/**
 * Created by Joey Burgett on 3/15/2015.
 */
Ext.define('Desktop.controller.Main', {
    extend: 'Ext.app.Controller',
    stores: [
        'CompanyStore'
    ],
    models: [
        'CompanyModel',
        'FieldsModel',
        'ResourcesModel'
    ],
    views: [
        'MainView',
        'CompanyPanel',
        'CompanyGrid',
        'CompanyForm',
        'CompanyDataView'
    ],
    refs: [{
        ref: 'dataview',
        selector: 'companydataview'
    }, {
        ref: 'form',
        selector: 'companyform'
    }, {
        ref: 'panel',
        selector: 'companypanel'
    }, {
        ref: 'grid',
        selector: 'companygrid'
    }],

    init: function () {
        var me = this;

        me.listen({
            component: {
                'companygrid': {
                    rowselectionchange: 'onRowSelectionChange',
                    edit: 'onGridEdit'
                },
                'companydataview': {
                    itemselectionchange: 'onItemSelectionChange'
                },
                'companyform button': {
                    click: 'onFormButtonClick'
                },
                'companyform field': {
                    change: 'onFormFieldChange'
                }
            }
        });
    },

    onGridEdit: function (editor, e) {
        var me = this;

        me.getForm().loadRecord(e.record);
        me.getPanel().loadRecord(e.record);
    },

    onFormFieldChange: function (field) {
        var me = this,
            form = me.getForm(),
            record = form.getRecord() || false;

        if (record) {
            form.updateRecord();
            me.getPanel().loadRecord(record);
        }

        form.updateUI();
    },

    onFormButtonClick: function (btn) {
        this.getForm()[Ext.String.format('{0}Record', btn.itemId)]();
    },

    onRowSelectionChange: function (grid, selected) {
        var me = this,
            record = selected[0] || false,
            sm = me.getDataview().getSelectionModel();

        me.getForm().loadRecord(record);
        me.getPanel().loadRecord(record);
        if (record) {
            sm.select([record]);
        } else {
            sm.deselectAll();
        }
    },

    onItemSelectionChange: function (view, selected) {
        var me = this,
            record = selected[0] || false;

        me.getForm().loadRecord(record);
        me.getPanel().loadRecord(record);
        me.getGrid().getSelectionModel().select(selected, false, true);
    }
});