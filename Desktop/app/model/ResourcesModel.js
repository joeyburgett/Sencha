/**
 * Created by Joey Burgett on 3/15/2015.
 */
Ext.define('Desktop.model.ResourcesModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'path', type: 'string'},
        {name: 'format', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'mediatype', type: 'string'}
    ],
    belongsTo: [
        'CompanyModel'
    ],
    validators: {
        name: 'presence',
        format: 'presence',
        path: 'presence',
        mediatype: 'presence'
    }
});