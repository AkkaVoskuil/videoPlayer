  var app = angular.module('videoClientApp')

  app.service("videoService", ['$rootScope', function($rootScope) {
      var videos = [
      //  1. Valid video
        {"src":"http://bad-videos.dev.zype.com/good-video1/ArduinoTheDocumentary.mp4", 
        "type": "video/mp4"}, 
        //  1. Video with errors
        {"src":"http://bad-videos.dev.zype.com/video1/zfaeEvbmOKYqguNR.m3u8", 
        "type": "application/x-mpegURL"},
        //  2. Video with errors
        {"src":"http://bad-videos.dev.zype.com/video4/U477ESYmVc5XQTTK.m3u8", 
        "type": "application/x-mpegURL"},
        //  2. Valid video
        {"src":"http://bad-videos.dev.zype.com/good-video2/sintel-2048-stereo.mp4", 
        "type": "video/mp4"}, 
        //  3. Video with errors
        {"src":"http://bad-videos.dev.zype.com/video3/_at63NQWIh9IIx7m.m3u8", 
        "type": "application/x-mpegURL"},
        //  3. Valid video
        {"src":"http://bad-videos.dev.zype.com/good-video3/bipbopall.m3u8", 
        "type": "application/x-mpegURL"},
        //  4. Video with errors
        {"src":"http://bad-videos.dev.zype.com/video2/erPQbYqt0EcCae8e.mp4", 
        "type": "video/mp4"},
        //  5. Video with errors
        {"src":"http://bad-videos.dev.zype.com/video5/dH2vtLGAjHr6bd5w.m3u8", 
        "type": "application/x-mpegURL"},
        //  6. Video with errors
        {"src":"http://bad-videos.dev.zype.com/video6/jnRDIFtgh1FYtGUT.m3u8", 
        "type": "application/x-mpegURL"},
        //  7. Video with errors
        {"src":"http://bad-videos.dev.zype.com/video7/dUHRDodFeTcMH0lr.m3u8", 
        "type": "application/x-mpegURL"},
        //  8. Video with errors
        {"src": "http://bad-videos.dev.zype.com/video8/Eh7k1HAIK7Z9orhv.m3u8", 
        "type": "application/x-mpegURL"},
        //  9. Video with errors
        {"src": "http://bad-videos.dev.zype.com/video9/jDJuepDf2A8y3p8A.m3u8", 
        "type": "application/x-mpegURL"},
        //  10. Video with errors
        {"src":"http://bad-videos.dev.zype.com/video10/bmKwYZbQHZGny1FD.m3u8", 
        "type": "application/x-mpegURL"},
        //  11. Video with errors
        {"src":"http://bad-videos.dev.zype.com/video11/haF-QayUxmR8dkVz.m3u8", 
        "type": "application/x-mpegURL"},
      ];

      var index = 0;

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
      
      return {
        "getCurrentVideo": getCurrentVideo,
        "getNextVideo": getNextVideo, 
        "getFirstVideo": getFirstVideo
      };

  }]);
