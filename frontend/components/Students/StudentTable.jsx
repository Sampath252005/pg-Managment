export default function StudentTable({ students }) {
  if (students.length === 0) {
    return <p className="text-gray-500">No students added yet.</p>;
  }

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Room</th>
            <th className="p-3">Fee Status</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student, index) => (
            <tr key={index} className="border-t">
              <td className="p-3">{student.name}</td>
              <td className="p-3">{student.room}</td>
              <td className="p-3">
                {student.paid ? (
                  <span className="text-green-600 font-semibold">
                    Paid
                  </span>
                ) : (
                  <span className="text-red-600 font-semibold">
                    Not Paid
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
