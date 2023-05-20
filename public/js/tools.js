const http = require('http');

const options = {
  hostname: 'example.com', // Replace with your server's hostname
  path: '/', // Replace with the path of the HTML file
  method: 'GET',
};

const req = http.request(options, (res) => {
  const headers = res.headers;
  console.log('Response Headers:', headers);
});

req.on('error', (error) => {
  console.error('Error:', error);
});

req.end();