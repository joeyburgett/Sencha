/**
 * Created by Joey Burgett on 3/15/2015.
 */
Ext.define('Desktop.model.CompanyModel', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: [
        { name: 'id', type: 'int', useNull: true },
        {name: 'title', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'license', type: 'string'}
    ],
    validators: {
        name: 'presence',
        title: 'presence',
        license: 'presence'
    }
});