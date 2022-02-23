const mongoose = require("mongoose");

const User = mongoose.Schema({
   name:String,
    username:String,
    email:String,
    password:String,
    city:String,
    gender:String,
    phone:Number,
    country:String,
});
module.exports = new mongoose.model("crud", User);