'use strict';

module.exports = require('angular').module('beekeep.browse', ['ionic']);
module.exports.controller('BrowseController', require('./Controller'));
module.exports.controller('YardDetailController', require('./YardDetailController'));
module.exports.controller('PalletsController', require('./PalletsController'));
