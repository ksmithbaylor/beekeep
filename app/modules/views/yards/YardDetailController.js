'use strict';

var co = require('co');
var reFind = require('../../common/util/reFind');

module.exports = function($scope, $rootScope, $stateParams, $ionicHistory, $ionicPopup, DB) {
  reFind($scope, $stateParams, DB, 'app.yardDetail', 'Yard');

  $scope.updateYard = function() {
    co(function *() {
      $scope.yard = yield DB.Yard.save($scope.yard);
      $rootScope.update('Yard');
      $ionicHistory.goBack();
    });
  };

  $scope.deleteYard = function() {
    co(function *() {
      console.log('trying to delete');
      $ionicPopup.confirm({
        title: 'Delete Yard',
        template: 'Are you sure you want to permanently delete this Bee Yard?'
      }).then(function (response) {
        if (response) {
          co(function *() {
            yield DB.Yard.destroy($scope.yard);
            $rootScope.update('Yard');
            $ionicHistory.goBack();
          });
        }
      })
    })
  }
};
