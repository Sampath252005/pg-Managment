"use client";

import { motion } from "framer-motion";

export default function IntroHero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
      style={{
        backgroundImage: "url('https://blog.hotelogix.com/content/images/wordpress/2014/07/Effective-Hostel-PMS-for-Hostel-Management.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-black/60"></div>

      {/* Floating Glow Effects */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full top-[-100px] right-[-100px]"
      />

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full bottom-[-120px] left-[-120px]"
      />

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-3xl text-center text-white backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 md:p-10 shadow-2xl hover:bg-white/15 transition duration-300"
      >
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-white/20 border border-white/30"
        >
          Swasthishree • Marnamikatta, Mangalore
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-4"
        >
          Comfortable PG Living
          <br />
          <span className="text-blue-400">Near Monkey Stand</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-gray-200 mb-8"
        >
          Safe, affordable and modern living for students and professionals.
          Community focused stay with essential facilities.
        </motion.p>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm">
          {["WiFi", "Food", "Security", "Prime Location"].map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30"
            >
              {item}
            </motion.span>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105">
            Send Booking Request
          </button>

          <button className="border border-white/40 hover:bg-white/10 transition px-8 py-3 rounded-lg font-semibold hover:scale-105">
            View Rooms
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}