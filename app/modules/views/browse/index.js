'use strict';

module.exports = require('angular').module('beekeep.browse', ['ionic']);
module.exports.controller('YardDetailController', require('./yards/YardDetailController'));
module.exports.controller('YardPalletsController', require('./yards/YardPalletsController'));
module.exports.controller('YardNewController', require('./yards/YardNewController'));
