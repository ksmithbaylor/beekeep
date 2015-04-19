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

  $stateProvider.state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'modules/views/navigation/tabs.html',
    controller: 'NavigationController'
  });

  $stateProvider.state('app.home', {
    url: '/home',
    views: {
      'home': {
        templateUrl: 'modules/views/home/view.html',
        controller: 'HomeController'
      }
    }
  });

  $stateProvider.state('app.browse', {
    url: '/browse',
    views: {
      'browse': {
        templateUrl: 'modules/views/browse/view.html',
        controller: 'BrowseController'
      }
    }
  });

  $stateProvider.state('app.activity', {
    url: '/activity',
    views: {
      'activity': {
        templateUrl: 'modules/views/activity/view.html',
        controller: 'ActivityController'
      }
    }
  });

  $stateProvider.state('app.todo', {
    url: '/todo',
    views: {
      'todo': {
        templateUrl: 'modules/views/todo/view.html',
        controller: 'TodoController'
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

  $urlRouterProvider.otherwise('/app/home');
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
