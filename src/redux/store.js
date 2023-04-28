import { applyMiddleware, compose, legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  ADDCARTQUANTITY,
  ADDTOCART,
  DELETEFROMCART,
  REMOVECARTQUANTITY,
} from "./cart/actionTypes";
import {
  addQuantity,
  deletedquantity,
  removeQuantity,
} from "./products/actions";
import { rootReducer } from "./rootReducer";

const manageproducts = (store) => (next) => (action) => {
  switch (action.type) {
    case ADDTOCART:
      store.dispatch(removeQuantity(action.payload));
      return next(action);

    case ADDCARTQUANTITY:
      store.dispatch(removeQuantity(action.payload));
      return next(action);
    case REMOVECARTQUANTITY:
      store.dispatch(addQuantity(action.payload));
      return next(action);

    case DELETEFROMCART:
      store.dispatch(deletedquantity(action.payload));
      return next(action);
    default:
      return next(action);
  }
};

export const store = legacy_createStore(
  rootReducer,
  compose(applyMiddleware(manageproducts), composeWithDevTools())
);
