'use strict';

module.exports = require('angular').module('beekeep.scanner', ['ionic', 'ngCordova']);
module.exports.factory('ScannerService', require('./Service'));
