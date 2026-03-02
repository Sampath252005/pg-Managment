"use client";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white p-6 md:p-10">

      {/* Background glow effects */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-500 opacity-20 blur-3xl rounded-full -top-40 -left-40"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-500 opacity-20 blur-3xl rounded-full bottom-0 right-0"></div>

      <div className="relative w-full max-w-6xl grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT INFO PANEL */}
        <div className="space-y-6">

          <h1 className="text-4xl md:text-5xl font-bold">
            Contact Us
          </h1>

          <p className="text-gray-300 max-w-md">
            Get in touch with Swasthishree Paying Guest for room availability,
            booking details or any enquiries.
          </p>

          <div className="space-y-4 pt-4 text-gray-300">

            <div className="flex gap-4 items-start">
              <span className="text-xl">📍</span>
              <div>
                <p className="font-medium text-white">Address</p>
                <p className="text-sm">
                  Monkey Stand 1st Cross, Jai Hind Road <br />
                  Near Golden Gate Apartment <br />
                  Marnamikatta, Mangalore
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-xl">📞</span>
              <div>
                <p className="font-medium text-white">Phone</p>
                <p className="text-sm">9448328856</p>
                <p className="text-sm">9972760874</p>
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT FORM PANEL */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">

          <h2 className="text-3xl font-semibold mb-6 text-center">
            Send Message
          </h2>

          <form className="space-y-6">

            <div>
              <label className="text-sm text-gray-300">Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full mt-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full mt-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <button className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 transition font-semibold shadow-lg">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}