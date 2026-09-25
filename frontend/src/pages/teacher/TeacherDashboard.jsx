import React, { useEffect, useState } from "react";
import { FaBook, FaUsers, FaClipboardCheck, FaChartLine } from "react-icons/fa";
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
            Authorization: `Bearer ${token}`,
          },
        });

        const questionRes = await API.get("/questions", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
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
      icon: <FaBook />,
    },
    {
      title: "Total Questions",
      count: questions.length,
      icon: <FaClipboardCheck />,
    },
    {
      title: "Total Students",
      count: "0",
      icon: <FaUsers />,
    },
    {
      title: "Average Score",
      count: "0%",
      icon: <FaChartLine />,
    },
  ];

  return (
    <div
      className="min-h-screen w-full bg-[#FAF7F2] px-4 py-6 sm:px-6 md:px-8"
      style={{
        fontFamily: "Fraunces, Georgia, serif",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* ================= HEADER ================= */}

        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#0E1726] leading-tight">
            Welcome,{" "}
            <span className="italic text-[#D4A017]">
              {user?.name || "Teacher"}
            </span>
          </h1>

          <p className="text-[#0E1726]/60 mt-2 text-sm sm:text-base">
            Manage exams and track student performance
          </p>
        </div>

        {/* ================= DASHBOARD CARDS ================= */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mt-7 sm:mt-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between hover:-translate-y-1 hover:shadow-lg transition-all duration-300 min-w-0"
            >
              <div className="min-w-0">
                <h2 className="text-[#0E1726]/60 text-xs sm:text-sm font-medium">
                  {card.title}
                </h2>

                <p className="text-2xl sm:text-3xl font-semibold text-[#0E1726] mt-2">
                  {card.count}
                </p>
              </div>

              <div className="text-[#D4A017] text-3xl sm:text-4xl ml-3 shrink-0">
                {card.icon}
              </div>
            </div>
          ))}
        </div>

        {/* ================= QUICK ACTIONS ================= */}

        <div className="mt-7 sm:mt-10 bg-white p-5 sm:p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
          <div>
            <h2 className="text-xl sm:text-2xl font-medium text-[#0E1726]">
              Quick Actions
            </h2>

            <p className="text-[#0E1726]/60 text-sm mt-1">
              Manage your examinations
            </p>
          </div>

          {/* Buttons */}

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6">
            <button
              onClick={() => navigate("/teacher/create-exam")}
              className="w-full sm:w-auto bg-[#D4A017] text-[#0E1726] px-6 py-3 rounded-full font-semibold hover:bg-[#b8890f] hover:shadow-md transition text-sm sm:text-base"
            >
              Create Exam
            </button>

            <button
              onClick={() => navigate("/teacher/manage-exam")}
              className="w-full sm:w-auto bg-[#0E1726] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#18263b] hover:shadow-md transition text-sm sm:text-base"
            >
              Manage Exams
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
