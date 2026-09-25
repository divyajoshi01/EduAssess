import React, { useEffect, useState } from "react";
import { FaClock, FaBook, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import API from "../../api/axios";

const AvailableExams = () => {
  const [exams, setExams] = useState([]);

  const fetchExams = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/tests/student", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(res.data);

      setExams(res.data.tests || []);
    } catch (error) {
      console.log("Exam Fetch Error:", error);
    }
  };

  useEffect(() => {
    fetchExams();
  }, []);

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
          Available Exams
        </h1>

        <p className="text-[#0E1726]/60 mt-2">
          Select an exam and start your test
        </p>
      </div>

      {/* ================= EXAM CARDS ================= */}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {exams.length === 0 ? (
          <div className="col-span-full bg-white border border-[#0E1726]/10 rounded-2xl p-10 text-center shadow-sm">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#D4A017]/15 text-[#D4A017] flex items-center justify-center text-2xl">
              <FaBook />
            </div>

            <h2
              className="text-xl text-[#0E1726] mt-4"
              style={{
                fontFamily: "Fraunces, Georgia, serif",
                fontWeight: 600,
              }}
            >
              No Exams Available
            </h2>

            <p className="text-[#0E1726]/55 mt-2">
              There are currently no exams available for you.
            </p>
          </div>
        ) : (
          exams.map((exam) => (
            <div
              key={exam._id}
              className="bg-white border border-[#0E1726]/10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 p-6 flex flex-col"
            >
              {/* Exam Title */}

              <h2
                className="text-xl text-[#0E1726] line-clamp-2"
                style={{
                  fontFamily: "Fraunces, Georgia, serif",
                  fontWeight: 600,
                }}
              >
                {exam.title}
              </h2>

              {/* Exam Details */}

              <div className="mt-5 space-y-3">
                <p className="flex items-center gap-3 text-[#0E1726]/65">
                  <span className="w-9 h-9 rounded-lg bg-[#D4A017]/15 text-[#D4A017] flex items-center justify-center">
                    <FaClock />
                  </span>

                  <span>{exam.duration} Minutes</span>
                </p>

                <p className="flex items-center gap-3 text-[#0E1726]/65">
                  <span className="w-9 h-9 rounded-lg bg-[#D4A017]/15 text-[#D4A017] flex items-center justify-center">
                    <FaBook />
                  </span>

                  <span>{exam.subject}</span>
                </p>
              </div>

              {/* Start Exam */}

              <Link
                to={`/student/exam/${exam._id}`}
                className="mt-6 flex items-center justify-center gap-2 bg-[#D4A017] text-[#0E1726] font-semibold py-3 rounded-xl hover:bg-[#c29416] transition-all duration-200"
              >
                <FaPlay className="text-sm" />
                Start Exam
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AvailableExams;
