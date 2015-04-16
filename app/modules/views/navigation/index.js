'use strict';

module.exports = require('angular').module('beekeep.navigation', ['ionic', 'beekeep.scanner']);
module.exports.controller('NavigationController', require('./Controller'));
