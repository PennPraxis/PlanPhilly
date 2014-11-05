L.mapbox.accessToken = 'pk.eyJ1IjoicGxhbnBoaWxseSIsImEiOiJtN3gzMjljIn0.gKWLf0ocj5Tmy4mlpZH5BQ';
//init map
var map = L.mapbox.map('map', 'planphilly.f11785b4').setView([39.992299, -75.163256], 11);
//add tiles
L.mapbox.tileLayer('planphilly.cc748a06').addTo(map);




