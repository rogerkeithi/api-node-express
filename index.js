const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Node.js!');
});

const port = 3000;
const ipAddress = '127.0.0.1';

server.listen(port, ipAddress, () => {
  console.log(`Server rodando em http://${ipAddress}:${port}/`);
});