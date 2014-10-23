//test comment
L.mapbox.accessToken = 'pk.eyJ1IjoiaGFtaGFuZHMiLCJhIjoiMksybk92QSJ9.TOMmDM4uWCY65kSLpS_Nww';
var map = L.mapbox.map('map').setView([39.952299, -75.163256], 11);
var layers = document.getElementById('menuUI');

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
        fillOpacity: 0.85
    };
};

function style00(feature) {
    return {
        fillColor: getColor(feature.properties.MRENT00_A),
        weight: 1,
        color: 'white',
        opacity: 1,
        fillOpacity: 0.85
    };
};

function style12(feature) {
    return {
        fillColor: getColor(feature.properties.MRENT12_A),
        weight: 1,
        color: 'white',
        opacity: 1,
        fillOpacity: 0.85
    };
};

var nineteenNinety = L.mapbox.featureLayer()
    .loadURL('static/data/medianRent.geojson')
    .on('ready', addLayer);

twoThousand = L.mapbox.featureLayer()
    .loadURL('static/data/medianRent.geojson')
    .on('ready', addLayer);

twoThousandTwelve = L.mapbox.featureLayer()
    .loadURL('static/data/medianRent.geojson')
    .on('ready', addLayer);


addLayer(nineteenNinety, '1990', 1);
addLayer(twoThousand, '2000', 2);
addLayer(twoThousandTwelve, '2012', 3);

//add tiles
var stamenLayer = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
}).addTo(map);

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
            this.className = '';
        } else {
            map.addLayer(layer);
            this.className = 'active';
        }
    };

    layers.appendChild(link);
}

