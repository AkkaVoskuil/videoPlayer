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
            if(!nextVideo || nextVideo.error){
                scope.showPlayer = false;
                $timeout(function() {
                  scope.$apply();
                });
                return;
            }
            video.src(nextVideo);
            try {
              video.play();
            }
            catch(err) {
              scope.next();
            }

            video.play();
        }

        loadVideo(videoService.getCurrentVideo());

        scope.reload = function(){ loadVideo(videoService.getCurrentVideo()); };
        scope.next = function(){ loadVideo(videoService.getNextVideo()); };
        scope.first = function(){ loadVideo(videoService.getFirstVideo()); };
        scope.restart = function(){ scope.showPlayer = true; scope.first(); };
      }
  };
}]);
