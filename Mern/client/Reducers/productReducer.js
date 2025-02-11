const ProductReducer=(state,action)=>{
    switch (action.type) {
        case "SET_ALL_PRODUCTS_DATA":
            return{
                ...state,
                products:action.payload
    }
            // break;
    
        default:
            return state;
    }
}
export default ProductReducer;