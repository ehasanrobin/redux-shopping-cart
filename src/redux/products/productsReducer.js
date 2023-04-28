import {
  ADDEDPRODUCTS,
  ADDQUANTITY,
  DELETEDQUANTITY,
  REMOVEQUANTITY,
} from "./actionTypes";
import { initialState } from "./initialState";

const nextId = (array) => {
  const maxId = array.reduce(
    (maxId, product) => Math.max(product.id, maxId),
    -1
  );
  return maxId + 1;
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDEDPRODUCTS:
      const { productName, categories, quantity, price, imgUrl } =
        action.payload;
      return [
        ...state,
        {
          id: nextId(state),
          productName,
          categories,
          imgUrl,
          quantity,
          price,
        },
      ];
    case REMOVEQUANTITY:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            quantity: product.quantity - 1,
            cartQuantity: product.cartQuantity ? product.cartQuantity + 1 : 1,
          };
        }
      });
    case ADDQUANTITY:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
            cartQuantity: product.cartQuantity ? product.cartQuantity - 1 : 1,
          };
        }
      });

    case DELETEDQUANTITY:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            quantity: product.quantity + action.payload.cartQuantity,
            cartQuantity: 0,
          };
        }
      });

    default:
      return state;
  }
};

export default ProductReducer;
