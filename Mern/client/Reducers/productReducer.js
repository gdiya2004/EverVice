const ProductReducer=(state,action)=>{
    switch (action.type) {
        case "SET_ALL_PRODUCTS_DATA":
            return{
                ...state,
                products:action.payload,
                featureProducts:action.payload.filter((curElem) => {
                   return curElem.featured === true;
                }),
                
            }
            // break;
    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };

        default:
            return state;
    }
}
export default ProductReducer;