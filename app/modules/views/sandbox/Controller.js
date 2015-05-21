'use strict';

var co = require('co');

module.exports = function($scope, DB, $ionicPlatform) {
  $scope.data = {};

  update();

  function update() {
    return co(function* () {
      $scope.data.hives = yield DB.Hive.all();
      $scope.$apply();
    });
  }

  $scope.addHive = function() {
    co(function* () {
      var hive = yield DB.Hive.create();
      yield update();
    });
  };

  $scope.removeFirstHive = function() {
    co(function* () {
      var hive = yield DB.Hive.first();
      if (hive) yield DB.Hive.destroy(hive);
      yield update();
    });
  };
};