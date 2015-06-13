'use strict';

module.exports = require('angular').module('beekeep.browse', ['ionic']);
module.exports.controller('YardsController', require('./YardsController'));
module.exports.controller('YardDetailController', require('./YardDetailController'));
module.exports.controller('PalletsController', require('./PalletsController'));
