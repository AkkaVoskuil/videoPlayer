angular.module('videojsMod',[])

.factory('videojs', function ($window) {
  //Simply grab moment off window, then delete moment off window
  var videojs = $window.videojs;
  try { 
  	delete $window.videojs; 
  } catch (e) {
  	$window.videojs = undefined;
  	/*<IE8 doesn't do delete of window vars*/
  }
  return videojs;
});