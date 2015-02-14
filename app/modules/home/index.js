'use strict';

module.exports = require('angular').module('beekeep.home', ['ionic', 'beekeep.scanner']);
module.exports.controller('HomeController', require('./HomeController'));
