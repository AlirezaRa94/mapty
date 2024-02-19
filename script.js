'use strict';

if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    position => {
      const { latitude: lat, longitude: lon } = position.coords;
      console.log(`https://www.google.com.au/maps/@${lat},${lon}`);

      const map = L.map('map').setView([lat, lon], 13);

      L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([lat, lon])
        .addTo(map)
        .bindPopup('A pretty CSS popup.<br> Easily customizable.')
        .openPopup();
    },
    () => {
      alert('Could not get your location!');
    }
  );
