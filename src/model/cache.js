var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CacheSchema = new Schema({
    key: { type: String, required: true, unique: true },
    createdOn: Date,
    expiresOn: Date,
    cache: {
    }
});

module.exports = mongoose.model('SVMCache', CacheSchema);