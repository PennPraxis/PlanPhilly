L.mapbox.accessToken = 'pk.eyJ1IjoiaGFtaGFuZHMiLCJhIjoiMksybk92QSJ9.TOMmDM4uWCY65kSLpS_Nww';
var map = L.mapbox.map('map').setView([39.952299, -75.163256], 11);
//var layers = document.getElementById('menuUI');
/*
addLayer(L.mapbox.featureLayer()
    .loadURL('static/data/medianRent.geojson')
    , '1990', 1);
addLayer(L.mapbox.featureLayer()
    .loadURL('static/data/medianRent.geojson')
    , '2000', 2);
addLayer(L.mapbox.featureLayer()
    .loadURL('static/data/medianRent.geojson')
    , '2010', 3);
*/
//add tiles
var stamenLayer = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
}).addTo(map);
//add tracts
/*
var tractsURL = "/static/data/medianRent.geojson";

$.getJson(tractsURL, function(data) {
    var ninety = L.geoJson(data, {
        style: function(feature) {
            return {
                fillColor: getColor(feature.properties.MRENT90_A),
                weight: 1,
                color: 'white',
                opacity: 1,
                fillOpacity: 0.85
            };
        }
    });
});
*/
//add layers to ui

//add control
/*
function addLayer(layer, name, zIndex) {
    layer
        .setZIndex(zIndex)
        .addTo(map);

 var link = document.createElement('a');
        link.href = '#';
        link.className = 'active';
        link.innerHTML = name;

    link.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();

        if (map.hasLayer(layer)) {
            map.removeLayer(layer);
            this.className = 'active';
        } else {
            map.addLayer(layer);
            this.className = '';
        }
    };

    layers.appendChild(link);
}
*/

L.control.layers({
      '1990': L.mapbox.featureLayer()
        .loadURL('static/data/medianRent.geojson').addTo(map),
      '2000': L.mapbox.featureLayer()
        .loadURL('static/data/medianRent.geojson'),
      '2012': L.mapbox.featureLayer()
        .loadURL('static/data/medianRent.geojson')
  },{}
  ).addTo(map);
