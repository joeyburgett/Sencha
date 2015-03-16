/**
 * Created by Joey Burgett on 3/15/2015.
 */
Ext.define('Desktop.view.CompanyGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.companygrid',
    uses: [
        'Ext.grid.plugin.CellEditing'
    ],

    initComponent: function () {
        var me = this,
            cfg = {};

        Ext.apply(cfg, {
            store: Ext.getStore('CompanyStore'),
            columns: [{
                text: 'Company Name',
                dataIndex: 'name',
                flex: 1,
                editor: {
                    xtype: 'textfield'
                }
            }, {
                text: 'Title',
                dataIndex: 'title',
                editor: {
                    xtype: 'textfield'
                }
            }, {
                text: 'License',
                dataIndex: 'license',
                editor: {
                    xtype: 'textfield'
                }
            }],
            listeners: {
                selectionchange: 'onSelectionChange'
            },
            selModel: {
                allowDeselect: true
            },
            plugins: [{
                ptype: 'cellediting',
                clicksToEdit: 2,
                pluginId: 'cellediting'
            }],
            tbar: {
                xtype: 'toolbar',
                items: ['->', {
                    text: 'Add',
                    itemId: 'addRecord',
                    handler: me.onAddRecord,
                    scope: me
                }]
            }
        });

        Ext.apply(me, cfg);

        me.callParent(arguments);
    },

    onAddRecord: function () {
        var me = this,
            store = me.getStore(),
            record = store.add({})[0];

        record.set('id', null);

        me.getPlugin('cellediting').startEdit(record, 0);
    },

    onSelectionChange: function (selModel, selected, eOpts) {
        this.fireEvent('rowselectionchange', this, selected, eOpts);
    }
});