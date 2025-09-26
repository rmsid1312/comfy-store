import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem, CartState } from "../../utils";
import { toast } from "../../hooks/use-toast";

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
    addItems: (state, action: PayloadAction<CartItem>) => {
      const newCartItem = action.payload;
      const item = state.cartItems.find(
        (item) => item.cartID === newCartItem.cartID
      );
      if (item) {
        item.amount += newCartItem.amount;
      } else {
        state.cartItems.push(newCartItem);
      }
      state.numItemsInCart += newCartItem.amount;
      state.cartTotal += Number(newCartItem.price) * newCartItem.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast({ description: "Item add to cart." });
    },
    clearItems: () => {},
    removeItems: () => {},
    editItems: () => {},
    calculateTotals: (state) => {
      state.tax = state.cartTotal * 0.1;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
  },
});

export const { addItems, clearItems, removeItems, editItems, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
