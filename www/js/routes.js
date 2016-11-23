angular.module('app.routes', [])

  .config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider


      .state('menu', {
        url: '/side-menu21',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'menuCtrl'
      })

      .state('menu.home', {
        url: '/page1',
        views: {
          'side-menu21': {
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl'
          }
        }
      })

      .state('menu.details', {
        url: '/details/:id',
        views: {
          'side-menu21': {
            templateUrl: 'templates/detail.html',
            controller: 'sensorCtrl'
          }
        }
      })

      .state('menu.statistik', {
        url: '/page2',
        views: {
          'side-menu21': {
            templateUrl: 'templates/statistik.html',
            controller: 'statistikCtrl'
          }
        }
      })

      .state('menu.verlauf', {
        url: '/page3',
        views: {
          'side-menu21': {
            templateUrl: 'templates/verlauf.html',
            controller: 'verlaufCtrl'
          }
        }
      })

      .state('menu.pflanzenSuche', {
        url: '/page4',
        views: {
          'side-menu21': {
            templateUrl: 'templates/pflanzenSuche.html',
            controller: 'pflanzenSucheCtrl'
          }
        }
      })
      .state('menu.pflanzendetail', {
        url: '/pflanzendetail',
        views: {
          'side-menu21': {
            templateUrl: 'templates/pflanzendetail.html',
            controller: 'pflanzenSucheCtrl'
          }
        }
      })

    $urlRouterProvider.otherwise('/side-menu21/page1')



  });
