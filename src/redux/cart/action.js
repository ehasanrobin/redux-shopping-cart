import {
  ADDCARTQUANTITY,
  ADDTOCART,
  DELETEFROMCART,
  REMOVECARTQUANTITY,
} from "./actionTypes";

export const addToCart = (product) => {
  return {
    type: ADDTOCART,
    payload: product,
  };
};
export const addCartQuantity = (product) => {
  return {
    type: ADDCARTQUANTITY,
    payload: product,
  };
};
export const removeCartQuantity = (product) => {
  return {
    type: REMOVECARTQUANTITY,
    payload: product,
  };
};
export const deletefromcart = (product) => {
  return {
    type: DELETEFROMCART,
    payload: product,
  };
};
