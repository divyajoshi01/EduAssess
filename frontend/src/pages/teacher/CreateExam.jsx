import React,{useEffect,useState} from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import API from "../../api/axios";

const CreateExam=()=>{

const [questions,setQuestions]=useState([]);
const [selectedQuestions,setSelectedQuestions]=useState([]);

const [examData,setExamData]=useState({
title:"",
description:"",
subject:"",
duration:""
});

const fetchQuestions=async()=>{

try{

const token=localStorage.getItem("token");

const res=await API.get(
"/questions",
{
headers:{
Authorization:`Bearer ${token}`
}
}
);

setQuestions(res.data || []);

}catch(error){
console.log(error);
}

};


useEffect(()=>{
fetchQuestions();
},[]);


const handleChange=(e)=>{

setExamData({
...examData,
[e.target.name]:e.target.value
});

};


const handleQuestionSelect=(id)=>{

if(selectedQuestions.includes(id)){

setSelectedQuestions(
selectedQuestions.filter(
(q)=>q!==id
)
);

}else{

setSelectedQuestions([
...selectedQuestions,
id
]);

}

};


const handleSubmit=async(e)=>{

e.preventDefault();

try{

const token=localStorage.getItem("token");

const res=await API.post(
"/tests",
{
...examData,
questions:selectedQuestions
},
{
headers:{
Authorization:`Bearer ${token}`
}
}
);

console.log(res.data);

alert("Exam Created Successfully");

setExamData({
title:"",
description:"",
subject:"",
duration:""
});

setSelectedQuestions([]);

}catch(error){

console.log(error);

alert(
error.response?.data?.message ||
"Exam creation failed"
);

}

};


return(
<div className="p-8 bg-gray-100 min-h-screen">

<h1 className="text-3xl font-bold text-gray-800">
Create New Exam
</h1>

<p className="text-gray-500 mt-2">
Add exam details for students
</p>

<div className="bg-white mt-8 p-8 rounded-xl shadow-md max-w-2xl">

<form onSubmit={handleSubmit}>

<Input
label="Exam Title"
name="title"
placeholder="Enter exam title"
value={examData.title}
onChange={handleChange}
/>

<Input
label="Subject"
name="subject"
placeholder="Enter subject"
value={examData.subject}
onChange={handleChange}
/>

<div className="mb-4">

<label className="block mb-2 font-medium">
Description
</label>

<textarea
name="description"
value={examData.description}
onChange={handleChange}
placeholder="Enter exam description"
rows="4"
className="w-full border rounded-lg px-4 py-2"
/>

</div>

<Input
label="Duration (Minutes)"
name="duration"
type="number"
placeholder="Ex: 30"
value={examData.duration}
onChange={handleChange}
/>

<div className="mt-6">

<h2 className="font-bold text-lg mb-3">
Select Questions
</h2>

{
questions.map((item)=>(
<div
key={item._id}
className="border p-3 rounded-lg mb-3"
>

<label className="flex gap-3">

<input
type="checkbox"
checked={selectedQuestions.includes(item._id)}
onChange={()=>handleQuestionSelect(item._id)}
/>

<span>
{item.question}
</span>

</label>

</div>
))
}

</div>

<Button
text="Create Exam"
type="submit"
/>

</form>

</div>

</div>
);

};

export default CreateExam;