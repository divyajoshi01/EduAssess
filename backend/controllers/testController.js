const Test = require("../models/Test");
const Question = require("../models/Question");

const createTest = async (req, res) => {
    try {
        const { title, description, subject, questions, duration } = req.body;

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

const updateTestQuestions = async (req, res) => {
    try {

        const { questions } = req.body;

        for (const q of questions) {

            await Question.findByIdAndUpdate(
                q._id,
                {
                    question: q.question,
                    options: q.options,
                    correctAnswer: q.correctAnswer,
                    subject: q.subject
                }
            );

        }

        res.status(200).json({
            success: true,
            message: "Questions updated successfully"
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
    getStudentTests,
    updateTestQuestions
};