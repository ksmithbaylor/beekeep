'use strict';

var _ = require('lodash');
var co = require('co');
var angular = require('angular');

// Initialize required modules
require('ionic-angular');
require('ng-cordova');

window.DEBUG = true;
var resetDatabase = false;

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

if (resetDatabase) {
  app.run(function(DB, $rootScope) {
    return co(function* () {
      var types = ['Yard', 'Hive', 'Pallet', 'Queen'];

      for (var i in types) {
        var type = types[i];
        var all = yield DB[type].all();
        yield all.map(function(r) {
          return DB[type].destroy(r);
        });
      }

      $rootScope.$apply();
    });
  });
}

// App initialization module
app.run(function($rootScope, DB, $ionicPlatform) {
  $rootScope.data = {};

  $rootScope.update = function(thing) {
    return co(function* () {
      $rootScope.data[thing.toLowerCase() + 's'] = yield DB[thing].all();
      $rootScope.$apply();
    });
  };

  $rootScope.update('Yard');
  $rootScope.update('Pallet');
  $rootScope.update('Hive');

  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
