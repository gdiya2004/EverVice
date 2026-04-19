"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
    const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleSignup = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      email,
      password
    })
  });

  const data = await res.json();

  if (res.ok) {
    alert("Signup successful!");
    router.push("/login"); // 🔥 redirect
  } else {
    alert(data.message);
  }
};

return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100 text-black">
    <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">

      <h1 className="text-2xl font-bold mb-6 text-center">
        Create Account
      </h1>

      <input
        placeholder="Name"
        className="w-full border border-gray-300 p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={e => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        className="w-full border border-gray-300 p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border border-gray-300 p-3 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={e => setPassword(e.target.value)}
      />

      <button
        onClick={handleSignup}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded transition"
      >
        Signup
      </button>

      <p className="text-sm text-center mt-4 text-gray-600">
        Already have an account?{" "}
        <span
          className="text-blue-600 cursor-pointer"
          onClick={() => window.location.href = "/login"}
        >
          Login
        </span>
      </p>

    </div>
  </div>
);
}