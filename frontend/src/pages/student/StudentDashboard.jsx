import React,{useEffect,useState} from "react";
import {Link} from "react-router-dom";
import {
FaBookOpen,
FaClipboardCheck,
FaChartLine,
FaClock
} from "react-icons/fa";
import API from "../../api/axios";

const StudentDashboard=()=>{

const [exams,setExams]=useState([]);
const [results,setResults]=useState([]);

const fetchData=async()=>{

try{

const token=localStorage.getItem("token");

const examRes=await API.get("/tests/student",{
headers:{
Authorization:`Bearer ${token}`
}
});

const resultRes=await API.get("/results/student",{
headers:{
Authorization:`Bearer ${token}`
}
});

setExams(examRes.data.tests || []);
setResults(resultRes.data.results || []);

}catch(error){

console.log("Dashboard Error:",error);

}

};

useEffect(()=>{
fetchData();
},[]);


const attempted=results.length;

const averageScore=results.length
?
Math.round(
results.reduce(
(sum,item)=>sum+(item.score/item.totalQuestions)*100,0
)/results.length
)
:0;

const cards=[
{
title:"Available Exams",
count:exams.length,
icon:<FaBookOpen/>
},
{
title:"Attempted Exams",
count:attempted,
icon:<FaClipboardCheck/>
},
{
title:"Average Score",
count:`${averageScore}%`,
icon:<FaChartLine/>
},
{
title:"Pending Exams",
count:exams.length-attempted,
icon:<FaClock/>
}
];


return(
<div className="p-8 bg-gray-100 min-h-screen">

<h1 className="text-3xl font-bold text-gray-800">
Student Dashboard
</h1>

<p className="text-gray-500 mt-2">
Check exams and track your performance
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
{card.count}
</p>

</div>

<div className="text-blue-600 text-4xl">
{card.icon}
</div>

</div>

))
}

</div>

<div className="bg-white mt-10 p-8 rounded-xl shadow-md">

<h2 className="text-2xl font-bold">
Welcome Student 👋
</h2>

<p className="text-gray-600 mt-3">
You can attempt online MCQ exams and check your results here.
</p>

<Link
to="/student/exams"
target="_blank"
className="inline-block mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
>
View Exams
</Link>

</div>

</div>
);

};

export default StudentDashboard;