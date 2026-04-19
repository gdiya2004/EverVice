"use client";

import { useEffect, useState } from "react";
import Navbar from "../app/components/Navbar";
import ServiceCard from "../app/components/ServiceCard";
import FilterBar from "../app/components/FilterBar";

export default function Home() {
  const [services, setServices] = useState([]);
  const [filters, setFilters] = useState<any>({});

  useEffect(() => {
    const timeout = setTimeout(() => {
      const cleanFilters = Object.fromEntries(
        Object.entries(filters).filter(([_, v]) => v !== "" && v !== undefined)
      );

      let query = new URLSearchParams(cleanFilters as any).toString();

      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services?${query}`)
        .then(res => res.json())
        .then(data => setServices(data));
    }, 400);

    return () => clearTimeout(timeout);
  }, [filters]);

  return (
    <main>
      <Navbar />

      <div className="min-h-screen bg-gray-100 flex justify-center">
        <div className="w-full max-w-5xl p-6">

          <h1 className="text-2xl font-bold mb-4 text-black">
            Available Services
          </h1>

          <FilterBar setFilters={setFilters} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((service: any) => (
              <ServiceCard key={service._id} service={service} />
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}