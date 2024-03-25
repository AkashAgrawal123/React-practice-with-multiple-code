import { ADD_TO_CART, REMOVE_TO_CART } from "../Constants";

const initialState = {
  cartData: [],
};

export const cartItems = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      // console.log(action, "reducer");
      return {
        ...state,
        cartData: [...state.cartData, action.data],
      };
    case REMOVE_TO_CART:
      return {
        ...state,
        cartData: state.cartData.slice(0, -1),
      };
    default:
      return state;
  }
};
