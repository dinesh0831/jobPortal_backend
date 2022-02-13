const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userList = new Schema({
    email: {
        type: String,
        required:true
    },
    name: {
        type: String,
        
        required: true,
        
    },
    password: {
        type: String,
        
        required: true,
        

    },
    mobileno: {
        type: Number,
        required: true,
        
    },
    savedList:{
        type:Array
    },
    appliedList:{
        type:Array
    },
    
    location:{
        type:String
    },
    recruiter:{
        type:Boolean
    }

  

})
const User = mongoose.model("User", userList, "User");
module.exports = User
