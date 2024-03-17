function myMap(){
    var mapProp = {
        //center: {lat: 51.508742, lng: -0.120850}, //london 51.508742,-0.120850
        center: {lat: 21.0168864, lng: 105.7855574}, //hanoi 21.0168864,105.7855574
        zoom: 5,
    }
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    var myCenter = {
        lat: 21.0168864,
        lng: 105.7855574,
    };

    // var marker = new google.maps.Marker({position: myCenter});
    // marker.setMap(map);

    var marker = new google.maps.Marker({
        position: myCenter,
        map: map,
        title: "Ha noi",
    });
}

