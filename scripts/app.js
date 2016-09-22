console.log('app.js is linked!');

angular
  .module('musicApp', [])

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
