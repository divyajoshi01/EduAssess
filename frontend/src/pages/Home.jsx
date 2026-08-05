import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUserTie,
  FaUserGraduate,
  FaBookOpen,
  FaChartLine,
  FaClock,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact
} from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  // Course Data matching your card style
  const courses = [
    {
      id: "html",
      title: "HTML5 Fundamentals",
      description: "Learn semantic HTML, elements, web accessibility, and structures.",
      icon: <FaHtml5 className="mx-auto text-orange-500" size={40} />,
      path: "/courses/html"
    },
    {
      id: "css",
      title: "CSS3 & Tailwind",
      description: "Design beautiful layouts using Flexbox, Grid, and Tailwind CSS.",
      icon: <FaCss3Alt className="mx-auto text-blue-500" size={40} />,
      path: "/courses/css"
    },
    {
      id: "javascript",
      title: "JavaScript ES6+",
      description: "Master modern JS concepts, Async/Await, DOM, and logic building.",
      icon: <FaJsSquare className="mx-auto text-yellow-500" size={40} />,
      path: "/courses/javascript"
    },
    {
      id: "react",
      title: "React.js Framework",
      description: "Build interactive web applications using components, state & hooks.",
      icon: <FaReact className="mx-auto text-cyan-500" size={40} />,
      path: "/courses/react"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20 gap-8">

        <div className="md:w-1/2">
          <h2 className="text-5xl font-bold text-gray-800 leading-tight">
            Smart Online Examination
            <span className="text-blue-600"> Platform</span>
          </h2>

          <p className="mt-5 text-gray-600 text-lg">
            EduAssess helps teachers create online exams and
            allows students to attempt MCQ tests with instant results.
          </p>

          <div className="mt-8 flex gap-4">
            {/* Teacher Login */}
            <Link to="/login" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              <FaUserTie />
              Teacher Login
            </Link>

            {/* Student Login */}
            <Link to="/login" className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition duration-300">
              <FaUserGraduate />
              Student Login
            </Link>
          </div>
        </div>

        {/* Right Side - Custom Background Image Card */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center w-full">
          <div 
            className="relative w-full max-w-md h-80 rounded-2xl p-8 shadow-xl flex flex-col justify-end text-white overflow-hidden bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8) 10%, rgba(0,0,0,0.2) 100%), url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop')`
            }}
          >
            <div className="relative z-10">
              <FaBookOpen size={40} className="mb-3 text-blue-400" />
              <h3 className="text-3xl font-bold">
                Learn & Evaluate
              </h3>
              <p className="mt-2 text-gray-200">
                Manage exams, track performance and improve learning.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* Courses Section  */}
      <section className="px-8 md:px-20 py-10">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Available Courses
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {courses.map((course) => (
            <div 
              key={course.id}
              onClick={() => navigate(course.path)}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {course.icon}
                <h3 className="text-xl font-bold mt-4 text-gray-800">{course.title}</h3>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {course.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <span className="text-blue-600 font-semibold text-sm hover:underline">
                  Start Course →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-5 mt-10">
        <h3 className="text-xl font-bold">EduAssess</h3>
        <p className="text-gray-400 mt-2">
          Smart Online Examination & Institute Management System
        </p>
        <p className="text-sm mt-3 text-gray-500">
          © 2026 EduAssess. All Rights Reserved.
        </p>
      </footer>

    </div>
  );
};

export default Home;