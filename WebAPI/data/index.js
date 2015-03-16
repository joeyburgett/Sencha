// data/index.js
(function (data) {
    
    var seedData = require('./seed');
    var database = require('./database');

    data.getCompanies = function (next) {
        database.getDb(function (error, db) {
            if (error) {
                next(error);
            } else {
                db.findAll(function (err, result) {
                    if (err) {
                        next(err);
                    } else {
                        next(null, result);
                    }
                });
            }
        });
    };

    data.getCompany = function (id, next) {
        database.getDb(function(error, db) {
            if (error) {
                next(error);
            } else {
                db.find(id, function (err, result) {
                    if (err) {
                        next(err);
                    } else {
                        next(null, result);
                    }
                });
            }
        });
    };

    data.createCompany = function (record, next) {
        database.getDb(function (error, db) {
            if (error) {
                next(error);
            } else {
                db.save(record);
                next(null, record);
            }
        });        
    };
    
    data.deleteCompany = function(id, next) {
        database.getDb(function (error, db) {
            if (error) {
                next(error);
            } else {
                db.remove(id, function (err, result) {
                    if (err) {
                        next(err);
                    } else {
                        next(null, result);
                    }
                });
            }
        });
    };
    
    function seedDatabase() {
        database.getDb(function(error, db) {
            if (error) {
                console.log('Seed Failed - ' + error);
            } else {
                if (db.count() == 0) {
                    for (var i = 0; i < seedData.initialRecords.length; i++) {
                        db.save(seedData.initialRecords[i]);
                    }
                    console.log('Seeded ' + db.count() + ' records.');
                } else {
                    console.log('Already seeded (' + db.count() + ' records)');
                }
            }
        });
    }
    
    seedDatabase();
})(module.exports);