var fs = require("fs");

var stream = fs.createReadStream("./chat.log", "UTF-8");

var data = "";

stream.once("data", () => {
    console.log("\n\n\n");
    console.log("Starting reading file");
    console.log("\n\n\n");
});
stream.on("data", (chunk) => {
    process.stdout.write(`   chunk: ${chunk.length}|`);
    data += chunk;
});

stream.on("end", () => {
    onsole.log("\n\n\n");
    console.log(`Finish reading file ${data.length}`);
    console.log("\n\n\n");
});