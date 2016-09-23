// 
// var musicApp = angular.module('musicApp', []);
//
// musicApp.config(['$routeProvider',
//   function($routeProvider) {
//     $routeProvider.
//       when('/About', {
// 	templateUrl: '../partials/about.html',
// 	controller: 'AboutController'
//       }).
//       when('/Contact', {
// 	templateUrl: '../partials/contact.html',
// 	controller: 'ContactController'
//       }).
//       otherwise({
// 	redirectTo: '/'
//       });
// }]);
//
//
// musicApp.controller('AboutController', function($scope) {
//
// 	$scope.message = 'This is the About screen';
//
// });
//
//
// musicApp.controller('ContactController', function($scope) {
//
// 	$scope.message = 'This is the Contact screen';
//
// });


// console.log('app.js is linked!');
//
// var app = angular.module('musicApp', []);
//

//
//   app.controller('PageCtrl', function($http) {
//     console.log('Page controller');
//
//   })

// angular.module('musicApp', [])
//   .controller('musicController', musicController);
//
// musicController.$inject = ['$http'];
//   function musicController($http){
//     console.log(musicController);
//     var vm = this;
//         $http({
//           method: 'GET',
//           url: 'https://api.soundcloud.com/tracks/?client_id=9a5b10b365e2b82fef5ece0ce57d6e03'
//         }).then(function successCallback(response) {
//           console.log(response.data);
//           vm.tracks = response.data;
//         }, function errorCallback(response) {
//           console.log('Error getting data', response);
//         });
//     }
