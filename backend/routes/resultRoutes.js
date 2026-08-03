const express=require("express");
const router=express.Router();

const protect=require("../middleware/authMiddleware");

const {
saveResult,
getStudentResults
}=require("../controllers/resultController");


router.post(
"/",
protect,
saveResult
);


router.get(
"/student",
protect,
getStudentResults
);


module.exports=router;