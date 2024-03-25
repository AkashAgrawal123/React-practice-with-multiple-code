import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./ReduxCode/Services/Reducers/index";

const Store = configureStore({
  reducer: rootReducer,
});

// console.log(Store, "store");

export default Store;
