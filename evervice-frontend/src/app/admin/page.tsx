"use client";

import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [requests, setRequests] = useState<any[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {
  const token = localStorage.getItem("token");

  // Vendor Requests
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/vendor/requests`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(data => setRequests(Array.isArray(data) ? data : []));

  // 🔥 Bookings (NEW)
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookings/all`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(data => setBookings(Array.isArray(data) ? data : []));

}, []);

  const handleApprove = async (id: string) => {
    const token = localStorage.getItem("token");

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/vendor/approve`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}` // ✅ REQUIRED
      },
      body: JSON.stringify({ requestId: id }) // ✅ FIXED
    });

    setRequests(prev => prev.filter(r => r._id !== id));
  };

  const handleReject = async (id: string) => {
    const token = localStorage.getItem("token");

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/vendor/reject`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}` // ✅ REQUIRED
      },
      body: JSON.stringify({ requestId: id }) // ✅ FIXED
    });

    setRequests(prev => prev.filter(r => r._id !== id));
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Admin Dashboard
      </h1>

      {requests.length === 0 ? (
        <p>No vendor requests</p>
      ) : (
        requests.map((r) => (
          <div key={r._id} className="border p-4 mb-3 rounded shadow">

            <p><strong>Email:</strong> {r.userId?.email}</p>
            <p><strong>Business:</strong> {r.businessName}</p>
            <p><strong>Phone:</strong> {r.phone}</p>
            <p><strong>Location:</strong> {r.location}</p>
            <p><strong>Description:</strong> {r.description}</p>
            <img src={r.image} width="100px" height="100px"/>
            <div className="mt-3 flex gap-2">
              <button
                onClick={() => handleApprove(r._id)}
                className="bg-green-600 text-white px-3 py-1 rounded"
              >
                Approve
              </button>

              <button
                onClick={() => handleReject(r._id)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Reject
              </button>
            </div>
            
          </div>
        ))
      )}
      <h2 className="text-xl font-bold mt-8 mb-4">
              All Bookings
            </h2>

            {bookings.length === 0 ? (
              <p>No bookings found</p>
            ) : (
              bookings.map((b, i) => (
                <div key={i} className="border p-4 mb-2 rounded shadow">

                  <p><strong>Service:</strong> {b.serviceId?.name}</p>
                  <p><strong>User:</strong> {b.userId?.email}</p>
                  <p><strong>Vendor:</strong> {b.vendorId?.email}</p>

                  <p><strong>Name:</strong> {b.name}</p>
                  <p><strong>Phone:</strong> {b.phone}</p>
                  <p>{b.message}</p>

                </div>
              ))
            )}
    </div>
  );
}