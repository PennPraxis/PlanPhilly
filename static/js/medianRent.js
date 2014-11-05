//token
L.mapbox.accessToken = 'pk.eyJ1IjoicGxhbnBoaWxseSIsImEiOiJtN3gzMjljIn0.gKWLf0ocj5Tmy4mlpZH5BQ';
//style functions
function getColor(d) {
    return d > 1600 ? '#662506' :    
            d > 1400 ? '#993404' :
           d > 1200  ? '#cc4c02' :
           d > 1000  ? '#ec7014' :
           d > 800  ? '#fe9929' :
           d > 600  ? '#fec44f' :
           d > 400   ? '#fee391' :
           d > 200   ? '#fff7bc' :
                      '#ffffe5';
};
function style90(feature) {
    return {
        fillColor: getColor(feature.properties.MRENT90_A),
        weight: 1,
        color: 'white',
        opacity: 1,
        fillOpacity: 0.6
    };
};
function style00(feature) {
    return {
        fillColor: getColor(feature.properties.MRENT00_A),
        weight: 1,
        color: 'white',
        opacity: 1,
        fillOpacity: 0.6
    };
};
function style12(feature) {
    return {
        fillColor: getColor(feature.properties.MRENT12_A),
        weight: 1,
        color: 'white',
        opacity: 1,
        fillOpacity: 0.6
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
//init basemap
var map = L.mapbox.map('map', 'planphilly.f11785b4').setView([39.992299, -75.163256], 11);
//add data
var data = $.getJSON('static/data/medianRent.geojson', function(data) {
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
L.mapbox.tileLayer('planphilly.cc748a06').addTo(map);



