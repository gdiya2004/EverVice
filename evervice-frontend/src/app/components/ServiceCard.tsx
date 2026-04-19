import Link from "next/link";

export default function ServiceCard({ service }: any) {
  return (
    <Link href={`/services/${service._id}`}>
      <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition cursor-pointer">

        <h2 className="text-xl font-semibold text-gray-800">
          {service.name}
        </h2>

        <p className="text-gray-500">{service.category}</p>
        <p className="text-gray-600">{service.location}</p>

        <p className="text-green-600 font-bold text-lg mt-2">
          ₹{service.price}
        </p>

      </div>
    </Link>
  );
}