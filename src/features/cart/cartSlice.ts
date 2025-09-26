import { createSlice } from "@reduxjs/toolkit";
import type { CartState } from "../../utils";

const initialState: CartState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 0,
  tax: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = (): CartState => {
  const cartItem = localStorage.getItem("cart");
  return cartItem ? JSON.parse(cartItem) : initialState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: () => {},
    clearItems: () => {},
    removeItems: () => {},
    editItems: () => {},
    calculateTotals: () => {},
  },
});

export const { addItems, clearItems, removeItems, editItems, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
