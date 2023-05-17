mapboxgl.accessToken = 'pk.eyJ1IjoibmJ0ODUzIiwiYSI6ImNsaHFvemg0dDI2bnIza3Mxa3Y3ZXc5em0ifQ.jTp2JPBPu7S06rFtypvGww'; // Replace with your Mapbox access token
let longitude = -2.244644 
let latitude = 53.483959

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/nbt853/clhrb536e01wt01qu1ejbcxey', // Replace with your desired map style
  center: [longitude, latitude], // Replace with the desired center coordinates
  zoom: 12 // Adjust the zoom level as needed
});