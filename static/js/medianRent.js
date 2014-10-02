//add map & tracts variables
var map = L.map('basic-map').setView([39.952299, -75.163256], 11);
var rentURL = "/PlanPhilly/static/data/medianRent.geojson";
//style tracts
function getColor(d) {
	return d > 1600 ? '#00441b' :
			d > 1400 ? '#006d2c' :
	       d > 1200  ? '#238b45' :
	       d > 1000  ? '#41ab5d' :
	       d > 800  ? '#74c476' :
	       d > 600  ? '#a1d99b' :
	       d > 400   ? '#c7e9c0' :
	       d > 200   ? '#e5f5e0' :
	                  '#f7fcf5';
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.MRENT90_A),
        weight: 1,
        color: 'white',
        opacity: 1,
        fillOpacity: 0.85
    };
}


//add tiles
L.tileLayer('http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20
}).addTo(map);
//add tracts
$.getJSON(rentURL, function(data) {
    L.geoJson(data, {
    	style: style
    }).addTo(map)
});
