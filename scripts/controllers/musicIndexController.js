
angular.module('musicApp')
  .controller('MusicIndexController', MusicIndexController);

MusicIndexController.$inject=['MusicService'];
  function MusicIndexController( MusicService ){
    var vm = this;
    vm.albums = [];

    getMusic();

    function getMusic() {
      MusicService.query(function(data){
        console.log('here is the music data in the controller ', data);
        vm.music = data;
      });
    }
  }

  // musicController.$inject = ['$http'];
  //
  // function musicController ($http) {
  //   var vm = this;
  //
  //     $http({
  //       method: 'GET',
  //       url: 'https://api.soundcloud.com/tracks/?client_id=9a5b10b365e2b82fef5ece0ce57d6e03'
  //     }).then(function successCallback(response) {
  //       vm.album = response.data;
  //     }, function errorCallback(response) {
  //       console.log('Error getting data', response);
  //     });
  // }

//   var searchAlbums = function (query) {
//     $.ajax({
//         url: '',
//         data: {
//             q: query,
//             type: 'album'
//         },
//         success: function (response) {
//             resultsPlaceholder.innerHTML = template(response);
//         }
//     });
// };
//
