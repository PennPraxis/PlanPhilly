L.mapbox.accessToken = 'pk.eyJ1IjoiaGFtaGFuZHMiLCJhIjoiMksybk92QSJ9.TOMmDM4uWCY65kSLpS_Nww';
var map = L.map('map').setView([38.8922,-77.0348], 14);
var layers = document.getElementById('menu-ui');

addLayer(L.mapbox.tileLayer('examples.map-i87786ca'), 'Base Map', 1);
addLayer(L.mapbox.tileLayer('examples.bike-lanes'), 'Bike Lanes', 2);
addLayer(L.mapbox.tileLayer('examples.bike-locations'), 'Bike Stations', 3);

function addLayer(layer, name, zIndex) {
    layer
        .setZIndex(zIndex)
        .addTo(map);

    // Create a simple layer switcher that
    // toggles layers on and off.
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