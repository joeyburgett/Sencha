// data/database.js
(function(database) {
    var source = require("../common/Repository.js");
    var theDb = null;
    
    database.getDb = function(next) {
        if (!theDb) {
            theDb = source;
        }

        next(null, theDb);
    };

})(module.exports);