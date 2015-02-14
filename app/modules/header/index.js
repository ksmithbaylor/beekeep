'use strict';

module.exports = require('angular').module('beekeep.header', ['ionic', 'beekeep.scanner']);

module.exports.controller('HeaderController', require('./HeaderController'));
module.exports.directive('hive-number-entry', require('./HiveNumberEntryDirective'));
