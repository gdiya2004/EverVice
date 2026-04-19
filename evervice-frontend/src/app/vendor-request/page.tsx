"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function VendorRequestPage() {
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState("");

  const router = useRouter();

  const handleSubmit = async () => {
    const storedUser = localStorage.getItem("user");
    const user = storedUser ? JSON.parse(storedUser) : null;

    if (!user) {
      alert("Please login first");
      return;
    }

    if (!businessName || !phone || !location || !description || !images) {
      alert("All fields are required");
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/vendor/request`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userId: user._id,
          businessName,
          phone,
          location,
          description,
          images: images.split(",") 
        })
      });

      const data = await res.json();

      if (res.ok) {
        alert("Request submitted!");
        router.push("/");
      } else {
        alert(data.error || "Something went wrong");
      }

    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <div className="p-10 max-w-md mx-auto">
      <h1 className="text-2xl mb-4">Become a Vendor</h1>

      <input
        placeholder="Business Name"
        className="border p-2 w-full mb-2"
        onChange={(e) => setBusinessName(e.target.value)}
      />

      <input
        placeholder="Phone"
        className="border p-2 w-full mb-2"
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        placeholder="Location"
        className="border p-2 w-full mb-2"
        onChange={(e) => setLocation(e.target.value)}
      />

      <textarea
        placeholder="Description"
        className="border p-2 w-full mb-2"
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        placeholder="Image URLs (comma separated)"
        className="border p-2 w-full mb-2"
        onChange={(e) => setImages(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit Request
      </button>
    </div>
  );
}