/**
 * Created by Joey Burgett on 3/15/2015.
 */
Ext.define('Desktop.model.CompanyModel', {
    extend: 'Desktop.model.BaseModel',

    fields: [{
        name: 'title',
        type: 'string'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'license',
        type: 'string'
    }],

    validators: {
        title: {type: 'presence'},
        name: {type: 'presence'},
        license: {type: 'presence'}
    }
});