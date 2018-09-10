var readline = require("readline");

var rl = readline.createInterface(process.stdin, process.stdout);
var realPerson = {
    name: '',
    sayings : []
};

rl.question("What is the name of real person? ", (answer) => {
    realPerson.name = answer;
    rl.setPrompt(`What would ${realPerson.name} say? `);
    rl.prompt();

    rl.on("line", (saying) => {
        realPerson.sayings.push(saying);
        if (saying.toLowerCase().trim() === 'exit') {
            rl.close();
        } else {
            rl.setPrompt(`What else ${realPerson.name} say? ('exit' to leave) `);
            rl.prompt();
        }
    });
});

rl.on("close", () => {
    console.log("%s is a real personthat says %j", realPerson.name, realPerson.sayings);
    process.exit();
});