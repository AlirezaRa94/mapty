'use strict';

if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    position => {
      const { latitude: lat, longitude: lon } = position.coords;
      console.log(`https://www.google.com.au/maps/@${lat},${lon}`);
    },
    () => {
      alert('Could not get your location!');
    }
  );
