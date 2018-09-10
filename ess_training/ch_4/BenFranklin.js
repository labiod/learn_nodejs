//var EventEmitter = require("events").EventEmitter;
//var util = require("util");

// var emitter = new EventEmitter();
// emitter.on("customEvent", (message, status) => {
//     console.log(`${status}: ${message}`);
// });
// emitter.emit("customEvent", "Hello World", 200);
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }

// util.inherits(Person, EventEmitter);
var Person = require("./lib/Person")

var ben = new Person("Ben Franklin");
var george = new Person("George Washington");

george.on("speak", function(said) {
    console.log(`${this.name} -> ${said}`);
});

ben.on("speak", function(said) {
    console.log(`${this.name}: ${said}`);
});

ben.emit("speak", "You may delay, but time will not.");
george.emit("speak", "It is far better to be alone, that to be in bad company.");