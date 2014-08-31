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

show_marker = function (id_map, i) {
	direction = new google.maps.DirectionsRenderer({
	    map   : map
	});

	if (i == 4)
	{
		map = new google.maps.Map(id_map, {
			zoom: 8,
			center: new google.maps.LatLng(44.759629,4.562443)
		});
		direction.setMap(map);

		new google.maps.Marker({
			position: new google.maps.LatLng(44.735269,4.599039),
			map: map,
			title: 'Privas, France'
		});
		new google.maps.Marker({
			position: new google.maps.LatLng(44.9061,4.423175),
			map: map,
			title: '07160 Le Cheylard, France'
		});
		new google.maps.Marker({
			position: new google.maps.LatLng(44.448413,4.307094),
			map: map,
			title: 'Labeaume, France'
		});
		new google.maps.Marker({
			position: new google.maps.LatLng(44.446962,4.41779),
			map: map,
			title: 'Lagorce, France'
		});
	}
	else
	{
		map = new google.maps.Map(id_map, {
			zoom: 8,
			center: new google.maps.LatLng(44.446962,4.41779)
		});
		direction.setMap(map);

		new google.maps.Marker({
			position: new google.maps.LatLng(44.446962,4.41779),
			map: map,
			title: 'Lagorce, France'
		});
	}
}
