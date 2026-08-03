const Attempt = require("../models/Attempt");
const Test = require("../models/Test");


// Submit Test

const submitTest = async(req,res)=>{

    try{

        const {
            testId,
            answers
        } = req.body;


        const test = await Test.findById(testId)
        .populate("questions");


        let score = 0;


        test.questions.forEach((question)=>{

            const answer = answers.find(
                (ans)=> 
                ans.question === question._id.toString()
            );


            if(answer && answer.selectedAnswer === question.correctAnswer){

                score++;

            }

        });



        const attempt = await Attempt.create({

            student:req.user.id,

            test:testId,

            answers,

            score

        });


        res.status(201).json({

            message:"Test submitted successfully",

            score,

            attempt

        });


    }catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};





// Student Result

const getMyResults = async(req,res)=>{

    try{


        const results = await Attempt.find({

            student:req.user.id

        })

        .populate("test","title subject");


        res.json(results);



    }catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};



module.exports={

    submitTest,

    getMyResults

};