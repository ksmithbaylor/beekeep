'use strict';

module.exports = require('angular').module('beekeep.db', ['pouchdb']);
module.exports.factory('DB', require('./Factory'));
