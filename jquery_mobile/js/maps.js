var map;

create_map = function (start) {
    var request = {
    	origin: (start.coords) ? new google.maps.LatLng(start.coords.latitude, start.coords.longitude) : start.address,
    	destination: "Privas",
    	travelMode: google.maps.TravelMode["WALKING"]
    };
    var directionsService = new google.maps.DirectionsService();
    directionsService.route(request, function(response, status){
        if(status == google.maps.DirectionsStatus.OK) {
            direction.setDirections(response);
        }
    });
}

show_map = function (id_map) {
	direction = new google.maps.DirectionsRenderer({
	    map   : map
	});
	map = new google.maps.Map(id_map, {
		zoom: 8
	});
	direction.setMap(map);

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function (position) {
			create_map(position);
		});
	}
	else
	{
		create_map({
			coords: false,
			address: "Paris, France"
		});
	}
}
