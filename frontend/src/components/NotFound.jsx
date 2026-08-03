import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";


const NotFound = () => {

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-10 rounded-xl shadow text-center">


        <FaExclamationTriangle
          className="mx-auto text-yellow-500"
          size={60}
        />


        <h1 className="text-4xl font-bold mt-5">
          404
        </h1>


        <h2 className="text-xl font-semibold mt-2">
          Page Not Found
        </h2>


        <p className="text-gray-500 mt-3">
          Sorry, this page does not exist.
        </p>


        <Link
          to="/"
          className="inline-block mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Go Home
        </Link>


      </div>

    </div>

  );
};


export default NotFound;