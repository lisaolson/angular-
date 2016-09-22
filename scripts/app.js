console.log('app.js is linked!');

angular.module('musicApp', ['ngRoute', 'ngResource'])
    .config(config);

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config ( $routeProvider, $locationProvider ) {
      $routeProvider
        .when('/', {
          templateUrl: 'templates/music.html',
          controller: 'MusicIndexController',
          controllerAs: 'musicIndexCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });

        $locationProvider
        .html5Mode({
          enabled: true,
          requireBase: false
        });
    }
