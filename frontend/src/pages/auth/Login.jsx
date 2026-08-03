import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import API from "../../api/axios";


const Login = () => {


  const navigate = useNavigate();


  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");



  const handleSubmit = async(e)=>{

    e.preventDefault();


    try{


      const res = await API.post("/auth/login",{

        email,
        password

      });



      console.log(res.data);



      // token save

      localStorage.setItem(
        "token",
        res.data.token
      );


      // user save

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );



      alert("Login Successful");



      // role ke hisab se redirect
if(res.data.user.role === "teacher"){

  navigate("/teacher/dashboard");

}
else if(res.data.user.role === "student"){

  navigate("/student/dashboard");

}
else{

  navigate("/");

}



    }catch(error){


      console.log(error.response?.data);


      alert(
        error.response?.data?.message || "Login Failed"
      );


    }


  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg">


        <h1 className="text-3xl font-bold text-center text-blue-600">
          Login
        </h1>


        <p className="text-center text-gray-500 mt-2">
          Welcome back to EduAssess
        </p>



        <form 
          onSubmit={handleSubmit}
          className="mt-6"
        >


          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />



          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />



          <Button
            text="Login"
            type="submit"
          />



        </form>



        <p className="text-center mt-5 text-gray-600">

          Don't have account?

          <Link 
            to="/register"
            className="text-blue-600 font-semibold ml-2"
          >
            Register
          </Link>


        </p>


      </div>

    </div>
  );
};


export default Login;