//create programming model
//it is mapped to programming videos collection 

//import mongoDB

let mongoose = require("mongoose")

//user mongoose to create mongo schema
let mongoSchema = mongoose.Schema

//use mongoose to create mongo schema
let programmingCol = new mongoSchema({
    "id": Number,
    "videoid": String,
    "title": String

}, { collection: "programming"})

//export the model
module.exports = mongoose.model('programming', programmingCol)