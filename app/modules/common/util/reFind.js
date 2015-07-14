'use strict';

var co = require('co');

module.exports = function reFind($scope, $stateParams, DB, stateName, type) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    if (toState.name === stateName) {
      if (window.DEBUG) console.log('entered', stateName);

      co(function *() {
        // This controller is used for the Yards
        // view. If $stateParams.id exists, we are in the yard-pallets view and
        // should find that yard in the DB. Otherwise, just use an empty object.
        var found = $stateParams.id ? yield DB[type].find($stateParams.id) : {};

        // To avoid `$digest cycle already in progress` errors that would have
        // happened if we did a simple $scope.$apply() here.
        $scope.$evalAsync(function() {
          $scope[type.toLowerCase()] = found;
        });
      });
    }
  });
}
