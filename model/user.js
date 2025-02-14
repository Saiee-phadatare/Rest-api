const mongoose = require("mongoose");

//Schema
const userSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: true,
    },
    lastName :{
        type: String,
    },
    email : {
        type: String,
        required: true,
    },
    gender : {
        type: String,
    }
},
{ timestamps : true }
);

//model
const mouser = new mongoose.model("node", userSchema);
//                              (collectionname, schemaname)

 module.exports = mouser;           