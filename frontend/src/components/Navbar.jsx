import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 px-8 py-4 flex justify-between items-center transition-all duration-300 border-b border-gray-100">
      
      {/* Brand Logo */}
      <Link to="/" className="text-2xl font-extrabold text-blue-600 tracking-wide hover:opacity-90 transition">
        Edu<span className="text-gray-800">Assess</span>
      </Link>

      {/* Nav Links + Auth Buttons */}
      <div className="flex items-center space-x-6">
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className="text-gray-600 hover:text-blue-600 font-semibold transition duration-200"
          >
            Home
          </Link>
          
          <Link 
            to="/about" 
            className="text-gray-600 hover:text-blue-600 font-semibold transition duration-200"
          >
            About
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          {/* Bordered & Shadowed Login Button */}
          <Link 
            to="/login" 
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-5 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
          >
            Login
          </Link>

          {/* Solid Register Button */}
          <Link 
            to="/register" 
            className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-300"
          >
            Register
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;