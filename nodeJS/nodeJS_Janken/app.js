// Require the http module
const http = require('http');

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
      }

    default:
      break;
  }
})
