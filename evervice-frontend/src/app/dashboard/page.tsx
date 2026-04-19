"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../app/components/Navbar";

export default function Dashboard() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [services, setServices] = useState<any[]>([]);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");

  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "null");

    if (!user || user.role !== "vendor") {
      alert("Access denied");
      router.push("/");
      return;
    }

    // 🔥 Fetch ONLY vendor services
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services/vendor/${user._id}`)
      .then(res => res.json())
      .then(data => setServices(data));

    // 🔥 Fetch ONLY vendor bookings
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookings/vendor/${user._id}`)
      .then(res => res.json())
      .then(data => setBookings(data));

  }, [router]);

  // ➕ Add service
  const handleAddService = async () => {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  if (!user) {
    alert("User not found. Please login again.");
    return;
  }

  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      category,
      location,
      price,
      owner: user._id
    })
  });

    alert("Service added!");

    setName("");
    setCategory("");
    setLocation("");
    setPrice("");

    // 🔥 refresh ONLY vendor services
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/services/vendor/${user._id}`
    );
    const data = await res.json();
    setServices(data);
  };

  // ❌ Delete service
  const handleDelete = async (id: string) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services/${id}`, {
      method: "DELETE"
    });

    setServices(services.filter(s => s._id !== id));
  };

  return (
    <main>
      <Navbar />

      <div className="p-6 bg-gray-100 min-h-screen text-black">
        <div className="max-w-5xl mx-auto">

          <h1 className="text-3xl font-bold mb-6">
            Vendor Dashboard
          </h1>

          {/* ➕ Add Service */}
          <div className="bg-white p-6 rounded-xl shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4">
              Add New Service
            </h2>

            <input
              placeholder="Service Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 w-full mb-2"
            />

            <input
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border p-2 w-full mb-2"
            />

            <input
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border p-2 w-full mb-2"
            />

            <input
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border p-2 w-full mb-2"
            />

            <button
              onClick={handleAddService}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Add Service
            </button>
          </div>

          {/* 👀 Services List */}
          <div className="bg-white p-6 rounded-xl shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4">
              Your Services
            </h2>

            {services.map((s) => (
              <div
                key={s._id}
                className="border p-3 mb-2 flex justify-between"
              >
                <span>{s.name}</span>

                <button
                  onClick={() => handleDelete(s._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          {/* 📩 Bookings */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">
              Booking Requests
            </h2>

            {bookings.map((b, i) => (
              <div key={i} className="border p-3 mb-2">
                <p><strong>Service:</strong> {b.serviceId?.name}</p>
                <p><strong>Name:</strong> {b.name}</p>
                <p><strong>Phone:</strong> {b.phone}</p>
                <p>{b.message}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}