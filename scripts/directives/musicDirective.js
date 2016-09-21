angular
  .module('musicApp')
  .directive('music', music);

  function music(){
    var directive = {
      restrict: 'E',
      scope: {
        input: '@'
      },
      replace: true,
      templateUrl: '/templates/music.html',
      controllerAs: 'musicCtrl',
      controller: musicController
    };

    musicController.$inject = ['$http', '$scope'];
    function musicController($http, $scope){
      var vm = this;
      var url = "";
      vm.getMusic = function(input){
        console.log(url + input );
        $http({
          method: 'GET',
          url: url + city
        }).then(function(response){
          console.log(response);
          vm.weather = response.data;
        }, function(err){
          console.log(err);
        });
      };
    vm.getMusic($scope.city);
};
return directive;
}
