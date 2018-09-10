var fs = require("fs");

fs.readdir("./lib", (err, files) => {
    if (err) {
        throw err;
    }
    console.log(files);
});

console.log("Reading files ...");