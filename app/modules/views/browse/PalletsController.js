'use strict';

var co = require('co');

module.exports = function($scope, $stateParams, DB) {
  co(function *() {
    var yard = yield DB.Yard.find($stateParams.id);
    $scope.thisYardsPallets = yard.pallets;
    $scope.$apply();
  });
};
