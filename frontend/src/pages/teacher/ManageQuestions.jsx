import React, { useEffect, useState } from "react";
import API from "../../api/axios";


const ManageQuestions = () => {


const [questions,setQuestions] = useState([]);



const fetchQuestions = async()=>{

try{


const token = localStorage.getItem("token");


const res = await API.get(
"/questions",
{
headers:{
Authorization:`Bearer ${token}`
}
}
);



setQuestions(res.data);


}catch(error){

console.log(error);

}

};




useEffect(()=>{

fetchQuestions();

},[]);





const deleteQuestion = async(id)=>{


try{


const token = localStorage.getItem("token");


await API.delete(
`/questions/${id}`,
{
headers:{
Authorization:`Bearer ${token}`
}
}
);



alert("Question Deleted");


fetchQuestions();



}catch(error){

console.log(error);

}


};





return (

<div className="p-8 bg-gray-100 min-h-screen">


<h1 className="text-3xl font-bold">
Manage Questions
</h1>



<div className="mt-6 space-y-4">


{
questions.map((item,index)=>(


<div
key={item._id}
className="bg-white p-5 rounded-xl shadow"
>


<h2 className="font-bold text-lg">

{index+1}. {item.question}

</h2>



<div className="mt-3 text-gray-600">

<p>A. {item.options[0]}</p>

<p>B. {item.options[1]}</p>

<p>C. {item.options[2]}</p>

<p>D. {item.options[3]}</p>


</div>



<p className="mt-3 text-green-600 font-semibold">

Correct Answer: {item.correctAnswer}

</p>



<button

onClick={()=>deleteQuestion(item._id)}

className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg"

>

Delete

</button>



</div>


))

}


</div>


</div>

);


};


export default ManageQuestions;