import "../Styles/servicecard.css"

import React from "react";
import { useFilterContext } from "../../Contexts/filterContext";

const ServiceList = () => {
  const { filter_data } = useFilterContext(); // Get the filtered data from the context

  return (
    <div className="service-main">
      <h2>Filtered Services</h2>

      {/* Grid for Service Cards */}
      <div className="service-grid">
        {filter_data.length > 0 ? (
          filter_data.map((product, index) => (
            <div key={index} className="service-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.service}</h3>
              <p>{product.description}</p>
              <p className="price">${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products match your filters.</p>
        )}
      </div>
    </div>
  );;
};

export default ServiceList;
