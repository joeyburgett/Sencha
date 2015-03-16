/**
 * Created by Joey Burgett on 3/15/2015.
 */
Ext.define('Desktop.model.FieldsModel', {
    extend: 'Ext.data.Model',
    fields:[
        { name: 'name', type: 'string'},
        { name: 'description', type: 'string'},
        { name: 'type', type: 'string'}
    ],
    belongsTo: [
        'ResourcesModel'
    ]
});