// angular
//   .module('musicApp')
//   .controller('MusicShowController', MusicShowController);
//
//   MusicShowController.$inject=['$routeParams', '$location', 'MusicService'];
//   function MusicShowController($routeParams, $location, MusicService) {
//   var vm = this;
//   var musicId = $routeParams.id;
//
//   vm.music = {};
//   vm.getMusic = getMusic;
//
//
//   function getMusic(id) {
//   console.log('asking service for book with id ', id);
//   MusicService.get({id: id}, function(data) {
//   console.log('controller got data ', data);
//   vm.music = data;
//   });
//   }
//   }
