
// This uses require.js to structure javascript:
// http://requirejs.org/docs/api.html#define

define(function(require) {
    var $ = require('zepto');
    var OpenLayers = require('OpenLayers');
    require('./install-button');

    var map = new OpenLayers.Map("map");
    map.addLayer(new OpenLayers.Layer.OSM());
    map.zoomToMaxExtent();

    navigator.geolocation.getCurrentPosition(function(position) {
      var location = new OpenLayers.LonLat(position.coords.longitude, position.coords.latitude);
      console.log(JSON.stringify(location));
      
      var fromProjection = new OpenLayers.Projection("EPSG:4326");   // Transform from WGS 1984
      var toProjection   = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection
      position = location.transform(fromProjection, toProjection);
      var markers = new OpenLayers.Layer.Markers("Markers");
      map.addLayer(markers);

      var size = new OpenLayers.Size(21,25);
      var offset = new OpenLayers.Pixel(-(size.w/2), -size.h);
      var icon = new OpenLayers.Icon('http://www.openlayers.org/dev/img/marker.png', size, offset);

      markers.addMarker(new OpenLayers.Marker(position, icon));
      map.setCenter(position, 18);
    });
    /*
var connection = new mozRTCPeerConnection();
    

    var video = $("video")[0];
    var otherVideo = $("video")[1];
    window.navigator.mozGetUserMedia({
      video:true,
      audio:true
    }, function(stream) {
      connection.addStream(stream);
      video.mozSrcObject = stream;
      video.play();
    }, function(err) {
      alert(err);
    });
*/


  


});

