import React from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaPlusCircle,
  FaClipboardList,
  FaListAlt,
  FaSignOutAlt,
} from "react-icons/fa";

const TeacherLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const menuItems = [
    {
      name: "Dashboard",
      path: "/teacher/dashboard",
      icon: <FaHome />,
    },
    {
      name: "Create Exam",
      path: "/teacher/create-exam",
      icon: <FaPlusCircle />,
    },
    {
      name: "Manage Exams",
      path: "/teacher/manage-exam",
      icon: <FaClipboardList />,
    },
    {
      name: "Add Questions",
      path: "/teacher/add-question",
      icon: <FaPlusCircle />,
    },
    {
      name: "Manage Questions",
      path: "/teacher/manage-questions",
      icon: <FaListAlt />,
    },
  ];

  return (
    <div className="min-h-screen flex bg-[#FAF7F2]">
      {/* SIDEBAR */}
      <aside className="w-64 min-h-screen bg-[#0E1726] text-white flex flex-col fixed left-0 top-0">
        {/* Logo */}
        <div className="px-6 py-6 border-b border-white/10">
          <Link
            to="/teacher/dashboard"
            className="text-2xl tracking-tight"
            style={{
              fontFamily: "Fraunces, Georgia, serif",
              fontWeight: 600,
            }}
          >
            Edu<span className="text-[#D4A017]">Assess</span>
          </Link>

          <p className="text-white/50 text-xs mt-1">Teacher Panel</p>
        </div>

        {/* User */}
        <div className="px-6 py-5 border-b border-white/10">
          <p className="text-white/50 text-xs">Welcome</p>

          <p className="text-white font-medium mt-1 truncate">
            {user?.name || "Teacher"}
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-[#D4A017] text-[#0E1726] font-semibold shadow-md"
                    : "text-white/75 hover:bg-white/10 hover:text-[#D4A017]"
                }`}
              >
                <span className="text-lg">{item.icon}</span>

                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="px-4 py-5 border-t border-white/10">
          <button
            onClick={logout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/75 hover:bg-red-500/10 hover:text-red-400 transition"
          >
            <FaSignOutAlt />

            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="ml-64 flex-1 min-h-screen">
        {/* Top Header */}
        <header className="h-16 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-40">
          <div>
            <h2
              className="text-xl text-[#0E1726] font-medium"
              style={{
                fontFamily: "Fraunces, Georgia, serif",
              }}
            >
              Teacher Dashboard
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#D4A017] flex items-center justify-center text-[#0E1726] font-semibold">
              {user?.name?.charAt(0)?.toUpperCase() || "T"}
            </div>

            <span className="text-sm text-[#0E1726] hidden sm:block">
              {user?.name || "Teacher"}
            </span>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6 md:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default TeacherLayout;
