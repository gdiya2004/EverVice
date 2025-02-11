const filterReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALL_PRODUCTS_DATA":
      return {
        ...state,
        all_data: action.payload,
        filter_data: action.payload,
      };

    case "GET_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

      case "GET_SORTED_DATA":
       let sorted_value=action.payload;
        return {
            ...state,
            sorting:sorted_value
        }

        case "SORTING_VALUE":
          let newSortData;
          let tempSortProduct=[...state.filter_data]
          
          const sortingProducts=(a,b)=>{
              if(state.sorting==="a-z"){
                  return a.service.localeCompare(b.service);
              }
              if(state.sorting==="z-a"){
                  return b.service.localeCompare(a.service);
              } 
              if(state.sorting==="lowest"){
                  return a.price-b.price;
              }
              if(state.sorting==="highest"){
                  return b.price-a.price;
          }
          
      }
      console.log("heyyyyyyyy i am products",tempSortProduct);
      
      newSortData=tempSortProduct.sort(sortingProducts)
          return {
              ...state,
              filter_data:newSortData
          }



    case "FILTER_PRODUCTS":
      let { all_data ,sorting} = state;
      const { text, service } = state.filters;
      let tempFilterProduct = [...all_data];

      // Filtering by text
      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElm) =>
          curElm.service &&
          curElm.service.toLowerCase().includes(text.toLowerCase())
        );
      }

      // Filtering by service category
      if (service !== "all") {
        tempFilterProduct = tempFilterProduct.filter(
          (curElm) =>
            curElm.service &&
            curElm.service.toLowerCase() === service.toLowerCase()
        );
      }

      return {
        ...state,
        filter_data: tempFilterProduct,
      };

    default:
      return state;
  }
};

export default filterReducer;
