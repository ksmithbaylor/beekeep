'use strict';

module.exports = function ($stateProvider, $urlRouterProvider) {
  // Top-level route, loads the tab layout
  $stateProvider.state('app', {
    abstract: true,
    templateUrl: 'modules/views/navigation/tabs.html',
    controller: 'NavigationController'
  });


  // Yards Tab Routes /////////////////////////////////////////////////////////

  $stateProvider.state('app.yards', {
    url: '/yards',
    views: {
      'yards': {
        templateUrl: 'modules/views/yards/index.html'
      }
    }
  });

  $stateProvider.state('app.yardDetail', {
    url: '/yard/:id',
    views: {
      'yards': {
        templateUrl: 'modules/views/yards/yard-detail.html',
        controller: 'YardDetailController'
      }
    },
  });

  $stateProvider.state('app.yardNew', {
    url: '/yard/new',
    views: {
      'yards': {
        templateUrl: 'modules/views/yards/yard-new.html',
        controller: 'YardNewController'
      }
    },
  });


  // Activity Tab Routes ///////////////////////////////////////////////////////

  $stateProvider.state('app.activity', {
    url: '/activity',
    views: {
      'activity': {
        templateUrl: 'modules/views/activity/index.html',
        controller: 'ActivityController'
      }
    }
  });


  $stateProvider.state('app.sandbox', {
    url: '/sandbox',
    views: {
      'sandbox': {
        templateUrl: 'modules/views/sandbox/index.html',
        controller: 'SandboxController'
      }
    }
  });

  // Default route is the yards tab
  $urlRouterProvider.otherwise('/yards');
};
