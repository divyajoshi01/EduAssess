const mongoose = require("mongoose");


const attemptSchema = new mongoose.Schema({

    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    test:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Test",
        required:true
    },

    answers:[
        {
            question:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Question"
            },

            selectedAnswer:{
                type:String
            }
        }
    ],


    score:{
        type:Number,
        default:0
    }

},
{
    timestamps:true
});


module.exports = mongoose.model("Attempt",attemptSchema);