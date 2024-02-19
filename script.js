'use strict';

if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    position => {
      const { latitude, longitude } = position.coords;

      const map = L.map('map').setView([latitude, longitude], 13);

      L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      map.on('click', mapEvent => {
        const { lat, lng } = mapEvent.latlng;
        L.marker([lat, lng])
          .addTo(map)
          .bindPopup(
            L.popup({
              maxWidth: 250,
              minWidth: 100,
              autoClose: false,
              closeOnClick: false,
            })
          )
          .setPopupContent('Workout')
          .openPopup();
      });
    },
    () => {
      alert('Could not get your location!');
    }
  );
