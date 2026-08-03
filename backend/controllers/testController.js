const Test = require("../models/Test");


// Create Test

const createTest = async (req, res) => {

    try {

        const {
            title,
            description,
            subject,
            questions,
            duration
        } = req.body;



        const test = await Test.create({

            title,
            description,
            subject,
            questions,
            duration,
            createdBy: req.user.id

        });



        res.status(201).json({

            success: true,
            message: "Test created successfully",
            test

        });



    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};






// Get Teacher Tests

const getTests = async (req, res) => {

    try {


        const tests = await Test.find({

            createdBy: req.user.id

        })
            .populate("questions")
            .populate("createdBy", "name email");



        res.status(200).json({

            success: true,
            tests

        });



    } catch (error) {


        res.status(500).json({

            message: error.message

        });


    }

};







// Get Single Test

const getSingleTest = async (req, res) => {

    try {


        const test = await Test.findById(req.params.id)
            .populate("questions");



        res.status(200).json(test);



    } catch (error) {


        res.status(500).json({

            message: error.message

        });


    }

};








// Delete Test

const deleteTest = async (req, res) => {

    try {


        const test = await Test.findOne({

            _id: req.params.id,

            createdBy: req.user.id

        });



        if (!test) {

            return res.status(404).json({

                message: "Test not found"

            });

        }



        await test.deleteOne();



        res.json({

            success: true,

            message: "Test deleted successfully"

        });



    } catch (error) {


        res.status(500).json({

            message: error.message

        });


    }

};

// Get All Exams For Students

const getStudentTests = async (req, res) => {

    try {


        const tests = await Test.find()
            .select("title description subject duration createdBy")
            .populate("createdBy", "name");



        res.status(200).json({

            success: true,

            tests

        });



    } catch (error) {


        res.status(500).json({

            success: false,

            message: error.message

        });


    }

};



module.exports = {

    createTest,

    getTests,

    getSingleTest,

    deleteTest,
    getStudentTests

};