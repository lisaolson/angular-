console.log('app.js is linked!');


angular.module('musicApp', ['ngResource']);
angular.module('musicApp').factory('Music', function($resource){
  return $resource('https://api.soundcloud.com/tracks/?client_id=9a5b10b365e2b82fef5ece0ce57d6e03');
});
angular.module('musicApp').controller('musicIndexController', [function() {
  var vm = this;
  vm.music = [];

  this.getMusic = function() {
    vm.music = Music.query();
  }

}]);
// angular.module('musicApp', ['ngRoute', 'ngResource'])
//     .config(config);
//
//     config.$inject = ['$routeProvider', '$locationProvider'];
//     function config ( $routeProvider, $locationProvider ) {
//       $routeProvider
//         .when('/', {
//           templateUrl: 'templates/music.html',
//           controller: 'MusicIndexController',
//           controllerAs: 'musicIndexCtrl'
//         })
//         .otherwise({
//           redirectTo: '/'
//         });
//
//         $locationProvider
//         .html5Mode({
//           enabled: true,
//           requireBase: false
//         });
//     }
