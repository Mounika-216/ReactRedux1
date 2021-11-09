import {ActionTypes} from "../constants/action-types"
export const setproducts = (products) =>{
  return{
    type : ActionTypes.SET_PRODUCTS ,
    payload :  products,
  };
};

export const selectproduct = (product) =>{
  return{
    type : ActionTypes.SELECTED_PRODUCT,
    payload :  product,
  };
};
export const removeSelectProduct = () =>{
  return{
    type : ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};