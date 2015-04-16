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
  $ionicConfigProvider.views.transition('ios');

  $stateProvider.state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'modules/views/navigation/tabs.html',
    controller: 'NavigationController'
  });

  $stateProvider.state('app.overview', {
    url: '/overview',
    views: {
      'overview': {
        templateUrl: 'modules/views/overview/view.html',
        controller: 'OverviewController'
      }
    }
  });

  $stateProvider.state('app.build', {
    url: '/build',
    views: {
      'build': {
        templateUrl: 'modules/views/build/view.html',
        controller: 'BuildController'
      }
    }
  });

  $stateProvider.state('app.sandbox', {
    url: '/sandbox',
    views: {
      'sandbox': {
        templateUrl: 'modules/views/sandbox/view.html',
        controller: 'SandboxController'
      }
    }
  });

  $urlRouterProvider.otherwise('/app/sandbox');
});

// SQLite plugin sanity check
app.run(function($ionicPlatform, $cordovaSQLite) {
  $ionicPlatform.ready(function() {
    if (window.cordova) {
      var db = $cordovaSQLite.openDB({name: 'my.db'});
      $cordovaSQLite.execute(db, 'create table if not exists testing (asdf TEXT)').then(function(res) {
        $cordovaSQLite.execute(db, 'insert into testing (asdf) values ("hello world")').then(function(res) {
          console.log('There are ' + res.insertId + ' rows in the test db');
        });
      });
    }
  });
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
