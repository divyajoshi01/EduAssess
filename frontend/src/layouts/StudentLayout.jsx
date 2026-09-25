import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { logout } from "../utils/logout";

const StudentLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-end p-4 bg-white shadow">
        <button
          onClick={() => logout(navigate)}
          className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      <Outlet />
    </div>
  );
};

export default StudentLayout;
