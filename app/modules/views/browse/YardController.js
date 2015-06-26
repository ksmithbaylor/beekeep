'use strict';

var co = require('co');

module.exports = function($scope, $rootScope, $stateParams, $ionicHistory, DB) {
  $scope.newYard = {};

  $scope.submitNewYard = function() {
    co(function *() {
      yield DB.Yard.create($scope.newYard);
      $rootScope.update('Yard');
      $scope.newYard = {};
      $ionicHistory.goBack();
    });
  };

  co(function *() {
    $scope.yard = yield DB.Yard.find($stateParams.id);
    $scope.$apply();
  });
};
