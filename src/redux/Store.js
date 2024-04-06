import { createStore } from "redux";
import MobileStoreReducer from "./MobileStoreReducer";

const Store = createStore(MobileStoreReducer);
export default Store;
