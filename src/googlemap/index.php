<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Google Map</title>
        <style type="text/css">
            #map {
                height: 500px;
            }
        </style>
    </head>
    <body>
        <div id="map"></div>
        <script>
            var map;
            var poi = {lat: 48.226953, lng: 16.356247};

            function initMap() {
                map = new google.maps.Map(document.getElementById('map'), {
                    center: poi,
                    zoom: 16,
                    disableDefaultUI: true,
                    draggable: false,
                    scrollwheel: false,
                });
                new google.maps.Marker({
                    position: poi,
                    map: map,
                    title: 'Apotheke goldener Elephant'
                });
            }
        </script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBqG7RUc5CuzxKjS-SWUc35v8uZy9dqCmQ&callback=initMap" async defer></script>
    </body>
</html>


