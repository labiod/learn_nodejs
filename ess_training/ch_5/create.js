var fs = require("fs");

var md = `

Sample Markdown Title
=====================

Sample Subtitle
---------------

    * point 1
    * point 2
    * point 3

`;

fs.writeFile("sample.md", md.trim(), (err) => {
    console.log("file created");
});