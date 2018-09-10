var fs = require("fs");
var path = require("path");

fs.readdir("./lib", (err, files) => {
    files.forEach(fileName => {
        var file = path.join(__dirname, "lib", fileName)
        var stats = fs.statSync(file);
        if (stats.isFile() && fileName != ".DS_STORE") {
            fs.readFile(file, "UTF-8", (err, content) => {
                if (err) {
                    console.error(err);
                }
                console.log(content);
            });
        }
    });
});

