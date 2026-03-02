"use client";

export default function LocationPage() {
  return (
    <div className="p-6 md:p-10 w-full space-y-8 bg-gradient-to-br from-slate-50 to-indigo-50 min-h-screen">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Swasthishree Paying Guest
          </h1>
          <p className="text-gray-600">
            Location and contact details
          </p>
        </div>

        <div className="hidden md:block h-12 w-1.5 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500" />
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* Address Card */}
        <div className="relative backdrop-blur-xl bg-white/70 border border-white/40 shadow-xl p-6 rounded-2xl space-y-5">

          {/* Glow */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-200 rounded-full blur-3xl opacity-40"></div>

          <h2 className="text-xl font-semibold text-gray-800">
            📍 Address
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Monkey Stand 1st Cross <br />
            Jai Hind Road <br />
            Near Golden Gate Apartment <br />
            Marnamikatta <br />
            Mangalore – Karnataka
          </p>

          {/* Contact */}
          <div className="pt-4 space-y-2">
            <h3 className="font-semibold text-gray-800">Contact</h3>

            <div className="flex gap-3 flex-wrap">
              <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
                📞 9448328856
              </span>

              <span className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                📞 9972760874
              </span>
            </div>
          </div>

        </div>

        {/* Image Card */}
        <div className="relative backdrop-blur-xl bg-white/70 border border-white/40 shadow-xl p-4 rounded-2xl overflow-hidden">

          <img
            src="/images/pg-board.jpg"
            alt="Swasthishree PG"
            className="rounded-xl w-full object-cover"
          />

          {/* Overlay Label */}
          <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-4 py-2 rounded-lg shadow text-sm font-semibold text-gray-700">
            Swasthishree PG Entrance
          </div>

        </div>

      </div>

      {/* Map Section */}
      <div className="backdrop-blur-xl bg-white/70 border border-white/40 shadow-xl rounded-2xl overflow-hidden">

        <div className="p-5 border-b bg-gradient-to-r from-indigo-50 to-purple-50">
          <h2 className="text-lg font-semibold text-gray-800">
            🗺 Live Location Map
          </h2>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.619173500073!2d74.83474481482517!3d12.90899651834557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35dcb1f3c3a11%3A0x9553d3b481e77a53!2sSwasthishree%20Paying%20Guest!5e0!3m2!1sen!2sin!4v1709333740000!5m2!1sen!2sin"
          className="w-full h-[420px] border-0"
          loading="lazy"
        ></iframe>

      </div>

    </div>
  );
}