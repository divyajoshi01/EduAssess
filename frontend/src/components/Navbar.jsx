import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 px-6 md:px-8 py-4 border-b border-gray-100">

      <div className="flex justify-between items-center">

        {/* Brand Logo */}
        <Link 
          to="/" 
          className="text-2xl font-extrabold text-blue-600 tracking-wide hover:opacity-90 transition"
        >
          Edu<span className="text-gray-800">Assess</span>
        </Link>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">

          <Link 
            to="/" 
            className="text-gray-600 hover:text-blue-600 font-semibold transition"
          >
            Home
          </Link>

          <Link 
            to="/about" 
            className="text-gray-600 hover:text-blue-600 font-semibold transition"
          >
            About
          </Link>
          <Link 
            to="/course" 
            className="text-gray-600 hover:text-blue-600 font-semibold transition"
          >
           Course
          </Link>


          <Link 
            to="/login" 
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-5 py-2 rounded-lg shadow-sm hover:shadow-md transition"
          >
            Login
          </Link>

          <Link 
            to="/register" 
            className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 shadow-md transition"
          >
            Register
          </Link>

        </div>


        {/* Hamburger Button */}
        <button
          className="md:hidden text-3xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>


      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 bg-white rounded-lg shadow-md p-5">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-gray-600 hover:text-blue-600 font-semibold"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="text-gray-600 hover:text-blue-600 font-semibold"
          >
            About
          </Link>


          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="border-2 border-blue-600 text-blue-600 text-center px-5 py-2 rounded-lg"
          >
            Login
          </Link>


          <Link
            to="/register"
            onClick={() => setMenuOpen(false)}
            className="bg-blue-600 text-white text-center px-5 py-2 rounded-lg"
          >
            Register
          </Link>

        </div>
      )}

    </nav>
  );
};

export default Navbar;