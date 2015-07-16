'use strict';

var co = require('co');
var reFind = require('../../common/util/reFind');

function confirm($ionicPopup, title, template, action) {
  $ionicPopup.confirm({
    title: title,
    template: template,
    okText: 'Yes',
    okType: 'button-dark',
    cancelText: 'No'
  }).then(function (response) {
    if (response) {
      action();
    }
  });
}

module.exports = function($scope, $rootScope, $stateParams, $ionicHistory, $ionicPopup, DB) {
  reFind($scope, $stateParams, DB, 'app.yardDetail', 'Yard');

  $scope.updateYard = function() {
    co(function *() {
      $scope.yard = yield DB.Yard.save($scope.yard);
      $rootScope.update('Yard');
      $ionicHistory.goBack();
    });
  };

  $scope.cancel = function() {
    confirm($ionicPopup, 'Cancel', 'Close without saving?', function() {
      $ionicHistory.goBack();
    })
  };

  $scope.deleteYard = function() {
    confirm($ionicPopup, 'Delete', 'Are you sure you want to permanently delete this Bee Yard?', function() {
      co(function *() {
        yield DB.Yard.destroy($scope.yard);
        $rootScope.update('Yard');
        $ionicHistory.goBack();
      });
    });
  };
};
