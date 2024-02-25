var map = L.map('map').setView([ 37.1773, -3.5986], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

var provincias = [
    { name: "Granada", lat: 37.1773, lng: -3.5986, info: "<b>Granada</b><br>Información sobre Granada" },
    { name: "Sevilla", lat: 37.3886, lng: -5.9823, info: "<b>Sevilla</b><br>Información sobre Sevilla" },
    { name: "Córdoba", lat: 37.8882, lng: -4.7794, info: "<b>Córdoba</b><br>Información sobre Córdoba" },
    { name: "Jaén", lat: 37.7749, lng: -3.7902, info: "<b>Jaén</b><br>Información sobre Jaén" },
    { name: "Málaga", lat: 36.7213, lng: -4.4213, info: "<b>Málaga</b><br>Información sobre Málaga" },
    { name: "Huelva", lat: 37.2583, lng: -6.9505, info: "<b>Huelva</b><br>Información sobre Huelva" },
    { name: "Cádiz", lat: 36.5271, lng: -6.2886, info: "<b>Cádiz</b><br>Información sobre Cádiz" },
    { name: "Almería", lat: 36.8402, lng: -2.4679, info: "<b>Almería</b><br>Información sobre Almería" },
];

// Iterar sobre cada provincia y añadir un marcador al mapa
provincias.forEach(function (provincia) {
    var marker = L.marker([provincia.lat, provincia.lng]).addTo(map);
});

L.control.scale().addTo(map);
L.control.navbar().addTo(map);
L.control.zoom().addTo(map);