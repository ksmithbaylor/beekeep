'use strict';

var co = require('co');
var reFind = require('../../../common/util/reFind');

module.exports = function($scope, $stateParams, DB) {
  reFind($scope, $stateParams, DB, 'app.yardPallets', 'Yard');
};
