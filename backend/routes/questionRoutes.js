const express = require("express");
const allowRole = require("../middleware/roleMiddleware");

const router = express.Router();


const protect = require("../middleware/authMiddleware");


const {
    addQuestion,
    getQuestions,
    getSingleQuestion,
    deleteQuestion

}=require("../controllers/questionController");



// Teacher add question

router.post(
"/",
protect,
allowRole("teacher"),
addQuestion
);


// Get all questions

router.get(
"/",
protect,
getQuestions
);


// Single question

router.get(
"/:id",
protect,
getSingleQuestion
);


// Delete

router.delete(
"/:id",
protect,
deleteQuestion
);



module.exports = router;