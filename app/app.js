'use strict';

// Dependencies
var _ = require('lodash');
var co = require('co');
var angular = require('angular');

// Initialize required modules
require('ionic-angular');
require('ng-cordova');

// Toggles for development
window.DEBUG = true;
var resetDatabase = false;

// Declare the main angular module
var app = angular.module('beekeep', _.flatten([
    'ionic',
    require('./modules') // load all modules
]));

// Ionic config and routes
app.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  // Style and behavior defaults
  $ionicConfigProvider.tabs.position('bottom');
  $ionicConfigProvider.navBar.alignTitle('center');
  $ionicConfigProvider.views.transition('ios');

  // Load routes
  require('./routes.js')($stateProvider, $urlRouterProvider);
});

// Initialize the app
app.run(function($rootScope, DB, $ionicPlatform) {
  // Holds things we need across the whole app
  $rootScope.data = {};

  // Helper functions for updating the models
  $rootScope.update = function(thing) {
    return co(function* () {
      $rootScope.data[thing.toLowerCase() + 's'] = yield DB[thing].all();
      $rootScope.$apply();
    });
  };

  // Update each model
  _.each(['Yard', 'Pallet', 'Hive'], function(thing) {
    return $rootScope.update(thing);
  });

  // More default styling
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
