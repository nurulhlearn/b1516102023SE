//import express

let expressApp = require('express')
let mongoose = require('mongoose')
let prog = require('./programming')

//create express app
let app = expressApp()

//enable express app to use JSON content-type
app.use(expressApp.json())

//define a port where API will be exposed
let PORT = 1234

//setup temporary data source
let videos = [
    {
        "id": 1,
        "videoid": "OI0F-zEhPJw",
        "title": "Kantara"
    },
    {
        "id": 2,
        "videoid": "OI0F-zEhfg",
        "title": "Something"
    }
]
//connection to the database-MongoDB
let connectionString = "mongodb+srv://username:Smile123@clusternh.shiulpw.mongodb.net/youtubeb"
mongoose.connect(connectionString)
let db = mongoose.connection


//check if connection was success
db.once('open',()=>{
    console.log("Connected to the mongodb in cloud")
})



//create first api
//  http://localhost:1234/youtube/welcome
// API endpoint -> /youtube/welcome
// API URL ->  http://localhost:1234/youtube/welcome
app.get("/youtube/welcome", (request, response) => {
    //api implementation
    console.log("endpoint called: /youtube/welcome with GET request")
    response.send("Hello from youtube server, GET")
})

//create second api
//  http://localhost:1234/youtube/welcome
// API endpoint -> /youtube/welcome
// API URL ->  http://localhost:1234/youtube/welcome
app.post("/youtube/welcome", (request, response) => {
    //api implementation
    console.log("endpoint called: /youtube/welcome with POST request")
    response.send("Hello from youtube server, POST")
})


/*
GET http://localhost:1234/youtube/all
*/
app.get("/youtube/all", (request, response) => {
    console.log("endpoint called: /youtube/all with GET request")
   // response.send(videos)

//response.send(videos)
    //connect to mongodb in cloud and get all documents
    prog.find({})
        .then((data)=>{
            console.log(data)
            response.json(data)
        })
        .catch((error)=>{
            console.log(error)
            response.json(error)
        })
})


/*
POST http://localhost:1234/youtube/add

*/
app.post("/youtube/add", (request, response) => {
    console.log("endpoint called: /youtube/add with POST request")
    //console.log(request)
    console.log(request.url)
    console.log(request.method)
    console.log(request.body)
    //add or push the value in request.body to videos array
    videos.push(request.body)
    //send back the updated videos array as response
    response.send(videos)
})

//start/fire api at given port
app.listen(PORT, () => {
    console.log("Listening to port: " + PORT)
})

/*
GET -> retrive the resource
POST -> add the new resource
PUT -> update the resource
DELETE -> delete the resource

*/