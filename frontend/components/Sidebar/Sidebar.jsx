"use client";

import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Profile", path: "/profile" },
    { name: "Student List", path: "/students" },
    { name: "Payments", path: "/payments" },
    { name: "Transaction History", path: "/transactions" },
    { name: "Location", path: "/location" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      {/* Mobile Toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white shadow px-3 py-2 rounded"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white p-5 transform transition-transform z-40
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Logo */}
        <h1 className="text-xl font-bold mb-6">PG Panel</h1>

        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          className="w-full mb-6 p-2 rounded bg-gray-800 text-white outline-none"
        />

        {/* Menu */}
        <nav className="space-y-2">
          {menu.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="block px-3 py-2 rounded hover:bg-gray-800 transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-5 left-5 right-5 space-y-2">
          <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-800">
            Settings
          </button>
          <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-800">
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}