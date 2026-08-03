const mongoose=require("mongoose");

const resultSchema=new mongoose.Schema({

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

score:{
type:Number,
required:true
},

totalQuestions:{
type:Number,
required:true
}

},{
timestamps:true
});

module.exports=mongoose.model("Result",resultSchema);