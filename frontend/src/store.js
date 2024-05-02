import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apislice.js";
import cartSliceReducer from "./slices/cartSlice.js";
import authReducer from "./slices/authslice.js";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSliceReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
