/**
 * Created by Joey Burgett on 3/15/2015.
 */
Ext.define('Desktop.view.CompanyForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.companyform',

    initComponent: function () {
        var me = this,
            cfg = {};

        Ext.apply(cfg, {
            defaultType: 'textfield',
            defaults: {
                anchor: '100%'
            },
            bodyPadding: 10,
            items: [{
                fieldLabel: 'Company Name',
                name: 'name'
            }, {
                fieldLabel: 'Title',
                name: 'title'
            }, {
                fieldLabel: 'License',
                name: 'license'
            }],
            buttons: [{
                text: 'Cancel',
                itemId: 'cancel',
                disabled: true
            }, {
                text: 'Save',
                itemId: 'save',
                disabled: true
            }]
        });

        Ext.apply(me, cfg);

        me.callParent(arguments);
    },

    loadRecord: function (record) {
        var me = this;
        if (record) {
            me.callParent([record]);
        } else {
            me.clearValues();
        }
    },

    clearValues: function () {
        var me = this;

        me.getForm()._record = null;
        me.getForm().setValues({
            name: '',
            title: '',
            license: ''
        });

        me.updateUI();
    },

    saveRecord: function () {
        var me = this,
            record = me.getRecord();

        if (record) {
            me.updateRecord();
            record.commit();
            me.updateUI();
        }
    },

    cancelRecord: function () {
        var me = this,
            record = me.getRecord();

        if (record) {
            record.reject();
            me.loadRecord(record);
            me.updateUI();
        }
    },

    updateUI: function () {
        var me = this,
            record = me.getRecord(),
            disabled = record && record.dirty
                ? false
                : true;

        Ext.each(me.query('button'), function (btn) {
            btn.setDisabled(disabled);
        });
    }
});