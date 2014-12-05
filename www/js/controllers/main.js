'use strict';

function SideMenuController($scope, $ionicSideMenuDelegate) {
    this.toggleLeftMenu = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
}

kjs.addController('layout', SideMenuController);
