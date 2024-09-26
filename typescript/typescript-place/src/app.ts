import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file
const googleApiKey = process.env.GOOGLE_API_KEY; // Access the GOOGLE_API_KEY

// Use googleApiKey in your application
console.log(googleApiKey); // Example usage

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;



function searchAddressHandler(event: Event) {
  event. preventDefault();
  const enteredAddress = addressInput.value;

  //To Google API!!!
}

form.addEventListener('submit', searchAddressHandler);