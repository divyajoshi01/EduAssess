const Question = require("../models/Question");


// Add Question (Teacher)

const addQuestion = async(req,res)=>{

    try{

        const {
            question,
            options,
            correctAnswer,
            subject
        } = req.body;


        const newQuestion = await Question.create({

            question,
            options,
            correctAnswer,
            subject,
            createdBy:req.user.id

        });


        res.status(201).json({

            message:"Question added successfully",
            question:newQuestion

        });


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};



// Get All Questions

const getQuestions = async(req,res)=>{

    try{

        const questions = await Question.find()
        .populate("createdBy","name email");


        res.json(questions);


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};



// Get Single Question

const getSingleQuestion = async(req,res)=>{

    try{

        const question = await Question.findById(req.params.id);


        res.json(question);


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};



// Delete Question

const deleteQuestion = async(req,res)=>{

    try{

        await Question.findByIdAndDelete(req.params.id);


        res.json({
            message:"Question deleted"
        });


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};



module.exports={
    addQuestion,
    getQuestions,
    getSingleQuestion,
    deleteQuestion
};