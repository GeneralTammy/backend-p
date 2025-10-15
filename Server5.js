// importing modules
    const http = require('http');
    const greet = require('./module-server/greater');

const server = http.createServer((req, res) => {
     res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(greet('Mayowa'));
    });


/**listening server */
server.listen(3000, () => {
    console.log('server running at http://localhost:3000/');
});
