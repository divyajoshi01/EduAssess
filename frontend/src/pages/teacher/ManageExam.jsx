import React, { useEffect, useState } from "react";
import { FaTrash, FaEye, FaEdit, FaTimes, FaSave } from "react-icons/fa";
import API from "../../api/axios";

const ManageExam = () => {
  const [exams, setExams] = useState([]);
  const [selectedExam, setSelectedExam] = useState(null); // Selected exam for Modal
  const [editableQuestions, setEditableQuestions] = useState([]); // Questions state for editing
  const [isModalOpen, setIsModalOpen] = useState(false);  // Modal Visibility State
  const [loading, setLoading] = useState(false);

  // 1. Fetch All Exams
  const fetchExams = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await API.get("/tests", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setExams(res.data.tests || []);
    } catch (error) {
      console.log("Error fetching exams:", error);
    }
  };

  useEffect(() => {
    fetchExams();
  }, []);

  // 2. Delete Exam
  const deleteExam = async (id) => {
    if (!window.confirm("Kya aap sach me is exam ko delete karna chahte hain?")) return;

    try {
      const token = localStorage.getItem("token");
      await API.delete(`/tests/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      alert("Exam deleted successfully!");
      fetchExams();
    } catch (error) {
      console.log("Error deleting exam:", error);
    }
  };

  // 3. Open Edit Questions Modal
  const openEditModal = (exam) => {
    setSelectedExam(exam);
    // Deep clone questions into local state so user can edit them
    setEditableQuestions(JSON.parse(JSON.stringify(exam.questions || [])));
    setIsModalOpen(true);
  };

  // 4. Handle Question Text Change
  const handleQuestionChange = (qIndex, value) => {
    const updated = [...editableQuestions];
    if (updated[qIndex].question !== undefined) {
      updated[qIndex].question = value;
    } else {
      updated[qIndex].text = value;
    }
    setEditableQuestions(updated);
  };

  // 5. Handle Option Change
  const handleOptionChange = (qIndex, optIndex, value) => {
    const updated = [...editableQuestions];
    updated[qIndex].options[optIndex] = value;
    setEditableQuestions(updated);
  };

  // 6. Handle Correct Answer Change
  const handleCorrectAnswerChange = (qIndex, correctOptIndex) => {
    const updated = [...editableQuestions];
    updated[qIndex].correctAnswer = Number(correctOptIndex);
    setEditableQuestions(updated);
  };

  // 7. Save Edited Questions to Backend
  const saveQuestions = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      
      // Update request to Backend API
      await API.put(
        `/tests/${selectedExam._id}`,
        { questions: editableQuestions },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Questions updated successfully!");
      setIsModalOpen(false);
      fetchExams(); // Refresh exam list
    } catch (error) {
      console.log("Error saving questions:", error);
      alert("Questions save karne me dikkat aayi!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800">Manage Exams</h1>
      <p className="text-gray-500 mt-2">View and manage your created exams</p>

      {/* Table Container */}
      <div className="bg-white mt-8 rounded-xl shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-4 text-left">Exam Name</th>
              <th className="p-4">Subject</th>
              <th className="p-4">Duration</th>
              <th className="p-4">Questions</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {exams.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-6 text-gray-500">
                  No Exams Found
                </td>
              </tr>
            ) : (
              exams.map((exam) => (
                <tr key={exam._id} className="border-b hover:bg-gray-50 transition">
                  <td className="p-4 font-medium">{exam.title}</td>
                  <td className="text-center">{exam.subject}</td>
                  <td className="text-center">{exam.duration} min</td>
                  <td className="text-center">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {exam.questions?.length || 0} Questions
                    </span>
                  </td>
                  <td className="p-4 flex justify-center gap-4">
                    {/* View Button */}
                    <button
                      className="text-blue-600 hover:text-blue-800 transition"
                      title="View Details"
                    >
                      <FaEye size={18} />
                    </button>

                    {/* Edit Questions Button */}
                    <button
                      onClick={() => openEditModal(exam)}
                      className="text-amber-600 hover:text-amber-800 transition"
                      title="Edit Questions"
                    >
                      <FaEdit size={18} />
                    </button>

                    {/* Delete Button */}
                    <button
                      onClick={() => deleteExam(exam._id)}
                      className="text-red-600 hover:text-red-800 transition"
                      title="Delete Exam"
                    >
                      <FaTrash size={18} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Editable Questions Modal Popup */}
      {isModalOpen && selectedExam && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-3xl max-h-[85vh] overflow-y-auto relative shadow-2xl border border-gray-100">
            
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-1"
            >
              <FaTimes size={20} />
            </button>

            {/* Modal Title */}
            <h2 className="text-2xl font-bold text-gray-800 pr-8">
              Edit Questions - {selectedExam.title}
            </h2>
            <p className="text-sm text-gray-500 mb-6 mt-1">
              Subject: <span className="font-semibold text-gray-700">{selectedExam.subject}</span>
            </p>

            {/* Questions Form List */}
            <div className="space-y-6">
              {editableQuestions && editableQuestions.length > 0 ? (
                editableQuestions.map((q, qIdx) => (
                  <div key={q._id || qIdx} className="p-4 border border-gray-200 rounded-xl bg-gray-50 space-y-3">
                    
                    {/* Question Title Input */}
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1">
                        Question {qIdx + 1}:
                      </label>
                      <input
                        type="text"
                        value={q.question || q.text || ""}
                        onChange={(e) => handleQuestionChange(qIdx, e.target.value)}
                        className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:outline-blue-500 font-medium"
                      />
                    </div>
                    
                    {/* Options Input Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                      {q.options?.map((opt, optIdx) => (
                        <div key={optIdx}>
                          <label className="block text-xs text-gray-500 mb-1">
                            Option {String.fromCharCode(65 + optIdx)}:
                          </label>
                          <input
                            type="text"
                            value={opt}
                            onChange={(e) => handleOptionChange(qIdx, optIdx, e.target.value)}
                            className="w-full p-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-blue-500"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Correct Option Dropdown */}
                    <div className="pt-2">
                      <label className="block text-xs font-bold text-gray-600 mb-1">
                        Correct Answer:
                      </label>
                      <select
                        value={q.correctAnswer}
                        onChange={(e) => handleCorrectAnswerChange(qIdx, e.target.value)}
                        className="p-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-blue-500 font-medium text-green-700"
                      >
                        {q.options?.map((_, optIdx) => (
                          <option key={optIdx} value={optIdx}>
                            Option {String.fromCharCode(65 + optIdx)}
                          </option>
                        ))}
                      </select>
                    </div>

                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-xl">
                  Is exam me koi questions linked nahi hain.
                </div>
              )}
            </div>

            {/* Modal Actions */}
            <div className="mt-6 flex justify-end gap-3 pt-4 border-t">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                onClick={saveQuestions}
                disabled={loading}
                className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition disabled:bg-blue-300"
              >
                <FaSave />
                {loading ? "Saving..." : "Save Changes"}
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default ManageExam;