import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { logout } from "../utils/logout";


const TeacherLayout = () => {


const navigate = useNavigate();


return (

<div className="flex">


  <Sidebar/>



  <main className="flex-1 bg-gray-100 min-h-screen">


    <div className="flex justify-end p-4 bg-white shadow">


      <button

      onClick={()=>logout(navigate)}

      className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"

      >

        Logout

      </button>


    </div>



    <Outlet/>


  </main>


</div>

)


}


export default TeacherLayout;