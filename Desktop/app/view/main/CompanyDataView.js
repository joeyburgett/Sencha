/**
 * Created by Joey Burgett on 3/15/2015.
 */
Ext.define('Desktop.view.main.CompanyDataView', {
    extend: 'Ext.view.View',
    xtype: 'companydataview',
    autoScroll: true,
    initComponent: function () {
        var me = this,
            cfg = {};

        Ext.apply(cfg, {
            //store: Ext.getStore('CompanyStore'),
            bind: '{companies}',
            itemSelector: 'div.company-item',
            tpl: [
                '<tpl for=".">',
                '<div class="company-item">',
                '<strong>{name}</strong> - {license}',
                '</div>',
                '</tpl>'
            ],
            listeners: {
                selectionchange: 'onSelectionChange'
            },
            selModel: {
                allowDeselect: true
            }
        });

        Ext.apply(me, cfg);

        me.callParent(arguments);
    },

    onSelectionChange: function (selModel, selected, eOpts) {
        this.fireEvent('itemselectionchange', this, selected, eOpts);
    }
});