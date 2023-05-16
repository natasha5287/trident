import L from 'leaflet/dist/leaflet.js';

if (document.querySelector('#map')) {
    const map = L.map('map').setView([50.00111, 36.23420], 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const mainPinIcon = L.icon({
        iconUrl: './img/logo_icon.png',
        iconSize: [42, 42],
        iconAnchor: [21, 42],
    });

    const marker = L.marker([50.00111, 36.23420], { icon: mainPinIcon }).addTo(map);
}