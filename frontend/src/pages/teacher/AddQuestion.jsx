import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import API from "../../api/axios";


const AddQuestion = () => {


  const [questionData, setQuestionData] = useState({

    question:"",
    optionA:"",
    optionB:"",
    optionC:"",
    optionD:"",
    correctAnswer:"",
    subject:""

  });




  const handleChange = (e)=>{

    setQuestionData({

      ...questionData,

      [e.target.name]:e.target.value

    });

  };





  const handleSubmit = async(e)=>{

    e.preventDefault();


    try{


      const token = localStorage.getItem("token");



      const res = await API.post(

        "/questions",

        {

          question:questionData.question,

          options:[

            questionData.optionA,
            questionData.optionB,
            questionData.optionC,
            questionData.optionD

          ],

          correctAnswer:questionData.correctAnswer,

          subject:questionData.subject

        },


        {

          headers:{

            Authorization:`Bearer ${token}`

          }

        }

      );



      console.log(res.data);



      alert("Question Added Successfully");



      setQuestionData({

        question:"",
        optionA:"",
        optionB:"",
        optionC:"",
        optionD:"",
        correctAnswer:"",
        subject:""

      });



    }catch(error){


      console.log(
        error.response?.data || error
      );


      alert(
        error.response?.data?.message ||
        "Question add failed"
      );


    }


  };





return (

<div className="p-8 bg-gray-100 min-h-screen">


<h1 className="text-3xl font-bold text-gray-800">

Add MCQ Question

</h1>


<p className="text-gray-500 mt-2">

Create questions for your exam

</p>




<div className="bg-white max-w-3xl mt-8 p-8 rounded-xl shadow-md">


<form onSubmit={handleSubmit}>



<div className="mb-4">


<label className="block mb-2 font-medium">

Question

</label>


<textarea

name="question"

value={questionData.question}

onChange={handleChange}

placeholder="Enter your question"

rows="3"

className="w-full border rounded-lg px-4 py-2"

/>


</div>





<Input

label="Option A"

name="optionA"

placeholder="Enter option A"

value={questionData.optionA}

onChange={handleChange}

/>



<Input

label="Option B"

name="optionB"

placeholder="Enter option B"

value={questionData.optionB}

onChange={handleChange}

/>



<Input

label="Option C"

name="optionC"

placeholder="Enter option C"

value={questionData.optionC}

onChange={handleChange}

/>



<Input

label="Option D"

name="optionD"

placeholder="Enter option D"

value={questionData.optionD}

onChange={handleChange}

/>





<Input

label="Subject"

name="subject"

placeholder="Enter subject"

value={questionData.subject}

onChange={handleChange}

/>







<div className="mb-4">


<label className="block mb-2 font-medium">

Correct Answer

</label>



<select

name="correctAnswer"

value={questionData.correctAnswer}

onChange={handleChange}

className="w-full border rounded-lg px-4 py-2"

>


<option value="">

Select Answer

</option>


<option value="A">

Option A

</option>


<option value="B">

Option B

</option>


<option value="C">

Option C

</option>


<option value="D">

Option D

</option>


</select>


</div>





<Button

text="Add Question"

type="submit"

/>



</form>


</div>


</div>

);


};


export default AddQuestion;