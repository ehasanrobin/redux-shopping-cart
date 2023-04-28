import { combineReducers } from "redux";
import ProductReducer from "./products/productsReducer";
import { cartReducer } from "./cart/cartReducer";

export const rootReducer = combineReducers({
  products: ProductReducer,
  cart: cartReducer,
});
