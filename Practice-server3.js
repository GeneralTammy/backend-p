const http = require("http");
const path = require("path");
const fs = require("fs");

/** read html template */
const server = http.createServer((req, res) => {
    if (req.url == "/students") {
        const filePath = path.join(__dirname, "practice-template", "index1.html");
        let htmlTemplate = fs.readFileSync(filePath, "UTF-8");

        /**write data */
        const student = {
            name: "Zainab",
            course: "Biology",
            score: "80"
        };

        /** fill the template */
        htmlTemplate = htmlTemplate
        .replace("{{name}}", student.name)
        .replace("{{course}}", student.course)
        .replace("{{score}}", student.score);

        /** sending it to the browser */
        res.writeHead(200, {"Content-type": "text/html"});
        res.end(htmlTemplate);
    } else {
        res.writeHead(404, {"Content-type": "text/plain"});
        res.end("PAGE NOT FOUND");
    }
});

/**listening server */
server.listen(3000, () => {
    console.log('server running at http://localhost:3000/');
});
    