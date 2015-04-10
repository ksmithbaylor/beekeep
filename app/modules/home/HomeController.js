'use strict';

module.exports = function($scope, $rootScope, DB) {
  $scope.data = {};

  DB.rel.find('hive').then(function(res) {
    $scope.data.numHives = res.hives.length;
  }).catch(function(err) {
    console.log('ERROR:', err);
  });
};
