import {
  ADDEDPRODUCTS,
  ADDQUANTITY,
  DELETEDQUANTITY,
  REMOVEQUANTITY,
} from "./actionTypes";

export const addedProducts = (product) => {
  return {
    type: ADDEDPRODUCTS,
    payload: product,
  };
};

export const removeQuantity = (product) => {
  return {
    type: REMOVEQUANTITY,
    payload: product,
  };
};
export const addQuantity = (product) => {
  return {
    type: ADDQUANTITY,
    payload: product,
  };
};
export const deletedquantity = (product) => {
  return {
    type: DELETEDQUANTITY,
    payload: product,
  };
};
