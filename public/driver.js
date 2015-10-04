var socket = io();
$(function() {
$(document).ready(function () 
{
	var options = 
	{
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0
	};

	function success(pos) 
	{
		var crd = pos.coords;
		console.log('Your current position is:');
		console.log('Latitude : ' + crd.latitude);
		console.log('Longitude: ' + crd.longitude);
		console.log('More or less ' + crd.accuracy + ' meters.');
		socket.emit('driver position update', {
    latitude: crd.latitude,
    longitude: crd.longitude
});
		
	};


	
	function error(err) 
	{
		console.warn('ERROR(' + err.code + '): ' + err.message);
	};

	navigator.geolocation.watchPosition(success, error, options);
	
});
});
