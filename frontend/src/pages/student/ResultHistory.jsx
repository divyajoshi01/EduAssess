import React,{useEffect,useState} from "react";
import API from "../../api/axios";

const ResultHistory=()=>{

const [results,setResults]=useState([]);

const fetchResults=async()=>{

try{

const token=localStorage.getItem("token");

const res=await API.get("/results/student",{
headers:{
Authorization:`Bearer ${token}`
}
});

setResults(res.data.results || []);

}catch(error){

console.log("Result History Error:",error);

}

};

useEffect(()=>{
fetchResults();
},[]);


return(
<div className="min-h-screen bg-gray-100 p-8">

<h1 className="text-3xl font-bold text-gray-800">
Result History
</h1>

<p className="text-gray-500 mt-2">
Check your previous exam results
</p>


<div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden">

<table className="w-full">

<thead className="bg-blue-600 text-white">

<tr>

<th className="p-4 text-left">
Exam
</th>

<th className="p-4 text-left">
Subject
</th>

<th className="p-4 text-left">
Score
</th>

<th className="p-4 text-left">
Percentage
</th>

</tr>

</thead>


<tbody>

{
results.length===0?

<tr>
<td colSpan="4" className="p-5 text-center text-gray-500">
No Result Found
</td>
</tr>

:

results.map((item,index)=>(

<tr key={index} className="border-b">

<td className="p-4">
{item.test?.title}
</td>

<td className="p-4">
{item.test?.subject}
</td>

<td className="p-4">
{item.score}/{item.totalQuestions}
</td>

<td className="p-4">
{Math.round((item.score/item.totalQuestions)*100)}%
</td>

</tr>

))

}

</tbody>

</table>

</div>

</div>
);

};

export default ResultHistory;