import React from "react";
import { Link } from "react-router-dom";
import {
  FaUserTie,
  FaUserGraduate,
  FaBookOpen,
  FaChartLine,
  FaClock
} from "react-icons/fa";

const Home = () => {
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

      {/* Features Section */}
      <section className="px-8 md:px-20 py-10">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Our Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <FaBookOpen className="mx-auto text-blue-600" size={40} />
            <h3 className="text-xl font-bold mt-4">Online Exams</h3>
            <p className="text-gray-600 mt-2">
              Conduct MCQ based online examinations easily.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <FaClock className="mx-auto text-blue-600" size={40} />
            <h3 className="text-xl font-bold mt-4">Timer Based Test</h3>
            <p className="text-gray-600 mt-2">
              Students can complete exams within given time.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <FaChartLine className="mx-auto text-blue-600" size={40} />
            <h3 className="text-xl font-bold mt-4">Result Analysis</h3>
            <p className="text-gray-600 mt-2">
              Track scores and student performance.
            </p>
          </div>
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