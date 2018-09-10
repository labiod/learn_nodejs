var EventEmitter = require("events").EventEmitter;
var util = require("util");

class Person {
    constructor(name) {
        this.name = name;
    }
}

util.inherits(Person, EventEmitter);

module.exports = Person;