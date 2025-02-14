import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../Reducers/productReducer";
import { productsData } from "../src/data/services";

const ProductContext = createContext();

const initialState = {
  products: [],
  cart: [],
  total: 0,
  isLoading: false,
  featureProducts: [],
  isError: false,
  isSingleLoading: false,
  singleProduct: {},
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch all products on mount
  useEffect(() => {
    console.log("In the context of products", productsData);
    dispatch({ type: "SET_ALL_PRODUCTS_DATA", payload: productsData });
  }, []);

  // Function to get a single product by ID
  const getSingleProduct = (id) => {
    dispatch({ type: "SET_SINGLE_LOADING" });

    try {
      const singleProduct = productsData.find((product) => product.id === id);
      if (singleProduct) {
        dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
      } else {
        dispatch({ type: "SET_SINGLE_ERROR" });
      }
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  // Fetch single product when ID changes
  useEffect(() => {
    if (state.singleProduct.id) {
      getSingleProduct(state.singleProduct.id);
    }
  }, [state.singleProduct.id]);

  return (
    <ProductContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use the product context
const useProductContext = () => {
  return useContext(ProductContext);
};

export { useProductContext, ProductContextProvider, ProductContext };
