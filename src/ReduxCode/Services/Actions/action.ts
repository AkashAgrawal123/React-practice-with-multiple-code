import { ADD_TO_CART, REMOVE_TO_CART } from "../Constants";

export const addToCart = (data: any) => {
  // console.log(data, "action data");
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

export const removeToCart = () => {
  return {
    type: REMOVE_TO_CART,
  };
};
