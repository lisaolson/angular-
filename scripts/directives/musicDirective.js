angular
  .module('musicApp')
  .directive('currentAlbums', currentAlbums);

  function currentAlbums(){
    var directive = {
      restrict: 'E',
      scope: {
        album: '@'
      },
      replace: true,
      templateUrl: '/templates/music.html',
      controllerAs: 'musicCtrl',
      controller: musicController
    };

    musicController.$inject = ['$http', '$scope'];
    function musicController($http, $scope){
      var vm = this;
      var url = "https://api.soundcloud.com/tracks/?client_id=9a5b10b365e2b82fef5ece0ce57d6e03";
      vm.getMusic = function(album){
        console.log(url + album );
        $http({
          method: 'GET',
          url: url + album
        }).then(function(response){
          console.log(response);
          vm.music = response.data;
        }, function(err){
          console.log(err);
        });
      };
    vm.getMusic($scope.album);
};
return directive;
}
