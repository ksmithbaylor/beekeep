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

  $stateProvider.state('app.yardActivity', {
    url: '/yard/:id/activity',
    views: {
      'yards': {
        templateUrl: 'modules/views/yards/yard-activity.html',
        controller: 'YardActivityController'
      }
    },
  });



  // Hives Tab Routes //////////////////////////////////////////////////////////

  $stateProvider.state('app.hives', {
    url: '/hives',
    views: {
      'hives': {
        templateUrl: 'modules/views/hives/index.html',
        controller: 'HivesController'
      }
    }
  });


  // Actions Tab Routes ///////////////////////////////////////////////////////

  $stateProvider.state('app.actions', {
    url: '/actions',
    views: {
      'actions': {
        templateUrl: 'modules/views/actions/index.html',
        controller: 'ActionsController'
      }
    }
  });


  // Default route is the yards tab
  $urlRouterProvider.otherwise('/yards');
};
