import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/auth/login.jsx'
import Register from './pages/auth/register.jsx'
import NotFound from './components/NotFound.jsx'
import ResultHistory from "./pages/student/ResultHistory.jsx";

import TeacherLayout from "./layouts/TeacherLayout.jsx";
import TeacherDashboard from './pages/teacher/TeacherDashboard.jsx';
import CreateExam from './pages/teacher/CreateExam.jsx';
import ManageExam from './pages/teacher/ManageExam.jsx';
import AddQuestion from './pages/teacher/AddQuestion.jsx';
import ManageQuestions from "./pages/teacher/ManageQuestions.jsx";

import StudentLayout from "./layouts/StudentLayout.jsx";
import StudentDashboard from "./pages/student/StudentDashboard.jsx";
import AvailableExams from "./pages/student/AvailableExams.jsx";
import ExamPage from "./pages/student/ExamPage.jsx";
import Result from "./pages/student/Result.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";



const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "*",
        element: <NotFound />
      }


    ]
  },
  // Teacher Routes
  {
    path: "/teacher",
    element:
      <ProtectedRoute role="teacher">
        <TeacherLayout />
      </ProtectedRoute>,
    children: [
      {
        path: "dashboard",
        element: <TeacherDashboard />
      },
      {
        path: "create-exam",
        element: <CreateExam />
      },
      {
        path: "manage-exam",
        element: <ManageExam />
      },
      {
        path: "add-question",
        element: <AddQuestion />
      },
      {
        path: "manage-questions",
        element: <ManageQuestions />
      }
    ]
  },

  //student routes
  {
    path: "/student",
    element:
      <ProtectedRoute role="student">
        <StudentLayout />
      </ProtectedRoute>,
    children: [
      {
        path: "dashboard",
        element: <StudentDashboard />
      },
      {
        path: "exams",
        element: <AvailableExams />
      },
      {
        path: "exam/:examId",
        element: <ExamPage />
      },
      {
        path: "result",
        element: <Result />
      },
      {
        path: "result-history",
        element: <ResultHistory />
      }
    ]
  }


])





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>,
)
