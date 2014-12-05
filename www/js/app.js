'use strict';

var modules = {
    layout: []
};

var mainDeps = ['ionic'];
_.forOwn(modules, function(deps, module) {
    var moduleName = 'beekeep.' + module;
    deps.unshift('ionic');
    angular.module(moduleName, deps);
    mainDeps.push(moduleName);
});

var main = angular.module('beekeep', mainDeps);

main.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
