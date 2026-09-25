import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBookOpen,
  FaClipboardCheck,
  FaChartLine,
  FaClock,
} from "react-icons/fa";
import API from "../../api/axios";

const StudentDashboard = () => {
  const [exams, setExams] = useState([]);
  const [results, setResults] = useState([]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");

      const examRes = await API.get("/tests/student", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const resultRes = await API.get("/results/student", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setExams(examRes.data.tests || []);
      setResults(resultRes.data.results || []);
    } catch (error) {
      console.log("Dashboard Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const attempted = results.length;

  const averageScore = results.length
    ? Math.round(
        results.reduce(
          (sum, item) => sum + (item.score / item.totalQuestions) * 100,
          0,
        ) / results.length,
      )
    : 0;

  const cards = [
    {
      title: "Available Exams",
      count: exams.length,
      icon: <FaBookOpen />,
    },
    {
      title: "Attempted Exams",
      count: attempted,
      icon: <FaClipboardCheck />,
    },
    {
      title: "Average Score",
      count: `${averageScore}%`,
      icon: <FaChartLine />,
    },
    {
      title: "Pending Exams",
      count: Math.max(exams.length - attempted, 0),
      icon: <FaClock />,
    },
  ];

  return (
    <div className="p-6 md:p-8 bg-[#FAF7F2] min-h-screen">
      {/* ================= HEADER ================= */}

      <div>
        <h1
          className="text-3xl md:text-4xl text-[#0E1726]"
          style={{
            fontFamily: "Fraunces, Georgia, serif",
            fontWeight: 600,
          }}
        >
          Student Dashboard
        </h1>

        <p className="text-[#0E1726]/60 mt-2 text-sm md:text-base">
          Check your exams and track your performance
        </p>
      </div>

      {/* ================= STAT CARDS ================= */}

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white border border-[#0E1726]/10 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 flex justify-between items-center"
          >
            <div>
              <h2 className="text-[#0E1726]/55 text-sm font-medium">
                {card.title}
              </h2>

              <p
                className="text-3xl font-semibold text-[#0E1726] mt-2"
                style={{
                  fontFamily: "Fraunces, Georgia, serif",
                }}
              >
                {card.count}
              </p>
            </div>

            <div className="w-12 h-12 rounded-xl bg-[#D4A017]/15 text-[#D4A017] flex items-center justify-center text-xl">
              {card.icon}
            </div>
          </div>
        ))}
      </div>

      {/* ================= WELCOME CARD ================= */}

      <div className="bg-white border border-[#0E1726]/10 mt-10 p-7 md:p-8 rounded-2xl shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2
              className="text-2xl md:text-3xl text-[#0E1726]"
              style={{
                fontFamily: "Fraunces, Georgia, serif",
                fontWeight: 600,
              }}
            >
              Welcome Student 👋
            </h2>

            <p className="text-[#0E1726]/60 mt-3 max-w-xl leading-relaxed">
              You can attempt online MCQ exams and check your results and
              performance here.
            </p>
          </div>

          <Link
            to="/student/exams"
            className="inline-flex items-center justify-center bg-[#D4A017] text-[#0E1726] font-semibold px-6 py-3 rounded-xl hover:bg-[#c29416] transition-all duration-200 shadow-sm whitespace-nowrap"
          >
            View Exams
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
