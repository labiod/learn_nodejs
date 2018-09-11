var fs = require("fs");

fs.renameSync("./lib/project-config.js", "./lib/config.json");

console.log("Config json file rename");

fs.rename("./lib/notes.md", "./notes.md", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Nodes.md moved sucessfully");
    }
});