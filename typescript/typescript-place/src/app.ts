import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file
const googleApiKey = process.env.GOOGLE_API_KEY; // Access the GOOGLE_API_KEY

//declare var google: any;

// Use googleApiKey in your application
//console.log(googleApiKey); // Example usage

type GoogleGeocodingResponse = {
  results: {geometry: {location: {lat: number, lng: number}}}[];
  status: 'OK' | 'ZERO_RESULTS';
}

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;



function searchAddressHandler(event: Event) {
  event. preventDefault();
  const enteredAddress = addressInput.value;

  // To Google API!!!
  axios
  .get<GoogleGeocodingResponse>(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${googleApiKey}`
  )
  .then(response => {
    //console.log(response);

    if (response.data.status !== 'OK') {
      throw new Error('Could not find')
    }
    const coordinates = response.data.results[0].geometry.location;
    const mapElement = document.getElementById('map');
    if (mapElement) { // Check if mapElement is not null
        const map = new google.maps.Map(mapElement, {
            center: coordinates,
            zoom: 8
        });
    } else {
        console.error('Map element not found');
    }
  })  
  .catch(err => {
    alert(err.message);
    console.log(err);
  });

}

form.addEventListener('submit', searchAddressHandler);