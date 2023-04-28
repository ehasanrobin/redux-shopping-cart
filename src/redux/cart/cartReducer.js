import {
  ADDCARTQUANTITY,
  ADDTOCART,
  DELETEFROMCART,
  REMOVECARTQUANTITY,
} from "./actionTypes";
import { initialState } from "./initialState";

const isInCart = (state, action) => {
  return state.some((item) => item.id === action.payload.id);
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTOCART:
      if (isInCart(state, action)) {
        return state.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity - 1,
                cartQuantity: item.cartQuantity + 1,
              }
            : item
        );
      } else {
        return [
          ...state,
          {
            ...action.payload,
            quantity: action.payload.quantity - 1,
            cartQuantity: 1,
          },
        ];
      }

    case ADDCARTQUANTITY:
      return state.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              cartQuantity: item.cartQuantity + 1,
              quantity: item.quantity - 1,
            }
          : item
      );
    case REMOVECARTQUANTITY:
      return state.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              cartQuantity: item.cartQuantity - 1,
              quantity: item.quantity + 1,
            }
          : item
      );
    case DELETEFROMCART:
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};
