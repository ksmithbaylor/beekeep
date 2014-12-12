'use strict';

module.exports = function ($scope, $ionicSideMenuDelegate) {
    $scope.asdf = 3;
    $scope.toggleLeftMenu = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
};
