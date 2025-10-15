/**create a simple server */
const { error } = require('console');
const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/JSON');
    /**create a route */
    if (req.url === '/' && req.method ==='GET') {
        res.end(JSON.stringify({message: 'welcome to js'}));
    } else if (req.url === '/about' && req.method ==='GET') {
        res.end(JSON.stringify({message: 'this is about route'}));
    } else if (req.url === '/users' && req.method ==='GET') {
        const users = [
            { id: 1, name: 'Mayowa'},
            { id: 2, name: 'Pius'}
        ];
           res.end(JSON.stringify({users}));

    }else if (res.url === '/add' && res.method === 'POST') {
        res.end(JSON.stringify({message: 'thank you for the comment'}));
    }else {
        res.statusCode = 404;
        res.end(JSON.stringify({error: 'Page Not Found'}));
    }
    
    
});
/**listening server */
server.listen(3000, () => {
    console.log('server running at http://localhost:3000/');
});

