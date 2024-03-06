/**
Q3 Write a Node.js program that creates an HTTP server and handles different routes. The server should respond with "Hello, World!" for the root route ("/") and "Page Not Found" for any other route.
**/

const http = require('http');

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.end('Hello, World!');
	} else {
		res.end('Page Not Found');
	}
});

const PORT = 3000;
server.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
});
