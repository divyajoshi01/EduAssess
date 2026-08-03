const Result=require("../models/Result");

const saveResult=async(req,res)=>{

try{

const {
test,
score,
totalQuestions
}=req.body;

const result=await Result.create({
student:req.user.id,
test,
score,
totalQuestions
});

res.status(201).json({
success:true,
message:"Result saved successfully",
result
});

}catch(error){

res.status(500).json({
success:false,
message:error.message
});

}

};


const getStudentResults=async(req,res)=>{

try{

const results=await Result.find({
student:req.user.id
})
.populate("test","title subject");


res.status(200).json({
success:true,
results
});

}catch(error){

res.status(500).json({
success:false,
message:error.message
});

}

};


module.exports={
saveResult,
getStudentResults
};