import React,{useEffect,useState} from "react";
import {
FaCheckCircle,
FaTimesCircle,
FaClipboardList,
FaChartLine
} from "react-icons/fa";
import API from "../../api/axios";

const Result=()=>{

const [resultData,setResultData]=useState(null);

const fetchResult=async()=>{

try{

const token=localStorage.getItem("token");

const res=await API.get("/results/student",{
headers:{
Authorization:`Bearer ${token}`
}
});

console.log(res.data);

if(res.data.results.length>0){

const result=res.data.results[res.data.results.length-1];

setResultData({
totalQuestions:result.totalQuestions,
correct:result.score,
wrong:result.totalQuestions-result.score,
attempted:result.totalQuestions,
unattempted:0,
score:`${Math.round((result.score/result.totalQuestions)*100)}%`
});

}else{

setResultData({
totalQuestions:0,
correct:0,
wrong:0,
attempted:0,
unattempted:0,
score:"0%"
});

}

}catch(error){

console.log("Result Fetch Error:",error);

}

};

useEffect(()=>{
fetchResult();
},[]);


if(!resultData){

return(
<div className="min-h-screen flex items-center justify-center">
<h1 className="text-2xl font-bold">
Loading Result...
</h1>
</div>
)

}


const cards=[
{
title:"Total Questions",
value:resultData.totalQuestions,
icon:<FaClipboardList/>
},
{
title:"Correct Answers",
value:resultData.correct,
icon:<FaCheckCircle/>
},
{
title:"Wrong Answers",
value:resultData.wrong,
icon:<FaTimesCircle/>
},
{
title:"Score",
value:resultData.score,
icon:<FaChartLine/>
}
];


return(
<div className="min-h-screen bg-gray-100 p-8">

<h1 className="text-3xl font-bold text-gray-800">
Exam Result
</h1>

<p className="text-gray-500 mt-2">
Check your exam performance
</p>

<div className="grid md:grid-cols-4 gap-6 mt-8">

{
cards.map((card,index)=>(

<div
key={index}
className="bg-white p-6 rounded-xl shadow-md flex justify-between items-center"
>

<div>

<h2 className="text-gray-500">
{card.title}
</h2>

<p className="text-3xl font-bold mt-2">
{card.value}
</p>

</div>

<div className="text-blue-600 text-4xl">
{card.icon}
</div>

</div>

))
}

</div>

<div className="bg-white mt-10 p-8 rounded-xl shadow-md max-w-xl">

<h2 className="text-2xl font-bold">
Performance Summary
</h2>

<div className="mt-5 space-y-3">

<p>
Attempted Questions:
<b className="ml-2">
{resultData.attempted}
</b>
</p>

<p>
Unattempted Questions:
<b className="ml-2">
{resultData.unattempted}
</b>
</p>

<p>
Final Score:
<b className="ml-2 text-blue-600">
{resultData.score}
</b>
</p>

</div>

</div>

</div>
);

};

export default Result;