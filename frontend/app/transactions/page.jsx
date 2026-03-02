"use client";

export default function TransactionsPage() {
  return (
    <div className="p-6 md:p-10 w-full space-y-8 bg-gradient-to-br from-slate-50 to-indigo-50 min-h-screen">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Transactions
          </h1>
          <p className="text-gray-600">
            Payment records of Swasthishree Paying Guest residents
          </p>
        </div>

        <div className="hidden md:block h-12 w-1.5 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500" />
      </div>

      {/* Filter Bar */}
      <div className="backdrop-blur-xl bg-white/70 border border-white/40 shadow-xl rounded-2xl p-4 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">

        <div className="flex flex-wrap gap-3 items-center text-sm">

          <span className="text-gray-600 font-medium">Show</span>

          <select className="px-3 py-2 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-indigo-300">
            <option>All</option>
            <option>Paid</option>
            <option>Pending</option>
          </select>

          <span className="text-gray-600 font-medium">from</span>

          <input
            type="date"
            className="px-3 py-2 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-indigo-300"
          />

          <span className="text-gray-600 font-medium">to</span>

          <input
            type="date"
            className="px-3 py-2 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-indigo-300"
          />
        </div>

        <input
          type="text"
          placeholder="Search student..."
          className="px-4 py-2 rounded-lg border border-gray-200 bg-white w-full md:w-64 focus:ring-2 focus:ring-indigo-300"
        />
      </div>

      {/* Table */}
      <div className="relative backdrop-blur-xl bg-white/70 border border-white/40 shadow-xl rounded-2xl overflow-hidden">

        {/* soft glow effect */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-200 rounded-full blur-3xl opacity-40"></div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">

            <thead className="bg-gradient-to-r from-indigo-50 to-purple-50 text-gray-700 text-sm">
              <tr>
                <th className="p-4 font-semibold">Date</th>
                <th className="p-4 font-semibold">Student</th>
                <th className="p-4 font-semibold">Room</th>
                <th className="p-4 font-semibold">Amount</th>
                <th className="p-4 font-semibold">Method</th>
                <th className="p-4 font-semibold">Status</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              {/* Example Row (remove when backend ready) */}
              <tr className="border-t hover:bg-indigo-50/40 transition">
                <td className="p-4">05 Mar 2026</td>
                <td className="p-4 font-medium">Rahul Sharma</td>
                <td className="p-4">A-203</td>
                <td className="p-4 font-semibold text-indigo-600">₹6,500</td>
                <td className="p-4">UPI</td>
                <td className="p-4">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
                    Paid
                  </span>
                </td>
              </tr>
            </tbody>

          </table>
        </div>

        {/* Empty State */}
        <div className="p-16 text-center text-gray-500">
          <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-2xl mb-4">
            ₹
          </div>
          <p className="text-lg font-semibold text-gray-700">
            No transactions recorded
          </p>
          <p className="text-sm mt-1">
            Manually entered payments will appear here.
          </p>
        </div>

      </div>

      {/* Footer Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-3">

        <div className="flex items-center gap-2">
          <span>Show</span>
          <select className="px-2 py-1 border rounded-md bg-white focus:ring-2 focus:ring-indigo-300">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
          <span>entries</span>
        </div>

        <div className="flex gap-2">
          <button className="px-4 py-2 border rounded-lg bg-white hover:bg-indigo-50 transition">
            Previous
          </button>
          <button className="px-4 py-2 border rounded-lg bg-white hover:bg-indigo-50 transition">
            Next
          </button>
        </div>

      </div>

    </div>
  );
}