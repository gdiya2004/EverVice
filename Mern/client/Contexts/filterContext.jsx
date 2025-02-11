import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../Reducers/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_data: [],
  sorting:"lowest",
  
  all_data: [],
  filters: {
    text: "",
    price: "",
    location: "",
    service:"all",
  },
};

const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateFilterValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch({ type: "GET_FILTER_VALUE", payload: { name, value } });
  };
  //sorting
  const sorting=(event)=>{
    let val=event.target.value;
    dispatch({type:"GET_SORTED_DATA" ,payload:val})
}

  // Set all products data when products change
  useEffect(() => {
    if (products) {
      dispatch({ type: "SET_ALL_PRODUCTS_DATA", payload: products });
    }
  }, [products]);

  // Filter products whenever filters change
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS", payload: products }),
    dispatch({type:"SORTING_VALUE" , payload:products} )
  }, [state.filters, products,state.sorting]);

  return (
    <FilterContext.Provider
      value={{
        filters: state.filters,
        filter_data: state.filter_data,
        all_data: state.all_data,
        updateFilterValue,sorting
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContext, FilterContextProvider, useFilterContext };
