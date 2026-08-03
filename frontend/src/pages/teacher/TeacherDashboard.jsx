import React, { useEffect, useState } from "react";
import {
  FaBook,
  FaUsers,
  FaClipboardCheck,
  FaChartLine
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import API from "../../api/axios";

const TeacherDashboard = () => {

  const navigate = useNavigate();

  const [tests, setTests] = useState([]);
  const [questions, setQuestions] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {

    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        const testRes = await API.get("/tests", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const questionRes = await API.get("/questions", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setTests(testRes.data.tests || []);
        setQuestions(questionRes.data.questions || questionRes.data || []);

      } catch (error) {
        console.log("Dashboard Error:", error);
      }
    };

    fetchData();

  }, []);


  const cards = [
    {
      title: "Total Exams",
      count: tests.length,
      icon: <FaBook />
    },
    {
      title: "Total Questions",
      count: questions.length,
      icon: <FaClipboardCheck />
    },
    {
      title: "Total Students",
      count: "0",
      icon: <FaUsers />
    },
    {
      title: "Average Score",
      count: "0%",
      icon: <FaChartLine />
    }
  ];


  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold text-gray-800">
        Welcome, {user?.name || "Teacher"}
      </h1>

      <p className="text-gray-500 mt-2">
        Manage exams and track student performance
      </p>


      <div className="grid md:grid-cols-4 gap-6 mt-8">

        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between"
          >

            <div>
              <h2 className="text-gray-500">
                {card.title}
              </h2>

              <p className="text-3xl font-bold mt-2">
                {card.count}
              </p>
            </div>

            <div className="text-blue-600 text-4xl">
              {card.icon}
            </div>

          </div>
        ))}

      </div>


      <div className="mt-10 bg-white p-6 rounded-xl shadow-md">

        <h2 className="text-xl font-bold">
          Quick Actions
        </h2>

        <div className="flex gap-4 mt-5">

          <button
            onClick={() => navigate("/teacher/create-exam")}
            className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
          >
            Create Exam
          </button>

          <button
            onClick={() => navigate("/teacher/manage-exam")}
            className="bg-gray-800 text-white px-5 py-3 rounded-lg hover:bg-gray-900"
          >
            Manage Exams
          </button>

        </div>

      </div>

    </div>
  );
};

export default TeacherDashboard;