'use strict';

var co = require('co');

module.exports = function($scope, $rootScope, $stateParams, DB) {
  $scope.updateYard = function() {
    co(function *() {
      yield DB.Yard.save($scope.yard);
      $rootScope.update('Yard');
      $scope.goBack();
    });
  };

  co(function *() {
    $scope.yard = yield DB.Yard.find($stateParams.id);
    $scope.$apply();
  });
};
