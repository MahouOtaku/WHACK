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
        position: {lat: data.latitude, lng: data.longitude},
        map: map
    });
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











