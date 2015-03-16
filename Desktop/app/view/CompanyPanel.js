/**
 * Created by Joey Burgett on 3/15/2015.
 */
Ext.define('Desktop.view.CompanyPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'companypanel',
    cls: 'company-panel',
    data: {},
    bodyPadding: 10,
    tpl: [
        '<table>',
        '<tr><td>Company Name:</td><td><strong>{name}</strong></td></tr>',
        '<tr><td>Title:</td><td><strong>{title}</strong></td></tr>',
        '<tr><td>License:</td><td><strong>{license}</strong></td></tr>',
        '</table>'
    ],
    loadRecord: function (record) {
        var me = this;

        if (record) {
            me.update(record.getData());
        } else {
            me.update({});
        }
    }
});