function CacheService () {
    this.Moment = require('moment');
    this.CacheModel = require('../model/cache');
}

CacheService.prototype.find = function (key, callback) {
    this.CacheModel.find({key: key}, function (err, results) {
        if (err) {
            return callback(null);
        }

        if (results.length < 1) {
            return callback(null);
        }

        return callback(results[0]);
    });
};
CacheService.prototype.update = function (cache, callback) {
    if (!cache) {
        return callback();
    }

    cache.save(function() {
        return callback();
    });
};

CacheService.prototype.isExpired = function (cache) {
    if (!cache) {
        return true;
    }

    return cache.expiresOn < new Date();
};

module.exports = new CacheService();