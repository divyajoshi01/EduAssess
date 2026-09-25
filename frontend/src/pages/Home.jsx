import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUserTie,
  FaUserGraduate,
  FaBookOpen,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
} from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  // Course Data
  const courses = [
    {
      id: "html",
      title: "HTML5 Fundamentals",
      description:
        "Learn semantic HTML, elements, web accessibility, and structures.",
      icon: <FaHtml5 className="text-orange-500" size={40} />,
      path: "/courses/html",
    },
    {
      id: "css",
      title: "CSS3 & Tailwind",
      description:
        "Design beautiful layouts using Flexbox, Grid, and Tailwind CSS.",
      icon: <FaCss3Alt className="text-blue-500" size={40} />,
      path: "/courses/css",
    },
    {
      id: "javascript",
      title: "JavaScript ES6+",
      description:
        "Master modern JS concepts, Async/Await, DOM, and logic building.",
      icon: <FaJsSquare className="text-yellow-500" size={40} />,
      path: "/courses/javascript",
    },
    {
      id: "react",
      title: "React.js Framework",
      description:
        "Build interactive web applications using components, state & hooks.",
      icon: <FaReact className="text-cyan-500" size={40} />,
      path: "/courses/react",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#FAF7F2]">
      {/* ================= HERO SECTION ================= */}
      <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-16 md:py-20 gap-10">
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2">
          <h1
            className="font-[Fraunces] font-medium text-[#0E1726] leading-tight tracking-tight"
            style={{ fontSize: "clamp(38px, 5vw, 64px)" }}
          >
            Smart Online Examination{" "}
            <span className="italic text-[#D4A017] font-normal">Platform</span>
          </h1>

          <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
            EduAssess helps teachers create online exams and allows students to
            attempt MCQ tests with instant results.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            {/* Teacher Login */}
            <Link
              to="/login"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <FaUserTie />
              Teacher Login
            </Link>

            {/* Student Login */}
            <Link
              to="/login"
              className="flex items-center gap-2 bg-[#0E1726] text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <FaUserGraduate />
              Student Login
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div
            className="relative w-full max-w-2xl h-[360px] md:h-[420px] rounded-2xl p-8 md:p-10 shadow-xl flex flex-col justify-end text-white overflow-hidden bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(
                to top,
                rgba(0,0,0,0.8) 10%,
                rgba(0,0,0,0.2) 100%
              ), url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop')`,
            }}
          >
            <div className="relative z-10">
              <FaBookOpen size={42} className="mb-4 text-[#D4A017]" />

              <h2 className="font-[Fraunces] text-3xl md:text-4xl font-medium">
                Learn & Evaluate
              </h2>

              <p className="mt-3 text-gray-200 text-sm md:text-base max-w-lg">
                Manage exams, track performance and improve learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COURSES SECTION ================= */}
      <section className="w-full min-h-screen bg-[#FAF7F2] px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-20 md:py-24">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          {/* Small Heading */}
          <span
            className="inline-block uppercase tracking-[0.1em] font-semibold text-[#0E1726] border-b border-[#D4A017] pb-[2px]"
            style={{ fontSize: "12px" }}
          >
            Complete learning platform
          </span>

          {/* Main Heading */}
          <h2
            className="font-[Fraunces] font-medium text-[#0E1726] tracking-tight leading-tight mt-5"
            style={{ fontSize: "clamp(30px, 4vw, 42px)" }}
          >
            Available{" "}
            <span className="italic text-[#D4A017] font-normal">Courses</span>
          </h2>

          {/* Description */}
          <p className="mt-4 text-[#0E1726]/65 text-sm md:text-[15px]">
            Learn, practice and improve your skills with structured courses.
          </p>
        </div>

        {/* Course Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              onClick={() => navigate(course.path)}
              className="
                w-full
                min-h-[300px]
                bg-white
                p-6
                rounded-2xl
                border border-gray-100
                shadow-sm
                text-center
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
                cursor-pointer
                flex
                flex-col
                justify-between
              "
            >
              {/* Card Content */}
              <div>
                {/* Icon */}
                <div className="flex justify-center">{course.icon}</div>

                {/* Title */}
                <h3 className="font-[Fraunces] text-xl font-medium mt-5 text-[#0E1726]">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* Bottom */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <span className="text-[#D4A017] font-semibold text-sm hover:underline">
                  Start Course →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="w-full bg-[#0E1726] text-white text-center py-8">
        <h3 className="font-[Fraunces] text-xl font-medium">EduAssess</h3>

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
