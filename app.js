const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});

    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Node.js Jenkins Pipeline</title>
        </head>
        <body>
            <h1>NODE.JS PIPELINE PROJECT</h1>
            <h2>Jenkins Build Successful</h2>
            <p>This website is deployed using Jenkins Pipeline.</p>
            <p>GitHub → Jenkins → Build → Test → Deploy</p>
        </body>
        </html>
    `);
});

server.listen(3000, () => {
    console.log("Node.js server running on port 3000");
});
