import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="bg-[#FAF7F2]/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-[#D4A017]/20"
      style={{
        fontFamily: "Fraunces, Georgia, serif",
      }}
    >
      {/* Centered Navbar Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Brand Logo */}
          <Link
            to="/"
            className="text-xl tracking-tight transition-colors"
            style={{
              fontWeight: 600,
              color: "#0E1726",
            }}
          >
            EduAssess
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Home */}
            <Link
              to="/"
              className="text-[#0E1726] hover:text-[#D4A017] font-semibold transition"
            >
              Home
            </Link>

            {/* Course */}
            <Link
              to="/course"
              className="text-[#0E1726] hover:text-[#D4A017] font-semibold transition"
            >
              Course
            </Link>

            {/* Login */}
            <Link
              to="/login"
              className="w-[100px] h-[36px] flex items-center justify-center bg-blue-500 text-white font-medium text-base rounded-full shadow-sm hover:bg-blue-600 transition"
            >
              Login
            </Link>

            {/* Register */}
            <Link
              to="/register"
              className="w-[100px] h-[36px] flex items-center justify-center bg-[#D4A017] border-2 border-[#D4A017] text-[#0E1726] font-medium text-base rounded-full shadow-sm hover:bg-[#b8890f] hover:border-[#b8890f] hover:shadow-md transition"
            >
              Register
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-3xl text-[#0E1726]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4 bg-[#FAF7F2] rounded-lg shadow-md p-5 border border-[#D4A017]/20">
            {/* Home */}
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-[#0E1726] hover:text-[#D4A017] font-semibold"
            >
              Home
            </Link>

            {/* Course */}
            <Link
              to="/course"
              onClick={() => setMenuOpen(false)}
              className="text-[#0E1726] hover:text-[#D4A017] font-semibold"
            >
              Course
            </Link>

            {/* Mobile Login */}
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="w-[100px] h-[36px] flex items-center justify-center bg-blue-500 text-white font-medium text-base rounded-full shadow-sm hover:bg-blue-600 transition"
            >
              Login
            </Link>

            {/* Mobile Register */}
            <Link
              to="/register"
              onClick={() => setMenuOpen(false)}
              className="w-[100px] h-[36px] flex items-center justify-center bg-[#D4A017] border-2 border-[#D4A017] text-[#0E1726] font-medium text-base rounded-full shadow-sm hover:bg-[#b8890f] hover:border-[#b8890f] hover:shadow-md transition"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
