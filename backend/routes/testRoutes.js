const express = require("express");

const router = express.Router();
const allowRole = require("../middleware/roleMiddleware");
const protect = require("../middleware/authMiddleware");


const {
    createTest,
    getTests,
    getSingleTest,
    deleteTest,
    getStudentTests,
    updateTestQuestions
}=require("../controllers/testController");


// Create Test
router.post(
    "/",
    protect,
    allowRole("teacher"),
    createTest
);

// Get All Tests
router.get(
    "/",
    protect,
    getTests
);


router.get(
    "/student",
    protect,
    getStudentTests
);

// Get Single Test
router.get(
    "/:id",
    protect,
    getSingleTest
);



// Delete Test

router.delete(
    "/:id",
    protect,
    deleteTest
);

// Update Questions

router.put(
    "/:id",
    protect,
    allowRole("teacher"),
    updateTestQuestions
);


module.exports = router;