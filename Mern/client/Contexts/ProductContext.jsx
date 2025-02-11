import { createContext, useContext, useReducer,useEffect } from "react";
import reducer from "../Reducers/productReducer";

import { productsData } from "../src/data/services";
const ProductContext=createContext();
const initialState={
    products:[],
    cart:[],
    total:0,
    isLoading:false,
    isError:false
};

const ProductContextProvider=({children})=>{

    const[state,dispatch]=useReducer(reducer,initialState);


    useEffect(()=>{
        // getAllProductsData()
        console.log("In the context of products ",productsData);
        dispatch({type:"SET_ALL_PRODUCTS_DATA",payload:productsData})
    },[])

    return(
        <ProductContext.Provider value={{...state}}>{children}</ProductContext.Provider>
    )
}


const useProductContext=()=>{
    return useContext(ProductContext)
}


export {useProductContext , ProductContextProvider,ProductContext}