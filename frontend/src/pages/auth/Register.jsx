import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import API from "../../api/axios";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("API BASE URL:", API.defaults.baseURL);
      console.log("REGISTER URL:", `${API.defaults.baseURL}/auth/register`);

      const res = await API.post("/auth/register", {
        name,
        email,
        password,
        role,
      });

      console.log(res.data);

      alert("Registration Successful");

      navigate("/login");
    } catch (error) {
      console.log("FULL ERROR:", error);

      if (error.response) {
        console.log("SERVER ERROR:", error.response.data);
      }

      alert("Check console");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#FAF7F2] px-4 py-10">
      {/* Register Card */}
      <div className="bg-white max-w-md w-full p-8 rounded-2xl border border-gray-200 shadow-lg">
        {/* Heading */}
        <h1
          className="text-4xl text-center text-[#0E1726] font-medium"
          style={{
            fontFamily: "Fraunces, Georgia, serif",
          }}
        >
          Create your <span className="italic text-[#D4A017]">account</span>
        </h1>

        <p className="text-center text-[#0E1726]/60 mt-3 text-sm">
          Join EduAssess and start learning today.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-7">
          <Input
            label="Name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            label="Email"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Role */}
          <label className="block text-sm font-semibold text-[#0E1726] mb-2">
            Select Role
          </label>

          <select
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 mb-5 bg-white text-[#0E1726] focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:border-[#D4A017]"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>

          {/* Register Button */}
          <Button text="Register" type="submit" />
        </form>

        {/* Login */}
        <p className="text-center mt-6 text-sm text-[#0E1726]/70">
          Already have an account?
          <Link
            to="/login"
            className="text-[#D4A017] font-semibold ml-2 hover:text-[#b8890f] transition"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
