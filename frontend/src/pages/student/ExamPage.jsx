import React,{useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import API from "../../api/axios";

const ExamPage=()=>{

const {examId}=useParams();

const [questions,setQuestions]=useState([]);
const [currentQuestion,setCurrentQuestion]=useState(0);
const [selectedAnswer,setSelectedAnswer]=useState("");
const [score,setScore]=useState(0);
const [submitted,setSubmitted]=useState(false);
const [timeLeft,setTimeLeft]=useState(0);

const fetchExam=async()=>{

try{

const token=localStorage.getItem("token");

const res=await API.get(`/tests/${examId}`,{
headers:{
Authorization:`Bearer ${token}`
}
});

setQuestions(res.data.questions || []);
setTimeLeft(res.data.duration*60);

}catch(error){

console.log("Exam Fetch Error:",error);

}

};

useEffect(()=>{
fetchExam();
},[]);

useEffect(()=>{

if(timeLeft<=0)return;

const timer=setInterval(()=>{

setTimeLeft(prev=>prev-1);

},1000);

return()=>clearInterval(timer);

},[timeLeft]);

const saveResult=async(finalScore)=>{

try{

const token=localStorage.getItem("token");

await API.post("/results",{
test:examId,
score:finalScore,
totalQuestions:questions.length
},{
headers:{
Authorization:`Bearer ${token}`
}
});

}catch(error){

console.log("Result Save Error:",error);

}

};

useEffect(()=>{

if(timeLeft===0&&questions.length>0&&!submitted){

saveResult(score);
setSubmitted(true);

}

},[timeLeft]);


const handlePrevious=()=>{

if(currentQuestion>0){

setCurrentQuestion(currentQuestion-1);
setSelectedAnswer("");

}

};


const handleNext=()=>{

const current=questions[currentQuestion];

const correctIndex=current.correctAnswer.charCodeAt(0)-65;

let finalScore=score;

if(selectedAnswer===correctIndex){

finalScore=score+1;
setScore(finalScore);

}

setSelectedAnswer("");

if(currentQuestion<questions.length-1){

setCurrentQuestion(currentQuestion+1);

}else{

saveResult(finalScore);
setSubmitted(true);

}

};


if(questions.length===0){

return(
<div className="min-h-screen flex items-center justify-center">
<h1 className="text-2xl font-bold">
Loading Questions...
</h1>
</div>
)

}


if(submitted){

return(
<div className="min-h-screen bg-gray-100 flex items-center justify-center">

<div className="bg-white p-8 rounded-xl shadow-md text-center">

<h1 className="text-3xl font-bold text-blue-600">
Exam Completed 🎉
</h1>

<p className="text-xl mt-5">
Your Score : {score}/{questions.length}
</p>

<p className="mt-3 text-green-600 font-semibold">
Correct Answers : {score}
</p>

<p className="mt-3 text-red-600 font-semibold">
Wrong Answers : {questions.length-score}
</p>

<p className="mt-3 text-blue-600 font-semibold">
Score : {Math.round((score/questions.length)*100)}%
</p>

</div>

</div>
)

}


return(
<div className="min-h-screen bg-gray-100 p-8">

<div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">

<div className="text-right text-red-600 font-bold mb-4">
Time Left: {Math.floor(timeLeft/60)}:{String(timeLeft%60).padStart(2,"0")}
</div>

<h1 className="text-2xl font-bold mb-6">
Question {currentQuestion+1} / {questions.length}
</h1>

<h2 className="text-xl font-semibold mb-6">
{questions[currentQuestion].question}
</h2>

<div className="space-y-4">

{
questions[currentQuestion].options.map((option,index)=>(

<label
key={index}
className={`block border p-4 rounded-lg cursor-pointer ${
selectedAnswer===index
?"bg-blue-100 border-blue-600"
:"hover:bg-gray-100"
}`}
>

<input
type="radio"
name="answer"
checked={selectedAnswer===index}
onChange={()=>setSelectedAnswer(index)}
className="mr-3"
/>

{option}

</label>

))
}

</div>

<div className="flex justify-between mt-8">

<button
onClick={handlePrevious}
disabled={currentQuestion===0}
className="bg-gray-500 text-white px-6 py-3 rounded-lg disabled:bg-gray-300"
>
Previous
</button>

<button
onClick={handleNext}
disabled={selectedAnswer===""}
className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
>
{
currentQuestion===questions.length-1
?"Submit Exam"
:"Next Question"
}
</button>

</div>

</div>

</div>
);

};

export default ExamPage;