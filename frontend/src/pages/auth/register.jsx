import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import API from "../../api/axios";


const Register = () => {


const navigate = useNavigate();


const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [role,setRole]=useState("student");



const handleSubmit = async(e)=>{

 e.preventDefault();


 try{

  const res = await API.post("/auth/register",{

    name,
    email,
    password,
    role

  });


  console.log(res.data);


  alert("Registration Successful");


  navigate("/login");


 }catch(error){

  console.log("FULL ERROR:", error);

  if(error.response){
    console.log("SERVER ERROR:", error.response.data);
  }

  alert("Check console");

}

};



return (

<div className="min-h-screen flex items-center justify-center bg-gray-100">


<div className="bg-white max-w-md w-full p-8 rounded-xl shadow-lg">


<h1 className="text-3xl font-bold text-center text-blue-600">
Register
</h1>


<form onSubmit={handleSubmit} className="mt-6">


<Input
label="Name"
placeholder="Enter name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>



<Input
label="Email"
type="email"
placeholder="Enter email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>



<Input
label="Password"
type="password"
placeholder="Enter password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>



<select
className="w-full border rounded-lg px-4 py-2 mb-4"
value={role}
onChange={(e)=>setRole(e.target.value)}
>

<option value="student">
Student
</option>


<option value="teacher">
Teacher
</option>


</select>


<Button
  text="Register"
  type="submit"
/>


</form>



<p className="text-center mt-5">

Already have account?

<Link 
to="/login"
className="text-blue-600 ml-2"
>
Login
</Link>

</p>


</div>

</div>

)

}

export default Register;