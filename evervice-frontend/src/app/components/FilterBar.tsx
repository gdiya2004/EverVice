"use client";

type Props = {
  setFilters: any;
};

export default function FilterBar({ setFilters }: Props) {
  return (
    <div className="flex flex-wrap gap-4 mb-6">

      <input
        placeholder="Location"
        className="border p-2 rounded bg-white text-black"
        onChange={(e) =>
          setFilters((prev: any) => ({
            ...prev,
            location: e.target.value.toLowerCase().trim()
          }))
        }
      />

      <input
        placeholder="Category"
        className="border p-2 rounded bg-white text-black"
        onChange={(e) =>
          setFilters((prev: any) => ({
            ...prev,
            category: e.target.value.toLowerCase().trim()
          }))
        }
      />

      <input
        type="number"
        placeholder="Min Price"
        className="border p-2 rounded bg-white text-black"
        onChange={(e) =>
          setFilters((prev: any) => ({
            ...prev,
            minPrice: Number(e.target.value) || 0
          }))
        }
      />

      <input
        type="number"
        placeholder="Max Price"
        className="border p-2 rounded bg-white text-black"
        onChange={(e) =>
          setFilters((prev: any) => ({
            ...prev,
            maxPrice: Number(e.target.value) || Infinity
          }))
        }
      />

    </div>
  );
}