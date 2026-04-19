"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-black">EverVice</h1>

      <div className="flex items-center gap-4">

        {/* 🏢 Vendor Dashboard */}
        {user?.role === "vendor" && (
          <Link href="/dashboard" className="text-gray-700">
            Dashboard
          </Link>
        )}

        {/* 🧑‍💼 Admin Dashboard */}
        {user?.role === "admin" && (
          <Link href="/admin" className="text-gray-700">
            Admin
          </Link>
        )}

        {/* 🔥 Become Vendor (only normal users) */}
        {user && user.role === "user" && (
          <Link
            href="/vendor-request"
            className="bg-blue-600 text-white px-3 py-1 rounded"
          >
            Become Vendor
          </Link>
        )}

        {/* 👤 User section */}
        {user ? (
          <div className="flex items-center gap-3">

            <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-full">
              {user?.name?.[0]?.toUpperCase()}
            </div>

            <button
              onClick={handleLogout}
              className="text-red-500"
            >
              Logout
            </button>

          </div>
        ) : (
          <>
            <Link href="/login" className="text-gray-700">
              Login
            </Link>
            <Link href="/signup" className="text-gray-700">
              Signup
            </Link>
          </>
        )}

      </div>
    </nav>
  );
}