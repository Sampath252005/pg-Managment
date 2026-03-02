"use client";
import { useState } from "react";

export default function AddStudentForm({ onAdd }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [paid, setPaid] = useState("yes");

  const handleSubmit = (e) => {
    e.preventDefault();

    onAdd({
      name,
      room,
      paid: paid === "yes"
    });

    setName("");
    setRoom("");
    setPaid("yes");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow mb-6 space-y-4"
    >
      <input
        type="text"
        placeholder="Student Name"
        className="w-full border p-2 rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Room Number"
        className="w-full border p-2 rounded"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
        required
      />

      <select
        className="w-full border p-2 rounded"
        value={paid}
        onChange={(e) => setPaid(e.target.value)}
      >
        <option value="yes">Fees Paid</option>
        <option value="no">Not Paid</option>
      </select>

      <button className="bg-green-600 text-white px-4 py-2 rounded">
        Save Student
      </button>
    </form>
  );
}