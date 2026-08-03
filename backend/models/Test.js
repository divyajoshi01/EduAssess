const mongoose = require("mongoose");


const testSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },

    description:{
        type:String
    },

    subject:{
        type:String,
        required:true
    },

    questions:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Question"
        }
    ],

    duration:{
        type:Number,
        required:true
    },

    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }

},
{
    timestamps:true
});


module.exports = mongoose.model("Test",testSchema);