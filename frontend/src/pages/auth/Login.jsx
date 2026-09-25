import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import API from "../../api/axios";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      console.log(res.data);

      // Token save
      localStorage.setItem("token", res.data.token);

      // User save
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login Successful");

      // redirect for role based
      if (res.data.user.role === "teacher") {
        navigate("/teacher/dashboard");
      } else if (res.data.user.role === "student") {
        navigate("/student/dashboard");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log(error.response?.data);

      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#FAF7F2] px-4 py-10">
      {/* Login Card */}
      <div className="bg-white w-full max-w-md p-8 rounded-2xl border border-gray-200 shadow-lg">
        {/* Heading */}
        <h1
          className="text-4xl text-center text-[#0E1726] font-medium"
          style={{
            fontFamily: "Fraunces, Georgia, serif",
          }}
        >
          Welcome <span className="italic text-[#D4A017]">Back</span>
        </h1>

        <p className="text-center text-[#0E1726]/60 mt-3 text-sm">
          Welcome back to EduAssess
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-7">
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Login Button */}
          <Button text="Login" type="submit" />
        </form>

        {/* Register */}
        <p className="text-center mt-6 text-sm text-[#0E1726]/70">
          Don't have an account?
          <Link
            to="/register"
            className="text-[#D4A017] font-semibold ml-2 hover:text-[#b8890f] transition"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
