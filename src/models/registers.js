const mongoose = require("mongoose");

//it show error if it is required but not entered
const emplScehema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    },
    cpass:{
        type:String,
        required:true
    },
    // gender:{
    //     type:String,
    //     required:true
    // },
    // hobbies:{
    //     type:String,
    //     required:true
    // },
    // sourceofincome:{
    //     type:String,
    //     required:true
    // },
    // income:{
    //     type:Number,
    //     required:true
    // },
    // picurl:{
    //     type:String,
    //     required:true
    // },
    // age:{
    //     type:Number,
    //     required:true
    // },
    // bio:{
    //     type:String,
    //     required:true
    // }
})

//now create collection
const Register = new mongoose.model("Mernthapa-col", emplScehema);
module.exports = Register;