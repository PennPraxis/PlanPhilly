var map = L.map('basic-map').setView([39.952299, -75.163256], 11);

L.tileLayer('http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20
}).addTo(map);


var rentURL = "/PlanPhilly/static/data/medianRent.geojson";

$.getJSON(rentURL, function(data) {
    L.geoJson(data, {
    }).addTo(map)
});
