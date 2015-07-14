'use strict';

var co = require('co');
var reFind = require('../../common/util/reFind');

module.exports = function($scope, $rootScope, $stateParams, $ionicHistory, DB) {
  reFind($scope, $stateParams, DB, 'app.yardDetail', 'Yard');

  $scope.updateYard = function() {
    co(function *() {
      $scope.yard = yield DB.Yard.save($scope.yard);
      $rootScope.update('Yard');
      $ionicHistory.goBack();
    });
  };
};
