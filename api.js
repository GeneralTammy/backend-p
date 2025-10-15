const { error } = require('console');

const http = require('http');


const Student = [
        {id: 1, name: 'Mayowa', Course: 'Chemistry'},
        {id: 2, name:'Pius', Course: 'Physics'},
        {id: 3, name: 'Zainab', Course: 'Maths'},
        {id: 4, name: 'Babs', Course: 'English'}
    ];

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/JSON');
    /**create a route */
    if (req.url === '/' && req.method ==='GET') {
        res.end(JSON.stringify({message: 'welcome to js'}));
    } else if (req.url === '/about' && req.method ==='GET') {
        res.end(JSON.stringify({message: 'this is about route'}));
        
    } else if (req.url === '/Student' && req.method ==='GET') {
           res.end(JSON.stringify({Student}));

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

