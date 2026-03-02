"use client";

export default function PaymentsPage() {
  return (
    <div className="p-6 md:p-10 w-full space-y-8">

      {/* ===== Header ===== */}
      <div className="relative rounded-2xl p-8 text-white overflow-hidden
                      bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-xl">

        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

        <h1 className="text-3xl md:text-4xl font-bold">
          Payment Management
        </h1>

        <p className="opacity-90 mt-2">
          Manage and record student fee payments for Swasthishree PG
        </p>
      </div>

      {/* ===== Stats Cards ===== */}
      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-6 rounded-xl shadow-lg">
          <p className="opacity-80">Total Collected</p>
          <p className="text-2xl font-bold mt-2">₹ --</p>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-amber-600 text-white p-6 rounded-xl shadow-lg">
          <p className="opacity-80">Pending Amount</p>
          <p className="text-2xl font-bold mt-2">₹ --</p>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-6 rounded-xl shadow-lg">
          <p className="opacity-80">This Month</p>
          <p className="text-2xl font-bold mt-2">₹ --</p>
        </div>

      </div>

      {/* ===== Add Payment ===== */}
      <div className="relative backdrop-blur-xl bg-white/70 border border-white/40
                      shadow-2xl rounded-2xl p-8 overflow-hidden">

        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"></div>

        <h2 className="text-xl font-semibold mb-6">
          Add New Payment
        </h2>

        <form className="grid md:grid-cols-2 gap-5">

          <div>
            <label className="text-sm font-medium">Student Name</label>
            <select className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500">
              <option>Select student</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Room Number</label>
            <input
              type="text"
              placeholder="Enter room number"
              className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Amount</label>
            <input
              type="number"
              placeholder="₹ Enter amount"
              className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Payment Date</label>
            <input
              type="date"
              className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Payment Method</label>
            <select className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500">
              <option>Cash</option>
              <option>UPI</option>
              <option>Bank Transfer</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Status</label>
            <select className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500">
              <option>Paid</option>
              <option>Pending</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="text-sm font-medium">Notes</label>
            <textarea
              rows="3"
              placeholder="Optional remarks"
              className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="md:col-span-2">
            <button
              type="button"
              className="bg-gradient-to-r from-blue-600 to-indigo-600
                         hover:from-blue-700 hover:to-indigo-700
                         text-white px-8 py-3 rounded-lg shadow-lg transition"
            >
              Save Payment
            </button>
          </div>

        </form>
      </div>

      {/* ===== Payment Table ===== */}
      <div className="backdrop-blur-xl bg-white/70 border border-white/40
                      shadow-2xl rounded-2xl overflow-hidden">

        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">
            Payment Records
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">

            <thead className="bg-gray-50 text-gray-600 text-sm">
              <tr>
                <th className="p-4">Student</th>
                <th className="p-4">Room</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Date</th>
                <th className="p-4">Method</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {/* Backend will render rows */}
            </tbody>

          </table>
        </div>

        <div className="p-10 text-center text-gray-500">
          No payment records yet
        </div>

      </div>

    </div>
  );
}