'use strict';

module.exports = function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('app', {
    abstract: true,
    templateUrl: 'modules/views/navigation/tabs.html',
    controller: 'NavigationController'
  });

  // Home Tab Routes ///////////////////////////////////////////////////////////

  $stateProvider.state('app.home', {
    url: '/home',
    views: {
      'home': {
        templateUrl: 'modules/views/home/index.html',
        controller: 'HomeController'
      }
    }
  });

  // Browse Tab Routes /////////////////////////////////////////////////////////

  $stateProvider.state('app.browse', {
    url: '/browse',
    views: {
      'browse': {
        templateUrl: 'modules/views/browse/yards.html',
        controller: 'BrowseController'
      }
    }
  });

  $stateProvider.state('app.yardDetail', {
    url: '/yard_detail/:id',
    views: {
      'browse': {
        templateUrl: 'modules/views/browse/yard.html',
        controller: 'YardDetailController'
      }
    },
  });

  $stateProvider.state('app.yardPallets', {
    url: '/yard/:id/pallets',
    views: {
      'browse': {
        templateUrl: 'modules/views/browse/pallets.html',
        controller: 'PalletsController'
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

  // Todo Tab Routes ///////////////////////////////////////////////////////////

  $stateProvider.state('app.todo', {
    url: '/todo',
    views: {
      'todo': {
        templateUrl: 'modules/views/todo/index.html',
        controller: 'TodoController'
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

  $urlRouterProvider.otherwise('/home');
};
