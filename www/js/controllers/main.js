'use strict';

angular.module('beekeep.controllers', ['ionic'])

.controller('MainController', function($scope, $ionicSideMenuDelegate) {
    $scope.toggleLeftMenu = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
});
