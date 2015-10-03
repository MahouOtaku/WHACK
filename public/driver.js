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
	};

	function error(err) 
	{
		console.warn('ERROR(' + err.code + '): ' + err.message);
	};

	navigator.geolocation.getCurrentPosition(success, error, options);

	//navigator.geolocation.watchPosition(success, error, options);
	//var watchID = navigator.geolocation.watchPosition(function(position) {
	//	do_something(position.coords.latitude, position.coords.longitude);
	//});
	
	
});
});