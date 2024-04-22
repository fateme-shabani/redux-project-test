import { combineReducers } from "redux";
import MobileStoreReducer from "./MobileStoreReducer";
import ShoppingCartReducer from "./ShopingCartReducer";

export const rootReducer = combineReducers({
  product: MobileStoreReducer,
  shoppingCart: ShoppingCartReducer,
});
