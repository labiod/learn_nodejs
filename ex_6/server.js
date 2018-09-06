var express = require("express")
var body = require("body-parser")
var app = express()
var http = require("http").Server(app)
var io = require("socket.io")(http)
var mongoose = require("mongoose")


app.use(express.static(__dirname))
app.use(body.json())
app.use(body.urlencoded({extended: false}))

var dbUrl = "mongodb://user:user123@ds145562.mlab.com:45562/learning-node"

var Message = mongoose.model("Message", {
    name: String,
    message: String
})

app.get("/messages", (req, res) => {
    Message.find({}, (err, messages) => {
        res.send(messages)
    })
    
})

app.post("/messages", (req, res) => {
    console.log(req.body)
    var message = new Message(req.body)
    message.save((err) => {
        if (err)
            sendStatus(500)
        
        io.emit('message', req.body)
        res.sendStatus(200)
    })
    
})

io.on('connection', () => {
    console.log("a user connected")
})

mongoose.connect(dbUrl, {useMongoClient: true}, (err) => {
    console.log("Mongo db connection:", err)
})
var server = http.listen(3000, () => {
    console.log("server is listening on port ", server.address().port)
})