'use strict';

var co = require('co');

module.exports = function($scope, $rootScope, DB, $ionicPlatform) {
  $scope.addThing = function(thing) {
    return co(function* () {
      var created = yield DB[thing].create();
      yield $rootScope.update(thing);
    });
  }

  $scope.removeFirstThing = function(thing) {
    return co(function* () {
      var instance = yield DB[thing].first();
      if (instance) yield DB[thing].destroy(instance);
      yield $rootScope.update(thing);
    });
  };
};
