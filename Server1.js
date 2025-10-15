/**create a simple server */
const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hello this is a backend server using node.js modules');
});
/**listening server */
server.listen(3000, () => {
    console.log('server running at http://localhost:3000/');
});

