const express = require("express");

const router = express.Router();
const allowRole = require("../middleware/roleMiddleware");


const protect = require("../middleware/authMiddleware");


const {

    submitTest,
    getMyResults

}=require("../controllers/attemptController");



// Submit test

router.post(
"/submit",
protect,
allowRole("student"),
submitTest
);


// Get result

router.get(
"/results",
protect,
getMyResults
);



module.exports = router;