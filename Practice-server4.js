const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    // 1. Pass `req.url` to url.parse().
    // The second argument "true" tells url.parse to also parse the query string into an object.
    const parsedUrl = url.parse(req.url, true);

    const query = parsedUrl.query;

    if (parsedUrl.pathname === "/profile") {

        res.writeHead(200, {"Conent-type": "application/json"});
        res.end(JSON.stringify({
            message: `Welcome ${query.name}!`,
            course: query.course
        }));
    }else{
        // 3. Correct the function name to `writeHead`.
        res.writeHead(404, {"content-type": "text/plain"});
        res.end("Page Not Found");
    }
});

//listening server
server.listen(3000, () => {
    console.log("server running at http://localhost:3000/");
});