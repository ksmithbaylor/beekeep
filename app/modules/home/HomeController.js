'use strict';

module.exports = function($scope, $rootScope) {
    $scope.currentScanResult = 'initial';

    $rootScope.$on('scanCompleted', function(e, data) {
        console.log('HomeController got scanCompleted event: ' + data);
        $scope.currentScanResult = data;
    });
};
