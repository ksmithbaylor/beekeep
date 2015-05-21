module.exports = function ($stateProvider, $urlRouterProvider) {
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
        templateUrl: 'modules/views/home/index.html',
        controller: 'HomeController'
      }
    }
  });

  $stateProvider.state('app.browse', {
    url: '/browse',
    views: {
      'browse': {
        templateUrl: 'modules/views/browse/index.html',
        controller: 'BrowseController'
      }
    }
  });

  $stateProvider.state('app.activity', {
    url: '/activity',
    views: {
      'activity': {
        templateUrl: 'modules/views/activity/index.html',
        controller: 'ActivityController'
      }
    }
  });

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

  $urlRouterProvider.otherwise('/app/home');
};
