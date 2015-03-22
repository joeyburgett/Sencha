/**
 * Created by Joey Burgett on 3/21/2015.
 */
var config = {
    development: {
        express: {
            port: 3000
        },
        sse: {
            textInterval: 1000,
            objectInterval: 5000
        }
    },
    testing: { },
    production: { }
};

module.exports = config[process.env.NODE_ENV || 'development'];