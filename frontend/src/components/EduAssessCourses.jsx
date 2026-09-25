import React, { useState } from "react";

const EduAssessCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      id: 1,
      number: "01",
      type: "Learn",
      title: "HTML5 Fundamentals",
      category: "Web Development",
      lessons: "25+ Lessons",
      description:
        "Master semantic markup, forms, elements, and structural accessibility.",
      topics: "HTML · Forms · Semantic Tags · Accessibility",
    },
    {
      id: 2,
      number: "02",
      type: "Style",
      title: "CSS3 & Tailwind",
      category: "Styling & UI",
      lessons: "40+ Lessons",
      description:
        "Learn Flexbox, Grid, animations, and utility-first styling with Tailwind CSS.",
      topics: "CSS · Flexbox · Grid · Tailwind",
    },
    {
      id: 3,
      number: "03",
      type: "Build",
      title: "JavaScript ES6+",
      category: "Programming",
      lessons: "60+ Lessons",
      description:
        "Deep dive into JavaScript concepts including DOM, Async/Await, Promises, and Functions.",
      topics: "JavaScript · DOM · Async/Await · ES6+",
    },
    {
      id: 4,
      number: "04",
      type: "Create",
      title: "React.js Framework",
      category: "Frontend Development",
      lessons: "50+ Lessons",
      description:
        "Build interactive applications with Components, State, Hooks, and React Router.",
      topics: "React · Hooks · Components · Router",
    },
  ];

  return (
    <div
      className="min-h-screen w-full bg-[#FAF7F2] py-20 px-6 md:px-10"
      style={{
        fontFamily: "Fraunces, Georgia, serif",
      }}
    >
      {/* Main Container */}
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-[12px] uppercase tracking-[0.1em] font-semibold text-[#0E1726] border-b border-[#D4A017] pb-[2px]">
              Complete Learning Platform
            </span>
          </div>

          <h1
            className="mt-6 font-medium text-[#0E1726] leading-tight tracking-tight"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
            }}
          >
            Start learning with{" "}
            <span className="italic text-[#D4A017] font-normal">EduAssess</span>
          </h1>

          <p className="mt-4 text-[#0E1726]/65 text-[15px] md:text-base">
            Learn, practice and improve your web development skills.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              onClick={() => setSelectedCourse(course)}
              className="bg-white border border-gray-200 rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Top Number */}
              <div className="flex items-center gap-3 pb-5 border-b border-gray-200">
                <span className="text-4xl md:text-5xl italic font-normal text-[#D4A017]">
                  {course.number}
                </span>

                <span className="text-[#0E1726] text-sm italic">
                  / &nbsp;{course.type}
                </span>
              </div>

              {/* Course Content */}
              <div className="pt-5">
                <h2 className="text-2xl font-medium text-[#0E1726]">
                  {course.title}
                </h2>

                <p className="mt-3 text-[#0E1726]/65 text-[15px] leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* Bottom */}
              <div className="mt-7 pt-5 border-t border-gray-200 flex items-center justify-between">
                <span className="text-[#D4A017] text-sm">
                  • {course.topics}
                </span>

                <span className="text-[#0E1726] text-sm font-semibold">
                  {course.lessons}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-[#0E1726]/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div
            className="bg-[#FAF7F2] rounded-2xl p-8 max-w-lg w-full shadow-2xl relative"
            style={{
              fontFamily: "Fraunces, Georgia, serif",
            }}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-4 right-5 text-[#0E1726]/50 hover:text-[#D4A017] text-xl transition"
            >
              ✕
            </button>

            {/* Category */}
            <span className="text-[12px] uppercase tracking-[0.1em] font-semibold text-[#0E1726] border-b border-[#D4A017] pb-[2px]">
              {selectedCourse.category}
            </span>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-medium text-[#0E1726] mt-6">
              {selectedCourse.title}
            </h2>

            {/* Description */}
            <p className="text-[#0E1726]/65 mt-4 leading-relaxed">
              {selectedCourse.description}
            </p>

            {/* Lessons */}
            <p className="text-[#D4A017] mt-5 font-semibold">
              {selectedCourse.lessons}
            </p>

            {/* Buttons */}
            <div className="pt-6 flex gap-4">
              <button className="flex-1 bg-[#D4A017] text-[#0E1726] font-medium py-3 rounded-full hover:bg-[#b8890f] transition">
                Start Course
              </button>

              <button
                onClick={() => setSelectedCourse(null)}
                className="px-6 py-3 border border-[#0E1726] rounded-full font-medium text-[#0E1726] hover:bg-[#0E1726] hover:text-white transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EduAssessCourses;
