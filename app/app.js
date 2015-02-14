'use strict';

var _ = require('lodash');
var angular = require('angular');

// Initialize required modules
require('ionic-angular');
require('ng-cordova');

// Declare the main module
var app = angular.module('beekeep', _.flatten([
    'ionic',
    require('./modules') // load all modules
]));

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'modules/sidemenu/sidemenu.html',
    controller: 'SidemenuController'
  });

  $stateProvider.state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'modules/home/home.html'
      }
    }
  });

  $stateProvider.state('app.overview', {
    url: '/overview',
    views: {
      'menuContent': {
        templateUrl: 'modules/overview/overview.html'
      }
    }
  });

  $urlRouterProvider.otherwise('/app/home');
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
