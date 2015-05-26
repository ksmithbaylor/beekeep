'use strict';

var co = require('co');

module.exports = function($scope, $stateParams, DB) {
  co(function *() {
    $scope.yard = yield DB.Yard.find($stateParams.id);
    $scope.$apply();
  })
};
