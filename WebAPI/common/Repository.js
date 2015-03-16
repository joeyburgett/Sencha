// common/Repository.js

/**
 * Repository class deals with record persistence
 */
Repository = function() {
    this.records = [];
    this.nextId = 1;
};

 /**
  * Find a record by id
  * Param: id of the record to find
  * Param: callback function
  * Returns: callback with the record corresponding to the specified id
  */
Repository.prototype.find = function (id, callback) {
    try {
        var record = this.records.filter(function(item) {
            return item.id == id;
        })[0];

        if (!record) {
            throw new Error('Not Found.');
        }

        return callback(null, record);
    } catch(ex) {
        return callback(ex.message);
    }
};

/**
 * Find the index of a record
 * Param: id of the record to find
 * Returns: the index of the record identified by id
 */
Repository.prototype.findIndex = function(id) {
    var index = 1;
    this.records.forEach(function(item, key) {
        if (item.id == id) {
            index = key;
        }
    });

    return index;
};

/**
 * Get record count
 * Returns: the number of records
 */
Repository.prototype.count = function () {
    if (this.records) {
        return this.records.length;
    }

    return 0;
};

/**
 * Retrieve all records
 * Param: callback funcction
 * Returns: array of records
 */
Repository.prototype.findAll = function (callback) {
    try {
        return callback(null, this.records);
    } catch(e) {
        return callback('Error');
    }
};

/**
 * Save a record (create or update)
 * Param: record the record to save
 * Returns: save successful
 */
Repository.prototype.save = function (record) {
    try {
        if (record.id == null
            || record.id == 0
            || !this.records[0]) {
            record.id = this.nextId;
            this.records.push(record);
            this.nextId++;
        } else {
            var index = this.findIndex(record.id);
            this.records[index] = record;
        }

        return true;
    } catch(e) {
        return false;
    }
};

/**
 * Remove a record
 * Param: id the of the record to remove
 * Param: callback function
 * Returns: callback
 */
Repository.prototype.remove = function (id, callback) {
    try {
        var index = this.findIndex(id);
        this.records.splice(index, 1);
        return callback(null, true);
    } catch (e) {
        return callback("Couldn't Delete", false);
    }
};

// Export our class to global namespace
module.exports = new Repository();