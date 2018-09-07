//ex 3_1
var fs = require('fs')
var data = require("./data.json")

console.log("var data:", data)
console.log("data.name:", data.name)

fs.readFile("data.json", "utf-8", (err, data) => {
    console.log("data:", data)
})

//ex 3_2

fs.readdir("../../", (err, data) => {
    console.log("dir:", data)
})

//ex 3_3
var jdata = {
    name: 'Bob'
}
fs.writeFile("data2.json", JSON.stringify(data), (err) => {
    console.log(err)
})