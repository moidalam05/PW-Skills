/** 
Q1 Write a Node.js program that creates a simple HTTP server. When a client sends a request to the server, the server should respond with a "Hello, Students!" message.
**/
const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Hello, Students!');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
