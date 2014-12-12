'use strict';

var _ = require('lodash');
var angular = require('angular');
var ionicModule = require('ionic-angular');

console.log('initializing whole app');
var app = angular.module('beekeep', _.flatten([
    'ionic',
    require('./modules')
]));
console.log('done initializing whole app');

console.log('running whole app');
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
console.log('done running whole app')
