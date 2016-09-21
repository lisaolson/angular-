angular.module('musicApp')
  .controller('musicController', musicController);

  function musicController(){
    var vm = this;
    vm.artists = ['ODESZA', 'Flume', 'The Chainsmokers', 'Illenium', 'Major Lazer', 'Chet Porter', 'Hippie Sabotage', 'Crywolf']
  }
