'use strict';

module.exports = require('angular').module('beekeep.sandbox', ['ionic', 'beekeep.db']);
module.exports.controller('SandboxController', require('./Controller'));
