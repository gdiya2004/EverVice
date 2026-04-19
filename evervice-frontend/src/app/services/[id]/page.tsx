"use client";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

export default function ServicePage({ params }: any) {
  const [service, setService] = useState<any>(null);
  const [reviews, setReviews] = useState<any[]>([]);
  const [text, setText] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const { id } = await params;

      const res1 = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services/${id}`);
      const serviceData = await res1.json();

      const res2 = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/reviews/${id}`);
      const reviewData = await res2.json();

      setService(serviceData);
      setReviews(reviewData);
    };

    fetchData();
  }, []);

  const handleSubmit = async () => {
    const { id } = await params;

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/reviews/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        serviceId: id,
        text
      })
    });

    setText("");

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/reviews/${id}`);
    const data = await res.json();
    setReviews(data);
  };

  if (!service) return <p>Loading...</p>;

  return (
    <main>
      <Navbar />

      {/* 🔥 Fixed background + layout */}
      <div className="p-6 bg-gray-100 min-h-screen text-black">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">

          <h1 className="text-3xl font-bold text-black">{service.name}</h1>

          <p className="text-gray-600">
            {service.category} | {service.location}
          </p>

          <p className="text-green-600 font-bold text-lg mt-2">
            ₹{service.price}
          </p>

          <p className="mt-4">{service.description}</p>

          <button
            onClick={() => setShowForm(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md mt-4 transition"
          >
            Contact Vendor
          </button>

          {showForm && (
            <div className="mt-6 bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">

              <input
                placeholder="Your Name"
                className="border border-gray-300 p-2 w-full mb-3 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => setName(e.target.value)}
              />

              <input
                placeholder="Phone"
                className="border border-gray-300 p-2 w-full mb-3 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => setPhone(e.target.value)}
              />

              <textarea
                placeholder="Message"
                className="border border-gray-300 p-2 w-full mb-3 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => setMessage(e.target.value)}
              />

              <button
                onClick={async () => {
                  const { id } = await params;
                  const storedUser = typeof window !== "undefined"
                  ? localStorage.getItem("user")
                  : null;

                  const user = storedUser ? JSON.parse(storedUser) : null;

                  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookings/add`, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                      serviceId: id,
                      userId: user._id,
                      name,
                      phone,
                      message
                    })
                  });

                  alert("Request sent!");
                  setShowForm(false);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md mt-4 transition"
              >
                Submit
              </button>

            </div>
          )}

          <hr className="my-8 border-gray-300" />

          {/* Reviews */}
          <div className="mt-10 pt-6 border-t border-gray-200">
            <h2 className="text-xl font-bold mb-2">Reviews</h2>

            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Write a review..."
              className="border border-gray-300 p-2 w-full mb-3 rounded bg-white text-black"
            />

            <button
              onClick={handleSubmit}
              className="bg-black text-white px-4 py-2 rounded"
            >
              Submit
            </button>

            <div className="mt-4">
              {reviews.map((r, i) => (
                <div
                  key={i}
                  className="border border-gray-200 p-3 mb-2 rounded bg-gray-50"
                >
                  {r.text}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}