import React from "react";
import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaPlus,
  FaClipboardList,
  FaChartBar,
  FaQuestionCircle
} from "react-icons/fa";


const Sidebar = () => {


  const menu = [

    {
      name: "Dashboard",
      path: "/teacher/dashboard",
      icon: <FaHome />
    },


    {
      name: "Create Exam",
      path: "/teacher/create-exam",
      icon: <FaPlus />
    },


    {
      name: "Manage Exams",
      path: "/teacher/manage-exam",
      icon: <FaClipboardList />
    },


    {
      name: "Manage Questions",
      path: "/teacher/manage-questions",
      icon: <FaQuestionCircle />
    },
    {
      name: "Add Question",
      path: "/teacher/add-question",
      icon: <FaPlus />
    },


    {
      name: "Results",
      path: "/teacher/results",
      icon: <FaChartBar />
    }

  ];



  return (


    <div className="w-64 min-h-screen bg-gray-900 text-white">


      {/* Logo */}

      <h1 className="text-2xl font-bold text-center py-6 border-b border-gray-700">

        EduAssess

      </h1>




      {/* Menu */}

      <div className="mt-6">


        {
          menu.map((item, index) => (


            <NavLink

              key={index}

              to={item.path}

              className={({ isActive }) =>

                `flex items-center gap-3 px-6 py-3 transition
                ${isActive
                  ? "bg-blue-600"
                  : "hover:bg-gray-700"
                }`

              }

            >


              <span className="text-lg">

                {item.icon}

              </span>



              <span>

                {item.name}

              </span>



            </NavLink>


          ))
        }


      </div>



    </div>


  );


};


export default Sidebar;