'use strict';

var co = require('co');

module.exports = function($scope, $rootScope, DB) {
  $scope.yard = {};

  $scope.submitNewYard = function() {
    co(function *() {
      yield DB.Yard.create($scope.yard);
      $rootScope.update('Yard');
      $scope.yard = {};
      $scope.goBack();
    });
  };
};
