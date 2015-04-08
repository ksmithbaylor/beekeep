'use strict';

module.exports = require('angular').module('beekeep.home', ['ionic', 'beekeep.db']);
module.exports.controller('HomeController', require('./HomeController'));
