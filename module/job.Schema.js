const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const hostList = new Schema({
    position: {
        type:String
       
    },
    qualification:{
        type:String
    },
    minimumEx:{
        type:Number
    },
    maximumEx:{
        type:Number
    },
    jobDescription:{
        type:String
    },NatureOfJob:{
        type:String
    },
    userId:{
        type:String
    },
    companyName:{
        type:String
    },
    companyWebsite:{
        type:String
    }
    
    
    
   
})
const Host = mongoose.model("Host", hostList, "host");
module.exports = Host
