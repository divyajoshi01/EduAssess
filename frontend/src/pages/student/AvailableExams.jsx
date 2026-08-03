import React,{useEffect,useState} from "react";
import {FaClock,FaBook,FaPlay} from "react-icons/fa";
import {Link} from "react-router-dom";
import API from "../../api/axios";

const AvailableExams=()=>{

const [exams,setExams]=useState([]);

const fetchExams=async()=>{
try{
const token=localStorage.getItem("token");

const res=await API.get("/tests/student",{
headers:{
Authorization:`Bearer ${token}`
}
});

console.log(res.data);

setExams(res.data.tests || []);

}catch(error){
console.log("Exam Fetch Error:",error);
}
};

useEffect(()=>{
fetchExams();
},[]);

return(
<div className="p-8 bg-gray-100 min-h-screen">

<h1 className="text-3xl font-bold text-gray-800">
Available Exams
</h1>

<p className="text-gray-500 mt-2">
Select an exam and start your test
</p>

<div className="grid md:grid-cols-3 gap-6 mt-8">

{
exams.length===0?
(
<p className="text-gray-500">
No Exams Available
</p>
)
:
(
exams.map((exam)=>(
<div
key={exam._id}
className="bg-white rounded-xl shadow-md p-6"
>

<h2 className="text-xl font-bold text-gray-800">
{exam.title}
</h2>

<div className="mt-4 space-y-3 text-gray-600">

<p className="flex items-center gap-2">
<FaClock className="text-blue-600"/>
{exam.duration} Minutes
</p>

<p className="flex items-center gap-2">
<FaBook className="text-blue-600"/>
{exam.subject}
</p>

</div>

<Link
to={`/student/exam/${exam._id}`}
className="mt-6 flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
>
<FaPlay/>
Start Exam
</Link>

</div>
))
)
}

</div>

</div>
);

};

export default AvailableExams;