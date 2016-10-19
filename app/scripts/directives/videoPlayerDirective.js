'use strict';

var app = angular.module('videoClientApp');

app.directive('videoPlayer', ['$sce', '$timeout', 'videojs', 'videoService', function($sce, $timeout, videojs, videoService) {
  return {
      restrict: 'E',
      replace: 'true',
      templateUrl: 'views/directiveTemplates/videoLoader.html', 
      link: function(scope) {     

        scope.showPlayer = true;

        var video = videojs('video_container');

        video.on('ended', function(){
          scope.next();
        });

        video.on('error', function(){
            video.pause();
            scope.next();
        });

        function loadVideo(nextVideo){
            if(!nextVideo || nextVideo.error) {
                scope.showPlayer = false;
                $timeout(function() {
                  scope.$apply();
                });
                return;
            }
            if (!video.canPlayType(nextVideo.type)) {
              return scope.next();
            }

            video.src(nextVideo);
            
            try {
              video.load();
              video.ready(function(){
                video.play();
              });
            } catch(err) {
              scope.next();
            }
        }

        videoService
        .then(function(service) {
          loadVideo(service.getCurrentVideo());
        });


        scope.reload = function() {
          videoService
          .then(function(service) {
            loadVideo(service.getCurrentVideo());
          });
        };
        scope.next = function() { 
          videoService
          .then(function(service) {
            loadVideo(service.getNextVideo());
          });
        };
        scope.first = function() { 
          videoService
          .then(function(service) {
            loadVideo(service.getFirstVideo());
          }); 
        };
        scope.restart = function() { 
          scope.showPlayer = true; scope.first(); 
        };
      }
  };
}]);
