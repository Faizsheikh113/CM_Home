// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import schemeReducer from "./Sclise/SchemeSclise";

const store = configureStore({
  reducer: {
    schemes: schemeReducer,
  },
});

export default store;
