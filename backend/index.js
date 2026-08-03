const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

const dbConection = require("./config/db.js");
const authRoutes= require("./routes/authRoutes.js")


// Connect to MongoDB
dbConection();
const app = express();


// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/questions",
require("./routes/questionRoutes"));

app.use("/api/tests",
require("./routes/testRoutes"));

app.use("/api/attempt",
require("./routes/attemptRoutes"));

app.use("/api/results",
require("./routes/resultRoutes"));

// Test API
app.get("/", (req,res)=>{
    res.send("Online Exam Portal Backend Running");
});


// Server
const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});