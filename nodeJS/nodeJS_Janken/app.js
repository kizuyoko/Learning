// Require the http module
const http = require('http');

// Require file system
const fs = require('fs');

// Creates server instance
const server = http.createServer((request, response) => {
  // Create a url object with request url and host name
  const url = new URL(); 

  // Switch statement based on pathname of url
  switch(url.pathname) {
    case '/':

      // Check if request method is GET
      if (request.method === 'GET'){

        // Get value of 'name' query
        const name = url.searchParams.get(name);
        console.log(`User's name is: ${name}.`);

        // Write response header
        response.writeHead(200, {
          'Content-Type': 'text/html'
        });  

        // Pipe index.html to response
        fs.createReadStream('index.html').pipe(response);

        break; //The end of if-GET.
      // Check if request is POST and if so, run handlePostResponse()  
      } else if (request.method === 'POST') {
        handlePostResponse(request, response);
        break; //The end of if-POST.    
      } 

    default:
      break;
  } //The end of switch
})

// Function for handling POST responses
function handlePostResponse(request, response){
  request.setEncoding('utf8');
  
  // Receive chunks on 'data' event and concatenate to body variable
  let body = '';
  request.on('data', function (chunk) {
    body += chunk;
  });
  
  // When done receiving data, select a random choice for server
  // Compare server choice with player's choice and send an appropriate message back
  request.on('end', function () {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = choices[Math.floor(Math.random() * 3)];

    const choice = body;

    let message;

    const tied = `Aww, we tied! I also chose ${randomChoice}.`;
    const victory = `Dang it, you won! I chose ${randomChoice}.`;
    const defeat = `Ha! You lost. I chose ${randomChoice}.`;

    if (choice === randomChoice) {
      message = tied;
    } else if (
        (choice === 'rock' && randomChoice === 'paper') ||
        (choice === 'paper' && randomChoice === 'scissors') ||
        (choice === 'scissors' && randomChoice === 'rock')
    ) {
      message = defeat;
    } else {
      message = victory;
    }
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end(`You selected ${choice}. ${message}`);
  });
}
