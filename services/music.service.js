angular.module('musicApp')
  .service('MusicService', MusicService);

  MusicService.$inject = ['$http', '$q', '$resource'];
  function MusicService($http, $q, $resource) {
    console.log('service');
    var self = this;
    self.music = {};
    self.allMusic = [];

    resource = $resource('', {id: '@id'}, {
      update: {
        method: 'GET'
      },

    })
  }
