'use strict';

var co = require('co');

module.exports = function($scope, $rootScope, $stateParams, $ionicHistory, $ionicNavBarDelegate, DB) {
  console.log('loaded yardPallets controller');

  // Immediately upon loading
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    if (toState.name === 'app.yardPallets') {
      console.log('entered yardPallets screen');
      co(function *() {
        // This controller is used for the Browse home page and the yard-pallets
        // view. If $stateParams.id exists, we are in the yard-pallets view and
        // should find that yard in the DB. Otherwise, just use an empty object.
        var found = $stateParams.id ? yield DB.Yard.find($stateParams.id) : {};

        // To avoid `$digest cycle already in progress` errors that would have
        // happened if we did a simple $scope.$apply() here.
        $scope.$evalAsync(function() {
          $scope.yard = found;
        });
      });
    }
  });
};
