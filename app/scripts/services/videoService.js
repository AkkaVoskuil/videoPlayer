  'use strict';

  var app = angular.module('videoClientApp');

  app.service("videoService", ['$http', 'toastrFactory', function($http, toastrFactory) {
      
      var videos = [];
      var index = 0;

      function getVideosFromJson() {

        if (videos && videos.length) {
          return videos;
        };

        return $http({
          method: 'GET',
          url: 'data/videos.json'
        }).then(function successCallback(response) {
            return response.data;
          }, function errorCallback(response) {
            toastrFactory.error();
            return [];
        });
      }

      function getVideo(){
        if(index >= videos.length){
          return {
            "error": "You have reached the end of the list"
          };
        }

        var video = videos[index];

        return video;
      }

      function getCurrentVideo() {
        return getVideo();
      }

      function getNextVideo() {
        index++;
        var video = getVideo();
        return video;
      }

      function getFirstVideo(){
        index = 0; 
        return getVideo();
      }
      
      return getVideosFromJson().
      
      then(function(response) {
        videos = response;
        return {
          "getCurrentVideo": getCurrentVideo,
          "getNextVideo": getNextVideo, 
          "getFirstVideo": getFirstVideo
        }; 
      });
  }]);
