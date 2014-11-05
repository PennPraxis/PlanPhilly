//token
L.mapbox.accessToken = 'pk.eyJ1IjoicGxhbnBoaWxseSIsImEiOiJtN3gzMjljIn0.gKWLf0ocj5Tmy4mlpZH5BQ';
//style functions
function getColor(d) {
    return d > 9000  ? '#8c2d04' :
           d > 7500  ? '#cc4c02' :
           d > 6000 ? '#ec7014' :
           d > 4500 ? '#fe9929' :
           d > 3000   ? '#fec44f' :
           d > 1500   ? '#fee391' :
                      '#ffffd4';
};
function style90(feature) {
    return {
        fillColor: getColor(feature.properties.POP90),
        weight: 1,
        color: 'white',
        opacity: 1,
        fillOpacity: 0.6
    };
};
function style00(feature) {
    return {
        fillColor: getColor(feature.properties.POP00),
        weight: 1,
        color: 'white',
        opacity: 1,
        fillOpacity: 0.6
    };
};
function style12(feature) {
    return {
        fillColor: getColor(feature.properties.POP12),
        weight: 1,
        color: 'white',
        opacity: 1,
        fillOpacity: 0.6
    };
};
//mouseovers and highlights
function toolTip90(feature, layer) {
    layer.bindPopup(parseInt(Math.round(feature.properties.POP90)).toLocaleString());
}; 

function toolTip00(feature, layer) {
    layer.bindPopup(parseInt(Math.round(feature.properties.POP00)).toLocaleString());
}; 

function toolTip12(feature, layer) {
    layer.bindPopup(parseInt(Math.round(feature.properties.POP12)).toLocaleString());
}; 
//init basemap
var map = L.mapbox.map('map', 'planphilly.f11785b4').setView([39.992299, -75.163256], 11);
//add data
var data = $.getJSON('static/data/pop.geojson', function(data) {
  var pop90 = L.geoJson(data, {
    style: style90,
    onEachFeature: toolTip90
  })
  var pop00 = L.geoJson(data, {
    style: style00,
    onEachFeature: toolTip00
  })
  var pop12 = L.geoJson(data, {
    style: style12,
    onEachFeature: toolTip12
  })
  var baseLayers = {
  '1990': pop90.addTo(map),
  '2000': pop00,
  '2012': pop12
  };
  L.control.layers(baseLayers,{}, {collapsed: false}).addTo(map);
});
L.mapbox.tileLayer('planphilly.cc748a06').addTo(map);



