'use strict';

var co = require('co');

module.exports = function($scope, $rootScope, DB) {
  // Use an object literal here so updating $scope.yard doesn't also update the
  // defaults.
  $scope.yard = {type: 'honey'};

  $scope.submitNewYard = function() {
    co(function *() {
      yield DB.Yard.create($scope.yard);
      $rootScope.update('Yard');
      $scope.yard = {type: 'honey'};
      $scope.goBack();
    });
  };
};
