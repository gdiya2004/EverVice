
///////////// Main Page /////////////////////////
// import "../Styles/servicecard.css"
import React, { useState } from "react";
import FilterSection from "../components/FilterSection";
import ServiceList from "../components/ServiceList";
export const Service = () => {
  return (
    <div className="service-container">
      {/* Left Sidebar (Filter Section) */}
      <div className="filter-sidebar">
        <h2>Filters</h2>
        <FilterSection />
      </div>

      {/* Right Main Section (Service List) */}
      <ServiceList />
    </div>
  );
};

