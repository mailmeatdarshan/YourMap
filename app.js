maptilersdk.config.apiKey = 'PVgmcF5RjkRISY45RSpE';
const map = new maptilersdk.Map({
  container: 'map',
  style: maptilersdk.MapStyle.STREETS,
  center: [78.9629, 20.5937], 
  zoom: 5, 
});

const gc = new maptilersdkMaptilerGeocoder.GeocodingControl({
  language: ['fr', 'en']
});
map.addControl(gc, 'top-right');

const locationButton = document.createElement('button');
locationButton.innerHTML = '📍';
locationButton.title = 'Find My Location';
locationButton.className = 'location-button';

locationButton.addEventListener('mouseenter', function() {
  this.style.backgroundColor = '#f0f0f0';
});

locationButton.addEventListener('mouseleave', function() {
  this.style.backgroundColor = 'white';
});

locationButton.addEventListener('click', function() {
  if (navigator.geolocation) {
    locationButton.innerHTML = '⟳';
    locationButton.style.animation = 'spin 1s linear infinite';
    
    navigator.geolocation.getCurrentPosition(
      function(position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        
        map.flyTo({
          center: [lng, lat],
          zoom: 15,
          duration: 2000
        });
        
        new maptilersdk.Marker({ color: '#FF0000' })
          .setLngLat([lng, lat])
          .addTo(map);
        
        locationButton.innerHTML = '📍';
        locationButton.style.animation = '';
      },
      function(error) {
        alert('Unable to retrieve your location: ' + error.message);
        locationButton.innerHTML = '📍';
        locationButton.style.animation = '';
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  } else {
    alert('Geolocation is not supported by this browser.');
  }
});

document.getElementById('map').appendChild(locationButton);

document.getElementById('buttons').addEventListener('click', function (event) {
  gc.setOptions({
    language: event.target.id,
    placeholder: setPlaceHolder(event.target.id)
  });
});

function setPlaceHolder(language) {
  switch (language) {
    case 'en':
      return 'Search';
    case 'fr':
      return 'Recherche';
    case 'de':
      return 'Suchen';
    case 'ja':
      return '検索';
    case 'es':
      return 'Buscar';
    default:
      return 'Search';
  }
}