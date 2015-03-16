/**
 * Created by Joey Burgett on 3/15/2015.
 */
Ext.define('Desktop.store.CompanyStore', {
    extend: 'Ext.data.Store',
    uses: [
        'Desktop.model.CompanyModel',
        'Desktop.model.FieldsModel',
        'Desktop.model.ResourcesModel'
    ],
    model: 'Desktop.model.CompanyModel',
    autoLoad: true,
    autoSync: true,
    proxy: {
        /**
         * This could be swapped out and mapped to CRUD endpoints.
         * -- The NodeJS webapi serves the same data contained in this static file
         */
        type: 'rest',
        url: 'http://localhost:3000/api',
        //type: 'ajax',
        //url: 'app/data/data.json',
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }
    }
});