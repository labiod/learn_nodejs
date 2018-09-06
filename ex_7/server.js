var express = require("express")
var body = require("body-parser")
var app = express()
var http = require("http").Server(app)
var io = require("socket.io")(http)
var mongoose = require("mongoose")


app.use(express.static(__dirname))
app.use(body.json())
app.use(body.urlencoded({extended: false}))

mongoose.Promise = Promise

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

app.post("/messages", async (req, res) => {
    console.log(req.body)
    var message = new Message(req.body)
    var savedMessage = message.save()
    
    console.log("message saved")
    var censored = await Message.findOne({message: "badword"})
    
    if (censored)
        await Message.remove({_id : censored._id})
    else 
        io.emit('message', req.body)
    res.sendStatus(200)
    // .catch((err) => {
    //     res.sendStatus(500)
    //     return console.error(err)
    // })
})

io.on('connection', () => {
    console.log("a user connected")
})

mongoose.connect(dbUrl, {useNewUrlParser: true}, (err) => {
    console.log("Mongo db connection:", err)
})
var server = http.listen(3000, () => {
    console.log("server is listening on port ", server.address().port)
})