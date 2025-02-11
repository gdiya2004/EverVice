import React, { useState } from "react";
import { useFilterContext } from "../../Contexts/filterContext";

const FilterSection = ({ onFilterChange }) => {
  // Local state for filter values
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [category, setCategory] = useState("");

  // Handle changes in the filter inputs
  const handleFilterChange = () => {
    onFilterChange({ location, budget, category });
  };
  const{updateFilterValue,filters:{text,service},all_data,filter_data,sorting}=useFilterContext()

  return (
    <div className="p-4 bg-gray-800 rounded-lg">
      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            onChange={sorting}>
            <option value="lowest">Price(lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price(highest)</option>
            <option value="#" disabled></option>
            <option value="a-z">Price(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Price(z-a)</option>
          </select>
        </form>
      </div>
      <h2 className="text-2xl font-bold text-white mb-6">Filters</h2>

      <div className="space-y-4">
      <div className="filter-search">
            <form onSubmit={(e)=>e.preventDefault()}>
                <input placeholder="search " type="text" name="text" value={text} onChange={updateFilterValue}/>
            </form>
            </div>
        Location Filter
        

        {/* Budget Filter */}
        {/* <div className="flex flex-col">
          <label htmlFor="budget" className="text-white text-sm font-medium mb-2">
            Budget
          </label>
          <select
            id="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="p-2 rounded-lg text-black"
            onBlur={handleFilterChange} // Trigger on change
          >
            <option value="">Select Budget</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div> */}

        {/* Category Filter */}
        <div className="filter-category">
                  <h3>Service</h3>
                  <form action='#'>
                      <select 
                      value={service}
                      name="service"
                      id="company"
                      onChange={updateFilterValue}
                      >
                        {
                         all_data.map((curElm,index)=>{
                          return(
                            <option name="service" key={index} value={curElm.service}>{curElm.service}</option>
                          )
                         }) 
                        }
                      </select>
                  </form>
                </div>
      </div>
    </div>
  );
};

export default FilterSection;
