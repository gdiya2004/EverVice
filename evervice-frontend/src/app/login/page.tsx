"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


const router = useRouter();

const handleLogin = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  });

  const data = await res.json();

  if (res.ok) {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    alert("Login successful!");

    router.push("/"); // 🔥 go to home
  } else {
    alert(data.message);
  }
};
return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100 text-black">
    <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">

      <h1 className="text-2xl font-bold mb-6 text-center text-black">
        Login
      </h1>

      <input
        placeholder="Email"
        className="w-full border border-gray-300 p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-back"
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border border-gray-300 p-3 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        onChange={e => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded transition"
      >
        Login
      </button>

    </div>
  </div>
);
}