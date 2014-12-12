'use strict';

var angular = require('angular');
var app = angular.module('beekeep.layout', ['ionic']);

app.controller('SidebarController', require('./sidebarController'));

module.exports = app;
