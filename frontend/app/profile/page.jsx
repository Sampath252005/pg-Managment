"use client";

import { motion } from "framer-motion";

export default function ProfilePage() {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4 py-10"
      style={{
        backgroundImage:
          "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhK_J2mPIN4YmDcP9jhmVvfyDlNBRXvRelCZlf-NpsTTMEFm5KZn6fQCiJ3kz-UA4LwiaFfKouS3y6Mkw9B21zQOODqoLDNsz2y7pVS2xYoia6YVMQlnEa6r0pohKaJd4fhF0GMfpdfWk3X76H95D93qdUSVPqDBE8FU4HGy1_XqNZpEj3hqZ5YC9G4/w1200-h630-p-k-no-nu/Institute-Hostel-Management-System.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Floating glow effects */}
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute w-[450px] h-[450px] bg-blue-500/20 blur-3xl rounded-full top-[-120px] right-[-120px]"
      />

      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full bottom-[-120px] left-[-120px]"
      />

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-5xl backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-6 md:p-10 text-white"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-6 items-center">

          <img
            src="https://s3-alpha.figma.com/hub/file/3984713401/66884904-26e1-465f-8886-a7100f52357f-cover.png"
            alt="Swasthishree Paying Guest"
            className="w-40 h-40 object-cover rounded-xl border border-white/30 shadow-lg"
          />

          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold">
              Swasthishree Paying Guest
            </h1>

            <p className="text-gray-200 mt-2">
              Comfortable and secure accommodation for students and working professionals.
            </p>

            <div className="mt-4 text-gray-300 space-y-1 text-sm md:text-base">
              <p>📍 Monkey Stand 1st Cross</p>
              <p>Jai Hind Road</p>
              <p>Near Golden Gate Apartment</p>
              <p>Marnamikatta, Mangalore</p>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {/* Facilities */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 border border-white/20 p-6 rounded-xl backdrop-blur-sm"
          >
            <h2 className="font-semibold text-lg mb-3">Facilities</h2>
            <ul className="text-gray-200 space-y-1">
              <li>✔ Furnished Rooms</li>
              <li>✔ High-Speed WiFi</li>
              <li>✔ 24/7 Water</li>
              <li>✔ Security</li>
            </ul>
          </motion.div>

          {/* Suitable For */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 border border-white/20 p-6 rounded-xl backdrop-blur-sm"
          >
            <h2 className="font-semibold text-lg mb-3">Suitable For</h2>
            <ul className="text-gray-200 space-y-1">
              <li>✔ Students</li>
              <li>✔ Working Professionals</li>
              <li>✔ Long-term Stay</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 border border-white/20 p-6 rounded-xl backdrop-blur-sm"
          >
            <h2 className="font-semibold text-lg mb-3">Contact</h2>
            <div className="text-gray-200 space-y-1">
              <p>📞 9448328856</p>
              <p>📞 9972760874</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}