import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartutils";
const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [], shippingAddress: {}, paymentMethod: "paypal" }; //if present then converted to js obj

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x._id === item._id);

      if (existItem) {
        //add existing item (update quantity)
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? item : x
        ); //cart item array  one by one passed,exist item ->updated item,then rest of the items be as it is in the array
      } else {
        //add the non-existing item
        state.cartItems = [...state.cartItems, item]; //state is immutable so we cant use push.therfore we duplicate it using spread and then adding
      }
      return updateCart(state);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);
      return updateCart(state);
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      return updateCart(state);
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      return updateCart(state);
    },
    clearCartItems: (state, action) => {
      state.cartItems = [];
      updateCart(state);
    },
  },
});
export const {
  addToCart,
  removeFromCart,
  saveShippingAddress,
  savePaymentMethod,
  clearCartItems,
} = cartSlice.actions; //any function we add in reducer,we have to export as an action
export default cartSlice.reducer; //reducer exported
//we have to export it like this
