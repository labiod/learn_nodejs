var express = require("express")
var body = require("body-parser")
var app = express()
var http = require("http").Server(app)
var io = require("socket.io")(http)



app.use(express.static(__dirname))
app.use(body.json())
app.use(body.urlencoded({extended: false}))

var messages = [
    {name: "Tim", message: "Hi"},
    {name: "Jane", message: "Hello"}
]

app.get("/messages", (req, res) => {
    res.send(messages)
})

app.post("/messages", (req, res) => {
    console.log(req.body)
    io.emit('message', req.body)
    messages.push(req.body)
    res.sendStatus(200)
})

io.on('connection', () => {
    console.log("a user connected")
})
var server = http.listen(3000, () => {
    console.log("server is listening on port ", server.address().port)
})