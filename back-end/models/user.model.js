const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
},
{timestamps :true});

const User = mongoose.model('User',userSchema);  //model name = User
// Inside the model , the "User" first letter  should be  capital and
// word should be singular
//mongodb automatically change to plural.

module.exports =  User;

