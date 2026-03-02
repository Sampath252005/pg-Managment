"use client";
import { useState } from "react";
import AddStudentForm from "@/components/Students/AddStudentForm.jsx";
import StudentTable from "@/components/Students/StudentTable.jsx";

export default function StudentsPage() {
  const [students, setStudents] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const addStudent = (student) => {
    setStudents([...students, student]);
    setShowForm(false);
  };

  return (
    <div className="p-6 w-full">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Students</h1>

        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          + Add Student
        </button>
      </div>

      {showForm && <AddStudentForm onAdd={addStudent} />}

      <StudentTable students={students} />

    </div>
  );
}