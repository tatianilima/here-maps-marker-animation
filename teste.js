// Create a map object:
var app_id   =  '';
var app_code = '';

var platform = new H.service.Platform({
	app_id: app_id,
	app_code: app_code
});
 var defaultLayers = platform.createDefaultLayers();

var map = window.map;
var behavior = window.behavoir;
var ui = window.ui;

function mapLoad(element) {
	window.map = new H.Map(element, defaultLayers.normal.map); 
	window.behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
	window.ui = H.ui.UI.createDefault(map, defaultLayers);
}
  mapLoad(document.getElementById('mapContainer'));

var animatedSvg =
  '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" ' + 
  'y="0px" style="margin:-112px 0 0 -32px" width="136px"' + 
  'height="150px" viewBox="0 0 136 150"><ellipse fill="#000" ' +
  'cx="32" cy="128" rx="36" ry="4"><animate attributeName="cx" ' + 
  'from="32" to="32" begin="0s" dur="1.5s" values="96;32;96" ' + 
  'keySplines=".6 .1 .8 .1; .1 .8 .1 1" keyTimes="0;0.4;1"' + 
  'calcMode="spline" repeatCount="indefinite"/>' +  
  '<animate attributeName="rx" from="36" to="36" begin="0s"' +
  'dur="1.5s" values="36;10;36" keySplines=".6 .0 .8 .0; .0 .8 .0 1"' + 
  'keyTimes="0;0.4;1" calcMode="spline" repeatCount="indefinite"/>' +
  '<animate attributeName="opacity" from=".2" to=".2"  begin="0s" ' +
  ' dur="1.5s" values=".1;.7;.1" keySplines=" .6.0 .8 .0; .0 .8 .0 1" ' +
  'keyTimes=" 0;0.4;1" calcMode="spline" ' +
  'repeatCount="indefinite"/></ellipse><ellipse fill="#1b468d" ' +
  'cx="26" cy="20" rx="16" ry="12"><animate attributeName="cy" ' +
  'from="20" to="20" begin="0s" dur="1.5s" values="20;112;20" ' +
  'keySplines=".6 .1 .8 .1; .1 .8 .1 1" keyTimes=" 0;0.4;1" ' +
  'calcMode="spline" repeatCount="indefinite"/> ' +
  '<animate attributeName="ry" from="16" to="16" begin="0s" ' + 
  'dur="1.5s" values="16;12;16" keySplines=".6 .0 .8 .0; .0 .8 .0 1" ' +
  'keyTimes="0;0.4;1" calcMode="spline" ' +
  'repeatCount="indefinite"/></ellipse></svg>';

// Create an icon object, an object with geographic coordinates and a marker:
var icon = new H.map.DomIcon(animatedSvg),
  coords = {lat: -22.8906, lng: -43.2283},
  marker = new H.map.DomMarker(coords, {icon: icon});

// Set map center and zoom, add the marker to the map:
map.setCenter(coords);
map.setZoom(18);
map.addObject(marker);
