var t;  //time out
var socket = io();
$(function() {
$(document).ready(function () {
    // code goes here!!
	var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log('Latitude : ' + crd.latitude);
  console.log('Longitude: ' + crd.longitude);
  console.log('More or less ' + crd.accuracy + ' meters.');

  checkMapsLoaded(crd.latitude, crd.longitude);

socket.on('driver position update', function (data) {
    marker = new google.maps.Marker({
      position: {lat: +data.latitude, lng: +data.longitude},
        map: map
    });
});


};



function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);


 function checkMapsLoaded(latitude, longitude) {
   if (window.google && window.google.maps && window.google.maps.Map) {

     initMap(latitude, longitude);


   } else {
     t = setTimeout(checkMapsLoaded, 100);
   }




 }

// t = setTimeout(checkMapsLoaded, 100);









});
});


var map;
var t;  //time out
var socket = io();
var marker, driverMarker;
var map;

$(function() {
$(document).ready(function () {
    // code goes here!!
	var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log('Latitude : ' + crd.latitude);
  console.log('Longitude: ' + crd.longitude);
  console.log('More or less ' + crd.accuracy + ' meters.');

  checkMapsLoaded(crd.latitude, crd.longitude);

socket.on('driver position update', function (data) {
    driverMarker = new google.maps.Marker({
        position: {lat: +data.latitude, lng: +data.longitude},
        map: map,
        icon: 'data:image/png;base64,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'
    });

});


};



function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);


 function checkMapsLoaded(latitude, longitude) {
   if (window.google && window.google.maps && window.google.maps.Map) {

     initMap(latitude, longitude);


   } else {
     t = setTimeout(checkMapsLoaded, 100);
   }




 }

// t = setTimeout(checkMapsLoaded, 100);









});
});




function initMap(latitude, longitude) {

  // Create a map object and specify the DOM element for display.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: latitude, lng: longitude},
    scrollwheel: false,
    zoom: 8

  });

var marker = new google.maps.Marker({
    position: {lat: latitude, lng: longitude},
    map: map,



  });
}


function initMap(latitude, longitude) {

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: latitude, lng: longitude},
    scrollwheel: false,
    zoom: 8

  });

var marker = new google.maps.Marker({
    position: {lat: latitude, lng: longitude},
    map: map,



  });
}
