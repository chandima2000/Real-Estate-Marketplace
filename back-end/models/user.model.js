import mongoose from "mongoose";
import { string } from "prop-types";

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
        required : true,
    },
},
{timestamps :true});

const User = mongoose.model('User',userSchema);  
// Inside the model , the "User" first letter  should be  capital and
// word should be singular
//mongodb automatically change to plural.

export default User;