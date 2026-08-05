import React, { useState } from 'react';

const EduAssessCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Courses Data
  const courses = [
    {
      id: 1,
      title: "HTML5 Fundamentals",
      category: "Web Development",
      lessons: "25+ Lessons",
      color: "bg-orange-500",
      bgLight: "bg-orange-50 border-orange-100",
      description: "Master semantic markup, forms, elements, and structural accessibility."
    },
    {
      id: 2,
      title: "CSS3 & Tailwind",
      category: "Styling & UI",
      lessons: "40+ Lessons",
      color: "bg-blue-500",
      bgLight: "bg-blue-50 border-blue-100",
      description: "Learn Flexbox, Grid, animations, and utility-first styling with Tailwind CSS."
    },
    {
      id: 3,
      title: "JavaScript ES6+",
      category: "Programming",
      lessons: "60+ Lessons",
      color: "bg-yellow-500",
      bgLight: "bg-yellow-50 border-yellow-100",
      description: "Deep dive into JS concepts: DOM, Async/Await, Promises, and Functions."
    },
    {
      id: 4,
      title: "React.js Framework",
      category: "Frontend Dev",
      lessons: "50+ Lessons",
      color: "bg-cyan-500",
      bgLight: "bg-cyan-50 border-cyan-100",
      description: "Build reactive UI with Components, State, Hooks, and React Router."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 md:p-12">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side Section */}
        <div className="lg:col-span-5 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Start learning with <br />
            <span className="text-emerald-600">EduAssess</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Get unlimited access to structured web development courses, practical assessments, and interactive learning sessions.
          </p>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer">
            Start learning
          </button>
        </div>

        {/* Right Side Course Cards Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              onClick={() => setSelectedCourse(course)}
              className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer flex flex-col justify-between bg-white relative overflow-hidden group`}
            >
              <div className="space-y-2 relative z-10">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  {course.category}
                </span>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors">
                  {course.title}
                </h3>
              </div>

              <div className="mt-8 flex items-center justify-between relative z-10">
                <span className="text-2xl font-black text-gray-900">
                  {course.lessons}
                </span>
                <div className={`w-12 h-12 rounded-xl ${course.color} opacity-80 flex items-center justify-center text-white font-bold text-lg`}>
                  +
                </div>
              </div>

              {/* Decorative accent background */}
              <div className={`absolute -right-4 -bottom-4 w-24 h-24 rounded-full ${course.bgLight} -z-0 opacity-50`} />
            </div>
          ))}
        </div>

      </div>

      {/* Course Detail Modal / Page Overlay */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full space-y-6 shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold"
            >
              ✕
            </button>
            <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-semibold">
              {selectedCourse.category}
            </span>
            <h2 className="text-3xl font-bold text-gray-900">{selectedCourse.title}</h2>
            <p className="text-gray-600">{selectedCourse.description}</p>
            <div className="pt-4 flex gap-4">
              <button className="flex-1 bg-emerald-600 text-white font-medium py-3 rounded-xl hover:bg-emerald-700 transition">
                Enroll Now
              </button>
              <button
                onClick={() => setSelectedCourse(null)}
                className="px-6 py-3 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50"
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