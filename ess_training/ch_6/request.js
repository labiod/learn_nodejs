var https = require("https");
var fs = require("fs");

var options = {
    hostname: "en.wikipedia.org",
    port: 443,
    path: "/wiki/George_Washington",
    methoid: "GET"
};

var req = https.request(options, (res) => {
    var responseBody = "";
    console.log("response from serve started.");
    console.log(`Server Status: ${res.statusCode} `);
    console.log("Response Headers: %j", res.headers);

    res.setEncoding("UTF-8");
    res.once("data", (chunk) => {
        console.log(chunk);
    });

    res.on("data", (chunk) => {
        console.log(`--chunk-- ${chunk.length}`);
        responseBody += chunk;
    });

    res.on("end", () => {
        fs.writeFile("george-washington.html", responseBody, (err) => {
            if (err) {
                throw err;
            }
            console.log("File Downloaded");
        });
    });
});

req.on("error", (err)=> {
    console.log(`Problem with request:${err}`);
});

req.end();