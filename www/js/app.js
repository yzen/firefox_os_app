
// This uses require.js to structure javascript:
// http://requirejs.org/docs/api.html#define

define(function(require) {
    var $ = require('zepto');
    require('./install-button');

/*     var video_status = false; */
/*     var video = document.createElement("video"); */
/*     video.setAttribute("width", 640); */
/*     video.setAttribute("height", 480); */
    var video = $("video")[0];

/*     var audio_status = false; */
/*     var audio = document.createElement("audio"); */
/*     audio.setAttribute("controls", true); */

    window.navigator.mozGetUserMedia({
      video:true,
      audio:true
    }, function(stream) {
      video.mozSrcObject = stream;
      video.play();
      /*
if (video_status) {
        content.appendChild(video);
        
        frames.innerHTML = '';
        stopbuttons.appendChild(snapshot);
      } else if (audio_status) {
        content.appendChild(audio);
        audio.mozSrcObject = stream;
        audio.play();
      }
*/
    }, function(err) {
      alert(err);
    });
});

