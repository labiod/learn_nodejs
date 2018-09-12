var http = require("http");
var fs = require("fs");

http.createServer((req, res)=> {

    if (req.method === "GET") {
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("./public/form.html", "UTF-8").pipe(res);
    } else if (req.method === "POST") {
        var body = "";
        req.on("data", (chunk) => {
            body += chunk;
        })

        req.on("end", () => {
            res.writeHead(200, {"Content-Type": "text/html"});

            res.end(`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>Form Result</title>
                </head>
                <body>
                    <h1>Your form result</h1>
                    <p>${body}</p>
                </body>
            </html>
            `);
        });
    }
    
}).listen(3000);

console.log("Listen on port 3000");
