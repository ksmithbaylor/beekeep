'use strict';

var _ = require('lodash');
var angular = require('angular');

// Initialize required modules
require('ionic-angular');
require('ng-cordova');

window.DEBUG = true;

// Declare the main module
var app = angular.module('beekeep', _.flatten([
    'ionic',
    require('./modules') // load all modules
]));

app.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
  $ionicConfigProvider.navBar.alignTitle('center');
  $ionicConfigProvider.views.transition('none');

  require('./routes.js')($stateProvider, $urlRouterProvider);
});

// App initialization module
app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
