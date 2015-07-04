'use strict';

module.exports = require('angular').module('beekeep.browse', ['ionic']);
module.exports.controller('YardController', require('./yards/YardController'));
module.exports.controller('YardNewController', require('./yards/YardNewController'));
