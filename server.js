// Importing required modules
const http = require('http');

// Define the hostname and port
const hostname = '127.0.0.1'; // localhost
const port = 3000; // port number

// Create a server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with a status code and content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Send a response to the client
  res.end('Hello, World! This is a basic Node.js server.');
});

// Start the server and listen for incoming requests
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});