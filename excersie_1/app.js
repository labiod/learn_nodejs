var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();

var moviesTerms = [
    {
        term: "pace",
        defined: "the speed/tempo of the dramatic action, which is usually enhanced by the soundtrack and the speed of the dialogue, the type of editing, etc."
    },
    {
        term: "package",
        defined: "the marketing elements of a film project, such as script, signed film stars, director, locations, 'high-concept' hook, etc."
    },
    {
        term: "pan",
        defined: "a noun, meaning 'to express a totally negative opinion of' a film, normally in a critical film review; also known as 'trashing' a film"
    }
];

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false})); 
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
    next();
});

app.use(express.static("./public"));

app.use(cors());

app.get("/dictionary-api", (req, res) => {
    console.log("call dictionary-api");
    res.json(moviesTerms);
});

app.post("/dictionary-api", (req, res) => {
    moviesTerms.push(req.body);
    res.json(moviesTerms);
});

app.delete("/dictionary-api/:term", (req, res) => {
    moviesTerms = moviesTerms.filter((definition)=> {
        return definition.term.toLowerCase() !== req.params.term.toLowerCase();
    });
    res.json(moviesTerms);
});

app.listen(3000);

console.log("Express running on port 3000");

module.exports = app;