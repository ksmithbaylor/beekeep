'use strict';

var co = require('co');


module.exports = function($scope, DB, $ionicPlatform) {
  $scope.data = {};

  updateCount();

  function updateCount() {
    co(function* () {
      var hives = yield DB.Hive.all()
      $scope.data.numHives = hives.length;
      $scope.$apply();
    });
  };

  $scope.addHive = function() {
    co(function* () {
      var hive = yield DB.Hive.create();
      updateCount();
    });
  };

  $scope.removeFirstHive = function() {
    co(function* () {
      var hive = yield DB.Hive.first();
      if (hive) yield DB.Hive.destroy(hive);
      updateCount();
    })
  };
};
