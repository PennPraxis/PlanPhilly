//init map
var map = L.map('map').setView([39.992299, -75.163256], 11);
//style functions
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
};
function style90(feature) {
    return {
        fillColor: getColor(feature.properties.MRENT90_A),
        weight: 1,
        color: 'white',
        opacity: 1,
        fillOpacity: 0.9
    };
};
function style00(feature) {
    return {
        fillColor: getColor(feature.properties.MRENT00_A),
        weight: 1,
        color: 'white',
        opacity: 1,
        fillOpacity: 0.9
    };
};
function style12(feature) {
    return {
        fillColor: getColor(feature.properties.MRENT12_A),
        weight: 1,
        color: 'white',
        opacity: 1,
        fillOpacity: 0.9
    };
};
//mouseovers and highlights
function toolTip90(feature, layer) {
    layer.bindPopup("$" + parseInt(Math.round(feature.properties.MRENT90_A)).toLocaleString());
}; 

function toolTip00(feature, layer) {
    layer.bindPopup("$" + parseInt(Math.round(feature.properties.MRENT00_A)).toLocaleString());
}; 

function toolTip12(feature, layer) {
    layer.bindPopup("$" + parseInt(Math.round(feature.properties.MRENT12_A)).toLocaleString());
}; 
//add tiles
var stamenLayer = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
}).addTo(map);
//add control
$.getJSON('static/data/medianRent.geojson', function(data) {
  var rent90 = L.geoJson(data, {
    style: style90,
    onEachFeature: toolTip90
  })
  var rent00 = L.geoJson(data, {
    style: style00,
    onEachFeature: toolTip00
  })
  var rent12 = L.geoJson(data, {
    style: style12,
    onEachFeature: toolTip12
  })
  var baseLayers = {
  '1990': rent90.addTo(map),
  '2000': rent00,
  '2012': rent12
  };
  L.control.layers(baseLayers,{}, {collapsed: false}).addTo(map);
});



